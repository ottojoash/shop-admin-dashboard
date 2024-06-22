// components/OrderList.js
import React from 'react';

const OrderList = ({ orders }) => {
  return (
    <div className="mt-4">
      <table className="min-w-full bg-white border">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b-2 border-gray-300">ID</th>
            <th className="py-2 px-4 border-b-2 border-gray-300">Customer</th>
            <th className="py-2 px-4 border-b-2 border-gray-300">Total</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <tr key={order.id}>
              <td className="py-2 px-4 border-b border-gray-300 text-center">{order.id}</td>
              <td className="py-2 px-4 border-b border-gray-300">{order.customer}</td>
              <td className="py-2 px-4 border-b border-gray-300 text-center">{order.total}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default OrderList;
