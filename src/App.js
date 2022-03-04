/* eslint-disable no-unused-vars */
import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
// import { SnackbarProvider } from 'notistack';

// eslint-disable-next-line no-unused-vars
import { AuthProvider } from './context/AuthContext';
import GlobalStyles from './components/GlobalStyles';
import RoutesIndex from './routes';
// import Home from './pages/Home';
import './App.css';
console.log('app');
function App() {
  return (
    <BrowserRouter>
     <AuthProvider>
       {/* <SnackbarProvider> */}
         {/* <GlobalStyles /> */}
         {/* <Route path="/" element={<Home />} /> */}
         <RoutesIndex />
       {/* </SnackbarProvider> */}
     </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
