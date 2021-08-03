import React from 'react'
import "../stylesheets/techs.css";
import Aos from "aos";
import "aos/dist/aos.css";

const Techs = () => {

   React.useEffect(() => {
        Aos.init({duration:2000});
    }, [])
    return (
        <article className="techContainer" >
          <div className="cont1" data-aos="flip-left">
            <i class="fab fa-node" ></i> 
            <i class="fab fa-react"></i> 
            <i class="fab fa-vuejs"></i> 
            <i class="fab fa-js"></i> 
          </div>
          <div className="cont1" data-aos="flip-right">
            <i class="fas fa-database"></i> 
            <i class="fab fa-html5"></i> 
            <i class="fab fa-css3-alt"></i> 
           </div> 
        </article>
    )
}

export default Techs;
 