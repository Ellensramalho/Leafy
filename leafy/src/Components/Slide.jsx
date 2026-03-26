import React, { useState } from "react";
import Slide1 from "../assets/Slide1.jpg";
import Slide2 from "../assets/Slide2.jpg";
import Slide3 from "../assets/Slide3.jpg";

const images = [Slide1, Slide2, Slide3];

const Slide = () => {
  const [current, setCurrent] = useState(0);

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="relative mt-10 w-full max-w-8xl mx-auto px-4">
      <div className="relative overflow-hidden rounded-2xl h-[280px] sm:h-[380px] md:h-[500px] lg:h-[600px]">
        <img
          src={images[current]}
          alt={`Slide ${current + 1}`}
          className="w-full h-full object-cover"
        />
      </div>

      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-6 -translate-y-1/2 bg-[#A3B18A] text-white px-4 py-2 rounded-full hover:bg-black/60 transition"
      >
        ❮
      </button>

      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-6 -translate-y-1/2 bg-[#A3B18A] text-white px-4 py-2 rounded-full hover:bg-black/60 transition"
      >
        ❯
      </button>

      <div className="flex justify-center gap-2 mt-4">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-3 h-3 rounded-full transition ${
              current === index ? "bg-[#A3B18A]" : "bg-[#F3EFEA]"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Slide;