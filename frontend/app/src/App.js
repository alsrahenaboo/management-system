
import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './app.css';
import Login from "./Login";
import Signup from "./Signup";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          {/* <Route path="/" element={<Home />} /> */}
          <Route path="/Signup" element={<Signup />} />
          <Route path="/Login" element={<Login />} />
          
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
