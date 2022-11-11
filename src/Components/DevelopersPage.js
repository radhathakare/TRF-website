import './DevelopersPage.css'
import React from 'react'
import {FaGithub , FaEnvelope , FaLinkedin} from 'react-icons/fa';
import Navbar from './NavBar';
import Footer from './Footer';
import BgCircles from './BgCircles';
import Test from '../Resources/squid.png'

const SocialMedia = () => {
  return(
    <ul id="icons">
            <li>
                <a href="/">
                    <FaEnvelope /> 
                </a>
            </li>
            <li>
                <a href="/">
                    <FaGithub />
                </a>
            </li>
            <li>
                <a href="/">
                    <FaLinkedin />
                </a>
            </li>
      </ul> 
  )
}

const Name = ()=>{
  return (
    <span id="NAME">
    <div class="name">
        Squid
    </div>
    <div class="surname">
        Game
    </div>
    </span> 
  )
}

const Member = ()=> {
  return ( 
    <section class="member">
      <div class="imgBox">
        <img src={Test} alt="developer" />
      </div>

      <div class="profile">
        <Name /> 
        <SocialMedia />
      </div> 
    </section>
  )
}


function DevelopersPage() {
    return (
      <>
      <BgCircles />
      <Navbar />
      <div className="devBox">
        <h1 data-outline="Our Developers"> Our Developers </h1>
        <div class="devs">
          <Member />
          <Member />
          <Member />
          <Member />
          <Member />
        </div>
      </div>
      <Footer />
      </>
    );
}

export default DevelopersPage