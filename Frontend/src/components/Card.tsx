import { useEffect, useState } from "react";
import Iphone from "../assets/Iphone/image.png";
import MacbookPro14 from "../assets/Iphone/MacbookPro14.png"
import Button from "../components/Button";
import { filterProps } from "framer-motion";


interface CarProps{
    filter: string
    searchText: string
}

const Card = ({ filter, searchText }: CarProps) => {
  const [isClick, setIsClick] = useState<boolean>(false);
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const products = [
    { name: "iPhone 16", image: Iphone, priceText: "29,900", price:29900, category:"iPhone"},
    { name: "iPhone 16", image: Iphone, priceText: "29,900", price:29900, category:"iPhone"},
    { name: "iPhone 16", image: Iphone, priceText: "29,900", price:29900, category:"iPhone"},
    { name: "iPhone 16", image: Iphone, priceText: "29,900", price:29900, category:"iPhone"},
    { name: "iPhone 16", image: Iphone, priceText: "29,900", price:29900, category:"iPhone"},
    { name: "Macbook Pro", image: MacbookPro14, priceText: "54,900", price:54900, category:"Mac"},
    { name: "Macbook Pro", image: MacbookPro14, priceText: "54,900", price:54900, category:"Mac"},
    { name: "Macbook Pro", image: MacbookPro14, priceText: "54,900", price:54900, category:"Mac"},
    { name: "Macbook Pro", image: MacbookPro14, priceText: "54,900", price:54900, category:"Mac"},
    { name: "Macbook Pro", image: MacbookPro14, priceText: "54,900", price:54900, category:"Mac"},

  ];
  const filteredProducts = products.filter(
    (p) =>{
        return(
                (filter === "All" || p.category === filter) && 
                (p.name.toLowerCase().includes(searchText.toLowerCase()))
        )
    }
  )

  const toggleClick = () => {
    setIsClick((prev) => !prev);
  };

  useEffect(()=>{
    setIsVisible(false)
    const timeout = setTimeout(()=>{
        setIsVisible(true)
    }, 400)
    return () => clearTimeout(timeout)
  },[filter])


  return (
    <div 
    className={`grid grid-cols-5 grid-rows-1 gap-5 px-40 transition-opacity duration-500 ease-out
                ${isVisible ? "opacity translate-y-0" : "opacity-0 -translate-y-2 pointer-events-none"}
        `}
    >
      {filteredProducts.map((product, index) => (
        <div
          key={index}
          className="bg-white shadow-xl
                    flex flex-col items-center gap-4 rounded-xl 
                    w-64 p-6 mx-auto 
                    cursor-pointer transform transition duration-500 hover:scale-105 "
        >
          {/* Product Name */}
          <span className="text-lg font-medium text-gray-800 self-start ">
            {product.name}
          </span>

          {/* Product Image */}
          <img
            src={product.image}
            alt={product.name}
            className="w-40 h-40 object-contain"
          />
          <div className="flex flex-row justify-between items-center w-full">
            <span className="text-lg font-medium text-gray-500">
              ฿{product.priceText}
            </span>
            <Button
              onClick={toggleClick}
              className="bg-blue-500 px-3 py-0.5 rounded-3xl text-white text-lg"
            >
              Buy
            </Button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Card;
