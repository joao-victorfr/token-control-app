import React from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import Login from './pages/Logins';
import LoginProvider from './context/LoginProvider';
import HeaderProvider from './context/HeaderProvider';
import Home from './pages/Home';

const App: React.FC = () => {
  return (
    <LoginProvider>
        <HeaderProvider>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/home" element={<Home />} />
          </Routes>
        </HeaderProvider>
    </LoginProvider>
  );
};

export default App;
