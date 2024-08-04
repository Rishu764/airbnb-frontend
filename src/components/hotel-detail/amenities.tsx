// src/components/Amenities.js
import { FaMountain, FaWater, FaWifi, FaParking, FaTv, FaDesktop, FaCamera } from 'react-icons/fa';
import { MdOutlineSmokeFree } from 'react-icons/md';

const amenities = [
  { name: 'Mountain view', icon: <FaMountain /> },
  { name: 'Valley view', icon: <FaMountain /> },
  { name: 'Lake access', icon: <FaWater /> },
  { name: 'Wifi', icon: <FaWifi /> },
  { name: 'Dedicated workspace', icon: <FaDesktop /> },
  { name: 'Free parking on premises', icon: <FaParking /> },
  { name: 'TV', icon: <FaTv /> },
  { name: 'Exterior security cameras on property', icon: <FaCamera /> },
  { name: 'Carbon monoxide alarm', icon: <MdOutlineSmokeFree />, unavailable: true },
  { name: 'Smoke alarm', icon: <MdOutlineSmokeFree />, unavailable: true }
];

const Amenities = () => {
  return (
    <div className="max-w-4xl mx-auto my-8 text-gray-700">
      <h2 className="text-2xl font-bold mb-4">What this place offers</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {amenities.map((amenity, index) => (
          <div key={index} className={`flex items-center ${amenity.unavailable ? 'line-through text-gray-500' : ''}`}>
            <span className="text-2xl mr-2">{amenity.icon}</span>
            <span>{amenity.name}</span>
          </div>
        ))}
      </div>
      <button className="mt-4 px-4 py-2 border border-gray-400 rounded hover:text-black hover:border-black">Show all 48 amenities</button>
    </div>
  );
};

export default Amenities;
