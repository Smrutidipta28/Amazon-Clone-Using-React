import React from "react";

const Cards = ({ product, addToCart, buyNow }) => {
    const description = product.description.slice(0,20);
  return (
    <div className="border p-4 rounded-lg shadow-md text-center">
      <img src={product.image} alt={product.title} className="w-full h-40 object-cover" />
      <h3 className="text-lg font-semibold mt-2">{product.title}</h3>
      <h2 className="text-5m text-gray-600">{description}...</h2>
      <p className="text-gray-700">Price: ₹{product.price}</p>
      <div className="mt-4 flex gap-2 justify-center">
        <button
          className="bg-purple-700 text-white px-4 py-2 rounded-lg hover:bg-purple-700"
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
  );
};

export default Cards;