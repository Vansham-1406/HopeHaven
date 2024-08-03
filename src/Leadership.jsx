import React from "react";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import { Link } from "react-router-dom";
const Leadership = () => {
  return (
    <div>
      <Nav />
      <section class="container-fluid py-4 px-4 bg-gray">
        <div class="row mx-lg-4">
          <div class="col-lg-12">
            <h1 class="heading-title fw-bold">The People Behind Smile</h1>
            <nav aria-label="breadcrumb">
              <ol class="breadcrumb">
                <li class="breadcrumb-item">
                  <Link to={"/"}>Home</Link>
                </li>
                <li class="breadcrumb-item active" aria-current="page">
                  Leadership
                </li>
              </ol>
            </nav>
          </div>
        </div>
      </section>

      <section class="container py-lg-5 intro">
        <div class="row">
          <div class="col-lg-12 text-center px-4 py-lg-5">
            <p>
              HopeHaven is a people-driven organization – right from the people
              who started it with a vision, to the people who work with us to
              bring change at the grassroots, to the people who support our
              work, and most importantly the people who we serve on the ground
              through our work. Committed, responsible people who are passionate
              to make a difference to the world around them are the backbone of
              HopeHaven.
            </p>
          </div>
        </div>
      </section>
      <section class="container-fluid text-center py-3">
        <h1 class="text-center heading-title">Our Board Of Trustees</h1>
        <div class="row mx-lg-5 py-5">
          <div class="col-lg-6 col-sm-12">
            <div class="card">
              <div class="card-body">
                <h3 class="heading-title">Mr. Santanu Mishra</h3>
                <p>
                  Mr Santanu Mishra, a law graduate, a Company Secretary, and an
                  alumnus of the Indian Institute of Management Ahmedabad
                  (IIM-A), specializes in strategic management, enterprise
                  transformation and Institution building. After an illustrious
                  career in the corporate sector spanning over 16 years and
                  holding various leadership positions, he started his own
                  practice as a Management Consultant and has been working with
                  several Indian and global brands since then.
                </p>
                <p>
                  In 2002, Mr Mishra joined hands with some of his like-minded
                  friends to set up HopeHaven. He has spearheaded the scaling up
                  of the organization since the inception, helping it evolve
                  from an idea to an Indian social institution of repute.
                </p>
              </div>
            </div>
          </div>
          <div class="col-lg-6 col-sm-12">
            <div class="card">
              <div class="card-body">
                <h3 class="heading-title">Mr. Manish Kumar</h3>
                <p>
                  A Chartered Accountant, Cost and Management Accountant and a
                  Company Secretary, Mr. Manish Kumar specializes in Strategic
                  Management Consulting, International Finance and
                  Entrepreneurship Development. As an Investor and a
                  Philanthropist he has multidimensional exposure spread across
                  various sectors in India and abroad. He has been associated
                  with various charitable organizations and social causes aimed
                  at alleviating various social malaise and bridging the gap or
                  disparity in the society through various initiatives on
                  education, healthcare, livelihood and capacity building since
                  last two decade.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="row mx-lg-5 mb-5">
          <div class="col-lg-6 col-sm-12">
            <div class="card">
              <div class="card-body">
                <h3 class="heading-title">Mr. Yogesh Jagia</h3>
                <p>
                  A lawyer by profession with specialisation in economic laws.
                  He practises in Delhi High Court and Supreme Court of India.
                </p>
              </div>
            </div>
          </div>
          <div class="col-lg-6 col-sm-12">
            <div class="card">
              <div class="card-body">
                <h3 class="heading-title">Mr. Praveen Gupta</h3>
                <p>
                  A Masters in Business &amp; Economics (MBE) from Delhi
                  University. He advises leading corporate houses in India on
                  various strategic issues
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="row mx-lg-5 mb-5">
          <div class="col-lg-6 col-sm-12">
            <div class="card">
              <div class="card-body">
                <h3 class="heading-title">Mr. Ashok Chaudhary</h3>
                <p>
                  A Masters in Business &amp; Economics (MBE) from Delhi
                  University. He advises leading corporate houses in India on
                  various strategic issues
                </p>
              </div>
            </div>
          </div>
          <div class="col-lg-6 col-sm-12">
            <div class="card">
              <div class="card-body">
                <h3 class="heading-title">Ms. Poonam Chopra</h3>
                <p>
                  An investor and a philanthropist, Ms. Poonam Chopra has
                  multidimensional exposure spread across various sectors in
                  India and abroad.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Leadership;
