import React, { createContext, useContext, useState, useEffect } from 'react';
import api from '../api/client';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(() => {
    try {
      return typeof window !== 'undefined' && window.localStorage ? window.localStorage.getItem('jit_token') : null;
    } catch (e) {
      return null;
    }
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const verifyUser = async () => {
      let storedToken = null;
      try {
        if (typeof window !== 'undefined' && window.localStorage) {
          storedToken = window.localStorage.getItem('jit_token');
        }
      } catch (e) {}

      if (!storedToken) {
        setLoading(false);
        return;
      }
      try {
        const res = await api.get('/auth/me');
        setUser(res.data.user);
      } catch (err) {
        console.warn('Session verification expired:', err.message);
        try {
          if (typeof window !== 'undefined' && window.localStorage) {
            window.localStorage.removeItem('jit_token');
          }
        } catch (e) {}
        setToken(null);
        setUser(null);
      } finally {
        setLoading(false);
      }
    };
    verifyUser();
  }, []);

  const login = async (email, password) => {
    const res = await api.post('/auth/login', { email, password });
    if (res.data.success) {
      try {
        if (typeof window !== 'undefined' && window.localStorage) {
          window.localStorage.setItem('jit_token', res.data.token);
        }
      } catch (e) {}
      setToken(res.data.token);
      setUser(res.data.user);
      return res.data;
    }
  };

  const logout = () => {
    try {
      if (typeof window !== 'undefined' && window.localStorage) {
        window.localStorage.removeItem('jit_token');
      }
    } catch (e) {}
    setToken(null);
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, token, isAuthenticated: !!user, loading, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
