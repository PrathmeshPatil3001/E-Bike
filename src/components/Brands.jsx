 import React from "react";
import { Link } from "react-router-dom";

export default function Brands() {

  const brands = [
    {
      name: "iQUBE",
      slug: "iqube",
      img: "https://english.makalukhabar.com/wp-content/uploads/2023/09/Picture-1.jpeg"
    },
    {
      name: "Chetak",
      slug: "chetak",
      img: "https://mir-s3-cdn-cf.behance.net/projects/404/42af85215377869.Y3JvcCw1NzUzLDQ1MDAsMTEyNSww.png"
    },
    {
      name: "OLA",
      slug: "ola",
      img: "https://www.motorbeam.com/wp-content/uploads/Ola-Electric-Logo-1200x675.jpg"
    },
   
  ];

  return (
    <div className="container-fluid  p-5">
      <h1 className="text-white bg-dark text-center mb-5"> E-Bike</h1>

      <div className="row g-4 justify-content-center">

        {brands.map((brand) => (
          <div className="col-lg-2 col-md-3" key={brand.slug}>
            <Link
              to={`/brands/${brand.slug}`}
              className="text-decoration-none"
            >
              <div className="card text-center p-3 shadow-sm h-100">
                <img
                  src={brand.img}
                  alt={brand.name}
                  className="img-fluid"
                  style={{ height: "120px", objectFit: "contain" }}
                />
                <h6 className="mt-3 text-dark fw-bold">
                  {brand.name}
                </h6>
              </div>
            </Link>
          </div>
        ))}

      </div>
    </div>
  );
}