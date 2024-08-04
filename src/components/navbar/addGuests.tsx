import React from 'react';
import { CiCircleMinus, CiCirclePlus } from "react-icons/ci";

interface AddGuestsProps {
  guestCounts: {
    adults: number;
    children: number;
    infants: number;
  };
  onGuestChange: (type: string, operation: string) => void;
}

const AddGuests: React.FC<AddGuestsProps> = ({ guestCounts, onGuestChange }) => {
  return (
    <div className="w-[25rem]  bg-white rounded-3xl shadow-2xl p-5">
      <div className="flex justify-between items-center border-b p-3">
        <div className="flex flex-col items-start">
          <span className="font-semibold text-[18px]">Adults</span>
          <span className="text-sm text-gray-700">Ages 13 or above</span>
        </div>
        <div className="flex items-center gap-2 text-gray-700">
          <CiCircleMinus
            size={30}
            className="hover:text-black cursor-pointer"
            onClick={() => onGuestChange('adults', 'decrement')}
          />
          <span>{guestCounts.adults}</span>
          <CiCirclePlus
            size={30}
            className="hover:text-black cursor-pointer"
            onClick={() => onGuestChange('adults', 'increment')}
          />
        </div>
      </div>
      <div className="flex justify-between items-center border-b p-3">
        <div className="flex flex-col items-start">
          <span className="font-semibold text-[18px]">Children</span>
          <span className="text-sm text-gray-700">Ages 2-12</span>
        </div>
        <div className="flex items-center gap-2 text-gray-700">
          <CiCircleMinus
            size={30}
            className="hover:text-black cursor-pointer"
            onClick={() => onGuestChange('children', 'decrement')}
          />
          <span>{guestCounts.children}</span>
          <CiCirclePlus
            size={30}
            className="hover:text-black cursor-pointer"
            onClick={() => onGuestChange('children', 'increment')}
          />
        </div>
      </div>
      <div className="flex justify-between items-center border-b p-3">
        <div className="flex flex-col items-start">
          <span className="font-semibold text-[18px]">Infants</span>
          <span className="text-sm text-gray-700">Under 2</span>
        </div>
        <div className="flex items-center gap-2 text-gray-700">
          <CiCircleMinus
            size={30}
            className="hover:text-black cursor-pointer"
            onClick={() => onGuestChange('infants', 'decrement')}
          />
          <span>{guestCounts.infants}</span>
          <CiCirclePlus
            size={30}
            className="hover:text-black cursor-pointer"
            onClick={() => onGuestChange('infants', 'increment')}
          />
        </div>
      </div>
    </div>
  );
};

export default AddGuests;
