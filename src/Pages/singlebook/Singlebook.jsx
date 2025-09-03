import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import Navbar from "../component/Navbar";

const SingleBook = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [book, setBook] = useState({});

  const fetchBook = async () => {
    try {
      const response = await axios.get(`http://localhost:3000/book/${id}`);
      if (response.status === 200) {
        setBook(response.data.data);
      }
    } catch (error) {
      console.error("Error fetching book:", error);
    }
  };

  const handleDelete = async () => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this book?"
    );
    if (!confirmDelete) return;

    try {
      const response = await axios.delete(`http://localhost:3000/book/${id}`);
      if (response.status === 200) {
        alert("Book deleted successfully");
        navigate("/"); // redirect to homepage
      }
    } catch (error) {
      console.error("Error deleting book:", error);
      alert("Something went wrong while deleting the book");
    }
  };

  useEffect(() => {
    fetchBook();
  }, []);

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gray-50 flex justify-center items-center px-6 py-10">
        <div className="grid md:grid-cols-2 gap-10 max-w-5xl w-full bg-white rounded-2xl shadow-xl p-8">
          <div className="flex justify-center items-center">
            <img
              className="w-full h-auto max-h-[500px] object-contain rounded-xl shadow-md"
              src={
                book.imageUrl
                  ? book.imageUrl
                  : "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f"
              }
              alt={book.bookName || "Book"}
            />
          </div>

          <div className="flex flex-col justify-center">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">
              {book.bookName}
            </h1>
            <p className="text-lg text-gray-700 mb-2">
              <span className="font-semibold">Author:</span> {book.authorName}
            </p>
            <p className="text-lg text-gray-700 mb-2">
              <span className="font-semibold">ISBN:</span> {book.isbnNumber}
            </p>
            <p className="text-lg text-gray-700 mb-2">
              <span className="font-semibold">Price:</span> Rs. {book.bookPrice}
            </p>
            <p className="text-lg text-gray-700 mb-2">
              <span className="font-semibold">Publication:</span>{" "}
              {book.publication}
            </p>
            <p className="text-lg text-gray-700 mb-6">
              <span className="font-semibold">Published At:</span>{" "}
              {book.publishedAt
                ? new Date(book.publishedAt).toLocaleDateString()
                : "N/A"}
            </p>

            <div className="flex gap-4">
              <Link to={`/editBook/${book._id}`}>
                <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg shadow-md transition duration-200">
                  Edit
                </button>
              </Link>
              <button
                onClick={handleDelete}
                className="px-6 py-3 bg-red-600 hover:bg-red-700 text-white rounded-lg shadow-md transition duration-200"
              >
                Delete
              </button>
              <button className="px-6 py-3 bg-gray-600 hover:bg-black  text-white rounded-lg shadow-md transition duration-200">
                BUY
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleBook;
