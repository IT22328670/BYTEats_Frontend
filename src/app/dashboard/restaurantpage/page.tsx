'use client';

import { JSX, useState } from 'react';
import React from 'react';
import { Menu, User, Utensils, ListOrdered, Settings } from 'lucide-react';

export default function RestaurantSidebar() {
  const [open, setOpen] = useState(true);

  return (
    <div className={`flex flex-col justify-between ${open ? 'w-64' : 'w-20'} duration-300 bg-gray-900 min-h-screen p-4 relative`}>
      
      {/* Toggle Button */}
      <Menu
        className="text-white absolute top-6 right-3 cursor-pointer"
        onClick={() => setOpen(!open)}
      />

      {/* Menu Section */}
      <div className="flex flex-col gap-8 mt-16">
        {open && <h1 className="text-white text-2xl font-bold">Restaurant Panel</h1>}

        <div className="flex flex-col gap-6">
          <MenuItem icon={<User size={20} />} label="Profile" open={open} />
          <MenuItem icon={<Utensils size={20} />} label="Menu" open={open} />
          <MenuItem icon={<ListOrdered size={20} />} label="Orders" open={open} />
          <MenuItem icon={<Settings size={20} />} label="Settings" open={open} />
        </div>
      </div>

      {/* Profile Footer */}
      <div className="flex items-center gap-3 p-3 rounded-md bg-gray-800 hover:bg-gray-700 cursor-pointer">
        <div className="w-10 h-10 rounded-full bg-green-500 flex items-center justify-center text-white font-bold">
          N
        </div>
        {open && (
          <div className="text-white">
            <h2 className="font-semibold text-sm">Restaurant</h2>
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
  open: boolean;
}

function MenuItem({ icon, label, open }: MenuItemProps) {
  return (
    <div className="relative group flex items-center text-gray-300 text-sm gap-3 hover:bg-gray-800 p-2 rounded-md cursor-pointer">
      {icon}
      {open && <span className="whitespace-nowrap">{label}</span>}

      {/* Tooltip */}
      {!open && (
        <span className="absolute left-16 bg-black text-white text-xs rounded-md px-2 py-1 scale-0 group-hover:scale-100 origin-left duration-300">
          {label}
        </span>
      )}
    </div>
  );
}
