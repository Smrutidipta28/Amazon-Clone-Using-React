import React, { useState } from "react";

const Products = () => {
  const [cart, setCart] = useState([]);

  const products = [
    { id: 1, name: "Product A", price: 500 },
    { id: 2, name: "Product B", price: 750 },
    { id: 3, name: "Product C", price: 1200 },
  ];

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const buyNow = (product) => {
    alert(`Proceeding to checkout for ${product.name}`);
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Products</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {products.map((product) => (
          <div key={product.id} className="border p-4 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold">{product.name}</h3>
            <p className="text-gray-700">Price: ₹{product.price}</p>
            <div className="mt-4 flex gap-2">
              <button
                className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
                onClick={() => addToCart(product)}
              >
                Add to Cart
              </button>
              <button
                className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-700"
                onClick={() => buyNow(product)}
              >
                Buy Now
              </button>
            </div>
          </div>
        ))}
      </div>

      {cart.length > 0 && (
        <div className="mt-6 p-4 border rounded-lg shadow-md bg-white">
          <h2 className="text-xl font-bold">Cart Items:</h2>
          {cart.map((item, index) => (
            <p key={index} className="text-gray-800">
              {item.name} - ₹{item.price}
            </p>
          ))}
        </div>
      )}
    </div>
  );
};

export default Products;