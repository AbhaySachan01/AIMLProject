import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import HomePage from "./Components/HomePage/HomePage";
import Signup from "./Components/Signup";
import Login from "./Components/Login";
import ErrorPage from "./Components/ErrorPage";
import AboutUs from "./Components/AboutUs";
import Navbar from "./Components/Navbar/Navbar";  // ✅ Navbar ka import

function App() {
  return (
    <Router>
      <Navbar />  {/* ✅ Har page pe dikhane ke liye */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/error" element={<ErrorPage />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="*" element={<Navigate to="/error" />} />
      </Routes>
    </Router>
  );
}

export default App;
