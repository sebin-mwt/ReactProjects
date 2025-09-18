import React from "react";
import image from '../assets/Images/about.jpg'
function About(){

    return(
        <>
        <div className="container about" id="about" >

        <div className="row">

        <div className="text-center">
        
          <h4 className="h3-color" >  <i className="fa-solid fa-angle-left fa-xs"></i>About Us<i className="fa-solid fa-angle-right fa-xs"></i> </h4>
                
        </div>

            <div className="col-lg-6 col-md-12 col-sm-12 col-12 mt-md-2 mt-sm-2 ">
                <img src={image} alt="no image"/>
            </div>

        <div className="col-lg-6 col-md-12 col-sm-12 col-12 mt-md-2 mt-sm-2 about-body">

           <h1 className="h1-color"> Welcome to ELearning</h1>

             <p  className="about-des">At ELEARN, we`re redefining education through technology. Our platform offers flexible, high-quality online 
              courses designed to help individuals and organizations learn, grow, and succeed—anytime, anywhere.
              Whether you're upskilling, reskilling, or exploring new interests, ELEARN is here to support your journey.</p>
           
           <button className="btn rounded-pill" type="submit">Read More <i className="fa-solid fa-arrow-right" style={{color: "rgb(52, 180, 180)"}}></i></button>

        </div>

      </div>

    </div> 
        </>
    )
}

export default About
