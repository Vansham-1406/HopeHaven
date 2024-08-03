import React from "react";
import { Link } from "react-router-dom";
import '../css/style.css';

const Footer = () => {
  return (
    <>
      <footer className="container-fluid py-5 text-light">
        <div className="row mx-lg-5 my-5">
          <div className="col-lg-3 col-md-6 col-6 fw-bold">
            <h5>ABOUT US</h5>
            <ul>
              <li>
                <Link to="/">About Smile</Link>
              </li>
              <li>
                <Link to="/">Impact</Link>
              </li>
              <li>
                <Link to="/">Reach & Presence</Link>
              </li>
              <li>
                <Link to="/">Smiletones</Link>
              </li>
              <li>
                <Link to="/">Privacy Policy</Link>
              </li>
            </ul>
          </div>
          <div className="col-lg-3 col-md-6 col-6">
            <h5>OUR WORK</h5>
            <ul>
              <li>
                <Link to="/">Education</Link>
              </li>
              <li>
                <Link to="/">Health</Link>
              </li>
              <li>
                <Link to="/">Livelihood</Link>
              </li>
              <li>
                <Link to="/">Women Empowerment</Link>
              </li>
              <li>
                <Link to="/">Disaster Response</Link>
              </li>
            </ul>
          </div>
          <div className="col-lg-3 col-md-6 col-6">
            <h5>CAMPAIGNS</h5>
            <ul>
              <li>
                <Link to="/">Shiksha Na Ruke</Link>
              </li>
              <li>
                <Link to="/">Health Can't Wait</Link>
              </li>
              <li>
                <Link to="/">She Can Fly</Link>
              </li>
              <li>
                <Link to="/">Swabhiman</Link>
              </li>
              <li>
                <Link to="/">Tayyari Kal Ki</Link>
              </li>
            </ul>
          </div>
          <div className="col-lg-3 col-md-6 col-6">
            <h5>GET INVOLVED</h5>
            <ul>
              <li>
                <Link to="/">Individuals Support</Link>
              </li>
              <li>
                <Link to="/">Corporate Partnership</Link>
              </li>
              <li>
                <Link to="/">Volunteer</Link>
              </li>
              <li>
                <Link to="/">School Partnership</Link>
              </li>
              <li>
                <Link to="/">Careers</Link>
              </li>
            </ul>
          </div>
        </div>
        <hr className="border border-light" />
        <div className="row mx-lg-5">
          <div className="col-lg-7 col-sm-12">
            <p>HopeHaven</p>
            <p>
              44, Gobind Nagar
              <br />
              Ambala - 133001, India
            </p>
            <p>
              Contact Us: Tel: <a href="tel:+91-8095210000">+91-8095210000</a>{" "}
              | E-Mail:
              <a href="mailto:info@hopehaven.org">info@hopehaven.org</a>
            </p>
          </div>
          <div className="col-lg-5 col-sm-12 social d-flex justify-content-center align-items-center">
            <ul className="nav">
              <li className="nav-item">
                <Link className="abc">
                  <i className="fa fa-facebook"></i>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="abc">
                  <i className="fa fa-twitter"></i>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="abc">
                  <i className="fa fa-youtube"></i>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="abc">
                  <i className="fa fa-instagram"></i>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="abc">
                  <i className="fa fa-linkedin"></i>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
