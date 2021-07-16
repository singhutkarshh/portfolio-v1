import React from 'react'

import "../stylesheets/featuredProjects.css";

const FeaturedProjects = () => {
    return (<>
        <article className="fproj" id="work">
             <h1>03. <span>  Some Things I've Built</span></h1>
            <div className="fprojcontainer">
                <img className="fimg1" src="https://drive.google.com/thumbnail?id=1AQB8WFRGVMe2vAzVNCU1_U-gvHMyOGK6" alt="pimg"></img>
            </div>
            <div className='fprjInfoContainer'>
                <p>
                    featured Project
                </p>
                <h1>GithubInfo</h1>
                <div>
                A nicer look at your GitHub profile and repository stats with data visualizations of 
                your top languages and stars.Pictoric representation of different stats using charts.
                </div>
                <ul>
                    <li>-React.js</li>
                    <li>-fusion charts</li>
                    <li>-Github Api</li>
                </ul>
            </div>
        </article>

        <article className="fproj3">
            <div className="fprojcontainer3">
                <img className="fimg1" src="https://drive.google.com/thumbnail?id=1u54wAaW2_tNShVlvLJo4yTMEdqYS7MT1" alt="pimg"></img>
            </div>
            <div className='fprjInfoContainer3'>
                <p>
                    featured Project
                </p>
                <h1>E-commerce</h1>
                <div>
                A full scale  e-commerce wesite built using react comes with cart , various filters on products and much  more.
                </div>
                <ul>
                    <li>-React.js</li>
                    <li>-E-commerce api</li>
                    <li>-Material UI</li>
                </ul>
            </div>
        </article>

        <article className="fproj2">
            <div className="fprojcontainer2">
                <img className="fimg1" src="https://drive.google.com/thumbnail?id=1h5T7tepr7LvhmtziuNXaJjtDH3gOJZ5m" alt="pimg"></img>
            </div>
            <div className='fprjInfoContainer2'>
                <p>
                    featured Project
                </p>
                <h1>Event Management App</h1>
                <div>
                An event reminder web app where you can login , enter and register for various events and are reminded about them through mail. 
                </div>
                <ul>
                    <li>-React.js</li>
                    <li>-Material UI</li>
                    <li>-Node JS</li>
                </ul>
            </div>
            </article>        
   </> )
}

export default FeaturedProjects;
