import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const AddProduct = () => {

  let navigate = useNavigate();

  let { id } = useParams();
  // alert(id);

  const [data, setData] = useState({
    title: "",
    brand: "",
    price: "",
    ridingrange: "",
    image: "",
    batterycapacity: "",
    chargingtime: "",
    description: ""
  })


  const [error, setError] = useState({});

  function handlechange(edata) {
    setData({ ...data, [edata.target.id]: edata.target.value });



  };

  function handleSubmit(e) {

    e.preventDefault();
    let objError = {};
    let isValid = true;

    // Title Validation
    if (data.title.trim() === "") {
      objError.titleError = "title is required!";
      isValid = false;

    }
    // Age Validation
    if (data.brand.trim() === "") {
      objError.brandError = "brand is required!";
      isValid = false;
    }
    // price Validation
    if (data.price.trim() === "") {
      objError.priceError = "price is required!";
      isValid = false;
    }
    // cc Validation
    if (data.ridingrange.trim() === "") {
      objError.ridingrangeError = "ridingrange is required!";
      isValid = false;
    }
    // Image Validation
    if (data.image.trim() === "") {
      objError.imageError = "Image is required!";
      isValid = false;
    }
    // Brand Validation
    if (data.batterycapacity.trim() === "") {
      objError.batterycapacityError = "batterycapacity is required!";
      isValid = false;
    }
    // brand Validation
    if (data.chargingtime.trim() === "") {
      objError.chargingtimeError = "Charging Time is required!";
      isValid = false;
    }
    // Description Validation
    if (data.description.trim() === "") {
      objError.descriptionError = "Description is required!";
      isValid = false;
    }

    setError(objError);



    if (id === undefined) {

      if (isValid) {

        axios.post("https://698051496570ee87d50ec3d2.mockapi.io/Products", data)
          .then((res) => {
            console.log(res.data);
            setData({
               title: "",
    brand: "",
    price: "",
    ridingrange: "",
    image: "",
    batterycapacity: "",
    chargingtime: "",
    description: ""
            })
          })
      }


    }

    else {

      if (isValid) {

        axios.put("https://698051496570ee87d50ec3d2.mockapi.io/Products/" + id, data)
          .then((res) => {
            console.log(res.data);
            // setData(res.data)
            navigate("/admin/products/");
          });
      }
    }
  }


  useEffect(() => {
    if (id) {
      axios.get("https://698051496570ee87d50ec3d2.mockapi.io/Products/" + id)
        .then((res) => {
          console.log(res.data)
          setData({
            title: res.data.title,
            brand: res.data.brand,
            price: res.data.price,
            image: res.data.image,
            ridingrange: res.data.ridingrange,
            batterycapacity: res.data. batterycapacity,
            chargingtime: res.data. chargingtime,
            description: res.data.description
          });
        })
      // alert(id)
    }
  }, [])



  return (
    <div className="container my-4 border">

      {/* Breadcrumb */}
      <div className="mb-4 mt-2 text-dark fw-semibold">
        ADMIN / ADD PRODUCT
      </div>

      <form>

        {/* Title & brand */}
        <div className="row mb-5">
        

          <div className="col-md-6 ">
            <label htmlFor="brand" className="form-label ">Brand</label>
            {error.brandError && (
              <span className="text-danger d-block">{error.brandError}</span>
            )}
            <select value={data.brand} onChange={handlechange} className="form-select" id="brand">
              <option>Choose brand...</option>
              <option>iQUBE</option>
              <option> Chetak</option>
              <option>OLA</option>
              
            </select>
          </div>

            <div className="col-md-6">
            <label htmlFor="title" className="form-label ">Model</label>
            {error.titleError && (
              <span className="text-danger d-block">{error.titleError}</span>
            )}
            <select value={data.title} onChange={handlechange} className="form-select" id="title">
              <option>Choose Model...</option>
              <option>iQUBE </option>
              <option>iQUBE S</option>
              <option>iQUBE ST</option>
              <option>Chetak 3001 </option>
              <option>Chetak 3503 </option>
              <option>Chetak 3502 </option>
              <option>OLA S1 Pro+</option>
              <option>OLA S1 X</option>
              <option>OLA S1 X+</option>
              
            </select>
          </div>
        </div>

        {/* Price, cc, Image */}
        <div className="row mb-5">
          <div className="col-md-3 me-5">
            <label htmlFor="price" className="form-label ">Price</label>
            {error.priceError && (
              <span className="text-danger d-block">{error.priceError}</span>
            )}
            <input value={data.price} onChange={handlechange} type="text" className="form-control" id="price" />
            
          </div>

          <div className="col-md-3 me-5">
            <label htmlFor="cc" className="form-label ">Riding Range (km)</label>
            {error.ridingrangeError && (
              <span className="text-danger d-block">{error.ridingrangeError}</span>
            )}
             <select value={data.ridingrange} onChange={handlechange} className="form-select" id="ridingrange">
              <option>Choose Riding Range...</option>
              <option>123 km</option>
              <option>130 km</option>
              <option>145 km</option>
              <option>125 km</option>
              <option>132 km</option>
            </select>
            
          </div>

          <div className="col-md-3">
            <label htmlFor="image" className="form-label ">Image</label>
            {error.imageError && (
              <span className="text-danger d-block">{error.imageError}</span>
            )}
            <input value={data.image} onChange={handlechange} type="text" className="form-control" id="image" />
          </div>
        </div>

        {/* avarage, weight */}
        <div className="row mb-3">
          <div className="col-md-4 me-5">
            <label htmlFor="avarage" className="form-label ">Battery Capacity (kWh)	</label>
            {error.batterycapacity && (
              <span className="text-danger d-block">{error.batterycapacityError}</span>
            )}
             <select value={data.batterycapacity} onChange={handlechange} className="form-select" id="batterycapacity">
              <option>Choose Battery Capacity...</option>
              <option>4.1 kWh</option>
              <option>3.4 kWh</option>
              <option>3.2 kWh</option>
              <option>4.5 kWh</option>
              <option>4.3 kWh</option>
            </select>
            
          </div>

          <div className="col-md-4">
            <label htmlFor="weight" className="form-label ">Charging Time (0-100%) (hrs)</label>
            {error.chargingtimeError && (
              <span className="text-danger d-block">{error.chargingtimeError}</span>
            )}
           <select value={data.chargingtime} onChange={handlechange} className="form-select" id="chargingtime">
              <option>Choose Charging Time ...</option>
              <option>3 hrs 50 mins</option>
              <option>4 hrs 50 mins</option>
              <option>5 hrs 20 mins</option>
              <option>3 hrs 40 mins</option>
              <option>4 hrs 20 mins</option>
            </select>
          </div>
        </div>

        {/* Description */}
        <div className="mb-4">
          <label htmlFor="description" className="form-label ">Description</label>
          {error.descriptionError && (
            <span className="text-danger d-block">{error.descriptionError}</span>
          )}
          <textarea
            value={data.description}
            onChange={handlechange}
            className="form-control"
            rows="4"
            id="description"
          ></textarea>
        </div>

        {/* Submit */}
        <button onClick={handleSubmit} className="btn btn-outline-light btn-dark mb-4 px-4">
          Submit
       </button>

      </form>
    </div>
  );
}

export default AddProduct;
