import React, { useState } from 'react';
import SearchBar from './components/SearchBar';
import CarList from './components/CarList';
import carsData from './carsData/cars.json';
import Pagination from './components/Pagination';
import "./styles.css";

const App = () => {
  const itemsPerPage = 6; // Number of items per page
  const totalItems = carsData.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const [cars, setCars] = useState(carsData);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedBrand, setSelectedBrand] = useState('all');
  const [currentPage, setCurrentPage] = useState(1);

  const handleSearch = (term, brand) => {
    setSearchTerm(term);
    setSelectedBrand(brand);
    setCurrentPage(1); // Reset to the first page when searching

    // Filter cars based on the search term and selected brand
    // Filter cars based on the search term and selected brand
const filteredCars = carsData.filter((car) => {
  // Ensure that car.name and term are not undefined or null
  const carName = car.name || ''; // Provide a default empty string if car.name is undefined or null
  const searchTerm = term || ''; // Provide a default empty string if term is undefined or null

  const brandMatch = brand === 'all' || car.brand === brand;
  const searchTermMatch = carName.toLowerCase().includes(searchTerm.toLowerCase());

  return brandMatch && searchTermMatch;
});


    setCars(filteredCars);
  };

  const onPageChange = (page) => {
    setCurrentPage(page);
  };

  // Calculate the range of items to display on the current page
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentCars = cars.slice(startIndex, endIndex);

  return (
    <div className="app">
      <h1>Car Search</h1>
      <SearchBar onSearch={handleSearch} />
      <CarList cars={currentCars} />
      <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={onPageChange} />
    </div>
  );
};

export default App;
