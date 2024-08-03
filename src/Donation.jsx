import React from "react";
import About1 from "./assets/about.jpg";
import { Link } from "react-router-dom";
import Nav from "./components/Nav";
import Footer from "./components/Footer";

const Donation = () => {
  return (
    <div>
        <Nav/>
      <section className="container-fluid py-4 px-4 bg-gray">
        <div className="row mx-lg-4">
          <div className="col-lg-12">
            <h1 className="heading-title fw-bold">Donation</h1>

            <nav aria-label="breadcrumb">
              <ol className="breadcrumb">
                <li className="breadcrumb-item">
                  <Link to={"/"}>Home</Link>
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                  Donation
                </li>
              </ol>
            </nav>
          </div>
        </div>
      </section>

      <section className="container-fluid py-4 px-4">
        <div className="row">
          <div className="col-md-6 col-sm-12">
            <img src={About1} className="img d-block w-100" alt="Donation" />
          </div>
          <div className="col-md-6 col-sm-12">
            <h2 className="text-center mb-4">Make a Donation</h2>
            <form>
              <div className="form-group mt-3">
                <label>Name</label>
                <input type="text" className="form-control" />
              </div>
              <div className="form-group mt-3">
                <label>Email</label>
                <input type="email" className="form-control" />
              </div>
              <div className="form-group mt-3">
                <label>Contact</label>
                <input type="text" className="form-control" />
              </div>
              <div className="form-group mt-3">
                <label>Amount (INR)</label>
                <input type="number" className="form-control" />
              </div>

              <button
                name="sub"
                className="btn btn-primary btn-block mt-3"
                onClick={()=>{
                    alert("Thanks for donation!")
                }}
              >
                Donate Now
              </button>
            </form>
          </div>
        </div>
      </section>
      <Footer/>
    </div>
  );
};

export default Donation;
