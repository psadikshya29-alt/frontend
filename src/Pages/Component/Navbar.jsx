import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-white border-gray-200 py-2.5 dark:bg-gray-900">
      <div className="flex flex-wrap items-center justify-between max-w-screen-xl px-4 mx-auto">
        <a href="/" className="flex items-center">
          <img
            src="https://www.svgrepo.com/show/499962/music.svg"
            className="h-6 mr-3 sm:h-9"
            alt=""
          />
          <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
            BookLibrary
          </span>
        </a>
        <div className="flex items-center lg:order-2">
          <div className="hidden mt-2 mr-4 sm:inline-block">
            <span />
          </div>

          <Link to="/addBook">
            <button
              type="button"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Add Book
            </button>
          </Link>
        </div>
        <div
          className="items-center justify-between w-full lg:flex lg:w-auto lg:order-1"
          id="mobile-menu-2"
        ></div>
      </div>
    </nav>
  );
};

export default Navbar;
