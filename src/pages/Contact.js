const Contact = () => (
  <section id="contact" className="py-10 bg-white">
    <h2 className="text-3xl font-bold text-center mb-6">Contact Us</h2>
    <form className="max-w-xl mx-auto grid gap-4 px-4">
      <input type="text" placeholder="Your Name" className="border p-2 rounded" />
      <input type="email" placeholder="Your Email" className="border p-2 rounded" />
      <textarea placeholder="Your Message" rows={5} className="border p-2 rounded"></textarea>
      <button type="submit" className="bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700">
        Send Message
      </button>
    </form>
  </section>
);
export default Contact;
