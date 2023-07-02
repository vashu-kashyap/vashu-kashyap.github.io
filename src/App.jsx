import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Home from "./Pages/Home/Home";
import Contact from "./Pages/Contact/Contact";
import FeaturedWork from "./Pages/FeaturedWork/FeaturedWork";

export default function App() {
  return (
    <>
      <header>
        <Navbar />
        <Home />
      </header>
      <main>
        <FeaturedWork/>
        <Contact/>
      </main>
    </>
  );
}
