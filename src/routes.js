/* eslint-disable no-unused-vars */
import React, { useContext } from 'react';
import { Routes, Route, Navigate, Outlet } from 'react-router-dom';

import { Context } from './context/AuthContext';

import Home from './pages/Home';
import Home2 from './pages/Home2';
// import Loading from './Pages/Loading';

const useAuth=()=>{
  // const user=localStorage.getItem('user')
  // if(user){
  //   return true
  // } else {
  //   return false
  // }
  return false;
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
  console.log('index');
  return (
    <Routes>
      {console.log('rt')}
      <Route path="/" element={<Home />} />
      <Route path="/" element={<ProtectedRoutes/>}>
	          <Route path="/inhome" element={<Home2/>}></Route>
      </Route>
      {/* <ProtectedRoutes exact path="/" component={Home} /> */}
      {/* <ProtectedRoutes exact path="/login" component={Home} /> */}
    </Routes>
  );
}
