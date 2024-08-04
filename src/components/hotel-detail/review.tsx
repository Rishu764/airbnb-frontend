import { FaStar } from 'react-icons/fa';

const Review = ({ user }:any) => {
  return (
    <div className="p-4 border rounded-lg shadow-sm">
      <div className="flex items-center space-x-4 mb-2">
        <img
          className="w-12 h-12 rounded-full"
          src={user.image}
          alt={user.name}
        />
        <div>
          <p className="font-semibold">{user.name}</p>
          <p className="text-gray-500 text-sm">{user.yearsOnAirbnb} years on Airbnb</p>
        </div>
      </div>
      <div className="flex items-center space-x-1 mb-2">
        {Array.from({ length: user.rating }).map((_, index) => (
          <FaStar key={index} className="text-yellow-500" />
        ))}
        <p className="text-gray-500 text-sm">{user.date}</p>
      </div>
      <p className="text-gray-700 mb-2">{user.review}</p>
      <button className="text-blue-500">Show more</button>
    </div>
  );
};

export default Review;
