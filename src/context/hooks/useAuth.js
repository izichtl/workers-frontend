import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

// import axios from 'axios';
import api from '../../service/api';

export default function useAuth() {
  const [authenticated, setAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);
  const [authUser, setUser] = useState(false);
  const history = useNavigate();

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

    // const response = await api.get('/l');
    // const token = response.data;
    // console.log(token);

    localStorage.setItem('token', JSON.stringify(response.data));
    api.defaults.headers.Authorization = `Bearer ${response.data}`;
    setUser(JSON.parse(localStorage.getItem('token')));
    setAuthenticated(true);
    history.push('/clinic-select');
  }

  function handleLogout() {
    setAuthenticated(false);
    localStorage.removeItem('token');
    api.defaults.headers.Authorization = undefined;
    history.push('/login');
  }

  return {
    authenticated, loading, authUser, handleLogin, handleLogout,
  };
}