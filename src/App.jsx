import React from "react";
import Footer from "./components/Footer";
//import components
import Header from "./components/Header";
import Nav from "./components/Nav";
import { Routes, Route } from "react-router-dom";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import NoPage from "./pages/NoPage";
import BackTopBtn from "./components/BackTopBtn";

const App = () => {
  return (
    <div className="md:px-28 lg:px-40  xl:px-96 px-5 py-9 bg-gradient-to-r from-zinc-500 via-gray-400 to-slate-500 ">
      <Nav />
      <Routes>
        <Route path="/" element={<Header />} />
        <Route path="/about" element={<About />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/404page" element={<NoPage />} />
        <Route path="/*" element={<NoPage />} />
      </Routes>
      <Footer />
      <BackTopBtn />
    </div>
  );
};

export default App;
