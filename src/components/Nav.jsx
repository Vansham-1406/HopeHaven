import React from "react";
import "../css/style.css";
import HopeHavenLogo from "../assets/HopeHaven.png";
import Unnamed from "../assets/unnamed.jpg";
import { Link } from "react-router-dom";
const Nav = () => {
  return (
    <div>
      <section className="container-fluid pt-3">
        <div className="row">
          <div className="col-lg-11 col-sm-12">
            <div className="row">
              <div className="col-lg-12 d-flex justify-content-end">
                <div href="" className="btn btn-lg btn-cause">
                  <Link to={"/donation"} className="supp_case">SUPPORT A CAUSE</Link>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-12">
                <nav className="navbar navbar-expand-lg">
                  <div className="container-fluid">
                    <Link className="navbar-brand ml-5" to={"/"}>
                      <img src={HopeHavenLogo} height="75" alt="" />
                    </Link>
                    <button
                      className="navbar-toggler"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#navbarSupportedContent"
                      aria-controls="navbarSupportedContent"
                      aria-expanded="false"
                      aria-label="Toggle navigation"
                    >
                      <span className="navbar-toggler-icon"></span>
                    </button>
                    <div
                      className="collapse navbar-collapse"
                      id="navbarSupportedContent"
                    >
                      <ul className="navbar-nav mx-auto mb-2 mb-lg-0 ">
                        <li className="nav-item">
                          <Link className="nav-link fs-6" to={"/about"}>
                            About Us
                          </Link>
                        </li>
                        <li className="nav-item">
                          <Link className="nav-link fs-6" to={"/leadership"}>
                            Leadership
                          </Link>
                        </li>
                        <li className="nav-item">
                          <Link className="nav-link fs-6" to={"/mentor"}>
                            Mentor
                          </Link>
                        </li>
                        <li className="nav-item">
                          <Link className="nav-link fs-6" to={"/contact"}>
                            Contact Us
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </nav>
              </div>
            </div>
          </div>
          <div className="col-lg-1 d-none d-lg-block">
            <img src={Unnamed} alt="" height="110" id="profile-pic" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Nav;
