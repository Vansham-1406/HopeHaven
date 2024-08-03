import React from "react";
import Footer from "./components/Footer";
import Nav from "./components/Nav";
import DV1 from './assets/Desktop-Version-1.webp';
import DV2 from './assets/Desktop-Version-2.webp';
import DV3 from './assets/Desktop-Version-3.webp';
import DV4 from './assets/Desktop-Version-4.webp';
import Fifteen from './assets/15.png';
import Sixteen from './assets/16.png';
import GoodHealth from './assets/good-health.webp';
import Gender from './assets/gender-equality.webp';
import Edu from './assets/quality-education-copy.webp';
import Eco from './assets/economic-growth.webp';
import Red from './assets/reduced-copy.webp';
import Partnership from './assets/partnership.webp';
import Placeholder from './assets/placeholder.png';
import She from './assets/She.jpg';
import Shiksha from './assets/Shiksha.webp';
import Tayyari from './assets/Tayyari.webp';
import Health from './assets/Health.webp';
import Carousel1 from "./components/Carousel1";

const Home = () => {
  return (
    <div>
      {/* NAV */}
      <Nav />
      {/* <Carousel/> */}
      <Carousel1/>
      {/* section 2 */}
      <section className="container py-5 intro">
        <div className="row">
          <div className="col-lg-12 text-center px-4 py-5">
            <p>
              Established in 2002, Hope Haven is an Indian development
              organization, impacting the lives of over 15 lakh children and
              their families every year. We have more than 400 projects on
              education, healthcare, livelihood, and women empowerment in over
              2,000 remote villages and urban slums across 25 states of India.
            </p>
            <p>
              Hope Haven works as a catalyst in the cycle of change,
              complementing and supplementing government efforts
              to achieve the
              Sustainable Development Goals. We sensitize and partner with
              like-minded institutions and individuals to implement high-impact
              programmes that enable access, enhance quality and help bring long
              term behavioural change at the grassroots.
            </p>
            <p>
            </p>
          </div>
        </div>
      </section>

      {/* Section 2 */}
      <section className="container-fluid bg-gray">
        <div>
          <h2 className="pt-5 text-center heading-title">Our Compact</h2>
        </div>
        <div className="row px-5 py-5">
          <div className="col-lg-3">
            <h1 className="text-color display-1 fw-bold">3+</h1>
            <h4 className="text-color">LAC</h4>
            <p>Children & Their Family Are Impacted Every Year</p>
          </div>
          <div className="col-lg-3">
            <h1 className="text-color display-1 fw-bold">1000+</h1>
            <h4 className="text-color">VILLAGES</h4>
            <p>And Slums Are Reached Out Across The Country</p>
          </div>
          <div className="col-lg-3">
            <h1 className="text-color display-1 fw-bold">900+</h1>
            <h4 className="text-color">PROJECTS</h4>
            <p>Focus on education, healthcare and women empowerment.</p>
          </div>
          <div className="col-lg-3">
            <h1 className="text-color display-1 fw-bold">20+</h1>
            <h4 className="text-color">STATES</h4>
            <p>And Reached Including Remote Areas</p>
          </div>
        </div>
      </section>

      {/* Section 3 */}
      <section className="container-fluid bg-gray1 py-5">
        <h1 className="text-center mt-1 heading-title">OUR PROGRAMMES</h1>
        <div className="row justify-content-around mt-5 py-4">
          <div className="col-md-6 col-xl-4 d-flex border-0 overflow-hidden">
            <div className="col-2">
              <img
                src={DV1}
                className="img d-block w-100"
                alt=""
              />
            </div>
            <div className="col-1"></div>
            <div className="col-9">
              <h2 className="fw-bold education">EDUCATION</h2>
              <p>Education, nutrition, holistic and development of children</p>
            </div>
          </div>
          <div className="col-md-6 col-xl-4 d-flex overflow-hidden">
            <div className="col-2">
              <img
                src={DV2}
                className="img d-block w-100"
                alt=""
              />
            </div>
            <div className="col-1"></div>
            <div className="col-9">
              <h2 className="fw-bold healthcare">HEALTHCARE</h2>
              <p>Education, nutrition, holistic and development of children</p>
            </div>
          </div>
        </div>
        <div className="row justify-content-around py-4">
          <div className="col-md-6 col-xl-4 d-flex overflow-hidden">
            <div className="col-2">
              <img
                src={DV3}
                alt=""
                className="d-block w-100 img"
              />
            </div>
            <div className="col-1"></div>
            <div className="col-9">
              <h2 className="fw-bold women">WOMEN EMPOWERMENT</h2>
              <p>Education, nutrition, holistic and development of children</p>
            </div>
          </div>
          <div className="col-md-6 col-xl-4 overflow-hidden d-flex">
            <div className="col-2">
              <img
                src={DV4}
                alt=""
                className="img d-block w-100"
              />
            </div>
            <div className="col-1"></div>
            <div className="col-9">
              <h2 className="fw-bold livelihood">LIVEHOOD</h2>
              <p>Education, nutrition, holistic and development of children</p>
            </div>
          </div>
        </div>
        <div className="row justify-content-around py-4">
          <div className="col-md-6 col-xl-4 d-flex overflow-hidden">
            <div className="col-2">
              <img src={Sixteen} alt="" className="img d-block w-100" />
            </div>
            <div className="col-1"></div>
            <div className="col-9">
              <h2 className="fw-bold empowering">EMPOWRING GRASSOOTS</h2>
              <p>Education, nutrition, holistic and development of children</p>
            </div>
          </div>
          <div className="col-md-6 col-xl-4 d-flex overflow-hidden">
            <div className="col-2">
              <img src={Fifteen} className="img d-block w-100" alt="" />
            </div>
            <div className="col-1"></div>
            <div className="col-9">
              <h2 className="fw-bold disaster">DISASTER RESPONSE</h2>
              <p>Education, nutrition, holistic and development of children</p>
            </div>
          </div>
        </div>
        <h3 className="heading-title text-center">TOWARS ACHIEVING</h3>
        <h1 className="heading-title text-center">
          SUSTAINABLE DEVELOPMENT GOALSS
        </h1>
        <div className="row d-flex align-items-center justify-content-between mt-5 px-5">
          <div className="col-4 col-lg-2 d-flex align-items-center">
            <img src={GoodHealth} className="d-block w-100" alt="" />
          </div>
          <div className="col-4 col-lg-2 d-flex align-items-center">
            <img
              src={Gender}
              alt=""
              className="d-block w-100"
            />
          </div>
          <div className="col-4 col-lg-2 d-flex align-items-center">
            <img
              src={Edu}
              className="d-block w-100"
              alt=""
            />
          </div>
          <div className="col-4 col-lg-2 d-flex align-items-center">
            <img
              src={Eco}
              className="d-block w-100"
              alt=""
            />
          </div>
          <div className="col-4 col-lg-2 d-flex align-items-center">
            <img src={Red} className="d-block w-100" alt="" />
          </div>
          <div className="col-4 col-lg-2 d-flex align-items-center">
            <img src={Partnership} className="d-block w-100" alt="" />
          </div>
        </div>
        <div className="mt-5 px-lg-5">
          <h1 className="heading-title text-center">SUPPORT A CAUSE</h1>
          <div className="row">
            <div className="col-lg-3 col-6 mt-4">
              <div className="content">
                <div className="content-overlay"></div>
                <img
                  className="content-image img d-block w-100"
                  src={Tayyari}
                  alt=""
                />
                <div className="content-details fadeIn-bottom">
                  <h3 className="content-title">Taiyari Kal Ki</h3>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-6 mt-4">
              <div className="content">
                <div className="content-overlay"></div>
                <img
                  className="content-image img d-block w-100"
                  src={Health}
                  alt=""
                />
                <div className="content-details fadeIn-bottom">
                  <h3 className="content-title">Health Can't Wait</h3>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-6 mt-4">
              <div className="content">
                <div className="content-overlay"></div>
                <img
                  className="content-image img d-block w-100"
                  src={Shiksha}
                  alt=""
                />
                <div className="content-details fadeIn-bottom">
                  <h3 className="content-title">Shiksha Na Ruke</h3>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-6 mt-4">
              <div className="content">
                <div className="content-overlay"></div>
                <img
                  className="content-image img d-block w-100 h-100"
                  src={She}
                  alt=""
                />

                <div className="content-details fadeIn-bottom">
                  <h3 className="content-title">She Can Fly</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="container-fluid bg-award py-2 mb-5">
        <div className="row mx-lg-5 my-5">
          <div className="col-lg-6 col-sm-12 px-5">
            <h1 className="heading-title">
              Business World Social Impact Leadership Award To Co-Founder
            </h1>
            <p>
              Hope Haven's Co-Founder & Executives Trustiee Mr. xyz was recognised for his contribution towards bringing
              sustainable change in the lives of less priviledges children and
              family through Hope Haven
            </p>
          </div>
          <div className="col-lg-6 col-sm-12">
            <img src={Placeholder} alt="" className="img d-block w-100" />
          </div>
        </div>
      </section>
      {/* FOOTER */}
      <Footer />
    </div>
  );
};

export default Home;
