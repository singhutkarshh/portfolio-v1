import React from 'react'
import "../stylesheets/style.css";
const About = () => {
    return (
        <article className="about fade-in" id="about">
            <div className="aboutInfo">
                <h1>01.  <span className="topic"> About Me</span></h1>
                <p>Hello! My name is <span style={{color:"var(--green)"}}>Utkarsh</span> and I enjoy creating things that live on the internet. My interest in web development started back in jan 2020 when I decided to try editing custom Tumblr themes — turns out hacking together a custom reblog button taught me a lot about HTML & CSS!</p>
                <p>Fast-forward to today, I am a full time student in <span style={{color:"var(--green)"}} >Indian Institute of Information Technology , Jabalpur</span></p>
                <p>Here are a few technologies I've been working with recently:</p>
            </div>
           
            <img src="./static/my.jpeg" loading="lazy" alt="img" className="aboutImg"></img>
            <div className="imgCon"></div>
        </article>
    )
}

export default About;
