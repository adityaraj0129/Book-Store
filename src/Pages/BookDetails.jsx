import React, { useState } from 'react';
import BookCard from '../Component/BookCard';

const BookDetails = () => {
  const [search, setSearch] = useState("");
  const [ratingFilter, setRatingFilter] = useState(""); // ⭐ rating filter
  const [priceFilter, setPriceFilter] = useState("");   // 💰 price filter

  // Handle search input
  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  // Handle rating filter
  const handleRatingChange = (e) => {
    setRatingFilter(e.target.value);
  };

  // Handle price filter
  const handlePriceChange = (e) => {
    setPriceFilter(e.target.value);
  };

  return (
    <>
      <div className="flex flex-wrap justify-center items-center gap-4 p-4">
        <input
          type="text"
          placeholder="Search by Title or Author..."
          value={search}
          onChange={handleSearch}
          className="w-60 border rounded p-2 bg-transparent border-black"
        />

        <select
          value={ratingFilter}
          onChange={handleRatingChange}
          className="w-40 border rounded p-2 bg-transparent border-black"
        >
          <option value="">All Ratings</option>
          <option value="4">4⭐ & above</option>
          <option value="3">3⭐ & above</option>
          <option value="2">2⭐ & above</option>
        </select>

        <select
          value={priceFilter}
          onChange={handlePriceChange}
          className="w-40 border rounded p-2 bg-transparent border-black"
        >
          <option value="">All Prices</option>
          <option value="low">Low to High</option>
          <option value="high">High to Low</option>
        </select>
      </div>

      {/* Passing search, rating and price filters to BookCard */}
      <BookCard
        search={search}
        ratingFilter={ratingFilter}
        priceFilter={priceFilter}
      />
    </>
  );
};

export default BookDetails;
