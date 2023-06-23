import { useState, useEffect, useCallback } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";
import b4fImg from "../assets/b4f.png";
import oneImg from "../assets/one.jpg";
import twoImg from "../assets/two.jpg";
import threeImg from "../assets/three.jpg";
import fourImg from "../assets/four.jpg";
import fiveImg from "../assets/five.jpg";
import sixImg from "../assets/six.jpg";
import sevenImg from "../assets/seven.jpg";
import eightImg from "../assets/eight.jpg";
import nineImg from "../assets/nine.jpg";
import tenImg from "../assets/ten.jpg";
import elevenImg from "../assets/eleven.jpg";
import twelveImg from "../assets/twelve.jpg";
import thirteenImg from "../assets/thirteen.jpg";

function Home() {
  const slides = [
    {
      url: oneImg,
    },
    {
      url: twoImg,
    },
    {
      url: threeImg,
    },
    {
      url: fourImg,
    },
    {
      url: fiveImg,
    },
    {
      url: sixImg,
    },
    {
      url: sevenImg,
    },
    {
      url: eightImg,
    },
    {
      url: nineImg,
    },
    {
      url: tenImg,
    },
    {
      url: elevenImg,
    },
    {
      url: twelveImg,
    },
    {
      url: thirteenImg,
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = useCallback(() => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  }, [currentIndex, slides.length]);

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => {
      clearInterval(interval);
    };
  }, [currentIndex, nextSlide]);

  return (
    <div
      name='home'
      className='flex flex-col lg:flex-row'
      style={{
        backgroundImage: `url(${b4fImg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Carousel Section */}
      <div className='flex justify-center items-center h-screen w-full lg:w-1/2'>
        <div className='max-w-[1000px] h-[600px] w-full m-auto py-16 px-4 content-end relative group'>
          <div
            style={{
              backgroundImage: `url(${slides[currentIndex].url})`,
              backgroundSize: "contain",
              backgroundRepeat: "no-repeat",
            }}
            className='w-full h-full rounded-2xl bg-center bg-cover duration-500'
          ></div>
          {/* Left Arrow */}
          <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
            <BsChevronCompactLeft onClick={prevSlide} size={30} />
          </div>
          {/* Right Arrow */}
          <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
            <BsChevronCompactRight onClick={nextSlide} size={30} />
          </div>
          <div className='flex top-4 justify-center py-2'>
            {slides.map((slide, slideIndex) => (
              <div
                key={slideIndex}
                onClick={() => goToSlide(slideIndex)}
                className='text-2xl cursor-pointer'
              >
                <RxDotFilled />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className='flex flex-col justify-center items-center max-w-7xl p-2 space-y-3 w-full lg:w-1/2'>
        <div className='flex flex-col text-white md:items-start items-center justify-between space-y-3 px-8 mb-20'>
          <div className='text-4xl md:text-6xl lg:text-7xl font-bold animate-pulse'>
            Molave Youngs
          </div>
          <div className='text-4xl md:text-6xl lg:text-6xl font-bold animate-pulse'>
            Milling Group
          </div>
          <div className='text-xl md:text-3xl cursor-pointer hover:text-yellow-500'>
            ymgc.hrdept@yahoo.com
          </div>
          {/* <button className="btn btn-xs md:btn-md rounded-lg md:text-2xl hover:bg-black/30 transition-colors duration-300 bg-red-900">
            Get Started
          </button> */}
        </div>
      </div>
    </div>
  );
}

export default Home;
