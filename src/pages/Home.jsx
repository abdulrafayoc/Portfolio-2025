import React from "react";
import "./Home.css";
import Nav from "../components/Nav.jsx";
import Hero from "../components/Hero.jsx";
import MyServices from "../components/MyServices.jsx";
import Cases from "../components/Cases.jsx";
import Quote from "../components/Quote.jsx";
import Footer from "../components/Footer.jsx";

const Home = () => {
  return (
    <div className="home-container">
      <Nav />
      <Hero />
      <MyServices />
      <Cases />
      <div className="relative">
      <Quote />
      <Footer />
      </div>
    </div>
  );
};

export default Home;
