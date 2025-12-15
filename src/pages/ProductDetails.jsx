// src/pages/ProductDetails.jsx
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import api from "../utils/api";
import { useCart } from "../context/CartContext";

export default function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  // ⭐ NEW STATES
  const [reviews, setReviews] = useState([]);
  const [similar, setSimilar] = useState([]);

  // ⭐ Review form states
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");
  const [reviewError, setReviewError] = useState("");

  const { addItem } = useCart();

  // Load product + reviews + similar items
  useEffect(() => {
    async function load() {
      try {
        // 1️⃣ Load product
        const data = await api.get(`/products/${id}`);
        setProduct(data);

        // 2️⃣ Load reviews for this product
        const revData = await api.get(`/reviews/product/${id}`);
        setReviews(revData.reviews || []);

        // 3️⃣ Load similar products (based on tag/category)
        const allProducts = await api.get("/products");
        const similarItems = allProducts.filter(
          (p) => p.tag === data.tag && p._id !== data._id
        );
        setSimilar(similarItems.slice(0, 4)); // show max 4

      } catch (err) {
        console.error("Product load error:", err);
      }
    }
    load();
  }, [id]);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center text-white">
        Loading...
      </div>
    );
  }

  // Correct image path
  const img = product.image.startsWith("/products")
    ? product.image
    : `/products/${product.image}`;

  // ⭐ Add to Wishlist
  const addToWishlist = async () => {
    const token = localStorage.getItem("pz_token");
    if (!token) return alert("Please login to add wishlist");

    try {
      await api.post(`/wishlist/${product._id}`);
      alert("Added to wishlist ❤️");
    } catch (err) {
      console.error("Wishlist error:", err);
      alert("Could not add to wishlist");
    }
  };

  // ⭐ Submit Review
  const submitReview = async () => {
    setReviewError("");

    if (rating === 0) {
      setReviewError("Please select a rating.");
      return;
    }
    if (!comment.trim()) {
      setReviewError("Please enter a comment.");
      return;
    }

    try {
      await api.post("/reviews", {
        productId: product._id,
        rating,
        comment,
      });

      // Reload reviews
      const revData = await api.get(`/reviews/product/${id}`);
      setReviews(revData.reviews || []);

      // Reset form
      setRating(0);
      setComment("");

    } catch (err) {
      console.error(err);
      setReviewError("Failed to submit review.");
    }
  };

  // ⭐ Average Rating
  const avgRating =
    reviews.length > 0
      ? (reviews.reduce((s, r) => s + r.rating, 0) / reviews.length).toFixed(1)
      : 0;

  return (
    <div className="min-h-screen bg-slate-950 text-white p-6">
      <div className="max-w-5xl mx-auto">

        {/* PRODUCT SECTION */}
        <div className="flex flex-col md:flex-row gap-6">

          <img src={img} alt={product.name} className="w-full md:w-1/2 rounded-xl" />

          <div className="flex-1">
            <h1 className="text-3xl font-bold">{product.name}</h1>

            {/* ⭐ Rating */}
            <p className="text-yellow-400 mt-1 text-lg">
              ⭐ {avgRating} / 5 ({reviews.length} reviews)
            </p>

            <p className="text-slate-300 mt-2">{product.desc}</p>
            <p className="text-blue-400 text-2xl mt-4">₹{product.price}</p>

            <button
              onClick={() => addItem(product)}
              className="mt-6 bg-blue-600 hover:bg-blue-500 px-6 py-3 rounded-full text-sm"
            >
              Add to Cart
            </button>

            <button
              onClick={addToWishlist}
              className="mt-3 bg-pink-600 hover:bg-pink-500 px-6 py-2 rounded-full text-sm"
            >
              ❤️ Add to Wishlist
            </button>
          </div>
        </div>

        {/* ⭐ REVIEWS SECTION */}
        <div className="mt-10 bg-slate-900 p-6 rounded-xl">
          <h2 className="text-2xl font-semibold mb-4">Customer Reviews</h2>

          {reviews.length === 0 && (
            <p className="text-slate-400">No reviews yet</p>
          )}

          {reviews.map((r) => (
            <div key={r._id} className="border-b border-slate-800 pb-3 mb-3">
              <p className="text-yellow-400">⭐ {r.rating}/5</p>
              <p className="text-slate-200">{r.comment}</p>
            </div>
          ))}
        </div>

        {/* ⭐ WRITE REVIEW */}
        <div className="mt-8 bg-slate-900 p-6 rounded-xl">
          <h2 className="text-xl font-bold mb-3">Write a Review</h2>

          {!localStorage.getItem("pz_token") ? (
            <p className="text-slate-400">Please login to write a review.</p>
          ) : (
            <>
              {/* Star Selector */}
              <div className="flex gap-2 text-2xl mb-3">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    key={star}
                    onClick={() => setRating(star)}
                    className={star <= rating ? "text-yellow-400" : "text-slate-500"}
                  >
                    ★
                  </button>
                ))}
              </div>

              <textarea
                className="w-full p-3 bg-slate-800 rounded mb-3"
                rows={3}
                placeholder="Write your review..."
                value={comment}
                onChange={(e) => setComment(e.target.value)}
              ></textarea>

              <button
                onClick={submitReview}
                className="bg-blue-600 px-5 py-2 rounded hover:bg-blue-500"
              >
                Submit Review
              </button>

              {reviewError && (
                <p className="text-red-400 mt-2">{reviewError}</p>
              )}
            </>
          )}
        </div>

        {/* ⭐ SIMILAR PRODUCTS */}
        <div className="mt-10">
          <h2 className="text-2xl font-semibold mb-4">Similar Products</h2>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {similar.length === 0 && (
              <p className="text-slate-400">No similar products found</p>
            )}

            {similar.map((sp) => {
              const simg = sp.image.startsWith("/products")
                ? sp.image
                : `/products/${sp.image}`;

              return (
                <a
                  key={sp._id}
                  href={`/products/${sp._id}`}
                  className="bg-slate-800 p-3 rounded-lg text-center hover:bg-slate-700"
                >
                  <img src={simg} className="w-full h-32 object-contain" />
                  <p className="text-sm mt-2">{sp.name}</p>
                  <p className="text-blue-400">₹{sp.price}</p>
                </a>
              );
            })}
          </div>
        </div>

      </div>
    </div>
  );
}
