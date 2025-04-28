'use client';

import React from 'react';

export default function DeliveryDetailsPage() {
    return (
        <div className="p-6">
            <h1 className="text-2xl font-bold mb-4">Order Details</h1>
            <div className="bg-white rounded-md p-6 shadow">
                <p className="font-semibold">Order ID: 6650c8f59a0d6b2c4f9b1256</p>
                <p className="mt-2">Customer: John Smith</p>
                <p className="mt-2">Items:</p>
                <ul className="list-disc ml-5">
                    <li>Chicken Burger x2</li>
                    <li>Veggie Wrap x1</li>
                </ul>
                <p className="mt-2 font-bold">Total: $1600</p>
            </div>
        </div>
    );

}
