'use client';

import React, { useEffect, useState } from 'react';

export default function AcceptRejectPage() {
    const [orders, setOrders] = useState([]);

    useEffect(() => {
      async function fetchOrders() {
        const res = await fetch('/api/mock-pending-orders');
        const data = await res.json();
        setOrders(data);
      }
  
      fetchOrders();
    }, []);
  
    const acceptOrder = async (orderId: string) => {
      // TODO: Implement accept logic with real API
      console.log('Accepted Order', orderId);
    };
  
    const rejectOrder = async (orderId: string) => {
      // TODO: Implement reject logic
      console.log('Rejected Order', orderId);
    };
  
    return (
      <div className="p-6">
        <h1 className="text-2xl font-bold mb-4">Accept / Reject Orders</h1>
        {orders.map((order: any) => (
          <div key={order._id} className="flex justify-between items-center p-4 bg-white shadow rounded-md mb-4">
            <div>
              <p className="font-semibold">{order.customerName}</p>
              <p className="text-gray-500">Total: ${order.totalPrice}</p>
            </div>
            <div className="flex gap-3">
              <button onClick={() => acceptOrder(order._id)} className="bg-green-500 text-white px-4 py-2 rounded-md">Accept</button>
              <button onClick={() => rejectOrder(order._id)} className="bg-red-500 text-white px-4 py-2 rounded-md">Reject</button>
            </div>
          </div>
        ))}
      </div>
    );
  }