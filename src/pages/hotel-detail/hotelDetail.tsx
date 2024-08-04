import HotelImages from "../../components/hotel-detail/hotelImages";
import LocationMap from "../../components/hotel-detail/hotelLocationMap";
import HotelDesc from "../../components/hotel-detail/hoteldesc";
import MeetHost from "../../components/hotel-detail/meetHost";
import Ratings from "../../components/hotel-detail/ratings";
import ReviewsList from "../../components/hotel-detail/reviewList";

const HotelDetails = () => {
  return (
    <div className="flex items-center justify-center ">
      <div className="w-[90%] px-4">
        <div className="heading font-semibold text-2xl py-5">
            GlampView Luxurious Geodesic Glamp 2
        </div>
        <HotelImages />
        <HotelDesc/>
        <Ratings/>
        <ReviewsList/>
        <LocationMap/>
        <MeetHost/>
      </div>
    </div>
  );
};

export default HotelDetails;
