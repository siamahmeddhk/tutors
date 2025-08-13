import React from 'react';
import { useNavigate } from 'react-router';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import ban1 from '../assets/ban1.png'
import ban2 from '../assets/ban2.png'
import ban3 from '../assets/ban3.png'

const Banner = () => {
  const navigate = useNavigate();

  // Banner slides data
  const slides = [
    {
      id: 1,
      image: ban1,
      title: 'Find the Perfect Tutor for Any Language',
      description: 'Connect with certified language tutors from around the world and achieve fluency faster.',
      buttonText: 'Browse Tutors'
    },
    {
      id: 2,
      image: ban2,
      title: 'Personalized Language Learning',
      description: 'Get customized lessons tailored to your learning style and goals.',
      buttonText: 'Start Learning'
    },
    {
      id: 3,
      image: ban3,
      title: 'Learn Anytime, Anywhere',
      description: 'Flexible online sessions that fit your schedule and pace.',
      buttonText: 'View Schedule'
    }
  ];

  return (
    <div className="relative h-[80vh] w-full">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: false,
        }}
        navigation={false}
        modules={[Autoplay]}
        className="h-full w-full"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div 
              className="relative h-full w-full bg-center bg-cover"
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              {/* Overlay */}
              <div className="absolute inset-0 bg-black opacity-55"></div>

              {/* Content */}
              <div className="relative z-10 flex flex-col justify-center items-center h-full text-center px-4 text-white">
                <h1 className="text-4xl md:text-6xl font-bold mb-4">
                  {slide.title}
                </h1>
                <p className="text-lg md:text-xl mb-6 max-w-2xl">
                  {slide.description}
                </p>
                <button
                  onClick={() => navigate('/find-tutor')}
                  className="bg-teal-500 text-black font-semibold py-3 px-6 rounded-full transition duration-300 transform hover:scale-105"
                >
                  {slide.buttonText}
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Banner;