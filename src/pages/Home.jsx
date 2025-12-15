// src/pages/Home.jsx
import { Link } from "react-router-dom";

export default function Home() {
  // Directly use public folder path
  const heroImage = "/products/hero-bg.jpg";

  return (
    <main className="min-h-screen">
      <section
        className="relative bg-cover bg-center"
        style={{
          backgroundImage: `url(${heroImage})`,
          minHeight: "560px",
        }}
      >
        {/* Dark overlay */}
        <div
          style={{ background: "rgba(2,6,23,0.55)" }}
          className="absolute inset-0"
        />

        <div className="max-w-6xl mx-auto px-4 py-28 relative z-10 flex items-center">
          <div className="w-full md:w-1/2 text-white">
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-tight">
              PhoneZone — Latest Phones & Accessories
            </h1>

            <p className="mt-4 text-slate-200 max-w-lg">
              Shop flagship smartphones, accessories and more. Fast delivery and the best deals.
            </p>

            <div className="mt-6 flex gap-3">
              <a
                href="#products"
                className="inline-block bg-blue-600 hover:bg-blue-500 px-6 py-3 rounded-full font-semibold shadow-lg"
              >
                Shop Popular
              </a>

              <Link
                to="/products"
                className="inline-block px-6 py-3 rounded-full border border-slate-700"
              >
                All Products
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Popular section */}
      <section id="products" className="max-w-6xl mx-auto px-4 py-10">
        <h2 className="text-2xl font-bold text-blue-400 mb-4">Popular Products</h2>
        <p className="text-sm text-slate-400 mb-6">
          Click any product to view details & buy
        </p>
      </section>
    </main>
  );
}
