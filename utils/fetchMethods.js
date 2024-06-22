const BASE_URL = 'https://backendshop-5bmm.onrender.com/api';

// Utility function to make requests
const request = async (url, options = {}) => {
  const token = localStorage.getItem('token');
  const headers = {
    'Content-Type': 'application/json',
    ...(token && { Authorization: `Bearer ${token}` }),
  };

  const response = await fetch(`${BASE_URL}${url}`, {
    ...options,
    headers,
  });

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.message || 'Something went wrong');
  }

  return response.json();
};

// Products
export const fetchProducts = () => request('/products');

// export const uploadProduct = (productData) =>
//   request('/products', {
//     method: 'POST',
//     body: JSON.stringify(productData),
//   });

export const removeProduct = (productId) =>
  request(`/products/${productId}`, {
    method: 'DELETE',
  });

// Categories
export const fetchCategories = () => request('/categories');

// export const uploadCategory = (categoryData) =>
//   request('/categories', {
//     method: 'POST',
//     body: JSON.stringify(categoryData),
//   });

// utils/fetchMethods.js

export async function uploadCategory(formData) {
  try {
    const response = await fetch('/categories', {
      method: 'POST',
      body: formData,
    });

    if (!response.ok) {
      throw new Error('Failed to upload category');
    }

    return await response.json();
  } catch (error) {
    console.error(error);
    throw error;
  }
}


export const removeCategory = (categoryId) =>
  request(`/categories/${categoryId}`, {
    method: 'DELETE',
  });

// Orders
// export const fetchOrders = () => request('/orders');

// Users
export const fetchUsers = () => request('/users');

export const addUser = (userData) =>
  request('/users', {
    method: 'POST',
    body: JSON.stringify(userData),
  });

export const removeUser = (userId) =>
  request(`/users/${userId}`, {
    method: 'DELETE',
  });

// Banner
// export const changeBanner = (bannerData) =>
//   request('/banner', {
//     method: 'POST',
//     body: JSON.stringify(bannerData),
//   });

// utils/fetchMethods.js
export const changeBanner = async (bannerData) => {
  const response = await fetch('/change-banner', {
    method: 'POST',
    body: bannerData,
  });

  if (!response.ok) {
    throw new Error('Failed to change banner');
  }

  return response.json();
};

// utils/fetchMethods.js

export const  uploadProduct = async (formData) => {
  try {
    const response = await fetch('/Product', {
      method: 'POST',
      body: formData,
    });

    if (!response.ok) {
      throw new Error('Failed to upload product');
    }

    return await response.json();
  } catch (error) {
    console.error(error);
    throw error;
  }
}

// utils/fetchMethods.js

export const fetchOrders = async() => {
  try {
    const response = await fetch('/orders');
    if (!response.ok) {
      throw new Error('Failed to fetch orders');
    }
    return await response.json();
  } catch (error) {
    console.error(error);
    throw error;
  }
}
