// src/pages/Account.jsx
import { useEffect, useState } from "react";

const emptyUser = {
  name: "",
  email: "",
  phone: "",
  address: "",
  city: "",
  pincode: "",
};

export default function Account() {
  const [user, setUser] = useState(emptyUser);
  const [help, setHelp] = useState({ subject: "", message: "" });
  const [reviewForm, setReviewForm] = useState({ product: "", review: "" });
  const [reviews, setReviews] = useState([]);
  const [orderSuccess, setOrderSuccess] = useState(false);
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const storedUser = localStorage.getItem("phonezoneUser");
    if (storedUser) {
      const parsed = JSON.parse(storedUser);
      setUser((prev) => ({ ...prev, ...parsed }));
    }

    const storedReviews = localStorage.getItem("phonezoneReviews");
    if (storedReviews) setReviews(JSON.parse(storedReviews));

    // read any saved orders (if you persist them)
    const savedOrders = localStorage.getItem("phonezoneOrders");
    if (savedOrders) setOrders(JSON.parse(savedOrders));

    // check order success flag from checkout
    if (localStorage.getItem("pz_order_success") === "1") {
      setOrderSuccess(true);
      // clear the flag afterwards
      localStorage.removeItem("pz_order_success");
    }
  }, []);

  // profile handlers...
  const handleUserChange = (e) => {
    const { name, value } = e.target;
    setUser((prev) => ({ ...prev, [name]: value }));
  };
  const handleSaveProfile = (e) => {
    e.preventDefault();
    localStorage.setItem("phonezoneUser", JSON.stringify(user));
    alert("Account details saved ✅");
  };

  // help desk
  const handleHelpChange = (e) => {
    const { name, value } = e.target;
    setHelp((prev) => ({ ...prev, [name]: value }));
  };
  const handleHelpSubmit = (e) => {
    e.preventDefault();
    if (!help.subject || !help.message) return;
    alert("Your request has been sent to support ✅");
    setHelp({ subject: "", message: "" });
  };

  // reviews
  const handleReviewChange = (e) => {
    const { name, value } = e.target;
    setReviewForm((prev) => ({ ...prev, [name]: value }));
  };
  const handleReviewSubmit = (e) => {
    e.preventDefault();
    if (!reviewForm.product || !reviewForm.review) return;
    const newReview = {
      id: Date.now(),
      product: reviewForm.product,
      review: reviewForm.review,
      createdAt: new Date().toLocaleString(),
      userName: user.name || "PhoneZone user",
    };
    const updated = [newReview, ...reviews];
    setReviews(updated);
    localStorage.setItem("phonezoneReviews", JSON.stringify(updated));
    setReviewForm({ product: "", review: "" });
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 pt-20 pb-10">
      <div className="max-w-6xl mx-auto px-4 space-y-8">
        {/* HEADER */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl md:text-3xl font-bold">Hi, {user.name || "Guest"} 👋</h1>
            <p className="text-sm text-slate-400 mt-1">Manage your profile, addresses, help tickets and product reviews.</p>
          </div>

          <div className="hidden sm:flex items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-blue-500 flex items-center justify-center font-semibold text-lg">
              {user.name ? user.name.split(" ").map(s=>s[0]).slice(0,2).join("").toUpperCase() : "U"}
            </div>
            <div className="text-sm text-slate-300">
              <div>{user.email}</div>
              <div className="text-xs text-slate-500">{user.address ? `${user.address} • ${user.city} • ${user.pincode}` : "No saved address"}</div>
            </div>
          </div>
        </div>

        {/* PROFILE + HELP DESK (same as before) */}
        <div className="grid gap-6 md:grid-cols-3">
          <div className="md:col-span-2 bg-slate-900 border border-slate-800 rounded-2xl p-5 space-y-4">
            <h2 className="text-lg font-semibold mb-1">Account Details</h2>
            <form onSubmit={handleSaveProfile} className="space-y-4 text-sm">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-slate-300 mb-1">Name</label>
                  <input name="name" value={user.name} onChange={handleUserChange} className="w-full rounded-lg bg-slate-950 border border-slate-700 px-3 py-2 outline-none focus:border-blue-500" />
                </div>
                <div>
                  <label className="block text-slate-300 mb-1">Email</label>
                  <input name="email" value={user.email} onChange={handleUserChange} className="w-full rounded-lg bg-slate-950 border border-slate-700 px-3 py-2 outline-none focus:border-blue-500" />
                </div>
                <div>
                  <label className="block text-slate-300 mb-1">Phone</label>
                  <input name="phone" value={user.phone} onChange={handleUserChange} className="w-full rounded-lg bg-slate-950 border border-slate-700 px-3 py-2 outline-none focus:border-blue-500" />
                </div>
              </div>

              <div className="border-t border-slate-800 pt-3">
                <h3 className="text-sm font-semibold mb-2 text-blue-300">Default Delivery Address</h3>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="md:col-span-2">
                    <label className="block text-slate-300 mb-1">Address line</label>
                    <input name="address" value={user.address} onChange={handleUserChange} placeholder="Flat / house no, street, area" className="w-full rounded-lg bg-slate-950 border border-slate-700 px-3 py-2 outline-none focus:border-blue-500" />
                  </div>
                  <div>
                    <label className="block text-slate-300 mb-1">City</label>
                    <input name="city" value={user.city} onChange={handleUserChange} className="w-full rounded-lg bg-slate-950 border border-slate-700 px-3 py-2 outline-none focus:border-blue-500" />
                  </div>
                  <div>
                    <label className="block text-slate-300 mb-1">Pincode</label>
                    <input name="pincode" value={user.pincode} onChange={handleUserChange} className="w-full rounded-lg bg-slate-950 border border-slate-700 px-3 py-2 outline-none focus:border-blue-500" />
                  </div>
                </div>
                <p className="mt-2 text-[11px] text-slate-500">This address will be used for most of your orders. You can still change it during checkout.</p>
              </div>

              <button type="submit" className="mt-2 bg-blue-600 hover:bg-blue-500 px-5 py-2 rounded-full text-xs font-semibold">Save Account</button>
            </form>
          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5 text-sm space-y-3">
            <h2 className="text-lg font-semibold mb-1">Help Desk</h2>
            <p className="text-slate-400 text-xs">Having an issue with an order or product? Raise a ticket and our support team will contact you.</p>

            <form onSubmit={handleHelpSubmit} className="space-y-3">
              <input name="subject" value={help.subject} onChange={handleHelpChange} placeholder="Subject (e.g. Order not delivered)" className="w-full rounded-lg bg-slate-950 border border-slate-700 px-3 py-2 outline-none focus:border-blue-500" />
              <textarea name="message" value={help.message} onChange={handleHelpChange} rows={3} placeholder="Describe your issue..." className="w-full rounded-lg bg-slate-950 border border-slate-700 px-3 py-2 outline-none focus:border-blue-500" />
              <button type="submit" className="w-full bg-blue-600 hover:bg-blue-500 py-2 rounded-full text-xs font-semibold">Send to Support</button>
            </form>

            <div className="border-t border-slate-800 pt-3 text-[11px] text-slate-500 space-y-1">
              <p>Email: support@phonezone.com</p>
              <p>Phone: +91-98765-43210</p>
              <p>Available: Mon–Sat, 9 AM – 7 PM</p>
            </div>
          </div>
        </div>

        {/* REVIEWS */}
        <section id="reviews" className="bg-slate-900 border border-slate-800 rounded-2xl p-5">
          <h2 className="text-lg font-semibold mb-1">My Product Reviews</h2>
          <p className="text-xs text-slate-400 mb-4">Share your experience with phones and accessories you bought from PhoneZone.</p>

          <form onSubmit={handleReviewSubmit} className="grid md:grid-cols-4 gap-3 text-sm mb-5">
            <div className="md:col-span-1">
              <label className="block mb-1 text-slate-300">Product name</label>
              <input name="product" value={reviewForm.product} onChange={handleReviewChange} placeholder="e.g. iQOO 15 Pro" className="w-full rounded-lg bg-slate-950 border border-slate-700 px-3 py-2 outline-none focus:border-blue-500" />
            </div>
            <div className="md:col-span-3">
              <label className="block mb-1 text-slate-300">Your review</label>
              <div className="flex gap-2">
                <textarea name="review" value={reviewForm.review} onChange={handleReviewChange} rows={2} className="flex-1 rounded-lg bg-slate-950 border border-slate-700 px-3 py-2 outline-none focus:border-blue-500" placeholder="Battery backup, camera, performance, etc…" />
                <button type="submit" className="self-end bg-blue-600 hover:bg-blue-500 px-4 py-2 rounded-full text-xs font-semibold">Add</button>
              </div>
            </div>
          </form>

          {reviews.length === 0 ? (
            <p className="text-xs text-slate-500">You have not posted any reviews yet.</p>
          ) : (
            <ul className="space-y-3 text-sm">
              {reviews.map((r) => (
                <li key={r.id} className="bg-slate-950 border border-slate-800 rounded-xl px-4 py-3">
                  <div className="flex justify-between items-center mb-1">
                    <span className="font-semibold text-slate-100">{r.product}</span>
                    <span className="text-[11px] text-slate-500">{r.createdAt}</span>
                  </div>
                  <p className="text-xs text-slate-300">{r.review}</p>
                  <p className="mt-1 text-[11px] text-slate-500">by {r.userName}</p>
                </li>
              ))}
            </ul>
          )}
        </section>

        {/* ORDERS */}
        <section id="orders" className="bg-slate-900 border border-slate-800 rounded-2xl p-5">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold mb-1">My Orders</h2>
            {orderSuccess && (
              <div className="text-sm text-green-400 font-medium">Order placed successfully ✅</div>
            )}
          </div>
          <p className="text-xs text-slate-400 mb-4">Recent orders appear here.</p>

          {orders.length === 0 ? (
            <p className="text-xs text-slate-500">You have no past orders (this demo stores orders locally only).</p>
          ) : (
            <ul className="space-y-3 text-sm">
              {orders.map((o) => (
                <li key={o.id} className="bg-slate-950 border border-slate-800 rounded-xl px-4 py-3">
                  <div className="flex justify-between items-center mb-1">
                    <span className="font-semibold text-slate-100">Order #{o.id}</span>
                    <span className="text-[11px] text-slate-500">{o.date}</span>
                  </div>
                  <div className="text-xs text-slate-300">{o.summary}</div>
                  <div className="mt-1 text-[11px] text-slate-500">Total: ₹{o.total}</div>
                </li>
              ))}
            </ul>
          )}
        </section>
      </div>
    </div>
  );
}
