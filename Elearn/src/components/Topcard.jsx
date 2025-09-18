import React from 'react'

function Topcard() {
  return (
    <>
    <div className="container">
    <div className="row mt-5 mb-5">
      
      {/* -- Column 1 -- */}
      <div className="col-lg-4 col-md-6 col-sm-12 mt-md-2 mt-sm-2">

        <div className="card pop-up" style={{width: "100%"}}>

          <div className="card-body text-center">
            <div className="d-flex justify-content-center">

              <p>
                <i className="fa-solid fa-user fa-2xl" style={{color: "#6ae2ba"}}></i>
              </p>

            </div>
            <h5 className="card-title">Instructor</h5>

            <p className="card-text">
              Some quick example text to build on the card title and make up the bulk of the card’s content.
            </p>

          </div>
        </div>
      </div>


    {/* --column 2-- */}

      <div className="col-lg-4 col-md-6 col-sm-12 mt-md-2 mt-sm-2">

        <div className="card pop-up" style={{width: "100%"}}>

          <div className="card-body text-center">
            <div className="d-flex justify-content-center">

              <p>
                <i className="fa-solid fa-globe fa-2xl" style={{color: "#6ae2ba"}}></i>
              </p>

            </div>
            <h5 className="card-title">Online Courses</h5>

            <p className="card-text">
              Some quick example text to build on the card title and make up the bulk of the card’s content.
            </p>

          </div>
        </div>
      </div>
   

     {/* --column 3-- */}

      <div className="col-lg-4 col-md-6 col-sm-12 mt-md-2 mt-sm-2">

        <div className="card pop-up" style={{width: "100%"}}>

          <div className="card-body text-center">
            <div className="d-flex justify-content-center">

           <p>
            <i className="fa-solid fa-book fa-2xl" style={{color: "#6ae2ba"}}> </i>
          </p>

            </div>
            <h5 className="card-title">Book Library</h5>

            <p className="card-text">
              Some quick example text to build on the card title and make up the bulk of the card’s content.
            </p>

          </div>
        </div>
      </div>

      </div>

    </div>

    </>
  )
}

export default Topcard