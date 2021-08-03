import React,{useEffect} from 'react'
import "../stylesheets/style.css";
import Aos from "aos";
import "aos/dist/aos.css";

const About = () => {

    useEffect(() => {
        Aos.init({duration:2000});
    }, [])

    return (
        <article className="about" id="about" >
            <div className="aboutInfo" data-aos="fade-right">
                <h1>01.  <span className="topic"> About Me</span></h1>
                <p>Hello! My name is <span style={{color:"var(--green)"}}>Utkarsh</span> and I enjoy creating things that live on the internet. My interest in web development started back in jan 2020 when I decided to try editing custom Tumblr themes — turns out hacking together a custom reblog button taught me a lot about HTML & CSS!</p>
                <p>Fast-forward to today, I am a full time student in <span style={{color:"var(--green)"}} >Indian Institute of Information Technology , Jabalpur</span></p>
                <p>Here are a few technologies I've been working with recently:</p>
            </div>
           
            <img src="./static/my.jpeg" loading="lazy" alt="img" className="aboutImg" data-aos="fade-left"></img>
            <div className="imgCon" data-aos="fade-left"></div>
        </article>
    )
}

export default About;
