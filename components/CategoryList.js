// components/CategoryList.js
import React from 'react';

const CategoryList = ({ categories, onRemoveCategory }) => {
  return (
    <div className="mt-4">
      <table className="min-w-full bg-white border">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b-2 border-gray-300">ID</th>
            <th className="py-2 px-4 border-b-2 border-gray-300">Name</th>
            <th className="py-2 px-4 border-b-2 border-gray-300">Actions</th>
          </tr>
        </thead>
        <tbody>
          {categories.map((category) => (
            <tr key={category.id}>
              <td className="py-2 px-4 border-b border-gray-300 text-center">{category.id}</td>
              <td className="py-2 px-4 border-b border-gray-300">{category.name}</td>
              <td className="py-2 px-4 border-b border-gray-300 text-center">
                <button
                  className="text-red-500 hover:text-red-700"
                  onClick={() => onRemoveCategory(category.id)}
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

export default CategoryList;
