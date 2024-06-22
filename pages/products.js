// pages/Products.js
import { useState, useEffect } from 'react';
import { fetchProducts, uploadProduct, removeProduct } from '../utils/fetchMethods';
import Sidebar from '../components/Sidebar';
import ProductList from '../components/ProductList';

const dummyProducts = [
  { id: 1, name: 'Product 1', price: { current: { value: '$10' } }, imageUrl: 'image1.jpg', rating: 4.5, brandName: 'Brand A' },
  { id: 2, name: 'Product 2', price: { current: { value: '$20' } }, imageUrl: 'image2.jpg', rating: 4.0, brandName: 'Brand B' },
  { id: 3, name: 'Product 3', price: { current: { value: '$30' } }, imageUrl: 'image3.jpg', rating: 3.5, brandName: 'Brand C' },
];

export default function Products() {
  const [products, setProducts] = useState(dummyProducts);
  const [newProductName, setNewProductName] = useState('');
  const [newProductPrice, setNewProductPrice] = useState('');
  const [newProductImage, setNewProductImage] = useState(null);
  const [newProductRating, setNewProductRating] = useState('');
  const [newProductBrand, setNewProductBrand] = useState('');

  useEffect(() => {
    const loadProducts = async () => {
      try {
        const productsData = await fetchProducts();
        setProducts(productsData);
      } catch (error) {
        console.error('Failed to load products:', error);
      }
    };

    loadProducts();
  }, []);

  const handleUploadProduct = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append('name', newProductName);
      formData.append('price', newProductPrice);
      formData.append('image', newProductImage);
      formData.append('rating', newProductRating);
      formData.append('brandName', newProductBrand);

      const newProduct = await uploadProduct(formData);
      setProducts([...products, newProduct]);
      setNewProductName('');
      setNewProductPrice('');
      setNewProductImage(null);
      setNewProductRating('');
      setNewProductBrand('');
    } catch (error) {
      console.error('Failed to upload product:', error);
    }
  };

  const handleRemoveProduct = async (productId) => {
    try {
      await removeProduct(productId);
      setProducts(products.filter((product) => product.id !== productId));
    } catch (error) {
      console.error('Failed to remove product:', error);
    }
  };

  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-grow p-6 bg-gray-100 ml-64">
        <main className="mt-4 mx-auto max-w-7xl">
          <h2 className="text-2xl font-bold mb-4">Products</h2>
          <div className="bg-white shadow-md rounded-lg p-4 mb-4">
            <ProductList products={products} onRemoveProduct={handleRemoveProduct} />
          </div>
          <form onSubmit={handleUploadProduct} className="bg-white shadow-md rounded-lg p-4">
            <h3 className="text-xl font-bold mb-4">Add New Product</h3>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                Product Name
              </label>
              <input
                type="text"
                id="name"
                value={newProductName}
                onChange={(e) => setNewProductName(e.target.value)}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="price">
                Product Price
              </label>
              <input
                type="text"
                id="price"
                value={newProductPrice}
                onChange={(e) => setNewProductPrice(e.target.value)}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="image">
                Product Image
              </label>
              <input
                type="file"
                id="image"
                onChange={(e) => setNewProductImage(e.target.files[0])}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="rating">
                Product Rating
              </label>
              <input
                type="text"
                id="rating"
                value={newProductRating}
                onChange={(e) => setNewProductRating(e.target.value)}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="brand">
                Product Brand Name
              </label>
              <input
                type="text"
                id="brand"
                value={newProductBrand}
                onChange={(e) => setNewProductBrand(e.target.value)}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Add Product
            </button>
          </form>
        </main>
      </div>
    </div>
  );
}
