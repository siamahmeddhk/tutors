import React from 'react';
import { useNavigate } from 'react-router';

const Banner = () => {
  const navigate = useNavigate();

  return (
    <div className="relative h-[80vh] bg-center bg-cover" style={{
      backgroundImage: "url('ban.png')"
    }}>
      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-55"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col justify-center items-center h-full text-center px-4 text-white">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Find the Perfect Tutor for Any Language
        </h1>
        <p className="text-lg md:text-xl mb-6 max-w-2xl">
          Browse through our vast selection of experienced tutors and start your language learning journey today.
        </p>
        <button
          onClick={() => navigate('/find-tutor')}
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-full transition duration-300"
        >
          Explore Tutors
        </button>
      </div>
    </div>
  );
};

export default Banner;
