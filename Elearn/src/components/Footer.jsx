import React from 'react'

function Footer() {
  return (
    <>
    
      <footer className="site-footer" id="footer">

      <div className="container text-white pt-3">

        <div className="row">

          {/* -- Get in Touch -- */}
          <div className="col-md-3 col-sm-6 mb-4">
            <h5>Get In Touch..</h5>
            <input type="text" className="form-control" placeholder="Your email or message"/>
          </div>

          {/* -- Quick Links -- */}
          <div className="col-md-3 col-sm-6 text-center mb-4">
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li><a href="#"> </a></li>
              <li><a href="#about"> About</a></li>
              <li><a href="#course"> Courses</a></li>
            </ul>
          </div>

          {/* -- Contacts -- */}
          <div className="col-md-3 col-sm-6 text-center mb-4">
            <h5>Contacts</h5>
            <ul className="list-unstyled">
              <li><i className="fa-solid fa-location-dot" style={{color: "#dacde3"}}></i> Location: Infopark Kochi</li>
              <li><i className="fa-solid fa-house" style={{color: "#dacde3"}}></i> Address: Main Street, Kochi</li>
              <li><i className="fa-solid fa-phone" style={{color: "#dacde3"}}></i> Phone: +91 98765 43210</li>
              <li><i className="fa-solid fa-envelope" style={{color: "#dacde3"}}></i> Email: info  @example.com</li>
            </ul>
          </div>

          {/* --follow us-- */}

        <div className="col-md-3 col-sm-6 mb-4 text-center">
            <h5>Follow Us</h5>
            <div className="d-flex justify-content-center gap-3">
              <a href="#" className="text-white fs-4"><i className="fab fa-facebook"></i></a>
              <a href="#" className="text-white fs-4"><i className="fab fa-instagram"></i></a>
              <a href="#" className="text-white fs-4"><i className="fab fa-twitter"></i></a>
              </div>
            </div>


        </div>
      </div>
      <div className="text-center border-top pt-3">
        copyright @2025
      </div>
    </footer>
    
    </>
  )
}

export default Footer