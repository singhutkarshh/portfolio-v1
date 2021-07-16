import React from "react";
import './App.css';
import About from "./components/about";
import Contact from "./components/contact";
import FeaturedProjects from "./components/featuredProjects";
import Intro from './components/intro';
import LoadingPage from "./components/loadingPage";
import Navbar from './components/navbar';

function App() {
  const  [loading,setLoading] = React.useState(true);
  React.useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, [])
  return (
    <div className="App">
      {loading ? <LoadingPage/> : (
        <>
      <Navbar/>
      <div className="content">
        <div className="left">
          <div className="mail">
           <p><a href="mailto:singh.utkarshofficial@gmail.com">singh.utkarshofficial@gmail.com</a></p>
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
          <a href="https://github.com/singhutkarshh/singhutkarshh"><i class="fab fa-github"></i></a>
          <a href="https://www.linkedin.com/in/singhutkarshh"><i class="fab fa-linkedin-in"></i></a>
          <a href="https://twitter.com/Utkarsh46678134?s=08"><i class="fab fa-twitter"></i></a>
          <a href="https://www.instagram.com/imutkarshh?r=nametag"><i class="fab fa-instagram"></i></a>
          </div>
        </div>
      </div>
      </>)}
    </div>
  );
}

export default App;