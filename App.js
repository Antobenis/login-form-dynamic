import React, { Suspense, lazy } from 'react'
import { Routes, Route } from 'react-router-dom'
import ForgotPassword from 'views/app/Forgotpassword';
import Login from 'views/app/Login';
import Dashboard from 'views/auth/dashboard';
import MemberList from 'views/auth/members/list';
import MemberView from 'views/auth/members/view';
import './index.css';

const AppLayout = lazy(() => import('layouts/appLayout'));
const AuthLayout = lazy(() => import('layouts/authLayout'));

function App() {
  return (
    <Suspense>
      <Routes>
        <Route element={<AppLayout />}>
          <Route exact path='/' element={<Login />}></Route>
          <Route path='/login' element={<Login />}></Route>
          <Route path='/forgot-password' element={<ForgotPassword />}></Route>
        </Route>
        <Route path="/admin" element={<AuthLayout />}>
          <Route exact path='/admin/' element={<Dashboard />}></Route>
          <Route path='/admin/dashboard' element={<Dashboard />}></Route>
          <Route path='/admin/members' element={<MemberList />}></Route>
          <Route path='/admin/members/view' element={<MemberView />}></Route>
        </Route>
      </Routes>
    </Suspense>
  );
}

export default App
