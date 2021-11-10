import NavBar from "./components/navbar/NavBar";
import Home from "./pages/home/Home";
import Register from "./pages/register/Register";
import Login from "./pages/login/Login";
import Profile from "./pages/profile/Profile";
import Model from "./pages/model/Model";
import Details from "./pages/details/Details";

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  const user = false;
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* PAGES FOR GUEST */}
        <Route path="/register" element={user ? <Home /> : <Register />} />
        <Route path="/login" element={user ? <Home /> : <Login />} />
        <Route path="/model" element={user ? <Model /> : <Register />} />
        {/* PAGES FOR USER */}
        <Route path="/profile" element={user ? <Profile /> : <Home />} />
        <Route path="/details/:id" element={user ? <Details /> : <Home />} />
      </Routes>
    </Router>
  );
}

export default App;
