import React from 'react'
import './Homepage.css'
import trfLogoHomepage from '../Resources/trf-logo-homepage.png'
import aboutUsImg from '../Resources/about-us-img.png'
import { Row, Col } from 'reactstrap'
import { Link } from 'react-router-dom'
import Faculty from './Faculty';
import Footer from './Footer';
import BgCircles from './BgCircles';
import NavBar from './NavBar';

function Homepage() {
    return (
        <>
        <BgCircles />


        <div className="homeBox">
        <NavBar />        
        <Row style={{margin: "0px"}} className="homepageMainDivRow" >
        <div className="homePage">
      
          <img src={trfLogoHomepage} className="trfLogoImgHomePage" alt="TRF Logo Homepage"/>
          <h1 className="trfHeadingHomePage">THE ROBOTICS FORUM</h1>
          <p className="taglineHomePage">Technology | Rigour | Faith</p>
        </div>
        </Row>
        
        <Row style={{margin: "0px"}}  className="homepageMainDivRow2" >
        <Col style={{padding: "0px"}} >
          <div className="aboutUsParaDiv about1">
            <p className="aboutUsHeading">ABOUT US</p>
            <p className="aboutUsPara">The Robotics Forum, the largest technical club of VIT Pune, with a legacy of 15 years, encourages robotic enthusiasts to spark exclusive ideas and make innovations happen. The club have earned laurels in Robocon and aced several national  competition along with conducting successful workshops with avid participants.</p>
            <Link to="/404" className="aboutUsViewOurProjects">VIEW OUR PROJECTS</Link>
          </div>
        </Col>
        <Col style={{padding: "0px"}} >
          <div className="aboutUsImgDiv about2">
            <img src={aboutUsImg} className="aboutUsImg" alt="About Us"/>
          </div>
        </Col>
        
        </Row> 
        </div>
         
         <Faculty />
        <Footer />
        </>
    );
  }


export default Homepage;