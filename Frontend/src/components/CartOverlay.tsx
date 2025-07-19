import { LuPackage } from "react-icons/lu";
import { FaBookmark } from "react-icons/fa";
import { CiUser } from "react-icons/ci";
import { FaRegUserCircle } from "react-icons/fa";

const CartOverlay = () => {
  return (
    <div className="bg-white rounded-3xl p-6 shadow-lg">
      <h2 className="text-3xl font-semibold text-gray-900 mb-2">Your Bag</h2>
      <p className="text-gray-500 mb-6">
        <span className="text-blue-600 cursor-pointer hover:underline">
          Sign in
        </span>
        {" "}to see if youu have any saved items.
      </p>
      <p className="text-sm text-gray-500 mb-2">My Profile</p>
      <ul className="flex flex-col gap-1">
        <li className="flex flex-row gap-2 text-gray-600">
          <LuPackage className="text-xl" />
          <span className="text-sm font-medium">Orders</span>
        </li>
        <li className="flex flex-row gap-2 text-gray-600">
          <FaBookmark className="text-xl" />
          <span className="text-sm font-medium">Your Saves</span>
        </li>
        <li className="flex flex-row gap-2 text-gray-600">
          <CiUser className="text-xl" />
          <span className="text-sm font-medium">Account</span>
        </li>
        <li className="flex flex-row gap-2 text-gray-600">
          <FaRegUserCircle className="text-xl" />
          <span className="text-sm font-medium">Sign in</span>
        </li>

      </ul>
    </div>
  );
};

export default CartOverlay;
