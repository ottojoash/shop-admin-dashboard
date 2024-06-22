// components/OrderDetails.js
export default function OrderDetails({ order }) {
    return (
      <div>
        <h3 className="text-xl font-bold mb-4">Order Details</h3>
        <p><strong>Order ID:</strong> {order.id}</p>
        <p><strong>Customer Name:</strong> {order.customer.name}</p>
        <p><strong>Customer Phone:</strong> {order.customer.phoneNumber}</p>
        <p><strong>Total:</strong> {order.total}</p>
        <h4 className="text-lg font-bold mt-4">Items</h4>
        <ul>
          {order.items.map((item, index) => (
            <li key={index}>
              {item.name} x {item.quantity}
            </li>
          ))}
        </ul>
      </div>
    );
  }
  