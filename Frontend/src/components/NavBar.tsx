import { FaApple } from "react-icons/fa6";
// import { CiSearch } from "react-icons/ci";
import { IoBagOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import CartOverlay from "../components/CartOverlay";
import { useState } from "react";

interface NavBarProps {
  onClick: () => void;
  isCartOpen: boolean;
}

const NavBar = ({ onClick, isCartOpen }: NavBarProps) => {
  const navigate = useNavigate();
  const [isClick, setIsClick] = useState<boolean>(false);
  const Choices: string[] = [
    "Shop",
    "Mac",
    "iPad",
    "iPhone",
    "Watch",
    "AirPods",
    "Support",
  ];
  const handleChoiceClick = (choice: string) => {
    switch(choice){
      case "Shop": navigate("/shop")
        break;
      case "Mac": navigate("/mac")
        break;
      case "iPad": navigate("/ipad")
        break;
      case "iPhone": navigate("/iphone")
        break;
      case "Watch": navigate("/watch")
        break; 
      case "AirPods": navigate("/airpods")
        break;
      case "Support": navigate("/support")
        break;
    }
  };
  
  return (
    <div className=" w-full bg-white flex justify-center items-center h-15 px-20 shadow-neutral-100">
      <ul className="flex flex-row gap-15 items-center text-gray-800 font-medium">
        <li className="h-9 flex items-start">
          <FaApple className="text-3xl" />
        </li>
        {Choices.map((choice, index) => (
          <li key={index} className="cursor-pointer hover:text-black" onClick={ () => handleChoiceClick(choice) }>
            {choice}
          </li>
        ))}
        <li className="relative">
          <div onClick={onClick} className="cursor-pointer hover:text-black">
            <IoBagOutline className="text-2xl stroke-[1]" />
          </div>
          <div
            className={`
                      absolute top-full w-100 transition-all duration-300 ease-out
                      ${
                        isCartOpen
                          ? "opacity-100 translate-y-0" 
                          : "opacity-0 -translate-y-1 pointer-events-none"
                      }
                    `}
          >
            <CartOverlay />
          </div>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
