'use client';

import React, { useEffect, useState } from 'react';

export default function DeliveryAcceptPage() {
    const [acceptedOrders, setAcceptedOrders] = useState([]);

    useEffect(() => {
      async function fetchAcceptedOrders() {
        const res = await fetch('/api/mock-accepted-orders');
        const data = await res.json();
        setAcceptedOrders(data);
      }
  
      fetchAcceptedOrders();
    }, []);
  
    return (
      <div className="p-6">
        <h1 className="text-2xl font-bold mb-4">Accepted Deliveries</h1>
        <ul className="space-y-4">
          {acceptedOrders.map((order: any) => (
            <li key={order._id} className="p-4 bg-white rounded-md shadow">
              <div className="flex justify-between">
                <span>{order.customerName}</span>
                <span>Total: ${order.totalPrice}</span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    );
  }