const MeetHost = () => {
  return (
    <main className="p-4">
      <div className="text-2xl font-semibold">Meet your Host</div>
      <div className="host flex items-center gap-10 py-6 flex-wrap">
        <div className="card w-[25rem] p-2 rounded-2xl flex items-center justify-around shadow-2xl ">
          <div className="left flex flex-col items-center  ">
            <div className="image w-[8rem] h-[8rem]  rounded-full overflow-hidden">
              <img
                src="https://a0.muscache.com/im/pictures/user/105e312f-4823-42d2-afd1-5d365f4c0c36.jpg"
                className="w-full h-full object-cover"
                alt="host image"
              />
            </div>
            <div className="desc flex flex-col items-center">
              <span className="text-2xl font-semibold text-center">
                Navratan <br></br> Singh
              </span>
              <span className="text-gray-700 text-md">Host</span>
            </div>
          </div>
          <div className="right  flex flex-col gap-4">
            <div className="reviews flex flex-col items-start border-b py-1">
              <span className="text-xl font-semibold">148</span>
              <span className="text-sm font-semibold">Reviews</span>
            </div>
            <div className="rating flex flex-col border-b py-1">
              <span className="text-xl font-semibold">4.78</span>
              <span className="text-sm font-semibold">Rating</span>
            </div>
            <div className="years flex flex-col ">
              <span className="text-xl font-semibold">3</span>
              <span className="text-sm font-semibold">Years hosting</span>
            </div>
          </div>
        </div>
        <div className="flex flex-col">
            <div className="p-1 text-xl font-semibold">
                 Host details
            </div>
            <div className="p-1 flex flex-col text-gray-700">
                <span>Response rate: 100%</span>
                <span>Responds within an hour</span>
            </div>
        </div>
      </div>
    </main>
  );
};
export default MeetHost;
