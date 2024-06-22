// pages/Orders.js
import { useState, useEffect } from 'react';
import { fetchOrders } from '../utils/fetchMethods';
// import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import OrderList from '../components/OrderList';

const dummyOrders = [
  { id: 1, customer: 'Customer 1', total: '$100' },
  { id: 2, customer: 'Customer 2', total: '$200' },
  { id: 3, customer: 'Customer 3', total: '$300' },
];

export default function Orders() {
  const [orders, setOrders] = useState(dummyOrders);

  useEffect(() => {
    const loadOrders = async () => {
      try {
        const ordersData = await fetchOrders();
        setOrders(ordersData);
      } catch (error) {
        console.error('Failed to load orders:', error);
      }
    };

    loadOrders();
  }, []);

  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-grow p-6 bg-gray-100 ml-64">
        {/* <Navbar /> */}
        <main className="mt-4 mx-auto max-w-7xl">
          <h2 className="text-2xl font-bold mb-4">Orders</h2>
          <div className="bg-white shadow-md rounded-lg p-4">
            <OrderList orders={orders} />
          </div>
        </main>
      </div>
    </div>
  );
}
