import React from 'react'
import image1 from '../assets/Images/image2_2.png';
import image2 from '../assets/Images/imagelast~2.png'
function Carousel() {
  return (
   <>

   <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">

      <div className="carousel-indicators">
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
      </div>

      <div className="carousel-inner" >

        <div className="carousel-item active" data-bs-interval="2000">
          <img src={image1} className="d-block w-100" alt="..."/>
        </div>

        <div className="carousel-item" data-bs-interval="2000">
          <img src={image2} className="d-block w-100" alt="..."/>
        </div>

      </div>

      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>

    </div>

   </>
  )
}

export default Carousel