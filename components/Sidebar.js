// components/Sidebar.js
import React from 'react';
import Link from 'next/link';

const Sidebar = () => {
  return (
    <div className="fixed inset-y-0 left-0 w-64 bg-gray-800 text-white flex flex-col">
      <div className="text-2xl font-bold p-4">
        Shop Admin Dashboard
      </div>
      <nav className="flex-grow">
        <ul>
          <li className="p-4">
            <Link href="/products">
              Products
            </Link>
          </li>
          <li className="p-4">
            <Link href="/categories">
              Categories
            </Link>
          </li>
          <li className="p-4">
            <Link href="/orders">
              Orders
            </Link>
          </li>
          <li className="p-4">
            <Link href="/users">
              Users
            </Link>
          </li>
          <li className="p-4">
            <Link href="/add-user">
              Add User
            </Link>
          </li>
          <li className="p-4">
            <Link href="/change-banner">
              Change Banner
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
