import { useState } from "react";

import Bg_Iphone from "./assets/BlackgroundIphone.png";
import Bg_Macbook from "./assets/mcAir.png";
import NavBar from "./components/NavBar";
import Button from "./components/Button";

function App() {
  const [count, setCount] = useState(0);
  const Iphone: string[] = [
    "iPhone",
    "Hello! iPhone family",
    "Learn more",
    "Find your perfect iPhone",
  ];
  const Macbook: string[] = [
    "MacBook Air",
    "The best for the brightest",
    "Learn more",
    "Buy now",
  ];
  return (
    <>
      <NavBar></NavBar>
      <div className="flex flex-col">
        {/* iPhone */}
        <div className="w-full bg-[#F7F7F8] flex flex-col items-center pt-10 shadow-neutral-100">
          <h1 className="text-6xl font-bold text-black">{Iphone[0]}</h1>
          <p className="text-3xl text-gray-800 mt-4">{Iphone[1]}</p>
          <div className="flex flex-row gap-6 mt-4">
            <Button
              onClick={() => {}}
              className="bg-blue-500 px-4 py-2 rounded-3xl text-white"
            >
              {Iphone[2]}
            </Button>
            <Button
              onClick={() => {}}
              className="bg-white px-4 py-2 rounded-3xl text-blue-500 border-2 hover:bg-blue-500 hover:text-white hover:border-white"
            >
              {Iphone[3]}
            </Button>
          </div>
          <img
            src={Bg_Iphone}
            className="mt-4 w-full max-w-4xl object-contain"
          />
        </div>
        {/* MacBook Air */}
        <div className="w-full bg-gradient-to-b from-[#e8f2fb] to-white flex flex-col items-center pt-10 shadow-neutral-100 mt-3">
          <h1 className="mt-16 text-6xl font-bold mb-4 text-black">
            {Macbook[0]}
          </h1>
          <p className="text-3xl  text-gray-800">{Macbook[1]}</p>
          <div className="flex flex-row gap-6 mt-4">
            <Button
              onClick={() => {}}
              className="bg-blue-500 px-4 py-2 rounded-3xl text-white"
            >
              {Macbook[2]}
            </Button>
            <Button
              onClick={() => {}}
              className="bg-white px-4 py-2 rounded-3xl text-blue-500 border-2 hover:bg-blue-500 hover:text-white hover:border-white"
            >
              {Macbook[3]}
            </Button>
          </div>
          <img
            src={Bg_Macbook}
            alt="MacBook Air product"
            className="w-full max-w-4xl object-contain"
          />
        </div>
      </div>
      {/* <div className="grid grid-cols-2 grid-rows-2 gap-2">
        <div className="bg-red-500 flex items-center justify-center h-120">content-1</div>
        <div className="bg-red-500 flex items-center justify-center h-120">content-1</div>
        <div className="bg-red-500 flex items-center justify-center h-120">content-1</div>
        <div className="bg-red-500 flex items-center justify-center h-120">content-1</div>
      </div> */}
    </>
  );
}

export default App;
