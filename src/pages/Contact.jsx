const Contact = () => (
  <div className="min-h-screen bg-slate-950 text-slate-100">
    <main className="mx-auto max-w-4xl px-4 py-10">
      <h1 className="text-2xl font-bold text-blue-400 mb-6">Contact Us</h1>
      <p className="text-sm text-slate-300 mb-4">Have questions about phones, orders or offers? Send us a message.</p>
      <form className="bg-slate-900 p-5 rounded-2xl space-y-3">
        <input placeholder="Your Name" className="w-full p-2 rounded-lg bg-slate-950 border border-slate-700 text-white text-sm" />
        <input placeholder="Your Email" className="w-full p-2 rounded-lg bg-slate-950 border border-slate-700 text-white text-sm" />
        <textarea placeholder="Your Message" rows="4" className="w-full p-2 rounded-lg bg-slate-950 border border-slate-700 text-white text-sm" />
        <button className="bg-blue-600 hover:bg-blue-500 px-6 py-2 text-xs rounded-full">Send</button>
      </form>
    </main>
  </div>
);

export default Contact;
