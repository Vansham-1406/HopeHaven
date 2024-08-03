import React from "react";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import P1 from './assets/p1.jpg';
import P2 from './assets/p2.jpg';
import P3 from './assets/p3.jpg';
import P4 from './assets/p4.jpg';
import { Link } from "react-router-dom";
const Mentor = () => {
  return (
    <div>
      <Nav />
      <section class="container-fluid py-4 px-4 bg-gray">
        <div class="row mx-lg-4">
          <div class="col-lg-12">
            <h1 class="heading-title fw-bold">Mentors</h1>

            <nav aria-label="breadcrumb">
              <ol class="breadcrumb">
              <li class="breadcrumb-item">
                  <Link to={"/"}>Home</Link>
                </li>
                <li class="breadcrumb-item active" aria-current="page">
                  Mentors
                </li>
              </ol>
            </nav>
          </div>
        </div>
      </section>

      <section class="container py-lg-5 intro">
        <div class="row">
          <div class="col-lg-12 px-4 py-lg-5">
            <p>
              <i>
                “A mentor is someone who allows you to see the hope inside
                yourself.” — Oprah Winfrey
              </i>
            </p>
            <p>
              Our mentors at HopeHaven do the same for us. An initial
              push, some guidance when needed, a sharing of knowledge gained
              through years of experience—our mentors work pro bono to help
              further our cause and to help us realise our full potential,
              individually and as an organisation.
            </p>
            <p>
              Rather than learning through trial and error, these stalwarts of
              industry provide our team with a safe space to explore our
              abilities and opportunities. At the same time, we can look towards
              them for direction and as role models. They help shape our present
              situation and also mould our future opportunities.
            </p>
          </div>
        </div>
      </section>
      <section class="container-fluid bg-gray py-3">
        <h3 class="mx-5 heading-title">Our Mentors</h3>
        <div class="row justify-content-around mt-5 py-4">
          <div class="col-md-6 col-xl-4 d-flex border-0 overflow-hidden">
            <div class="col-2">
              <img
                src={P1}
                class="img d-block w-100"
                alt=""
              />
            </div>
            <div class="col-1"></div>
            <div class="col-9">
              <h4 class="heading-title">Shailesh Dhruvi</h4>
              <p>
                Shailesh is an accomplished, versatile, technology-savvy, and
                result-driven professional with more than 25 years of experience
                in Entrepreneurship and Fund Management.
              </p>
            </div>
          </div>
          <div class="col-md-6 col-xl-4 d-flex overflow-hidden">
            <div class="col-2">
              <img
                src={P2}
                class="img d-block w-100"
                alt=""
              />
            </div>
            <div class="col-1"></div>
            <div class="col-9">
              <h4 class="heading-title">Shubhra Mehrotra</h4>
              <p>
                Shubhra is a senior Pharmaceutical executive with over 23 years
                of experience in Business Development, Licensing, Strategic
                Planning, Portfolio Acquisition &amp; divestments and Alliance
                Management
              </p>
            </div>
          </div>
        </div>
        <div class="row justify-content-around mt-5 py-4">
          <div class="col-md-6 col-xl-4 d-flex border-0 overflow-hidden">
            <div class="col-2">
              <img
                src={P3}
                class="img d-block w-100"
                alt=""
              />
            </div>
            <div class="col-1"></div>
            <div class="col-9">
              <h4 class="heading-title">Narayan Devnathan</h4>
              <p>
                He is currently working as CEO of dentsu Solutions, India;
                President of dentsuIndia (Strategy &amp; Integration) and Head
                of Strategy &amp; Consulting of dentsuCreative, APAC
              </p>
            </div>
          </div>
          <div class="col-md-6 col-xl-4 d-flex overflow-hidden">
            <div class="col-2">
              <img
                src={P4}
                class="img d-block w-100"
                alt=""
              />
            </div>
            <div class="col-1"></div>
            <div class="col-9">
              <h4 class="heading-title">Karthik Kumar</h4>
              <p>
                Karthik Kumar is a thorough advertising &amp; marketing
                professional, he has also played a role in evangelising “Daan
                Utsav”, Joy of Giving among those who believe in philanthropy.
              </p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Mentor;
