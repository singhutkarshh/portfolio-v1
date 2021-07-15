import React from "react";
import './App.css';
import About from "./components/about";
import Contact from "./components/contact";
import FeaturedProjects from "./components/featuredProjects";
import Intro from './components/intro';
import Navbar from './components/navbar';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <div className="content">
        <div className="left">
          <div className="mail">
           <p><a href="#">singh.utkarshofficial@gmail.com</a></p>
          </div>
        </div>
        <div className="middle">
          <Intro/>
          <About/>
          <FeaturedProjects/>
          <Contact/>
        </div>
        <div className="right">
          <div className="socialLinks">
          <a href="#"><i class="fab fa-github"></i></a>
          <a href="#"><i class="fab fa-linkedin-in"></i></a>
          <a href="#"><i class="fab fa-twitter"></i></a>
          <a href="#"><i class="fab fa-instagram"></i></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
