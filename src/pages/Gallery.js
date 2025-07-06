import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import bg from '../assets/bg.jpg';
import room from '../assets/room.jpeg';

const Gallery = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section id="gallery" className="py-16 bg-gray-50">
      <h2 className="text-4xl font-bold text-center mb-10 text-green-700" data-aos="fade-up">
        Gallery
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 px-4 md:px-20">
        <img src={bg} alt="Gallery" className="rounded shadow-md" data-aos="zoom-in" />
        <img src={room} alt="Gallery" className="rounded shadow-md" data-aos="zoom-in" />
        <img src={bg} alt="Gallery" className="rounded shadow-md" data-aos="zoom-in" />
        <img src={room} alt="Gallery" className="rounded shadow-md" data-aos="zoom-in" />
        <img src={bg} alt="Gallery" className="rounded shadow-md" data-aos="zoom-in" />
        <img src={room} alt="Gallery" className="rounded shadow-md" data-aos="zoom-in" />
      </div>
    </section>
  );
};

export default Gallery;
