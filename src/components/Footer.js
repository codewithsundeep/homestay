import { FaFacebookF, FaInstagram, FaWhatsapp } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white px-6 py-10">
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
        
        {/* About */}
        <div>
          <h3 className="text-xl font-bold mb-3">Eco Homestay</h3>
          <p>Your peaceful retreat in the heart of nature. Enjoy organic food, local culture, and warm hospitality.</p>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-xl font-bold mb-3">Contact Us</h3>
          <p><strong>Address:</strong> Near Pine Forest, Namchi, Sikkim - 737126</p>
          <p><strong>Phone:</strong> +91 98765 43210</p>
          <p><strong>Email:</strong> ecohomestay@example.com</p>
          <p><strong>Timings:</strong> 8:00 AM - 10:00 PM</p>
        </div>

        {/* Social Links */}
        <div>
          <h3 className="text-xl font-bold mb-3">Follow Us</h3>
          <div className="flex space-x-4">
            <a href="https://facebook.com" target="_blank" rel="noreferrer" className="hover:text-blue-400">
              <FaFacebookF size={24} />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer" className="hover:text-pink-400">
              <FaInstagram size={24} />
            </a>
            <a href="https://wa.me/919876543210" target="_blank" rel="noreferrer" className="hover:text-green-400">
              <FaWhatsapp size={24} />
            </a>
          </div>
        </div>

      </div>

      {/* Bottom */}
      <div className="border-t border-gray-700 mt-8 pt-4 text-center text-sm">
        &copy; 2025 Eco Homestay. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
