import React from 'react'
import "../stylesheets/navbar.css";

const Navbar = () => {
    const ham = document.querySelector(".ham");
    const list = document.querySelector(".options");
    const btn = document.querySelector(".btn");
    const clickHandler =()=>{
        list.classList.toggle("options2");
        btn.classList.toggle("setBtn");
    }
    return (
        <article className="navbar">
            <div className="logo">
                <h1> U </h1>
            </div>
            <div className="ham" onClick={clickHandler}>
                <span></span>
                <span></span>
                <span></span>
            </div>
            <ol className="options ">
                <li><a className="about" href="#"> About</a></li>
                <li><a className="experience" href="#"> Experience</a></li>
                <li><a className="work" href="#"> Work</a></li>
                <li><a className="contact" href="#"> Contact</a></li>
                <button className="resumeBtn">Resume</button>
            </ol>
        </article>
    )
}

export default Navbar;
