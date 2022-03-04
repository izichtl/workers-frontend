import React, { createContext } from 'react';

import useAuth from './hooks/useAuth';

const Context = createContext();

function AuthProvider({ children }) {
  const {
    authenticated, loading, authUser, handleLogin, handleLogout,
  } = useAuth();

  return (
    <Context.Provider value={{
      loading, authenticated, authUser, handleLogin, handleLogout,
    }}
    >
      {children}
    </Context.Provider>
  );
}
export { Context, AuthProvider };
