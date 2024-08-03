import React from "react";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import G1 from "./assets/Group_.webp";
import G2 from "./assets/Group_.webp";
import G3 from "./assets/Group_.webp";
import G4 from "./assets/Group_.webp";

import About_Section from "./components/About_Section";
const About_us = () => {
  return (
    <div>
      <Nav />
      <section className="container-fluid about-banner">
        <div className="row">
          <div className="col-lg-12">
            <h1 className="heading-title display-2 fw-bold">
              REAL WORK. REAL CHANGE
            </h1>
          </div>
        </div>
      </section>

      <section id="story">
        <About_Section id={"story"} />
      </section>

      <section className="container py-lg-5 intro">
        <div className="row">
          <div className="col-lg-12 text-center px-4 py-lg-5">
            <p>
              HopeHaven was initiated in 2002 when a group of friends came
              together with the intention of giving back to the society. They
              were inspired by the thought and philosophy of Peter Senge, the
              founder of the Society for Organizational Learning who has
              propagated that “sustainability, social equality and the
              environment are now business problems…” and corporate leaders
              can’t expect governments to solve them alone.
            </p>
            <p>
              What triggered these thoughts was the liberalisation of the Indian
              economy in the 1990’s which brought with it immense opportunities.
              Business revived, and India became not just a market, but also an
              investment prospect for the developed world. Disposable incomes
              and early settlements became a living reality for the working
              middle-className. For the first time in India, professionals could
              think beyond making a living, and contribute towards the society.
            </p>
          </div>
        </div>
      </section>
      <section className="container-fluid about-banner1"></section>
      <section className="container py-lg-5 intro">
        <div className="row">
          <div className="col-lg-12 text-center px-4 py-lg-5">
            <p>
              Fuelled with enthusiasm, Smile’s founders gave a shape to their
              dream, and HopeHaven was born. Over the last two decades, Smile
              has evolved as a sustainable Indian social institution – committed
              to do real work on the ground, and make the society and businesses
              inclusive in the process of bringing change.
            </p>
            <p>
              On our way, we had to make many difficult choices and constantly
              innovate – whether it was choosing to work on the ground through a
              service-delivery approach, practicing management principles and
              adopting a business-like approach in the development sector,
              creating a unique resource modeling keeping businesses at the
              centre, or promoting the concept of civic driven change. Yes, we
              almost always took the road less travelled, and as they say, that
              has made all the difference!
            </p>
          </div>
        </div>
      </section>

      <section id="vision">
        <About_Section id={"vision"} />
      </section>

      <section className="container-fluid   bg-gray1 py-5 ">
        <div className="row justify-content-around mt-5 mx-lg-5 py-4">
          <div className="col-md-6 col-xl-4 d-flex  border-0 overflow-hidden">
            <div className="col-2">
              <img src={G1} className="img d-block w-100" alt="" />
            </div>
            <div className="col-1"></div>
            <div className="col-9">
              <p>
                Work as a catalyst in bringing sustainable change in the lives
                of lesser privileged children and families with a life-cycle
                approach of development
              </p>
            </div>
          </div>
          <div className="col-md-6 col-xl-4 d-flex overflow-hidden">
            <div className="col-2">
              <img src={G2} className="img d-block w-100" alt="" />
            </div>
            <div className="col-1"></div>
            <div className="col-9">
              <p>
                Enable the civil society across the world to engage proactively
                in the change process through the philosophy of civic driven
                change
              </p>
            </div>
          </div>
          <div className="col-md-6 col-xl-4 d-flex overflow-hidden">
            <div className="col-2">
              <img src={G3} className="img d-block w-100" alt="" />
            </div>
            <div className="col-1"></div>
            <div className="col-9">
              <p>
                Adopt highest standards of governance to emerge as a leading
                knowledge and technology driven, innovative and scalable
                development institution
              </p>
            </div>
          </div>
        </div>
      </section>
      <section id="mission">
        <About_Section id={"mission"} />
      </section>

      <section className="container-fluid">
        <div className="row mx-lg-5 py-5">
          <div className="col-12 d-flex overflow-hidden">
            <div className="col-2">
              <img src={G4} className="img d-block w-50" alt="" />
            </div>
            <div className="col-10">
              <p>
                HopeHaven is to empower underprivileged children, youth and
                women through relevant education, innovative healthcare and
                market-focused livelihood programmes. HopeHaven is to deploy
                best possible methodology and technology for achieving ideal
                SROI (social return on investment), to practice and promote good
                governance. To link business competitiveness of the corporate
                with social development initiatives; also to sensitize
                privileged children, youth and citizens in general to promote
                Civic Driven Change.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section id="philosophy">
        <About_Section id={"philosophy"} />
      </section>

      <section className="container-fluid">
        <div className="row mx-lg-5 py-5">
          <div className="col-12 overflow-hidden">
            <p>
              While our focus as a development organisation has been first and
              foremost to work on the ground for bringing positive change in the
              lives of the less privileged children and families, we have been
              making equal efforts to sustain this change, by sensitising and
              engaging the privileged masses towards their social
              responsibility. Not remaining restricted to the community, and
              with the aim of achieving sustainable development in a wider
              social context, HopeHaven has adopted the principle of Civic
              Driven Change, making the civil society an active partner in all
              its welfare initiatives.
            </p>
            <p>
              <a href="#">read more &gt;</a>
            </p>
          </div>
        </div>
      </section>
      <section id="lifecycle">
        <About_Section id={"lifecycle"} />
      </section>

      <section className="container-fluid my-5">
        <div className="row mx-lg-5 py-2">
          <div className="col-12 overflow-hidden">
            <p>
              We believe that education is both the means as well as the end to
              a better life: the means because it empowers an individual to earn
              his/her livelihood and the end because it increases one’s
              awareness on a range of issues – from healthcare to appropriate
              social behaviour to understanding one’s rights – and in the
              process help him/her evolve as a better citizen. Education is the
              most effective tool which helps children build a strong
              foundation; enabling them to free themselves from the vicious
              cycle of ignorance, poverty and disease.
            </p>
          </div>
        </div>
        <div className="row mx-lg-5 about-banner2">
          <div className="col-lg-6 col-sm-12 py-lg-5">
            <p>
              But while working on the ground, we realised that child education
              cannot be done in isolation, without ensuring the welfare of the
              whole family. Health is also a part of education. A child will not
              go to school if he is sick. If a child’s parents are afflicted
              with health problems, he might drop-out of school and start
              earning instead. Unless the mother is healthy and empowered, the
              child cannot be either. It is all interlinked.&nbsp;
            </p>
            <p>
              Our other programmes evolved as a logical progression to our
              education programme – be it livelihood, health or women
              empowerment. Today, children and education continue to remain at
              the centre of all we do, but through the lifecycle approach we
              also address the needs of the children’s families and communities.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About_us;
