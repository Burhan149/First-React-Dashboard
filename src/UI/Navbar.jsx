import React from "react";
import { Archive, Codepen, Database, Home, Pocket, Printer, User } from "react-feather";
import { myStyle } from "./Styleconfig";
import { Link } from "react-router-dom";
const NavMenu = () => {
  return (
    <div className="nav-links d-flex flex-column ">
      <h3 className={`${myStyle.FlexStart} nav-links my-2 mt-4 main-title `}>
        {" "}
        Dev User
      </h3>
      <span className={`${myStyle.FlexStart} nav-links my-2`}>
        {" "}
        <Home size={20} color="grey" /> <Link to="/">Home</Link>
      </span>
      
      <span className={`${myStyle.FlexStart} nav-links my-2`}>
        {" "}
        <User size={20} color="grey" /> <Link to="/profile">Profile</Link>
      </span>
      <span className={`${myStyle.FlexStart} nav-links my-2`}>
        {" "}
        <Pocket size={20} color="grey" />
        <Link to="/wholesale">Wholesale</Link>
      </span>
      <span className={`${myStyle.FlexStart} nav-links my-2`}>
        {" "}
        <Printer size={20} color="grey" /> <Link to="/invoice">Invoice</Link>
      </span>

      <span className={`${myStyle.FlexStart} nav-links my-2`}>
        {" "}
        <Archive size={20} color="grey" /> <Link to="/about">About</Link>
      </span>
      <span className={`${myStyle.FlexStart} nav-links my-2`}>
        {" "}
        <Codepen size={20} color="grey" /> <Link to="/courses">Courses</Link>
      </span>
    </div>
  );
};

export default NavMenu;
