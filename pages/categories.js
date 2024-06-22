// pages/Categories.js
import { useState, useEffect } from 'react';
import { fetchCategories, uploadCategory, removeCategory } from '../utils/fetchMethods';
// import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import CategoryList from '../components/CategoryList';

const dummyCategories = [
  { id: 1, name: 'Category 1' },
  { id: 2, name: 'Category 2' },
  { id: 3, name: 'Category 3' },
];

export default function Categories() {
  const [categories, setCategories] = useState(dummyCategories);

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

  const handleUploadCategory = async (categoryData) => {
    try {
      const newCategory = await uploadCategory(categoryData);
      setCategories([...categories, newCategory]);
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
        {/* <Navbar /> */}
        <main className="mt-4 mx-auto max-w-7xl">
          <h2 className="text-2xl font-bold mb-4">Categories</h2>
          <div className="bg-white shadow-md rounded-lg p-4">
            <CategoryList categories={categories} onRemoveCategory={handleRemoveCategory} />
            {/* Add Category Form here with handleUploadCategory as onSubmit handler */}
          </div>
        </main>
      </div>
    </div>
  );
}
