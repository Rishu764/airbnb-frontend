import { FaSprayCan, FaCheckCircle, FaKey, FaComments, FaMapMarkerAlt, FaTag } from 'react-icons/fa';

const ratingsData = [
  { label: 'Cleanliness', value: 4.8, icon: <FaSprayCan /> },
  { label: 'Accuracy', value: 4.9, icon: <FaCheckCircle /> },
  { label: 'Check-in', value: 4.9, icon: <FaKey /> },
  { label: 'Communication', value: 4.9, icon: <FaComments /> },
  { label: 'Location', value: 4.9, icon: <FaMapMarkerAlt /> },
  { label: 'Value', value: 4.8, icon: <FaTag /> },
];

const Ratings = () => {
  return (
    <div className="p-4  flex items-center justify-center border-t my-4">
      <div className="flex flex-col md:flex-row md:space-x-8">
        <div className="flex flex-col items-start mb-4 md:mb-0">
          <h2 className="text-lg font-semibold">Overall rating</h2>
          <div className="flex  flex-col space-y-1">
            {[5, 4, 3, 2, 1].map((rating) => (
              <div key={rating} className="flex items-center space-x-2">
                <span>{rating}</span>
                <div className="w-40 h-2 bg-gray-200 rounded-full">
                  <div
                    className={`h-full rounded-full ${rating === 5 ? 'bg-gray-800' : 'bg-gray-300'}`}
                    style={{ width: rating === 5 ? '80%' : '20%' }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
        {ratingsData.map((item) => (
          <div key={item.label} className="flex flex-col items-center space-y-1">
            <h2 className="text-lg font-semibold">{item.label}</h2>
            <span className="text-2xl font-bold">{item.value}</span>
            <div className="text-2xl text-gray-500">{item.icon}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Ratings;
