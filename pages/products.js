// pages/Products.js
import { useState, useEffect } from 'react';
import { fetchProducts, uploadProduct, removeProduct } from '../utils/fetchMethods';
// import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import ProductList from '../components/ProductList';

const dummyProducts = [
  { id: 1, name: 'Product 1', price: '$10' },
  { id: 2, name: 'Product 2', price: '$20' },
  { id: 3, name: 'Product 3', price: '$30' },
];

export default function Products() {
  const [products, setProducts] = useState(dummyProducts);

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

  const handleUploadProduct = async (productData) => {
    try {
      const newProduct = await uploadProduct(productData);
      setProducts([...products, newProduct]);
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
        {/* <Navbar /> */}
        <main className="mt-4 mx-auto max-w-7xl">
          <h2 className="text-2xl font-bold mb-4">Products</h2>
          <div className="bg-white shadow-md rounded-lg p-4">
            <ProductList products={products} onRemoveProduct={handleRemoveProduct} />
          </div>
        </main>
      </div>
    </div>
  );
}
