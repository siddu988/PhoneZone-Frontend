export default function Hero() {
  return (
    <section className="h-[400px] bg-gradient-to-r from-blue-900 to-blue-400 flex flex-col justify-center items-center text-white text-center px-6 mt-20">
      <h1 className="text-4xl md:text-5xl font-extrabold drop-shadow-lg">
        Latest Smartphones & Accessories
      </h1>
      <p className="mt-4 text-lg md:text-xl font-light">
        Best Prices | Top Brands | Fast Delivery 🚀
      </p>

      <button className="mt-6 bg-white text-blue-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 transition">
        Shop Now
      </button>
    </section>
  );
}