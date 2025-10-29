import axios from 'axios';
import React, { useEffect, useState } from 'react'

const Product = () => {
   const [books, setBooks] = useState([]);

  const fetchBooks = async () => {
    try {
      const res = await axios.get("https://openlibrary.org/search.json?title=harry+potter");
      const booksWithExtras = res.data.docs.slice(0, 15).map((book) => ({
        id: book.key,
        title: book.title,
        author: book.author_name ? book.author_name[0] : "Unknown Author",
        image: book.cover_i
          ? `https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`
          : "https://via.placeholder.com/150",
        // Fake values for UI display
        price: (Math.random() * 500 + 100).toFixed(0), // ₹100–₹600
        rating: (Math.random() * 2 + 3).toFixed(1), // 3.0–5.0 stars
      }));

      setBooks(booksWithExtras);
    } catch (error) {
      console.error("Error fetching books:", error);
    }
  };

  useEffect(() => {
    fetchBooks();
  }, []);

  return (
    <div className="p-6 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {books.map((book) => (
        <div
          key={book.id}
          className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition"
        >
          <img
            src={book.image}
            alt={book.title}
            className="w-full h-64 object-cover rounded-md"
          />
          <h3 className="font-semibold text-lg mt-3">{book.title}</h3>
          <p className="text-gray-600 text-sm">{book.author}</p>
          <div className="flex justify-between items-center mt-2">
            <span className="text-blue-700 font-bold">₹{book.price}</span>
            <span className="text-yellow-500 text-sm">⭐ {book.rating}</span>
          </div>
        </div>
      ))}
    </div>
    )
}

export default Product