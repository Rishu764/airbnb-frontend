import React, { useState, useRef, useEffect } from "react";
import { BiSearch } from "react-icons/bi";
import { DateRangePicker } from "react-date-range";
import { addDays } from "date-fns";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import SearchDestinations from "./searchDestinations";
import AddGuests from "./addGuests";

const Search: React.FC = () => {
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [showDestination, setShowDestination] = useState(false);
  const [showAddGuests, setShowAddGuests] = useState(false);
  const [selectedDestination, setSelectedDestination] = useState("");
  const [guestCounts, setGuestCounts] = useState({
    adults: 0,
    children: 0,
    infants: 0,
  });
  const [state, setState] = useState([
    {
      startDate: new Date(),
      endDate: addDays(new Date(), 7),
      key: "selection",
    },
  ]);

  const datePickerRef = useRef<HTMLDivElement>(null);
  const destinationRef = useRef<HTMLDivElement>(null);
  const guestsRef = useRef<HTMLDivElement>(null);

  const handleDateChange = (item: any) => {
    setState([item.selection]);
    setShowDatePicker(false);
  };

  const handleToggle = (dropdown: string) => {
    setShowDestination(dropdown === "destination" ? !showDestination : false);
    setShowDatePicker(dropdown === "datePicker" ? !showDatePicker : false);
    setShowAddGuests(dropdown === "addGuests" ? !showAddGuests : false);
  };

  const handleDestinationSelect = (destination: string) => {
    setSelectedDestination(destination);
    setShowDestination(false);
  };

  const handleGuestChange = (type: string, operation: string) => {
    setGuestCounts((prevCounts: any) => {
      const newCount =
        operation === "increment" ? prevCounts[type] + 1 : prevCounts[type] - 1;
      return { ...prevCounts, [type]: newCount < 0 ? 0 : newCount };
    });
  };

  const totalGuests =
    guestCounts.adults + guestCounts.children + guestCounts.infants;

  const handleClickOutside = (event: MouseEvent) => {
    if (
      datePickerRef.current &&
      !datePickerRef.current.contains(event.target as Node) ||
      destinationRef.current &&
      !destinationRef.current.contains(event.target as Node) ||
      guestsRef.current &&
      !guestsRef.current.contains(event.target as Node)
    ) {
      setShowDatePicker(false);
      setShowDestination(false);
      setShowAddGuests(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative rounded-full shadow-sm border flex py-3 px-3 items-center">
      <div className="flex flex-col items-start border-r rounded-l pl-6">
        <div className="text-[14px] font-semibold">Where</div>
        <input
          type="text"
          className="border-none placeholder-thin p-1 focus:outline-none focus:ring-0 w-full sm:w-[10rem] h-5 py-3 font-semibold text-sm text-gray-700"
          placeholder="Search Destinations"
          value={selectedDestination}
          readOnly
          onClick={() => handleToggle("destination")}
        />
      </div>
      <div
        className="flex flex-col items-start border-r rounded-l pl-6 cursor-pointer"
        onClick={() => handleToggle("datePicker")}
      >
        <div className="text-[14px] font-semibold">Check-in</div>
        <input
          type="text"
          className="border-none placeholder-thin p-1 focus:outline-none focus:ring-0 w-full sm:w-[8rem] h-5 py-3 font-semibold text-sm text-gray-700"
          placeholder="Add Dates"
          value={state[0].startDate.toDateString()}
          readOnly
        />
      </div>
      <div
        className="flex flex-col items-start border-r rounded-l pl-6 cursor-pointer"
        onClick={() => handleToggle("datePicker")}
      >
        <div className="text-[14px] font-semibold">Check-out</div>
        <input
          type="text"
          className="border-none placeholder-thin p-1 focus:outline-none focus:ring-0 w-full sm:w-[8rem] h-5 py-3 font-semibold text-sm text-gray-700"
          placeholder="Add Dates"
          value={state[0].endDate.toDateString()}
          readOnly
        />
      </div>
      <div className="flex flex-col items-start rounded-l pl-6">
        <div className="md:text-[14px] sm:text-sm font-semibold">Who</div>
        <input
          type="text"
          className="border-none placeholder-thin p-1 focus:outline-none focus:ring-0 w-full sm:w-[10rem] h-5 py-3 font-semibold text-sm text-gray-700"
          placeholder="Add Guests"
          value={totalGuests != 0 ? totalGuests : ""}
          readOnly
          onClick={() => handleToggle("addGuests")}
        />
      </div>
      <button className="bg-[#E11860] p-3 rounded-full text-white text-xl ml-2 mt-2 sm:ml-0">
        <BiSearch />
      </button>

      {showDestination && (
        <div className="absolute z-10 top-[6rem]" ref={destinationRef}>
          <SearchDestinations onSelect={handleDestinationSelect} />
        </div>
      )}

      {showDatePicker && (
        <div className="absolute top-[6rem] z-10 border bg-white rounded-2xl shadow-2xl p-2" ref={datePickerRef}>
          <DateRangePicker
            onChange={handleDateChange}
            moveRangeOnFirstSelection={false}
            months={2}
            ranges={state}
            direction="horizontal"
          />
        </div>
      )}

      {showAddGuests && (
        <div className="absolute z-10 top-[6rem] right-0" ref={guestsRef}>
          <AddGuests
            guestCounts={guestCounts}
            onGuestChange={handleGuestChange}
          />
        </div>
      )}
    </div>
  );
};

export default Search;
