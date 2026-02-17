// import { Link } from "react-router-dom";

// function Header() {

//     return (
//         <>
//             <nav class="navbar navbar-expand-lg navbar-light bg-light">
//                 <div class="container-fluid">
//                     <Link to={"/"}>
//                         <a class="navbar-brand" href="#">
//                             <img style={{ width: "100px" }} src="/Logo.png" alt="" />
//                         </a>
//                     </Link>
//                     <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//                         <span class="navbar-toggler-icon"></span>
//                     </button>
//                     <div class="collapse navbar-collapse" id="navbarSupportedContent">
//                         <ul class="navbar-nav me-auto mb-2 mb-lg-0">
//                             <Link to={"/about"} class="nav-item text-decoration-none fw-bold mb-4">
//                                 <a class="nav-link">About</a>
//                             </Link>
//                             <Link to="/brands" class="nav-item text-decoration-none fw-bold mb-4">
//                                 <a class="nav-link">Brands</a>
//                             </Link>
//                             {/* <Link to={"/images"} class="nav-item text-decoration-none fw-bold mb-4">
//                                 <a class="nav-link">Images</a>
//                             </Link> */}
//                             <Link to={"/contact"} class="nav-item text-decoration-none fw-bold mb-4">
//                                  <a class="nav-link">Contact</a>
//                             </Link>
//                             <Link to={"/adminlogin"} class="nav-item text-decoration-none fw-bold mb-4">
//                                 <a class="nav-link">Admin Login</a>
//                             </Link>
                           
                           
//                         </ul>
//                     </div>
//                 </div>
//             </nav>
//         </>
//     )
// };

// export default Header;


import { Link } from "react-router-dom";

function Header() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow sticky-top">
      <div className="container">
        <Link to="/" className="navbar-brand fw-bold fs-3">
        <img style={{ width: "40px", borderRadius:"50%" }} className="me-3" src="/Logo.png" alt="" />
           E-Bike
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#nav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="nav">
          <ul className="navbar-nav ms-auto gap-3">
            <li className="nav-item">
              <Link className="nav-link" to="/about">About</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/brands">Brands</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact">Contact</Link>
            </li>
            <li className="nav-item">
              <Link className="btn btn-success px-4" to="/adminlogin">
                Admin Login
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;
