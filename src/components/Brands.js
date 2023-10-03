import React from "react";

const Brands = ({ selectedBrand, onBrandFilterChange }) => {
  const handleBrandChange = (event) => {
    const brand = event.target.value;
    onBrandFilterChange(brand);
  };

  return (
    <select value={selectedBrand} onChange={handleBrandChange}>
      <option value="all">All Brands</option>
      <option value="brand1">Brand 1</option>
      <option value="brand2">Brand 2</option>
      {/* Add more brands as needed */}
    </select>
  );
};

export default Brands;
