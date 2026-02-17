import axios from 'axios';
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";


function Products() {

    const [data, setData] = useState([]);

    function loadData() {
        axios.get("https://698051496570ee87d50ec3d2.mockapi.io/Products/")

            .then((res) => {
                console.log(res.data);  // [{},{}]
                setData(res.data);
            });
    };
    useEffect(() => {
        loadData();
    }, []);


    function handleDelete(id) {
        console.log(id)
        axios.delete("https://698051496570ee87d50ec3d2.mockapi.io/Products/"+ id)
            .then((res) => {
                console.log(res.data);
                loadData();
            });

    };

   
    return (
        <>
            <h1 className='text-center'>All Products</h1>
            {
                data.length >= 1
                    ?
                    <div className="container">
                        <div className="col-lg-12">
                            <table className="table table-striped text-dark table-hover">
                                <thead>
                                    <tr>
                                        <th scope="col">#</th>
                                        <th scope="col">Brand</th>
                                        <th scope="col">Model</th>
                                        <th scope="col">Price</th>
                                        <th scope="col">Image</th>
                                        <th scope="col">Riding Range</th>
                                        <th scope="col">Battery Capacity</th>
                                        <th scope="col">Charging Time</th>
                                        <th scope="col">description</th>
                                        <th scope="col">Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        data.map((edata, i) => {
                                            // console.log(eachData);
                                            return (
                                                <tr key={i}>
                                                    <th className='text-dark pt-5' scope="row">{i + 1}.</th>
                                                    <td className='text-dark pt-5'>{edata.brand}</td>
                                                    <td className='text-dark pt-5'>{edata.title}</td>
                                                    <td className='text-dark pt-5'>₹{edata.price} </td>
                                                    <td>
                                                        <img style={{ width: "120px", height:"100px", background:"White"}} src={edata.image} alt="" />
                                                    </td>
                                                    <td className='text-dark pt-5'>{edata.ridingrange}</td>
                                                    <td className='text-dark pt-5'>{edata.batterycapacity} </td>
                                                    <td className='text-dark pt-5'>{edata.chargingtime} </td>
                                                    <td className='text-dark pt-5'>{edata.description}</td>

                                                    <td>
                                                        <Link to={"/admin/addproduct/" + edata.id} >
                                                            <button className='btn btn-outline-primary m-1 btn-sm mt-4'><i className="fa-solid fa-pencil"></i></button>
                                                        </Link>
                                                        <button onClick={() => handleDelete(edata.id)} className='btn btn-outline-danger btn-sm mt-4'><i className="fa-solid fa-trash"></i></button>
                                                    </td>
                                                </tr>
                                            )
                                        })
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                    :
                    <div class="spinner-border text-primary" role="status">
                        <span class="visually-hidden">Loading...</span>
                    </div>
            }
        </>
    )
}

export default Products


