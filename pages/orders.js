// pages/Orders.js
import { useState, useEffect } from 'react';
import { fetchOrders } from '../utils/fetchMethods';
import Sidebar from '../components/Sidebar';
import OrderList from '../components/OrderList';
import OrderDetails from '../components/OrderDetails';

const dummyOrders = [
  {
    id: 1,
    customer: { id: 1, name: 'Customer 1', phoneNumber: '123-456-7890' },
    items: [{ name: 'Product 1', quantity: 2 }, { name: 'Product 2', quantity: 1 }],
    total: '$100',
  },
  {
    id: 2,
    customer: { id: 2, name: 'Customer 2', phoneNumber: '987-654-3210' },
    items: [{ name: 'Product 3', quantity: 1 }, { name: 'Product 4', quantity: 3 }],
    total: '$200',
  },
  {
    id: 3,
    customer: { id: 3, name: 'Customer 3', phoneNumber: '555-555-5555' },
    items: [{ name: 'Product 5', quantity: 1 }],
    total: '$300',
  },
];

export default function Orders() {
  const [orders, setOrders] = useState(dummyOrders);
  const [selectedOrder, setSelectedOrder] = useState(null);

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
        <main className="mt-4 mx-auto max-w-7xl">
          <h2 className="text-2xl font-bold mb-4">Orders</h2>
          <div className="bg-white shadow-md rounded-lg p-4 mb-4">
            <OrderList orders={orders} onSelectOrder={setSelectedOrder} />
          </div>
          {selectedOrder && (
            <div className="bg-white shadow-md rounded-lg p-4">
              <OrderDetails order={selectedOrder} />
            </div>
          )}
        </main>
      </div>
    </div>
  );
}
