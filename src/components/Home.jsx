import React from 'react';

// import imga2 from '../../public/gt.jpg';

export default function Home() {
    const sty = {
        textAlign: "center",
        marginTop: "50px",
        padding: "20px",
        background: "skyblue",
        borderRadius: "10px"
    };


    return (
        <>
            

            <h1 className="text-white bg-dark me-5 ms-5 mt-3 p-3 mb-3 text-center display-3 fw-bold gradient-text hover-grow ">
                E-Bike
            </h1>





            <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active text-center  mt-3 mb-3">
                        <img src="https://media.istockphoto.com/id/1382274793/photo/an-electric-scooter-charging-at-power-station.jpg?s=1024x1024&w=is&k=20&c=nDebIaSAdcrUSfFcVaenHPQ2a6oiVkI9i9Wi_kqwk-Q=" alt="About Us"/>
      </div>
      <div class="col-12 col-lg-6 col-xxl-6">
                    </div>
                    {/* <div className="carousel-item">
                        <img src={imga2} className="d-block w-100" alt="..." />
                    </div> */}
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon"></span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                    <span className="carousel-control-next-icon"></span>
                </button>
            </div>

        </>
    );
}


