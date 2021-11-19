import NavBar from "./components/navbar/NavBar";
import Home from "./pages/home/Home";
import Register from "./pages/register/Register";
import Login from "./pages/login/Login";
import Profile from "./pages/profile/Profile";
import Model from "./pages/model/Model";
import Details from "./pages/details/Details";

import React, { useContext } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Context } from "./context/Context";

function App() {
  const { user } = useContext(Context);
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* PAGES FOR GUEST */}
        <Route path="/register" element={user ? <Home /> : <Register />} />
        <Route path="/login" element={user ? <Home /> : <Login />} />
        {/* PAGES FOR USER */}
        <Route path="/model" element={user ? <Model /> : <Register />} />
        <Route path="/profile" element={user ? <Profile /> : <Home />} />
        <Route path="/details/:id" element={user ? <Details /> : <Home />} />
        <Route path="/logout" element={user ? <Home /> : <Login />} />
      </Routes>
    </Router>
  );
}

export default App;
