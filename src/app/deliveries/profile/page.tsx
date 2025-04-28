'use client';

import React from 'react';

export default function DeliveryProfilePage() {
    return (
        <div className="p-6">
          <h1 className="text-2xl font-bold mb-4">Profile</h1>
          <div className="bg-white p-6 rounded-md shadow">
            <p><strong>Name:</strong> John Doe</p>
            <p><strong>Email:</strong> john@example.com</p>
            <p><strong>Phone:</strong> 0712345678</p>
            <p><strong>Vehicle Number:</strong> WP-1234</p>
            <p><strong>License:</strong> LIC98765</p>
          </div>
        </div>
      );
    }