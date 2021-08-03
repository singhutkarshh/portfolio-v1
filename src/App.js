import React from "react";
import './App.css';
import About from "./components/about";
import Contact from "./components/contact";
import FeaturedProjects from "./components/featuredProjects";
import Intro from './components/intro';
import LoadingPage from "./components/loadingPage";
import Navbar from './components/navbar';
import Techs from "./components/techs";

function App() {
  const  [loading,setLoading] = React.useState(true);
  React.useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3500);
  }, [])

  return (
    <div className="App">
      {loading ? <LoadingPage/> : (
        <>
      <Navbar/>
      <div className="content banner" >
        <div className="left">
          <div className="mail">
           <p><a href="mailto:singh.utkarshofficial@gmail.com">singh.utkarshofficial@gmail.com</a></p>
           <span></span>
          </div>
        </div>
        <div className="middle banner">
          <Intro/>
          <About/>
          <Techs/>
          <FeaturedProjects/>
          <Contact/>
        </div>
        <div className="right banner">
          <div className="socialLinks">
          <a href="https://github.com/singhutkarshh/singhutkarshh"><i class="fab fa-github"></i></a>
          <a href="https://www.linkedin.com/in/singhutkarshh"><i class="fab fa-linkedin-in"></i></a>
          <a href="https://twitter.com/Utkarsh46678134?s=08"><i class="fab fa-twitter"></i></a>
          <a href="https://www.instagram.com/imutkarshh?r=nametag"><i class="fab fa-instagram"></i></a>
          <span></span>
          </div>
         
        </div>
      </div>
      </>)}
    </div>
  );
}

export default App;