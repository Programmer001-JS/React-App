import React from "react";
import {NavLink} from "react-router-dom";
import "./Header.css";

const Header = () => {
    return (
      <nav className="navbar navbar-expend-light navbar-dark bg-dark">
         <ul className="form-inline ml-auto">
               <NavLink to="/" exact  activeClassName={"active"} className="nav-link">Table</NavLink>
               <NavLink to="/Add"  activeClassName={"active"} className="nav-link">Add Boxer</NavLink>
               <NavLink to="/Edit"  activeClassName={"active"} className="nav-link">Edit/Delete</NavLink>
               <NavLink to="/List"  activeClassName={"active"} className="nav-link">Boxers list</NavLink>
               
         </ul>

      </nav>

)
}
export default Header;