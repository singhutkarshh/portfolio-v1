import React from 'react'
import "../stylesheets/style.css";
const About = () => {
    return (
        <article className="about" id="about">
            <div className="aboutInfo">
                <h1>01.  <span className="topic"> About Me</span><span className="line"></span></h1>
                <p>Hello! My name is Brittany and I enjoy creating things that live on the internet. My interest in web development started back in 2012 when I decided to try editing custom Tumblr themes — turns out hacking together a custom reblog button taught me a lot about HTML & CSS!</p>
                <p>Fast-forward to today, and I've had the privilege of working at an advertising agency, a start-up, a huge corporation, and a student-led design studio. My main focus these days is building accessible, inclusive products and digital experiences at Upstatement for a variety of clients.</p>
                <p>Here are a few technologies I've been working with recently:</p>
            </div>
           
            <img src="https://brittanychiang.com/static/30a645f7db6038f83287d0c6042d3b2b/f9526/me.avif" loading="lazy" alt="img" className="aboutImg"></img>
            <div className="imgCon"></div>
        </article>
    )
}

export default About;
