'use client';

import React, { useEffect, useState } from 'react';

export default function PendingDeliveriesPage() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    // TODO: Replace with real API endpoint
    async function fetchOrders() {
      const res = await fetch('/api/mock-pending-orders');
      const data = await res.json();
      setOrders(data);
    }

    fetchOrders();
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Pending Deliveries</h1>
      <table className="min-w-full bg-white rounded-md overflow-hidden">
        <thead className="bg-gray-800 text-white">
          <tr>
            <th className="p-3">Order ID</th>
            <th className="p-3">Customer</th>
            <th className="p-3">Total</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order: any) => (
            <tr key={order._id} className="text-center border-b">
              <td className="p-3">{order._id}</td>
              <td className="p-3">{order.customerName}</td>
              <td className="p-3">${order.totalPrice}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
