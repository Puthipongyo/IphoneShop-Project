import NavBar from "../components/NavBar";
import { useState } from "react";

const Shop = () => {
  const [isCartOpen, setIsCartOpen] = useState<boolean>(false);
  const toggleCart = () => {
    setIsCartOpen((prev) => !prev);
  };
  return (
    <div>
      <NavBar onClick={toggleCart} isCartOpen={isCartOpen} />
      <h1>This is Shop page</h1>
    </div>
  );
};

export default Shop;
