'use client';

import React, { useState } from 'react';

export default function DeliveriesDeliveredPage() {
    const [orderId, setOrderId] = useState('');

    const markAsDelivered = async () => {
      console.log('Mark as delivered:', orderId);
      // TODO: Implement PATCH /api/orders/:orderId/delivered
    };
  
    return (
      <div className="p-6">
        <h1 className="text-2xl font-bold mb-4">Mark Order as Delivered</h1>
        <input
          type="text"
          value={orderId}
          onChange={(e) => setOrderId(e.target.value)}
          placeholder="Enter Order ID"
          className="border p-2 rounded-md mb-4 w-full"
        />
        <button onClick={markAsDelivered} className="bg-blue-500 text-white px-4 py-2 rounded-md">
          Mark Delivered
        </button>
      </div>
    );
  }
  