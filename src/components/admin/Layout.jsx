import React from 'react'
import { Link, Outlet, useNavigate } from 'react-router-dom'

function Layout() {

    let navigate = useNavigate();
    function handleLogout() {
        localStorage.clear("isLoggedIn");

        navigate("/adminlogin");
    };

    return (
        <>
            <div className="">
                <div className="row">

                    {/* Sidebar */}
                    <div className="col-lg-2">
                        <nav id="sidebarMenu" class="collapse d-lg-block sidebar collapse bg-white">
                            <div class="position-sticky">
                                <div class="list-group list-group-flush mx-3 mt-4">
                                    <Link to={"/admin"}>
                                        <a
                                            class="list-group-item list-group-item-action py-2 ripple"
                                            aria-current="true"  >
                                            <i class="fas fa-tachometer-alt fa-fw me-3"></i><span>Main dashboard</span>
                                        </a>
                                    </Link>
                                    <Link to={"/admin/addproduct"}>
                                        <a class="list-group-item list-group-item-action py-2 ripple">
                                            <i class="fas fa-chart-area fa-fw me-3"></i><span>Add Product</span>
                                        </a>
                                    </Link>
                                    <Link to={"/admin/products"}>
                                        <a class="list-group-item list-group-item-action py-2 ripple"
                                        ><i class="fas fa-lock fa-fw me-3"></i><span>Products</span></a
                                        >
                                    </Link>
                                    
                                    <button onClick={handleLogout} className='btn btn-danger'>LOGOUT</button>
                                </div>
                            </div>
                        </nav>
                    </div>

                    {/* Data */}
                    <div className="col-lg-9">
                        <Outlet />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Layout