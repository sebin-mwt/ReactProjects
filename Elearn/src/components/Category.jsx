import React from 'react'
import image1 from '../assets/Images/full-stack.png'
import image2 from '../assets/Images/graphic_design.jpg'
import image3 from '../assets/Images/mathss.jpg'
import image4 from '../assets/Images/spoken_english.jpg'
function Category() {
  return (
    <>

      <div className="categoryy container" id="category">
      <div className="text-center mb-4">
        <h4 className="h3-color">
          <i className="fa-solid fa-angle-left fa-xs"></i> Categories
          <i className="fa-solid fa-angle-right fa-xs"></i>
        </h4>

        <h1 className="h1-color">Course Category</h1>
      </div>

      <div className="row g-4">
        
        <div className="col-lg-3 col-md-6 col-sm-12">
          <div className="course-card">
            <img src={image1} alt="Full Stack"/>
            <div className="course-caption">
              <h5>Full Stack</h5>
              <p>49 Courses</p>
              <a href="#course">See more..</a>
            </div>
          </div>
        </div>

    
        <div className="col-lg-3 col-md-6 col-sm-12">
          <div className="course-card">
            <img src={image2} alt="Graphic Design"/>
            <div className="course-caption">
              <h5>Graphic Design</h5>
              <p>12 Courses</p>
              <a href="#course">See more..</a>
            </div>
          </div>
        </div>

        <div className="col-lg-3 col-md-6 col-sm-12">
          <div className="course-card">
            <img src={image3} alt="Maths"/>
            <div className="course-caption">
              <h5>Maths</h5>
              <p>7 Courses</p>
              <a href="#course">See more..</a>
            </div>
          </div>
        </div>

        <div className="col-lg-3 col-md-6 col-sm-12">
          <div className="course-card">
            <img src={image4} alt="Spoken English"/>
            <div className="course-caption">
              <h5>Spoken English</h5>
              <p>2 Courses</p>
              <a href="#course">See more..</a>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Category