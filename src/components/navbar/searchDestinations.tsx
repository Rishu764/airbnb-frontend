import React from 'react';
interface SearchDestinationsProps {
  onSelect: (destination: string) => void;
}

const SearchDestinations: React.FC<SearchDestinationsProps> = ({ onSelect }) => {
  const destinations = [
    { name: "I'm flexible", img: "https://a0.muscache.com/pictures/f9ec8a23-ed44-420b-83e5-10ff1f071a13.jpg?im_w=320" },
    { name: "Europe", img: "https://a0.muscache.com/im/pictures/7b5cf816-6c16-49f8-99e5-cbc4adfd97e2.jpg?im_w=320" },
    { name: "Thailand", img: "https://a0.muscache.com/im/pictures/924d2b73-6c65-4d04-a2ad-bbc028299658.jpg?im_w=320" },
    { name: "Southeast Asia", img: "https://a0.muscache.com/im/pictures/d77de9f5-5318-4571-88c7-e97d2355d20a.jpg?im_w=320" },
    { name: "United Arab", img: "https://a0.muscache.com/im/pictures/e1a36727-5064-4ba7-a870-4f9fec72def7.jpg?im_w=320" },
    { name: "Middle East", img: "https://a0.muscache.com/im/pictures/66355b01-4695-4db9-b292-c149c46fb1ca.jpg?im_w=320" }
  ];

  return (
    <div className="w-[30rem] shadow-md rounded-2xl bg-white p-4">
      <div className="font-semibold text-sm flex items-start">
        Search by region
      </div>
      <div className="flex flex-wrap items-center justify-center gap-3 mt-2">
        {destinations.map((destination) => (
          <div
            key={destination.name}
            className="w-[8rem] flex flex-col items-start text-gray-600 p-1.5 rounded-xl hover:bg-gray-200 cursor-pointer"
            onClick={() => onSelect(destination.name)}
          >
            <img src={destination.img} alt={destination.name} className="rounded-2xl shadow-md border border-gray-300" />
            <span className="mt-1 text-sm">{destination.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SearchDestinations;
