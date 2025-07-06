import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import RoomCard from '../components/RoomCard';
import room from '../assets/room.jpeg';

const Rooms = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const rooms = [
    {
      title: "Deluxe Room",
      desc: "Cozy mountain-view room with attached bath.",
      price: 1500,
      img: room,
    },
    {
      title: "Heritage Cottage",
      desc: "Traditional wooden cottage with garden view.",
      price: 1800,
      img: room,
    },
    {
      title: "Family Suite",
      desc: "Spacious suite for families with extra bedding.",
      price: 2200,
      img: room,
    },
    {
      title: "Budget Room",
      desc: "Simple, affordable room with basic amenities.",
      price: 1000,
      img: room,
    },
    {
      title: "Luxury Suite",
      desc: "Premium room with king-size bed and balcony.",
      price: 2500,
      img: room,
    },
    {
      title: "Garden View Room",
      desc: "Room with direct view of lush green gardens.",
      price: 1600,
      img: room,
    },
    {
      title: "Hillside Room",
      desc: "Bright room with panoramic hillside views.",
      price: 1700,
      img: room,
    },
    {
      title: "Rustic Cabin",
      desc: "Private wooden cabin with natural aesthetics.",
      price: 2000,
      img: room,
    },
    {
      title: "New Room",
      desc: "Under construction.",
      price: 2000,
      img: room,
    },
  ];

  return (
    <section id="rooms" className="py-16 bg-gray-50">
      <h2
        className="text-4xl font-bold text-center mb-10 text-green-700"
        data-aos="fade-up"
      >
        Our Rooms
      </h2>

      <div className="grid md:grid-cols-3 gap-6 px-4 md:px-20">
        {rooms.map((room, i) => (
          <div key={i} data-aos="zoom-in" data-aos-delay={i * 100}>
            <RoomCard {...room} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Rooms;
