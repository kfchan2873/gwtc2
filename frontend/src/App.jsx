// src/App.jsx
import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout.jsx";

import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Membership from "./pages/Membership.jsx";
import Coaching from "./pages/Coaching.jsx";
import CompetitionsSocial from "./pages/CompetitionsSocial.jsx";
import NewsEvents from "./pages/NewsEvents.jsx";
import Gallery from "./pages/Gallery.jsx";
import Contact from "./pages/Contact.jsx";
import Location from "./pages/Location.jsx";
import RulesPolicies from "./pages/RulesPolicies.jsx";
import './App.css';

import Committee from "./pages/Committee";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/membership" element={<Membership />} />
        <Route path="/coaching" element={<Coaching />} />
        <Route path="/competitions-social" element={<CompetitionsSocial />} />
        <Route path="/news-events" element={<NewsEvents />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/location" element={<Location />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/rules-policies" element={<RulesPolicies />} />
        <Route path="/" element={<Home />} />
        <Route path="/committee" element={<Committee />} />
      </Routes>
    </Layout>
  );
}

export default App;
