import React, { useState } from 'react';
import Link from 'next/link';
import { FaBars, FaTimes, FaBox, FaTags, FaClipboardList, FaUsers, FaUserPlus, FaImage } from 'react-icons/fa';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="md:hidden flex items-center justify-between p-4 bg-gray-800 text-white">
        <div className="text-2xl font-bold">Shop Admin Dashboard</div>
        <button onClick={toggleSidebar} className="text-2xl focus:outline-none">
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>
      <div
        className={`fixed inset-y-0 left-0 w-64 bg-gray-900 text-white flex flex-col transform ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } transition-transform duration-300 ease-in-out md:relative md:translate-x-0 z-20`}
      >
        <div className="text-2xl font-bold p-4 hidden md:block">
          Shop Admin Dashboard
        </div>
        <nav className="flex-grow">
          <ul>
            <li className="p-4 flex items-center">
              <FaBox className="mr-2" />
              <Link href="/products" legacyBehavior>
                <a onClick={toggleSidebar} className="hover:text-gray-400">Products</a>
              </Link>
            </li>
            <li className="p-4 flex items-center">
              <FaTags className="mr-2" />
              <Link href="/categories" legacyBehavior>
                <a onClick={toggleSidebar} className="hover:text-gray-400">Categories</a>
              </Link>
            </li>
            <li className="p-4 flex items-center">
              <FaClipboardList className="mr-2" />
              <Link href="/orders" legacyBehavior>
                <a onClick={toggleSidebar} className="hover:text-gray-400">Orders</a>
              </Link>
            </li>
            <li className="p-4 flex items-center">
              <FaUsers className="mr-2" />
              <Link href="/users" legacyBehavior>
                <a onClick={toggleSidebar} className="hover:text-gray-400">Users</a>
              </Link>
            </li>
            <li className="p-4 flex items-center">
              <FaUserPlus className="mr-2" />
              <Link href="/add-user" legacyBehavior>
                <a onClick={toggleSidebar} className="hover:text-gray-400">Add User</a>
              </Link>
            </li>
            <li className="p-4 flex items-center">
              <FaImage className="mr-2" />
              <Link href="/change-banner" legacyBehavior>
                <a onClick={toggleSidebar} className="hover:text-gray-400">Change Banner</a>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      {isOpen && (
        <div
          onClick={toggleSidebar}
          className="fixed inset-0 bg-black opacity-50 z-10 md:hidden"
        />
      )}
    </>
  );
};

export default Sidebar;
