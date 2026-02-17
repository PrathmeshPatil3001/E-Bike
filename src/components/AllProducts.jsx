import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

export default function AllProducts() {

  const { brandName } = useParams();
  const [bikes, setBikes] = useState([]);

  useEffect(() => {
    axios
      .get("https://698051496570ee87d50ec3d2.mockapi.io/Products")
      .then((res) => {
        const filtered = res.data.filter(
          (bike) =>
            bike.brand.toLowerCase().replace(" ", "-") === brandName
        );
        setBikes(filtered);
      });
  }, [brandName]);

  return (
    <div className="container my-4">
      <h2 className="text-center mb-4 text-capitalize">
        {brandName.replace("-", " ")} Bikes
      </h2>

      <div className="row g-4">

        {bikes.map((bike) => (
          <div className="col-md-4" >
            
            <div className="card h-100 shadow-sm">
              <img
                src={bike.image}
                className="card-img-top"
                style={{ height: "100%", objectFit: "cover" }}
              />
              <div>
              {/* <p>{bike.title}</p> */}
                
              </div>
              <div className="card-body">
                <h5>{bike.title}</h5>
                <p className="text-muted">₹ {bike.price}</p>
              </div>
            </div>
          </div>
        ))}

        
      </div>
    </div>
  );
}