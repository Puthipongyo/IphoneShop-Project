import { FaApple } from "react-icons/fa6";
import { CiSearch } from "react-icons/ci";
import { IoBagOutline } from "react-icons/io5";

const NavBar = () => {
    const Choices: string[] =["Shop", "Mac", "iPad", "iPhone", "Watch", "AirPods", "Accessories", "Support"]
  return (
    <div className="top-o left-0 w-full bg-[#F7F7F8] flex justify-center items-center h-15 px-20 shadow-neutral-100">
      <ul className="flex flex-row gap-15 items-center text-gray-800 font-medium">
        <li className=" w-5 flex items-start"><FaApple className="text-3xl" /></li>
        {Choices.map((choice, index) =>(
            <li key={index} className="cursor-pointer hover:text-black">{choice}</li>
        ))}
        <li className="cursor-pointer  hover:text-black"><CiSearch className="text-2xl stroke-[1]" /></li>
        <li className="cursor-pointer  hover:text-black"><IoBagOutline className="text-2xl stroke-[1]" /></li>
      </ul>
    </div>
  );
};

export default NavBar;
