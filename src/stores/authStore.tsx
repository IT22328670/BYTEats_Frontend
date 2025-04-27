import { create } from 'zustand';
import axios from 'axios';

interface Restaurant {
  _id: string;
  email: string;
  password: string;
  role: string;
  // Include any other fields if needed
}

interface AuthState {
  user: Restaurant | null;
  token: string | null;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
}

const useAuthStore = create<AuthState>((set) => ({
  user: null,
  token: null,

  login: async (email: string, password: string) => {
    try {
      const res = await axios.post('http://localhost:5000/api/restaurant/login', {
        email,
        password,
      });

      const { user, token } = res.data;

      set({ user, token });
    } catch (err) {
      console.error('Login error:', err);
      throw err;
    }
  },

  logout: () => {
    set({ user: null, token: null });
  },
}));

export default useAuthStore;
