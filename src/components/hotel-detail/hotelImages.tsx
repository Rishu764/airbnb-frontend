
const HotelImages = () => {
  return (
    <div className="h-[30rem] md:grid grid-cols-2  block gap-4">
      <div className="md:h-[30rem] h-[20rem]">
        <img src="https://a0.muscache.com/im/pictures/c3a650d3-185e-4928-9ae1-e1b247f9bb9c.jpg" alt="Image 1" className="object-cover w-full h-full md:rounded-l-3xl rounded-sm" />
      </div>

      <div className="md:grid grid-cols-2 grid-rows-2 gap-2 h-[30rem]">
        <div>
          <img src="https://a0.muscache.com/im/pictures/0cea6faf-6dab-408a-ad9b-3e9dfae17359.jpg" alt="Image 2" className="object-cover h-full w-full" />
        </div>
        <div>
          <img src="https://a0.muscache.com/im/pictures/0cea6faf-6dab-408a-ad9b-3e9dfae17359.jpg" alt="Image 3" className="object-cover h-full w-full rounded-r-3xl" />
        </div>
        <div>
          <img src="https://a0.muscache.com/im/pictures/0cea6faf-6dab-408a-ad9b-3e9dfae17359.jpg" alt="Image 4" className="object-cover h-full w-full" />
        </div>
        <div>
          <img src="https://a0.muscache.com/im/pictures/0cea6faf-6dab-408a-ad9b-3e9dfae17359.jpg" alt="Image 5" className="object-cover h-full w-full rounded-r-3xl" />
        </div>
      </div>
    </div>
  );
};

export default HotelImages;
