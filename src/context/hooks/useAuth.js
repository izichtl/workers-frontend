import { useState, useEffect } from 'react';

// import axios from 'axios';
import api from '../../service/api';

export default function useAuth() {
  const [authenticated, setAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);
  const [authUser, setUser] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('token');
    // PRECISA ATUALIZAR LÓGICA PARA BUSCAR EXATAMENTE O TOKEN
    if (token) {
      api.defaults.headers.Authorization = `Bearer ${JSON.parse(token)}`;
      setAuthenticated(true);
    }
    setUser(JSON.parse(localStorage.getItem('token')));
    setLoading(false);
  }, []);

  async function handleLogin(values) {
    const { email, password } = values;

    const response = await api.post('/login', {
      email,
      password,
    });

    localStorage.setItem('token', JSON.stringify(response.data));
    api.defaults.headers.Authorization = `Bearer ${response.data}`;
    setUser(JSON.parse(localStorage.getItem('token')));
    setAuthenticated(true);
  }

  function handleLogout() {
    setAuthenticated(false);
    localStorage.removeItem('token');
    api.defaults.headers.Authorization = undefined;
  }

  return {
    authenticated, loading, authUser, handleLogin, handleLogout,
  };
}
