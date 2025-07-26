import NavBar from "../components/NavBar";
import FilterBar from "../components/FilterBar";
import { useState } from "react";
import Card from "../components/Card";

const Shop = () => {
  const [isCartOpen, setIsCartOpen] = useState<boolean>(false);
  const [selectedFilter, setSelectedFilter] = useState<string>("All");
  const [searchText, setSearchText] = useState<string>("");
  const toggleCart = () => {
    setIsCartOpen((prev) => !prev);
  };

  return (
    <div>
      <NavBar onClick={toggleCart} isCartOpen={isCartOpen} />
      <FilterBar 
        filter={selectedFilter}
        onFilterChange={setSelectedFilter}
        onSearchChange={setSearchText}
      />
      <div className=" mt-15">
        <Card filter={selectedFilter} searchText={searchText}/>
      </div>
    </div>
  );
};

export default Shop;
