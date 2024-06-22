// pages/Categories.js
import { useState, useEffect } from 'react';
import { fetchCategories, uploadCategory, removeCategory } from '../utils/fetchMethods';
import Sidebar from '../components/Sidebar';
import CategoryList from '../components/CategoryList';

const dummyCategories = [
  { id: 1, name: 'Category 1', imageUrl: 'category1.jpg' },
  { id: 2, name: 'Category 2', imageUrl: 'category2.jpg' },
  { id: 3, name: 'Category 3', imageUrl: 'category3.jpg' },
];

export default function Categories() {
  const [categories, setCategories] = useState(dummyCategories);
  const [newCategoryName, setNewCategoryName] = useState('');
  const [newCategoryImage, setNewCategoryImage] = useState(null);

  useEffect(() => {
    const loadCategories = async () => {
      try {
        const categoriesData = await fetchCategories();
        setCategories(categoriesData);
      } catch (error) {
        console.error('Failed to load categories:', error);
      }
    };

    loadCategories();
  }, []);

  const handleUploadCategory = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append('name', newCategoryName);
      formData.append('image', newCategoryImage);

      const newCategory = await uploadCategory(formData);
      setCategories([...categories, newCategory]);
      setNewCategoryName('');
      setNewCategoryImage(null);
    } catch (error) {
      console.error('Failed to upload category:', error);
    }
  };

  const handleRemoveCategory = async (categoryId) => {
    try {
      await removeCategory(categoryId);
      setCategories(categories.filter((category) => category.id !== categoryId));
    } catch (error) {
      console.error('Failed to remove category:', error);
    }
  };

  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-grow p-6 bg-gray-100 ml-64">
        <main className="mt-4 mx-auto max-w-7xl">
          <h2 className="text-2xl font-bold mb-4">Categories</h2>
          <div className="bg-white shadow-md rounded-lg p-4 mb-4">
            <CategoryList categories={categories} onRemoveCategory={handleRemoveCategory} />
          </div>
          <form onSubmit={handleUploadCategory} className="bg-white shadow-md rounded-lg p-4">
            <h3 className="text-xl font-bold mb-4">Add New Category</h3>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                Category Name
              </label>
              <input
                type="text"
                id="name"
                value={newCategoryName}
                onChange={(e) => setNewCategoryName(e.target.value)}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="image">
                Category Image
              </label>
              <input
                type="file"
                id="image"
                onChange={(e) => setNewCategoryImage(e.target.files[0])}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                required
              />
            </div>
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Add Category
            </button>
          </form>
        </main>
      </div>
    </div>
  );
}
