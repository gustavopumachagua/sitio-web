import React from "react";
import Footer from "./components/Footer";
//import components
import Header from "./components/Header";
import Nav from "./components/Nav";
import { Routes, Route } from "react-router-dom";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import NoPage from "./pages/NoPage";

const App = () => {
  return (
    <div className="md:px-28 lg:px-40  xl:px-96 px-5 py-9 bg-gradient-to-r from-indigo-400 via-purple-500 to-pink-500">
      <Nav />
      <Routes>
        <Route index element={<Header />} />
        <Route path="/about" element={<About />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;