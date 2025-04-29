import { create } from 'zustand';
import axios from 'axios';

export interface CartItem {
  itemId: {
    _id: string;
    name: string;
    price: number;
    image?: string;
  };
  quantity: number;
}

interface CartState {
  items: CartItem[];
  userId: string;
  fetchCart: (userId: string) => Promise<void>;
  addToCart: (userId: string, item: CartItem) => Promise<void>;
  updateItem: (userId: string, itemId: string, quantity: number) => Promise<void>;
  removeItem: (userId: string, itemId: string) => Promise<void>;
  clearCart: (userId: string) => Promise<void>;
  checkout: (userId: string) => Promise<void>;
}

export const useCartStore = create<CartState>((set) => ({
  items: [],
  userId: '', 

  fetchCart: async (userId) => {
    const res = await axios.get(`/api/cart/${userId}`);
    set({ items: res.data.items });
  },

  addToCart: async (userId, item) => {
    await axios.post('/api/cart/add', { 
      userId, 
      itemId: item.itemId._id, 
      quantity: item.quantity,
      name: item.itemId.name, 
      price: item.itemId.price 
    });
    await useCartStore.getState().fetchCart(userId);
  },
  

  updateItem: async (userId, itemId, quantity) => {
    await axios.put('/api/cart/update', { userId, itemId, quantity });
    
    await useCartStore.getState().fetchCart(userId);
  },

  removeItem: async (userId, itemId) => {
    await axios.delete('/api/cart/remove', { data: { userId, itemId } });
    
    await useCartStore.getState().fetchCart(userId);
  },

  clearCart: async (userId) => {
    await axios.delete('/api/cart/clear', { data: { userId } });
    
    await useCartStore.getState().fetchCart(userId);
  },

  checkout: async (userId) => {
    await axios.post(`/api/cart/checkout/${userId}`);
    await useCartStore.getState().fetchCart(userId);
  }
}));
