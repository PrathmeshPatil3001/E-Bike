// import React from 'react'

// function About() {
//   return (
//     <>
    
// <section class="py-3 py-md-5 py-xl-8">
//   <div class="container">
//     <div class="row justify-content-md-center">
//       <div class="col-12 col-md-10 col-lg-8 col-xl-7 col-xxl-6">
//         <h2 class="mb-4 display-5 text-center fw-bold mb-4">About Us</h2>
//         <p class="text-secondary mb-5 text-center lead fs-4">E-Bike (Electric Bike) is a two-wheeled vehicle powered by an electric motor and battery. It provides easy, eco-friendly transportation with less effort and zero emissions, making it ideal for daily commuting.</p>
//         <hr class="w-50 mx-auto mb-5 mb-xl-9 border-dark-subtle"/>
//       </div>
//     </div>
//   </div>
//   <div class="container">
//     <div class="row gy-4 gy-lg-0 align-items-lg-center">
//       <div class="col-12 col-lg-6 ">
//         <img class="img-fluid rounded border border-dark" loading="lazy" src="https://media.istockphoto.com/id/1382274793/photo/an-electric-scooter-charging-at-power-station.jpg?s=1024x1024&w=is&k=20&c=nDebIaSAdcrUSfFcVaenHPQ2a6oiVkI9i9Wi_kqwk-Q=" alt="About Us"/>
//       </div>
//       <div class="col-12 col-lg-6 col-xxl-6">
//         <div class=" row justify-content-lg-end">
        
//         </div>
//       </div>
//     </div>
//   </div>
// </section>
//     </>
//   )
// }

// export default About

import React from "react";

function About() {
  return (
    <section className="py-5 bg-light">
      <div className="container">

        {/* Heading */}
        <div className="row justify-content-center mb-5">
          <div className="col-lg-8 text-center">
            <h2 className="display-5 fw-bold mb-3">About Us</h2>
            <p className="text-muted fs-5">
              Powering the future of mobility with smart, eco-friendly electric bikes.
            </p>
            <hr className="w-25 mx-auto" />
          </div>
        </div>

        {/* Content */}
        <div className="row align-items-center gy-4">

          {/* Image */}
          <div className="col-lg-6">
            <img
              src="https://media.istockphoto.com/id/1382274793/photo/an-electric-scooter-charging-at-power-station.jpg?s=1024x1024&w=is&k=20&c=nDebIaSAdcrUSfFcVaenHPQ2a6oiVkI9i9Wi_kqwk-Q="
              alt="Electric Bike Charging"
              className="img-fluid rounded shadow"
            />
          </div>

          {/* Text */}
          <div className="col-lg-6">
            <h3 className="fw-semibold mb-3">Why Choose Our E-Bikes?</h3>
            <p className="text-muted mb-4">
              Our electric bikes combine advanced technology, stylish design,
              and sustainability to deliver a smooth and affordable commuting experience.
            </p>

            {/* Features */}
            <div className="row gy-3">
              <div className="col-12 d-flex">
                <div className="me-3 fs-4 text-success">⚡</div>
                <div>
                  <h6 className="fw-bold mb-1">Powerful Electric Motor</h6>
                  <p className="text-muted mb-0">
                    Smooth acceleration with minimal effort.
                  </p>
                </div>
              </div>

              <div className="col-12 d-flex">
                <div className="me-3 fs-4 text-primary">🌱</div>
                <div>
                  <h6 className="fw-bold mb-1">Eco-Friendly</h6>
                  <p className="text-muted mb-0">
                    Zero emissions for a greener planet.
                  </p>
                </div>
              </div>

              <div className="col-12 d-flex">
                <div className="me-3 fs-4 text-warning">🔋</div>
                <div>
                  <h6 className="fw-bold mb-1">Long Battery Life</h6>
                  <p className="text-muted mb-0">
                    Travel longer distances on a single charge.
                  </p>
                </div>
              </div>

              <div className="col-12 d-flex">
                <div className="me-3 fs-4 text-danger">🚴</div>
                <div>
                  <h6 className="fw-bold mb-1">Comfortable Ride</h6>
                  <p className="text-muted mb-0">
                    Designed for daily commuting and city roads.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
