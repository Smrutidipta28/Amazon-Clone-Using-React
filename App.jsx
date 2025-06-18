import React from "react";
import "./App.css";
import Products from "./component/products";
import Carts from "./component/cart"
import { House, ShoppingBasket, BookType, Contact } from "lucide-react";

function App() {
  return (
    <>
      <div className="w-screen h-screen bg-blue-400 flex-col overflow-x-hidden stop-overflow">
        {/* Navbar */}
        <nav className="bg-gray-600 h-16 flex items-center px-6 justify-between shadow-lg overflow-x-hidden stop-overflow">
          <ul className="flex gap-6 text-gray-200 font-semibold text-lg">
            <li className="flex items-center gap-2 cursor-pointer hover:text-amber-200 duration-300">
              <House className="text-amber-600" />
              Home
            </li>
            <li className="flex items-center gap-2 cursor-pointer hover:text-amber-200 duration-300">
              <ShoppingBasket className="text-amber-600" />
              Products
            </li>
            <li className="flex items-center gap-2 cursor-pointer hover:text-amber-200 duration-300">
              <BookType className="text-amber-600" />
              About
            </li>
            <li className="flex items-center gap-2 cursor-pointer  hover:text-amber-200 duration-300">
              <Contact className="text-amber-600" />
              Contact
            </li>
          </ul>

          {/* Buttons */}
          <div className="flex gap-4">
            <button className="border border-gray-500 px-5 py-2 rounded-lg shadow-md bg-gray-100 text-gray-800 
                     hover:bg-amber-300 hover:text-white hover:scale-95 hover:shadow-lg duration-300">
              Login
            </button>
            <button className="border border-gray-500 px-5 py-2 rounded-lg shadow-md bg-gray-100 text-gray-800 
                     hover:bg-amber-300 hover:text-white hover:scale-95 hover:shadow-lg duration-300">
              Sign Up
            </button>
          </div>
        </nav>

        {/* Main Content */}
        <main className="flex-grow flex items-center justify-center bg-blue-400 overflow-x-hidden stop-overflow">
          <Products />
          <cart/>
        </main>
      </div>
    </>
  );
}

export default App;