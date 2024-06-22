// components/ProductList.js
import React from 'react';

const ProductList = ({ products, onRemoveProduct }) => {
  return (
    <div className="mt-4">
      <table className="min-w-full bg-white">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b-2 border-gray-300">ID</th>
            <th className="py-2 px-4 border-b-2 border-gray-300">Name</th>
            <th className="py-2 px-4 border-b-2 border-gray-300">Price</th>
            <th className="py-2 px-4 border-b-2 border-gray-300">Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td className="py-2 px-4 border-b border-gray-300">{product.id}</td>
              <td className="py-2 px-4 border-b border-gray-300">{product.name}</td>
              <td className="py-2 px-4 border-b border-gray-300">{product.price}</td>
              <td className="py-2 px-4 border-b border-gray-300">
                <button
                  className="text-red-500 hover:text-red-700"
                  onClick={() => onRemoveProduct(product.id)}
                >
                  Remove
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductList;
