import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import Model from "./pages/Model";
import Catalog from "./pages/Catalog";
import SinglePage from "./pages/SinglePage";

// import React, { useContext } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Create from "./pages/Create";
// import { Context } from "./context/Context";

function App() {
  // const { user } = useContext(Context);
  const { user } = true;
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* PAGES FOR GUEST */}
        <Route path="/register" element={user ? <Home /> : <Register />} />
        <Route path="/login" element={user ? <Home /> : <Login />} />
        {/* PAGES FOR USER */}
        <Route path="/model" element={user ? <Model /> : <Model />} />
        <Route path="/create" element={user ? <Create /> : <Create />} />
        <Route path="/profile" element={user ? <Profile /> : <Profile />} />
        <Route path="/model/:id" element={user ? <SinglePage /> : <SinglePage />} />
        <Route path="/catalog" element={user ? <Catalog /> : <Catalog />} />
        <Route path="/logout" element={user ? <Home /> : <Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
