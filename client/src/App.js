import React from 'react';
import { useSelector } from 'react-redux';

import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import Catalog from "./pages/Catalog";
import Details from "./pages/Details";
import Favourites from "./pages/Favourites";
import Create from "./pages/Create";

import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

function App() {
  const user = useSelector((state) => state.user.currentUser);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* PAGES FOR GUEST */}
        <Route path="/register" element={user ? <Navigate to='/' /> : <Register />} />
        <Route path="/login" element={user ? <Navigate to='/' /> : <Login />} />
        <Route path="/catalog" element={<Catalog />} />
        <Route path="/catalog/:category" element={<Catalog />} />
        <Route path="/details/:id" element={<Details />} />
        {/* PAGES FOR USER */}
        <Route path="/create" element={user ? <Create /> : <Navigate to='/' />} />
        <Route path="/edit/:id" element={user ? <Details /> : <Details />} />
        <Route path="/profile/:id" element={user ? <Profile /> : <Navigate to='/' />} />
        <Route path="/favourites/:id" element={user ? <Favourites /> : <Navigate to='/' />} />
        <Route path="/logout" element={<Navigate to='/' />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
