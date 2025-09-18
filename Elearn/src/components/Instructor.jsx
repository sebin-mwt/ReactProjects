import React from 'react'

function Instructor() {
  return (
    <>
    <div className="container mt-5" id="instructor">
  
    <div className="text-center">

      <h4 className="h3-color">
        <i className="fa-solid fa-angle-left fa-xs"></i> Instructor
        <i className="fa-solid fa-angle-right fa-xs"></i>
      </h4>

      <h1 className="h1-color">Our Instructors</h1>

    </div>

    <div className="row gx-0 gy-2 justify-content-center">

    {/* -- Instructor 1 -- */}
    <div className="col-lg-2 col-sm-5 col-md-4 col-10 text-center p-0">
      <div className="card instructor-card">
        <img src="https://images.unsplash.com/photo-1633332755192-727a05c4013d" className="card-img-top" alt="user image"/>
        <div className="card-body">
          <h5 className="card-title">Abhishek Manoj</h5>
          <p className="card-text">Full Stack</p>
        </div>
        <div className="p-2">
          <span><a href="https://www.facebook.com/" className="card-link" title="facebook"><i className="fa-brands fa-facebook"></i></a></span>
          <span><a href="https://www.instagram.com/" title="instagram" className="card-link"><i className="fa-brands fa-instagram"></i></a></span>
          <span><a href="mailto:someone@example.com" title="mail" className="card-link"><i className="fa-solid fa-envelope"></i></a></span>
        </div>
      </div>
    </div>

    {/* -- Instructor 2 -- */}
    <div className="col-lg-2 col-sm-5 col-md-4 col-10 text-center ">
      <div className="card instructor-card">
        <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80" className="card-img-top" alt="user image"/>
        <div className="card-body">
          <h5 className="card-title">Rahul T R</h5>
          <p className="card-text">Full Stack Developer</p>
        </div>
        <div className="p-2">
          <span><a href="https://www.facebook.com/" className="card-link" title="facebook"><i className="fa-brands fa-facebook"></i></a></span>
          <span><a href="https://www.instagram.com/" className="card-link" title="instagram"><i className="fa-brands fa-instagram"></i></a></span>
          <span><a href="mailto:someone@example.com" className="card-link" title="Email"><i className="fa-solid fa-envelope"></i></a></span>

        </div>
      </div>
    </div>

    {/* -- Instructor 3 -- */}
    <div className="col-lg-2 col-sm-5 col-md-4 col-10 text-center ">
      <div className="card instructor-card">
        <img src="https://images.unsplash.com/photo-1530268729831-4b0b9e170218" className="card-img-top" alt="user image"/>
        <div className="card-body">
          <h5 className="card-title">Yedhu K</h5>
          <p className="card-text">Graphic Design</p>
        </div>

        <div className="p-2">
          <span><a href="https://www.facebook.com/" className="card-link" title="facebook"><i className="fa-brands fa-facebook"></i></a></span>
          <span><a href="https://www.instagram.com/" className="card-link" title="instagram"><i className="fa-brands fa-instagram"></i></a></span>
          <span><a href="mailto:someone@example.com" className="card-link" title="Email"><i className="fa-solid fa-envelope"></i></a></span>

        </div>

      </div>
    </div>

    {/* -- Instructor 4 -- */}
    <div className="col-lg-2 col-sm-5 col-md-4 col-10 text-center">
      <div className="card instructor-card">
        <img src="https://images.unsplash.com/photo-1603415526960-f7e0328c63b1" className="card-img-top" alt="user image"/>
        <div className="card-body">
          <h5 className="card-title">Jissmon Raju</h5>
          <p className="card-text">Social Media</p>
        </div>

        <div className="p-2">
          <span><a href="https://www.facebook.com/" className="card-link"><i className="fa-brands fa-facebook"></i></a></span>
          <span><a href="https://www.instagram.com/" className="card-link"><i className="fa-brands fa-instagram"></i></a></span>
          <span><a href="mailto:someone@example.com" title="mail" className="card-link"><i className="fa-solid fa-envelope"></i></a></span>

        </div>

      </div>
    </div>

  </div>
</div>
    </>
  )
}

export default Instructor