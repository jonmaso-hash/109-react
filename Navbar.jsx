import { useContext } from "react";
import "./Navbar.css"; 
import {Link} from 'react-router-dom'
import GlobalContext from '../state/globalContext';

function Navbar(){
  const user = useContext(GlobalContext).user 

    return(
     <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">
      "Eat Your Feelings" Online Store
    </a>
    <button
      className="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to={"/"}>
            Home
          </Link>
        </li>

         <li className="nav-item">
          <Link className="nav-link" to={"/Catalog"}>
            Catalog
          </Link>
        </li>

       <li className="nav-item">
          <Link className="nav-link" to={"/contact"}>
           Contact
          </Link>
        </li>
   
        <li className="nav-item">
          <Link className="nav-link" to={"/about"}>
            About
          </Link>
        </li>

         <li className="nav-item">
          <Link className="nav-link" to={"/Admin"}>
            Admin
          </Link>
        </li>
      </ul>

      <div>
        <div className="text-black">{user.name}</div>
      </div>


    </div>
  </div>
</nav>

    )
      
      {/* NEW CODE: Add Footer component */}
      <Footer />
    
};

export default Navbar;