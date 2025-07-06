import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import bg from '../assets/bg.jpg'; // use your own image

const About = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section id="about" className="py-16 bg-white text-gray-800">
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-10 items-center">

        {/* Image */}
        <div data-aos="fade-right">
          <img src={bg} alt="Eco Homestay" className="rounded-lg shadow-lg" />
        </div>

        {/* Text content */}
        <div data-aos="fade-left">
          <h2 className="text-4xl font-bold mb-4 text-green-700">About Eco Homestay</h2>
          <p className="mb-4">
            Nestled amidst the serene hills of Sikkim, Eco Homestay offers a unique blend of nature, culture, and comfort.
            Whether you're a solo traveler or a family looking for peace, we welcome you with warmth and love.
          </p>

          <div className="space-y-6 mt-6">

            {/* Vision */}
            <div>
              <h3 className="text-xl font-semibold text-green-600 mb-1">🌱 Our Vision</h3>
              <p className="text-sm">
                To provide a tranquil retreat that supports local communities and promotes eco-conscious living.
              </p>
            </div>

            {/* Sustainability */}
            <div>
              <h3 className="text-xl font-semibold text-green-600 mb-1">🌿 Sustainability</h3>
              <p className="text-sm">
                We use solar power, harvest rainwater, serve organic meals from our garden, and avoid plastic wherever possible.
              </p>
            </div>

            {/* Why Choose Us */}
            <div>
              <h3 className="text-xl font-semibold text-green-600 mb-1">🏞 Why Choose Us</h3>
              <ul className="list-disc list-inside text-sm">
                <li>Mountain-view rooms with balcony</li>
                <li>Local organic food and fresh air</li>
                <li>Authentic cultural experiences</li>
                <li>Easy trekking & village walks</li>
              </ul>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default About;
