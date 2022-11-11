import React from 'react'
import './Blogs.css';
import Footer from './Footer';
import BgCircles from './BgCircles';
import NavBar from './NavBar'; 


const Card = () => {
    return (
        <div className="cardB">
          <a href="/" className="infos">
            <p className="text">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse,
              cum.
            </p>
            <span className="date">August 12, 2021</span>
          </a>
          <img
            src="https://png.pngtree.com/thumb_back/fh260/background/20200714/pngtree-modern-double-color-futuristic-neon-background-image_351866.jpg"
            alt="blog profile"
          />
        </div>
    )
}



function Blogs() {
    return (
        <>
            <NavBar />
             
            <div className="blogs">
                <Card />
                <Card /> 
                <Card /> 
            </div>
        
            <BgCircles />
            <Footer />
        </>
    )
}

export default Blogs
