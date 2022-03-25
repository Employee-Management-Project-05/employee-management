import React from "react";
import {Link} from "react-router-dom";


function Header(){
    return(
        <nav className="navbar navbar-expand-lg navbar-dark " style={{backgroundColor:" #5900b3"}} >
      <div className="container-fluid">
        <a className="navbar-brand" href="#" style={{color:"#CD5C5C"}}><b>Employee Management System</b></a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 nav nav-tabs">
            <li className="nav-item">
              <Link className="nav-link" aria-current="page" to = "/" style={{color:"#ffffff"}}><i class="fa fa-fw fa-home"></i>Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to = "/create" style={{color:"#ffffff"}}><i class="fa fa-user-circle " aria-hidden="true"></i> Add Employee</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to = "/display" style={{color:"#ffffff"}}><i class="fa fa-desktop" aria-hidden="true"></i> Display Employee</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    )
}

export default Header;