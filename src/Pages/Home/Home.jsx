import React, { useEffect, useState } from "react";
import Navbar from "../Component/Navbar";
import Card from "../Component/Card";
import axios from "axios";

const Home = () => {
  const [books, setBooks] = useState([]);

  const fetchBook = async () => {
    const response = await axios.get("http://localhost:3000/book");
    if (response.status === 200) {
      setBooks(response.data.data);
    }
  };
  useEffect(() => {
    fetchBook();
  }, []);

  return (
    <>
      <Navbar />
      <div className="flex flex-wrap justify-evenly my-10">
        {books.length > 0 &&
          books.map((book) => {
            return <Card book={book} key={book._id} />;
          })}
      </div>
    </>
  );
};

export default Home;
