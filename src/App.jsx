import React from "react";
import Footer from "./components/Footer";
//import components
import Header from "./components/Header";
import Nav from "./components/Nav";
import BackTopBtn from "./components/BackTopBtn";

const App = () => {
  return (
    <div className="md:px-28 lg:px-40  xl:px-96 px-5 py-9 bg-gradient-to-b">
      <Nav />
      <Header />
      <Footer />
      <BackTopBtn />
    </div>
  );
};

export default App;
