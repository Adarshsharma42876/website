import React, { useState } from "react";
import Brands from "./Brands";
import Form from "react-bootstrap/Form";
import { Container, Card } from "react-bootstrap";
const SearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedBrand, setSelectedBrand] = useState("all");

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearch = () => {
    onSearch(searchTerm, selectedBrand);
  };

  const handleBrandFilterChange = (brand) => {
    setSelectedBrand(brand);
  };

  return (
    <>
      <Container>
        <Card className="mt-5">
          <div className="" bg-success p-2 text-white>
            <Card.Header className="bg-red text-blue text-center">
              <Form.Control
                className="text-center"
                type="text"
                placeholder="Search For Some car"
                value={searchTerm}
                onChange={handleInputChange}
                
              />
              <Brands
                selectedBrand={selectedBrand}
                onBrandFilterChange={handleBrandFilterChange}
              />
              <button onClick={Card.brand}>Search</button>
            </Card.Header>
          </div>
        </Card>
      </Container>
    </>
  );
};

export default SearchBar;
