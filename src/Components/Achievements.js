import React from "react";
import "./Achievements.css";
import NavBar from "./NavBar";
import Footer from "./Footer";
import BgCircles from "./BgCircles";

function Achievements() {
  return (
    <>
      <NavBar />
      <div className="aBox">
        <div className="container" style={{ backgroundColor: "#07090F" }}>
          <div className="row">
            <div className="col-md-12">
              <div className="main-timeline">
                <div className="timeline">
                  <a href="/" className="timeline-content">
                    <div className="timeline-icon">
                      <i className="timeline-year">2020</i>
                    </div>
                    <h3 className="title">Web Designing</h3>
                    <p className="description">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Integer males uada tellus lorem, et condimentum neque
                      commodo
                    </p>
                  </a>
                </div>
                <div className="timeline">
                  <a href="/" className="timeline-content">
                    <div className="timeline-icon">
                      <i className="timeline-year">2019</i>
                    </div>
                    <h3 className="title">Java Script</h3>
                    <p className="description">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Integer males uada tellus lorem, et condimentum neque
                      commodo
                    </p>
                  </a>
                </div>
                <div className="timeline">
                  <a href="/" className="timeline-content">
                    <div className="timeline-icon">
                      <i className="timeline-year">2018</i>
                    </div>
                    <h3 className="title">Java Script</h3>
                    <p className="description">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Integer males uada tellus lorem, et condimentum neque
                      commodo
                    </p>
                  </a>
                </div>
                <div className="timeline">
                  <a href="/" className="timeline-content">
                    <div className="timeline-icon">
                      <i className="timeline-year">2017</i>
                    </div>
                    <h3 className="title">Java Script</h3>
                    <p className="description">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Integer males uada tellus lorem, et condimentum neque
                      commodo
                    </p>
                  </a>
                </div>
                <div className="timeline">
                  <a href="/" className="timeline-content">
                    <div className="timeline-icon">
                      <i className="timeline-year">2016</i>
                    </div>
                    <h3 className="title">Java Script</h3>
                    <p className="description">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Integer males uada tellus lorem, et condimentum neque
                      commodo
                    </p>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <BgCircles />
      <Footer />
    </>
  );
}

export default Achievements;
