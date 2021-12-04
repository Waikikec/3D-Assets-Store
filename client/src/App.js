import React from 'react';
import { useSelector } from 'react-redux';

import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import Catalog from "./pages/Catalog";
import SinglePage from "./pages/SinglePage";
import Create from "./pages/Create";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const user = useSelector(state => state.user.currentUser);
  console.log(user);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* PAGES FOR GUEST */}
        <Route path="/register" element={user ? <Home /> : <Register />} />
        <Route path="/login" element={user ? <Home /> : <Login />} />
        {/* PAGES FOR USER */}
        <Route path="/create" element={user ? <Create /> : <Home />} />
        <Route path="/profile/:id" element={user ? <Profile /> : <Home />} />
        <Route path="/details/:id" element={user ? <SinglePage /> : <SinglePage />} />
        <Route path="/edit/:id" element={user ? <SinglePage /> : <SinglePage />} />
        <Route path="/catalog" element={user ? <Catalog /> : <Catalog />} />
        <Route path="/logout" element={user ? <Home /> : <Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
