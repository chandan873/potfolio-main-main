import React from "react";
import { About, Footer, Header, Skills, Testimonial, Work,Blog,Whyus } from "./container";
import { Navbar } from "./components";

import "./App.css";
const App = () => {
  return (  
    <div className="app">
      <Navbar />
      <Header/>
      <Whyus/>
      <About />
      <Work />
      <Skills />
      <Blog/>
      {/* <Testimonial /> */}
      <Footer />

    </div>
    
  );
};

export default App;
