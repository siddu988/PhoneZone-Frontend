
const Contact = () => {
  return (
    <main className="mx-auto max-w-6xl px-4 py-10 text-slate-100">
      <h1 className="text-2xl font-bold text-blue-400 mb-6 text-center">
        Contact Us
      </h1>

      <div className="grid gap-6 md:grid-cols-2">
        <form className="bg-slate-900/80 border border-slate-800 rounded-2xl p-5 space-y-3 text-sm">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full rounded-lg border border-slate-700 bg-slate-950 px-3 py-2 text-slate-100 placeholder:text-slate-500 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full rounded-lg border border-slate-700 bg-slate-950 px-3 py-2 text-slate-100 placeholder:text-slate-500 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
          />
          <textarea
            rows="4"
            placeholder="Your Message"
            className="w-full rounded-lg border border-slate-700 bg-slate-950 px-3 py-2 text-slate-100 placeholder:text-slate-500 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
          />
          <button
            type="submit"
            className="rounded-full bg-blue-600 px-4 py-2 text-xs font-medium text-white hover:bg-blue-500"
          >
            Send Message
          </button>
        </form>

        <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-5 text-sm space-y-2 flex flex-col justify-center">
          <p className="font-semibold text-slate-100">Store details</p>
          <p>Email: support@phonezone.com</p>
          <p>Phone: +91-98765-43210</p>
          <p>Location: Bengaluru, India</p>
          <p className="pt-2 text-xs text-slate-500">
            *This is demo information for your project.*
          </p>
        </div>
      </div>
    </main>
  );
};

export default Contact;
