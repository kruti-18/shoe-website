import React, { useState } from "react";
import shoes from "../assets/shoes.png";
import "../styles/Navbar.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faTimes} from '@fortawesome/free-solid-svg-icons'

function Navbar() {
  const [isMenuOpen, setMenuOpen] = useState(true);

    const toggleMenu = () => {
      setMenuOpen(!isMenuOpen);
    };

  return (
    
    <>
    <div className="nav">
        <div className="left">
          <img src={shoes} alt="" />
        </div>

       

        <div className="center">
          <div className={`center nav-menu ${isMenuOpen ? 'active' : ''}`}>
            <ul className={`center nav-items ${isMenuOpen ? 'active' : ''}`}>
              <li>Home</li>
              <li>Products</li>
              <li>About</li>
              <li>Contact</li>
            </ul>
          </div>
        </div>
        
        <div className="right">
          <button>Login</button>
          <button>Signup</button>
        </div>

        <div className="menu-mobile " onClick={toggleMenu}> 
        {
          isMenuOpen ? ( <i className=""> <FontAwesomeIcon icon={faBars}/> </i>)
          : (
            <i className=""> <FontAwesomeIcon icon={faTimes}/> </i>
          )
        }
         
        </div>
    </div>
    </>
  );
}

export default Navbar;
