import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Home from "./Pages/Home/Home";
import Contact from "./Pages/Contact/Contact";
import FeaturedWork from "./Pages/FeaturedWork/FeaturedWork";
import Footer from "./components/footer/Footer";
export default function App() {
  return (
    <>
          <header>
            <Navbar />
          </header>
           <main>
            <Home/>
            <FeaturedWork/>
            <Contact/>
           </main>
          <Footer />
    </>
  );
}
