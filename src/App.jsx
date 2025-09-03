import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import SingleBook from "./Pages/singlebook/Singlebook";
import Addbook from "./Pages/addbook/Addbook";
import EditBook from "./Pages/editbook/EditBook";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/book/:id" element={<SingleBook />} />
        <Route path="/addBook" element={<Addbook />} />
        <Route path="/editBook/:id" element={<EditBook/>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
