import { IoSearchSharp, IoPhonePortraitOutline } from "react-icons/io5";
import { RiMacbookLine } from "react-icons/ri";
import { TbDeviceIpad, TbDeviceAirpods } from "react-icons/tb";
import { CgAppleWatch } from "react-icons/cg";
import { useState } from "react";

interface FilterBarProps {
  onFilterChange: (filter: string) => void;
  filter: string; // เพิ่มเข้ามา
  onSearchChange : (text: string) => void;
}

const FilterBar = ({ onFilterChange, filter,onSearchChange}: FilterBarProps) => {
  const list = [
    { label: "Mac", icon: <RiMacbookLine /> },
    { label: "iPhone", icon: <IoPhonePortraitOutline /> },
    { label: "iPad", icon: <TbDeviceIpad /> },
    { label: "Apple Watch", icon: <CgAppleWatch /> },
    { label: "Airpod", icon: <TbDeviceAirpods /> },
  ];

  return (
    <div className="bg-white w-full px-40 py-4 rounded-2xl shadow-md flex flex-row justify-center items-center gap-4 ">
      {/* Search Bar */}
      <div>
        <div className="flex items-center bg-gray-100 rounded-full px-4 py-2 w-full max-w-sm mx-auto">
          <IoSearchSharp className="text-gray-600 mr-2" />
          <input
            type="text"
            placeholder="Find your product"
            className="bg-transparent outline-none w-full text-sm"
            onChange={(e) => onSearchChange(e.target.value)}
          />
        </div>
      </div>

      <ul className="flex flex-row justify-center gap-4 text-gray-700 text-base font-medium">
        {list.map((item, index) => (
          <li
            key={index}
            className="flex flex-row justify-center items-center gap-4 p-2 rounded-full 
                    hover:bg-gray-100 transition cursor-pointer"
            onClick={() => {
              if (item.label === filter) {
                onFilterChange("All"); // ถ้ากดซ้ำ = reset เป็น All
              } else {
                onFilterChange(item.label); // กดอันใหม่ = set filter ใหม่
              }
            }}
          >
            <span className="text-xl">{item.icon}</span>
            <span>{item.label}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FilterBar;
