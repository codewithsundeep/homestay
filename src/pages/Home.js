import React from 'react';
import bg from '../assets/bg.jpg';
const Home = () => {
  return (
    <section
  className="h-screen flex items-center justify-center bg-cover bg-center"
  style={{ backgroundImage: `url(${bg})` }}
>
      <div className="text-center text-white backdrop-blur-md p-6 rounded">
        <h2 className="text-4xl font-bold mb-4">Welcome to Eco Homestay</h2>
        <p className="text-lg">Your peaceful escape in the hills.</p>
      </div>
    </section>
  );
};

export default Home;
