import React from "react";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import { Link } from "react-router-dom";
const Contact = () => {
  return (
    <div>
      <Nav />
      <section className="container-fluid py-4 px-4 bg-gray">
        <div className="row mx-lg-4">
          <div className="col-lg-12">
            <h1 className="heading-title fw-bold">Contact Us</h1>

            <nav aria-label="breadcrumb">
              <ol className="breadcrumb">
                <li class="breadcrumb-item">
                  <Link to={"/"}>Home</Link>
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                  Contact Us
                </li>
              </ol>
            </nav>
          </div>
        </div>
      </section>

      <section className="container-fluid my-3">
        <div className="row py-4 mx-4">
          <div className="col-lg-6 col-sm-12">
            <h4 style={{ textDecoration: "underline" }}>
              Feel Free To Contact Us Any Time
            </h4>
            <br />
            <h5>Contact:</h5>
            <p>+91-8095210000</p>
            <br />
            <h5>Email:</h5>
            <p>info@hopehaven.com</p>
            <br />
            <h5>Address:</h5>
            <p>
              44, Gobind nagar
              <br /> Ambala, 133001
            </p>
            <hr />
            <h5>Follow Us:</h5>
            <ul className="nav">
              <li className="nav-item">
                <Link className="nav-link">
                  <i className="fa fa-facebook"></i>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link">
                  <i className="fa fa-twitter"></i>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link">
                  <i className="fa fa-youtube"></i>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link">
                  <i className="fa fa-instagram"></i>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link">
                  <i className="fa fa-linkedin"></i>
                </Link>
              </li>
            </ul>
          </div>
          <ContactForm />
        </div>
      </section>
      <Footer />
    </div>
  );
};

const ContactForm = () => {
  return (
    <div className="col-lg-6 col-sm-12">
      <h4>HelpDesk</h4>
      <p>Please Submit Your Message For Any Help & Suggestions</p>
      <form className="form">
        <div className="form-group mt-4">
          <label>Name</label>
          <input
            required
            placeholder="Enter Name"
            id="name"
            className="form-control"
          />
        </div>
        <div className="form-group mt-4">
          <label>Email</label>
          <input
            required
            placeholder="Enter Your Email"
            id="email"
            className="form-control"
          />
        </div>
        <div className="form-group mt-4">
          <label>Contact</label>
          <input
            required
            placeholder="Enter Contact"
            id="contact"
            className="form-control"
          />
        </div>
        <div className="form-group mt-4">
          <label>Message</label>
          <textarea cols="30" rows="6" className="form-control"></textarea>
        </div>
        <div className="form-group mt-4">
          <input className="btn btn-info" value={"Submit"} />
        </div>
      </form>
    </div>
  );
};

export default Contact;
