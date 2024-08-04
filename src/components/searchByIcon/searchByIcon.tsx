import React, { useRef } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const icons = [
  {
    src: "https://a0.muscache.com/pictures/c0a24c04-ce1f-490c-833f-987613930eca.jpg",
    alt: "nationalPark",
    label: "National parks",
  },
  {
    src: "https://a0.muscache.com/pictures/3fb523a0-b622-4368-8142-b5e03df7549b.jpg",
    alt: "amazingPools",
    label: "Amazing pools",
  },
  {
    src: "https://a0.muscache.com/pictures/3b1eb541-46d9-4bef-abc4-c37d77e3c21b.jpg",
    alt: "amazingViews",
    label: "Amazing views",
  },
  {
    src: "https://a0.muscache.com/pictures/a4634ca6-1407-4864-ab97-6e141967d782.jpg",
    alt: "lake",
    label: "Lake",
  },
  {
    src: "https://a0.muscache.com/pictures/9a2ca4df-ee90-4063-b15d-0de7e4ce210a.jpg",
    alt: "offTheGrid",
    label: "Off-the-grid",
  },
  {
    src: "https://a0.muscache.com/pictures/aaa02c2d-9f0d-4c41-878a-68c12ec6c6bd.jpg",
    alt: "farms",
    label: "Farms",
  },
  {
    src: "https://a0.muscache.com/pictures/4d4a4eba-c7e4-43eb-9ce2-95e1d200d10e.jpg",
    alt: "treehouses",
    label: "Treehouses",
  },
  {
    src: "https://a0.muscache.com/pictures/c5a4f6fc-c92c-4ae8-87dd-57f1ff1b89a6.jpg",
    alt: "omg",
    label: "OMG!",
  },
  {
    src: "https://a0.muscache.com/pictures/10ce1091-c854-40f3-a2fb-defc2995bcaf.jpg",
    alt: "beach",
    label: "Beach",
  },
  {
    src: "https://a0.muscache.com/pictures/732edad8-3ae0-49a8-a451-29a8010dcc0c.jpg",
    alt: "cabins",
    label: "Cabins",
  },
  {
    src: "https://a0.muscache.com/pictures/c8e2ed05-c666-47b6-99fc-4cb6edcde6b4.jpg",
    alt: "luxe",
    label: "Luxe",
  },
  {
    src: "https://a0.muscache.com/pictures/677a041d-7264-4c45-bb72-52bff21eb6e8.jpg",
    alt: "lakefront",
    label: "Lakefront",
  },
  {
    src: "https://a0.muscache.com/pictures/677a041d-7264-4c45-bb72-52bff21eb6e8.jpg",
    alt: "lakefront",
    label: "Lakefront",
  },
  {
    src: "https://a0.muscache.com/pictures/677a041d-7264-4c45-bb72-52bff21eb6e8.jpg",
    alt: "lakefront",
    label: "Lakefront",
  },
  {
    src: "https://a0.muscache.com/pictures/248f85bf-e35e-4dc3-a9a1-e1dbff9a3db4.jpg",
    alt: "Top of the world",
    label: "Top of the world",
  },
  {
    src: "https://a0.muscache.com/pictures/6ad4bd95-f086-437d-97e3-14d12155ddfe.jpg",
    alt: "Countryside",
    label: "countryside",
  },
  {
    src: "https://a0.muscache.com/pictures/6ad4bd95-f086-437d-97e3-14d12155ddfe.jpg",
    alt: "Countryside",
    label: "countryside",
  },
  {
    src: "https://a0.muscache.com/pictures/6ad4bd95-f086-437d-97e3-14d12155ddfe.jpg",
    alt: "Countryside",
    label: "countryside",
  },
];

const SearchByIcon: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -200, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 200, behavior: "smooth" });
    }
  };

  return (
    <div className="relative w-full">
      <button
        className="absolute left-3 top-1/2 transform -translate-y-1/2  z-10 p-2 border border-gray-500 rounded-full"
        onClick={scrollLeft}
      >
        <FaChevronLeft />
      </button>
      <button
        className="absolute right-3 top-1/2 transform -translate-y-1/2  z-10 p-2 border border-gray-500 rounded-full"
        onClick={scrollRight}
      >
        <FaChevronRight />
      </button>
      <div
        ref={scrollRef}
        className="w-[90%] overflow-x-hidden  flex justify-start gap-[1rem] py-5 items-center mx-auto"
        style={{ scrollBehavior: 'smooth' }}
      >
        {icons.map((icon, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center justify-center px-1 text-gray-500 text-sm font-semibold hover:text-black hover:cursor-pointer"
            style={{ minWidth: '100px' }}
          >
            <img src={icon.src} className="w-7 opacity-50" alt={icon.alt} />
            <span className="mt-2">{icon.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchByIcon;
