import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Carousel from "./components/Carousel";
import Topcard from "./components/Topcard";
import About from "./components/About";
import Category from "./components/Category";
import Courses from "./components/Courses";
import Instructor from "./components/Instructor";
import Footer from "./components/Footer";
import Register from "./components/Register";
import Login from "./components/Login";

function App() {
  return (
    <Router>
      <Routes>
        {/* Homepage all sections visible by default */}
        <Route
          path="/"
          element={
            <>
              <Navbar />
              <Carousel />
              <Topcard />
              <About />
              <Category />
              <Courses />
              <Instructor />
              <Footer />
            </>
          }
        />

        {/* Login page */}
        <Route path="/login" element={<Login />} />

        {/* Register page */}
        <Route path="/register" element={<Register />} />
      </Routes>
    </Router>
  );
}

export default App;
