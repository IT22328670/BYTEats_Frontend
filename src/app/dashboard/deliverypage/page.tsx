'use client';

import { JSX, useState } from 'react';
import React from 'react';
import Link from 'next/link';
import { Menu, User, Utensils, ListOrdered, Settings } from 'lucide-react';

export default function DeliveryPage() {
  const [open, setOpen] = useState(true);
  const [active, setActive] = useState<string>('Pending Deliveries');

  const menuItems = [
    { label: 'Pending Deliveries', icon: <User size={20} />, href: '/deliveries/pending' },
    { label: 'Accept/Reject Order', icon: <Utensils size={20} />, href: '/deliveries/reject' },
    { label: 'Accepted Deliveries', icon: <ListOrdered size={20} />, href: '/deliveries/accept' },
    { label: 'Order Details View', icon: <ListOrdered size={20} />, href: '/deliveries/details' },
    { label: 'Mark as Delivered', icon: <ListOrdered size={20} />, href: '/deliveries/delivered' },
    { label: 'Profile', icon: <Settings size={20} />, href: '/deliveries/profile' },
  ];

  return (
    <div className={`flex flex-col justify-between ${open ? 'w-64' : 'w-20'} duration-300 bg-gray-900 min-h-screen p-4 relative`}>
      
      {/* Toggle Button */}
      <Menu
        className="text-white absolute top-6 right-3 cursor-pointer"
        onClick={() => setOpen(!open)}
      />

      {/* Menu Section */}
      <div className="flex flex-col gap-8 mt-16">
        {open && <h1 className="text-white text-2xl font-bold">Delivery Dashboard</h1>}

        <div className="flex flex-col gap-6">
          {menuItems.map((item) => (
            <MenuItem
              key={item.label}
              icon={item.icon}
              label={item.label}
              href={item.href}
              open={open}
              active={active}
              setActive={setActive}
            />
          ))}
        </div>
      </div>

      {/* Profile Footer */}
      <div className="flex items-center gap-3 p-3 rounded-md bg-gray-800 hover:bg-gray-700 cursor-pointer">
        <div className="w-10 h-10 rounded-full bg-green-500 flex items-center justify-center text-white font-bold">
          N
        </div>
        {open && (
          <div className="text-white">
            <h2 className="font-semibold text-sm">Delivery Person</h2>
            <p className="text-xs text-gray-400">Admin Panel</p>
          </div>
        )}
      </div>

    </div>
  );
}

interface MenuItemProps {
  icon: JSX.Element;
  label: string;
  href: string;
  open: boolean;
  active: string;
  setActive: (label: string) => void;
}

function MenuItem({ icon, label, href, open, active, setActive }: MenuItemProps) {
  return (
    <Link href={href} passHref>
      <div
        onClick={() => setActive(label)}
        className={`relative group flex items-center gap-3 p-2 rounded-md cursor-pointer
        ${active === label ? 'bg-gray-700 text-white' : 'text-gray-300 hover:bg-gray-800'} text-sm`}
      >
        {icon}
        {open && <span className="whitespace-nowrap">{label}</span>}

        {/* Tooltip when collapsed */}
        {!open && (
          <span className="absolute left-16 bg-black text-white text-xs rounded-md px-2 py-1 scale-0 group-hover:scale-100 origin-left duration-300">
            {label}
          </span>
        )}
      </div>
    </Link>
  );
}
