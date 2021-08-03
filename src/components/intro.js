import React,{useEffect} from 'react'
import "../stylesheets/style.css";
import Aos from "aos";
import "aos/dist/aos.css";

const Intro = () => {
      useEffect(() => {
        Aos.init({duration:2000});
    }, [])
    return (
        <article className="intro"  data-aos="fade-up">
            <div className="introContainer">
            <p className="introName">Hi, my name is</p>
            <h1 className="introName2">Utkarsh Singh.</h1>
            <h1 className="introAbout">I build things for the web.</h1>
            <p className="introAbout2">I'm an aspiring software engineer. Currently,
                I'm focused on full stack development, devops
                and react native development. I also contibute in different
                opensource projects.
            </p>
            <a href="mailto:singh.utkarshofficial@gmail.com" ><button className=".introBtn">Get In Touch</button></a>
            </div>
        </article>
    )
}

export default Intro;
