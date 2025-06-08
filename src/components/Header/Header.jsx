import { NavLink } from "react-router-dom";
import { useState } from "react";
import "./Header.css";

const Header = () => {
  const [title, setTitle] = useState("Ovoj e header");

  const changeTitle = () => {
    setTitle("Header promenet");
  };

  return (
    <div className="header">
  
      <div className="menu">
        <ul>
          <li>
            <NavLink to="/" className={({ isActive }) => isActive ? "active" : ""}>Home</NavLink>
          </li>
          <li>
            <NavLink to="/services" className={({ isActive }) => isActive ? "active" : ""}>Services</NavLink>
          </li>
          <li>
            <NavLink to="/about" className={({ isActive }) => isActive ? "active" : ""}>About</NavLink>
          </li>
          <li>
            <NavLink to="/contact" className={({ isActive }) => isActive ? "active" : ""}>Contact</NavLink>
          </li>
        </ul>
      </div>    
      {/* <div>
        <h1>{title}</h1>
        <button onClick={changeTitle}>Promeni naslov</button>
      </div> */}
    </div>
  );
};

export default Header;
