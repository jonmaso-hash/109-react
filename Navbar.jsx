import { useContext } from "react";
import "./Navbar.css"; 
import {Link} from 'react-router-dom'
import { IconShoppingCart } from '@tabler/icons-react';
import GlobalContext from '../state/globalContext';

function Navbar(){
  const user = useContext(GlobalContext).user 
  const cart = useContext(GlobalContext).cart

  function getTotalItems(){
    let sum = 0

    for(let i=0; i < cart.length; i++){
      sum = sum + cart[i].quantity
    }
    return sum
  }

    return(
     <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">
      DreamWorld Consumables 
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

      <div className="d-flex align-items-center gap-2">
        <div className="text-black">{user.name}</div>

        <Link to ={"/cart"}>
         <IconShoppingCart stroke={2} />
        Cart {getTotalItems()}
        
        </Link>
      </div>


    </div>
  </div>
</nav>

    )
      
      {/* NEW CODE: Add Footer component */}
      <Footer />
    
};

export default Navbar;