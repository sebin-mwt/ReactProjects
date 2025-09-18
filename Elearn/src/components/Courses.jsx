import React from 'react';
import { Link } from 'react-router-dom';
import image1 from '../assets/Images/full-stack.png'
function Courses() {
  return (
    <>

    <div className="container course-details " id="course">

    <div className="text-center">

    <h4 className="h3-color" ><i className="fa-solid fa-angle-left fa-xs"></i>Courses<i className="fa-solid fa-angle-right fa-xs"></i> </h4>
    <h1 className="h1-color">All Courses</h1>

    </div>

    <div>
    
     {/* */}
       <div className="row mt-3"  >
    
     <div className="col-lg-3 col-md-6 col-sm-10 col-10 mt-md-2 mt-sm-2">
     
       <div className="card pop-up">
      <img src="https://images.unsplash.com/photo-1526379095098-d400fd0bf935" className="card-img-top" alt="no image"/>
     <div className="card-body">

     <h5 className="card-title">Python Full Stack</h5>
     <p className="text-muted mb-2"><i className="fa-solid fa-user" style={{color: "#4ccfe1"}}></i>John Doe</p>
    
    <p className="card-text">Full Stack involves building frontend and backend parts of web applications, using python, django, react and SQL.</p>
     <p>Duration: 6 months</p>
     <p>Price: $10</p>

    <div className="text-center">
     <Link to="/register" className="btn btn-outline-dark">Enroll Now</Link>
    </div>
     </div>
    </div>


     </div>

     <div className="col-lg-3 col-md-6 col-sm-10 col-10 mt-md-2 mt-sm-2">
     
     <div className="card pop-up">
   <img src="https://images.unsplash.com/photo-1542831371-29b0f74f9713" className="card-img-top" alt="no img."/>
    <div className="card-body">
    <h5 className="card-title">Java Full Stack</h5>
    <p className="text-muted mb-2"><i className="fa-solid fa-user" style={{color: "#4ccfe1"}}></i>Abhishek Manoj</p>
     <p className="card-text">Full Stack involves building frontend and backend parts of web applications,using java,sprongboot,react and SQL.</p>
     <p> Duration : 5 months</p>
     <p>Price: $12</p>
     <div className="text-center">
     <Link to="/register" className="btn btn-outline-dark">Enroll Now</Link>
     </div>

     </div>
     </div>
     
     </div>

    <div className="col-lg-3 col-md-6 col-sm-10 col-10 mt-md-2 mt-sm-2">
    
     <div className="card pop-up">
        <img src="https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2" className="card-img-top" alt="no img"/>
      <div className="card-body">
        <h5 className="card-title">MEARN Stack</h5>
        <p className="text-muted mb-2"><i className="fa-solid fa-user" style={{color: "#4ccfe1"}}></i>Rahul T R</p>
        <p className="card-text">Full Stack involves building frontend and backend parts of web applications,using javascript,angular and mongo.</p>
        <p> Duration : 6 months</p>
        <p>Price: $10</p>
        <div className="text-center">
        <Link to="/register" className="btn btn-outline-dark">Enroll Now</Link>
    </div>

    </div>
     </div>
     
     </div> 
  <div className="col-lg-3 col-md-6 col-sm-10 col-10 mt-md-2 mt-sm-2">
      <div className="card pop-up">
     <img src={image1} className="card-img-top" alt="no img"/>
     <div className="card-body">
     <h5 className="card-title">.NET Full Stack</h5>
     <p className="text-muted mb-2"><i className="fa-solid fa-user" style={{color: "#4ccfe1"}}></i>Ajay R</p>
     <p className="card-text">Full Stack involves building frontend and backend parts of web applications,using c#,larvel,react and SQL.</p>
    <p> Duration : 6 months</p>
     <p>Price: $10</p>
     <div className="text-center">
     <Link to="/register" className="btn btn-outline-dark">Enroll Now</Link>
     </div>

     </div>
     </div>
     
     </div>

     </div>
     
    
     <div className="row mt-3" >
     
     <div className="col-lg-3 col-md-6 col-sm-10 col-10 mt-md-2 mt-sm-2">
     
     <div className="card pop-up">
     <img src="https://images.unsplash.com/photo-1599507593548-0187ac4043c6" className="card-img-top" alt="no img"/>
     <div className="card-body">
     <h5 className="card-title">PHP</h5>
     <p className="text-muted mb-2"><i className="fa-solid fa-user" style={{color: "#4ccfe1"}}></i>Yedhu K</p>
    <p className="card-text">PHP is a server-side scripting language used to build dynamic and interactive web applications.</p>
     <p> Duration : 7 months</p>
     <p>Price: $10</p>
     <div className="text-center">
     <Link to="/register" target="_blank" className="btn btn-outline-dark" rel="noopener noreferrer">Enroll Now</Link>
     </div>

     </div>
     </div>
     
     </div>
   
    <div className="col-lg-3 col-md-6 col-sm-10 col-10 mt-md-2 mt-sm-2">
   
     <div className="card pop-up">
     <img src="https://plus.unsplash.com/premium_photo-1679079455733-3f80a3b82f01" className="card-img-top" alt="no image"/>
    
    <div className="card-body">
     <h5 className="card-title">Video Editing</h5>
     <p className="text-muted mb-2"><i className="fa-solid fa-user" style={{color: "#4ccfe1"}}></i>Jissmon R</p>
    <p className="card-text">Video editing involves cutting, arranging, and enhancing video clips to create professional, polished visual content.</p>
     <p> Duration : 5 months</p>
     <p>Price: $12</p>
     <div className="text-center">
     <Link to="/register" target="_blank" className="btn btn-outline-dark" rel="noopener noreferrer">Enroll Now</Link>
     </div>

     </div>
     </div>
    
     </div>

     <div className="col-lg-3 col-md-6 col-sm-10 col-10 mt-md-2 mt-sm-2">
     
     <div className="card pop-up">
     <img src="https://images.unsplash.com/photo-1631582053308-40f482e7ace5" className="card-img-top" alt="no img"/>
     <div className="card-body">
     <h5 className="card-title">Animation</h5>
    <p className="text-muted mb-2"><i className="fa-solid fa-user" style={{color: "#4ccfe1"}}></i>Albin Antony</p>
     <p className="card-text">Animation brings graphics or characters to life through motion, enhancing storytelling and visual engagement.</p>
     <p> Duration : 6 months</p>
     <p>Price: $7</p>
     <div className="text-center">
     <Link to="/register" target="_blank" className="btn btn-outline-dark" rel="noopener noreferrer">Enroll Now</Link>
     </div>
    </div>
     </div>
    
     </div> 
    <div className="col-lg-3 col-md-6 col-sm-10 col-10 mt-md-2 mt-sm-2">
     
     <div className="card pop-up">
     <img src="https://images.unsplash.com/photo-1562577309-4932fdd64cd1" className="card-img-top" alt="no image"/>
     <div className="card-body">
     <h5 className="card-title"> Digital Marketing</h5>
     <p className="text-muted mb-2"><i className="fa-solid fa-user" style={{color: "#4ccfe1"}}></i>Amal S C</p>
     <p className="card-text">Digital marketing promotes brands online using SEO, social media, content, and ads to reach targeted audiences.</p>
     <p> Duration : 6 months</p>
     <p>Price: $8</p>
     <div className="text-center">
    <Link to="/register" target="_blank" className="btn btn-outline-dark" rel="noopener noreferrer">Enroll Now</Link>
     </div>
     </div>
     </div>
    </div>

   </div>
     <div className="viewall">
       <a href="#" >View All <i className="fa-solid fa-arrow-right" style={{color: "rgb(102, 148, 248)"}}></i></a>
      </div>

      </div>

      </div> 
      </>
     )
}

export default Courses