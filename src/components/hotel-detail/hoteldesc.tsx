import Amenities from "./amenities";

const HotelDesc = () => {
  return (
    <div className="flex flex-col lg:flex-row p-4 space-y-4 lg:space-y-0 lg:space-x-8 md:relative">
      <div className="flex-1">
        <h1 className="text-2xl font-semibold">Dome in Manali, India</h1>
        <p className="text-gray-700">
          3 guests · 1 bedroom · 1 bed · 1 bathroom
        </p>
        <p className="text-blue-500 mt-1 cursor-pointer">★ 1 review</p>
        <hr className="my-4" />
        <div>
          <div className="flex items-center space-x-2">
            <img
              className="w-12 h-12 rounded-full"
              src="https://a0.muscache.com/im/pictures/c3a650d3-185e-4928-9ae1-e1b247f9bb9c.jpg"
              alt="Host"
            />
            <div>
              <p className="text-gray-800 font-medium">
                Hosted by Navratan Singh
              </p>
              <p className="text-gray-500">3 years hosting</p>
            </div>
          </div>
          <hr className="my-4" />
          <div className="mt-4 space-y-2">
            <div className="flex flex-col items-start space-y-1">
              <p className="font-semibold text-gray-700">Park for free</p>
              <p className="text-gray-700">
                This is one of the few places in the area with free parking.
              </p>
            </div>
            <div className="flex flex-col items-start space-y-1">
              <p className="font-semibold text-gray-700">Great communication</p>
              <p className="text-gray-700">
                90% of recent guests rated Navratan Singh 5-star in
                communication.
              </p>
            </div>
            <div className="flex flex-col items-start space-y-1">
              <p className="font-semibold text-gray-700">
                Free cancellation before 5 Jul
              </p>
              <p className="text-gray-700">
                Get a full refund if you change your mind.
              </p>
            </div>
          </div>
          <hr className="my-4" />
          <p className="mt-4 text-gray-700">
            Discover a uniquely beautiful riverside glamping retreat with a
            360-degree view. Enjoy luxurious accommodations, delectable cuisine,
            and a range of entertainment options, including a pool table. Plus,
            indulge in a charming library and a rejuvenating jacuzzi with a
            view.
          </p>
        </div>
        <Amenities />
      </div>
      <div className="w-full h-fit lg:w-1/3 bg-white border border-gray-300 p-4 rounded-lg shadow-lg sticky lg:top-4">
        <div className="text-2xl font-semibold">
          ₹14,980 <span className="text-lg font-normal">night</span>
        </div>
        <div className="mt-4 border rounded-lg p-2">
          <div className="flex justify-between items-center">
            <div>
              <label className="text-gray-600 text-sm">CHECK-IN</label>
              <p className="text-gray-800">7/6/2024</p>
            </div>
            <div>
              <label className="text-gray-600 text-sm">CHECKOUT</label>
              <p className="text-gray-800">7/11/2024</p>
            </div>
          </div>
          <div className="mt-2">
            <label className="text-gray-600 text-sm">GUESTS</label>
            <select className="w-full mt-1 p-2 border rounded-lg">
              <option>1 guest</option>
              {/* Add more options as needed */}
            </select>
          </div>
        </div>
        <button className="mt-4 w-full py-2 bg-pink-500 text-white font-semibold rounded-lg">
          Reserve
        </button>
        <p className="mt-2 text-gray-600 text-sm">You won't be charged yet</p>
        <div className="mt-4 border-t pt-4">
          <div className="flex justify-between">
            <p>₹14,980 x 5 nights</p>
            <p>₹74,900</p>
          </div>
          <div className="flex justify-between mt-2">
            <p>Airbnb service fee</p>
            <p>₹10,574</p>
          </div>
          <div className="flex justify-between font-semibold mt-2">
            <p>Total before taxes</p>
            <p>₹85,474</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HotelDesc;
