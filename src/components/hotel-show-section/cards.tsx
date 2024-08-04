import React, { useState, useRef } from "react";
import { CiCircleChevLeft, CiCircleChevRight } from "react-icons/ci";

const CardItem: React.FC = () => {
  const images = [
    "https://a0.muscache.com/im/pictures/c3a650d3-185e-4928-9ae1-e1b247f9bb9c.jpg?im_w=720",
    "https://a0.muscache.com/im/pictures/0cea6faf-6dab-408a-ad9b-3e9dfae17359.jpg?im_w=720",
    "https://a0.muscache.com/im/pictures/4eb74574-75c8-4552-938d-37201afc8159.jpg",
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [startX, setStartX] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const carouselRef = useRef<HTMLDivElement>(null);

  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    setIsDragging(true);
    setStartX(e.touches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    if (!isDragging) return;
    const currentX = e.touches[0].clientX;
    const difference = startX - currentX;
    if (carouselRef.current) {
      carouselRef.current.scrollLeft += difference;
    }
    setStartX(currentX);
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
  };

  const handlePrev = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handleDotClick = (index: number) => {
    setCurrentImageIndex(index);
  };

  return (
    <div className="card-item">
      <div
        className="w-[20rem] h-[20rem] rounded-2xl overflow-hidden relative"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        ref={carouselRef}
      >
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            className={`w-full h-full object-cover absolute transition-opacity duration-1000 ${
              index === currentImageIndex ? "opacity-100" : "opacity-0"
            }`}
            alt={`Image ${index + 1}`}
          />
        ))}
        <CiCircleChevLeft
          className="absolute left-2 top-1/2 transform -translate-y-1/2  text-white rounded-full w-8 h-8 cursor-pointer"
          onClick={handlePrev}
        />

        <CiCircleChevRight
          className="absolute right-2 top-1/2 transform -translate-y-1/2 text-white rounded-full w-8 h-8 cursor-pointer"
          onClick={handleNext}
        />

        <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => handleDotClick(index)}
              className={`w-2 h-2 rounded-full ${
                index === currentImageIndex ? "bg-white" : "bg-gray-400"
              }`}
            ></button>
          ))}
        </div>
      </div>
      <div className="flex flex-col mt-2">
        <span className="text-[16px] font-semibold">Manali, India</span>
        <span className="text-gray-600">233 kilometers away</span>
        <span className="text-gray-600">6-11 Jul</span>
        <span>
          <span className="font-semibold">₹17,095</span> per night
        </span>
      </div>
    </div>
  );
};

export default CardItem;
