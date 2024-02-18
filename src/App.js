import React from "react";
import About from "./UI/Layout/About";
import Courses from "./UI/Layout/Courses";
import Home from "./UI/Layout/Home";
import Profile from "./UI/Layout/Profile";
import Wholesale from "./UI/Layout/Wholesale";
import Invoice from "./UI/Layout/Invoice";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/wholesale" element={<Wholesale />} />
          <Route path="/invoice" element={<Invoice />} />
          <Route path="/about" element={<About />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/*" element={<h1>Not found</h1>} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;

