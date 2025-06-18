import axios from "axios";
import React, { useEffect, useState } from "react";
import Cards from "./cards";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    getProducts();
  }, []);

  async function getProducts() {
    try {
      const response = await axios.get("https://fakestoreapi.com/products");
      console.log(response.data);
      setProducts(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const buyNow = (product) => {
    alert(`Proceeding to checkout for ${product.title}`);
  };

  return (
    <div className="flex items-center h-full flex-col overflow-x-hidden">
      <h2 className="text-2xl font-bold mt-4">Products</h2>
      <div className="w-11/12 grid grid-cols-1 md:grid-cols-3 gap-4">
        {products.map((product, index) => (
          <Cards key={index} product={product} addToCart={addToCart} buyNow={buyNow} />
        ))}
      </div>

      {/* Cart Section */}
      {cart.length > 0 && (
        <div className="mt-6 p-4 border rounded-lg shadow-md bg-white w-11/12">
          <h2 className="text-xl font-bold">Cart Items</h2>
          {cart.map((item, index) => (
            <p key={index} className="text-gray-800">
              {item.title} - ₹{item.price}
            </p>
          ))}
        </div>
      )}
    </div>
  );
};

export default Products;