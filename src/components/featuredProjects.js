import React from 'react'

import "../stylesheets/featuredProjects.css";

const FeaturedProjects = () => {
    return (<>
        <article className="fproj">
             <h1>03. <span>  Some Things I've Built</span></h1>
            <div className="fprojcontainer">
                <img className="fimg1" src="./../static/github.png" alt="pimg"></img>
            </div>
            <div className='fprjInfoContainer'>
                <p>
                    featured Project
                </p>
                <h1>OctoProfile</h1>
                <div>
                A nicer look at your GitHub profile and repository stats with data visualizations of 
                your top languages and stars. Sort through your top repos by number of stars, forks, and size.
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
                <img className="fimg1" src="../static/event.png" alt="pimg"></img>
            </div>
            <div className='fprjInfoContainer3'>
                <p>
                    featured Project
                </p>
                <h1>OctoProfile</h1>
                <div>
                A nicer look at your GitHub profile and repository stats with data visualizations of 
                your top languages and stars. Sort through your top repos by number of stars, forks, and size.
                </div>
                <ul>
                    <li>-React.js</li>
                    <li>-fusion charts</li>
                    <li>-Github Api</li>
                </ul>
            </div>
        </article>

        <article className="fproj2">
            <div className="fprojcontainer2">
                <img className="fimg1" src="./../static/event.png" alt="pimg"></img>
            </div>
            <div className='fprjInfoContainer2'>
                <p>
                    featured Project
                </p>
                <h1>OctoProfile</h1>
                <div>
                A nicer look at your GitHub profile and repository stats with data visualizations of 
                your top languages and stars. Sort through your top repos by number of stars, forks, and size.
                </div>
                <ul>
                    <li>-React.js</li>
                    <li>-fusion charts</li>
                    <li>-Github Api</li>
                </ul>
            </div>
            </article>        
   </> )
}

export default FeaturedProjects;
