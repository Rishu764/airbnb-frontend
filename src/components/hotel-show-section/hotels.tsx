import SearchByIcon from "../searchByIcon/searchByIcon";
import CardItem from "./cards";

const Hotels = () => {
  return (
    <>
      <SearchByIcon />
      <div className="flex items-center justify-center ">
        <div className="flex flex-wrap gap-7 w-[90%] ">
          <CardItem />
          <CardItem />
          <CardItem />
          <CardItem />
          <CardItem />
        </div>
      </div>
    </>
  );
};

export default Hotels;
