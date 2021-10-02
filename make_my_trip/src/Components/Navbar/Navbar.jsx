import React from "react";
import "./Navbar.css";
import ExploreSearch from "../ExploreSearch/ExploreSearch";
import Aeroplane from "../Aeroplane/Aeroplane";
import { Link } from "react-router-dom";
// import Routes from '../Routes/Routes';
function Navbar() {
  return (
    <div>
      <div className="wrapper">
        <div className="first-box">{/* <Routes/> */}</div>
        <div className="second-box">
          <Aeroplane />
        </div>
        <div className="second-box-end-search">
          <Link to="./flight">
            {" "}
            <div className="second-box-end-search-name">SEARCH</div>
          </Link>{" "}
        </div>
        <p className="second-box-end-search-p">
          {" "}
          <span>&#8963;&#8963;</span>Explore More<span>&#8963;&#8963;</span>
        </p>
        <div className="explore-more-search">
          <ExploreSearch />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
