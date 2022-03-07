/* eslint-disable no-unused-vars */
import React, { useContext } from 'react';
import { Routes, Route, Navigate, Outlet } from 'react-router-dom';
import { Context } from './context/AuthContext';
import Home from './pages/Home';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Professional from './pages/Professional';
import Type from './pages/Type';
import SignUp from './pages/SignUp';
import CreateProfessional from './pages/CreateProfessional';
import CreateType from './pages/CreateType';
// import Loading from './Pages/Loading';

const ProtectedRoutes = (props) =>{
  const { loading, authenticated } = useContext(Context);
  if (loading || authenticated) return <Outlet/>;
  return <Navigate to="/login"/>
}

export default function RoutesIndex() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/cadastro" element={<SignUp />} />
      <Route path="/" element={<ProtectedRoutes/>}>
	          <Route path="/dashboard" element={<Dashboard/>}></Route>
	          <Route path="/professional/" element={<Professional/>}></Route>
	          <Route path="/professional/cadastro" element={<CreateProfessional/>}></Route>
	          <Route path="/categoria" element={<Type />}></Route>
	          <Route path="/categoria/cadastro" element={<CreateType/>}></Route>
      </Route>
    </Routes>
  );
}
