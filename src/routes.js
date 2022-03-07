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

const useAuth=()=>{
  // const user=localStorage.getItem('user')
  // if(user){
  //   return true
  // } else {
  //   return false
  // }
  return true;
}
// import Dash from './pages/Dash';

const ProtectedRoutes = (props) =>{
	console.log('a')

  const auth=useAuth()


  return auth?<Outlet/>: <Navigate to="/login"/>
}

// function CustomRoute(props) {
//   const { component } = props;
//   // const { loading } = useContext(Context);
//   // const authenticated = false;
//   console.log('01')
  
//   // if (loading) {
//   //   console.log('02')
//   //   return <Home />;
//   // }

//   // if (isPrivate && !authenticated) {
//   //   return <Route path="*" element={<Navigate to="/login" />} />;
//   // }
//   console.log('03')
//   return <Route path="/" element={<component />} />;
// }

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
