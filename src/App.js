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
    }, 3500);
  }, [])
const faders = document.querySelectorAll(".fade-in");

const appearOptions = {
  threshold: 0,
  rootMargin: "0px 0px -300px 0px",
};

const appearOnScroll = new IntersectionObserver(function (
  entries,
  appearOnScroll
) {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      return;
    } else {
      entry.target.classList.add("appear");
      appearOnScroll.unobserve(entry.target);
    }
  });
},
appearOptions);

faders.forEach((fader) => {
  appearOnScroll.observe(fader);
});

  return (
    <div className="App">
      {loading ? <LoadingPage/> : (
        <>
      <Navbar/>
      <div className="content">
        <div className="left">
          <div className="mail">
           <p><a href="mailto:singh.utkarshofficial@gmail.com">singh.utkarshofficial@gmail.com</a></p>
           <span></span>
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
          <span></span>
          </div>
         
        </div>
      </div>
      </>)}
    </div>
  );
}

export default App;