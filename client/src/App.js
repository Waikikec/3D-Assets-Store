import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import Model from "./pages/Model";
import Details from "./pages/Details";

// import React, { useContext } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
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
        <Route path="/model" element={user ? <Model /> : <Register />} />
        <Route path="/profile" element={user ? <Profile /> : <Home />} />
        <Route path="/details/:id" element={user ? <Details /> : <Home />} />
        <Route path="/logout" element={user ? <Home /> : <Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
