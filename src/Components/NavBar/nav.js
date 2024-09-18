import React, { useState } from "react";
import lab from "../../asset/logo.jpg";
import "./nav.css";
import { Link, NavLink } from "react-router-dom";

const Nav = () => {
  const [line1, setl1] = useState(false);
  const [line2, setl2] = useState(false);
  const [line3, setl3] = useState(false);

  function menu() {
    var x = document.getElementById("links");
    if (x.style.display === "flex") {
      setl1(false);
      setl2(false);
      setl3(false);
      x.style.display = "none";
    } else {
      setl1(true);
      setl2(true);
      setl3(true);
      x.style.display = "flex";
    }
  }

  return (
    <>
      <div className="nav">
        <div className="nav-right">
          <ul type="none">
            <NavLink to={"/"} className="nav-right-a">
              Home
            </NavLink>
            {/* <a href={"/about"} className="nav-right-a">About Us</a> */}
            <NavLink to={"/research"} className="nav-right-a">
              Research
            </NavLink>
            <NavLink to={"/facilities"} className="nav-right-a">
              Facilities
            </NavLink>
            <NavLink to={"/publication"} className="nav-right-a">
              Publication
            </NavLink>
            <NavLink to={"/people"} className="nav-right-a">
              People
            </NavLink>
            <NavLink to={"/awards"} className="nav-right-a">
              Awards/Achievements
            </NavLink>
            <NavLink to={"/contact"} className="nav-right-a">
              Contact Us
            </NavLink>
          </ul>
        </div>
        <div>
          <Link to="/">
            <img src={lab} alt="" />
          </Link>
        </div>
        <div className="side-nav" onClick={menu}>
          <div className={line1 ? "hamburger-l1" : "l1"}></div>
          <div className={line1 ? "hamburger-l2" : "l2"}></div>
          <div className={line1 ? "hamburger-l3" : "l3"}></div>
        </div>
      </div>
      <div id="links">
        <ul type="none" onClick={menu}>
          <NavLink to={"/"} className="nav-right-a">
            Home
          </NavLink>
          {/* <a href={"/about"} className="nav-right-a">About Us</a> */}
          <NavLink to={"/research"} className="nav-right-a">
            Research
          </NavLink>
          <NavLink to={"/facilities"} className="nav-right-a">
            Facilities
          </NavLink>
          <NavLink to={"/publication"} className="nav-right-a">
            Publication
          </NavLink>
          <NavLink to={"/people"} className="nav-right-a">
            People
          </NavLink>
          <NavLink to={"/awards"} className="nav-right-a">
            Awards/Achievements
          </NavLink>
          <NavLink to={"/contact"} className="nav-right-a">
            Contact Us
          </NavLink>
        </ul>
      </div>
    </>
  );
};

export default Nav;
