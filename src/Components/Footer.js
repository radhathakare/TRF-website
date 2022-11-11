import React from 'react'
import './Footer.css' 
   

function Footer() {
  return ( 
    <footer class="container-fluid fbox">
        <div class="row  my-5 mx-1 mx-lg-5">
            <div class="col-lg-4 pb-lg-4  box">
                <div class="info mb-3 mt-1">
                    <span class="py-4 px-2">
                        <i class="fas fa-map-marker-alt"></i>
                    </span>
                    <span class="p-1 txt" >VIT Pune 431001</span>
                </div>
                <div class="info  mb-3 mt-1">
                    <span class="py-4 px-2"><i class="fas fa-phone-alt"></i></span>
                    <span class="p-1 txt">97358266486</span>
                </div>
                <div class="info  mb-3 mt-1">
                    <span class="py-4 px-2"><i class="fas fa-paper-plane"></i></span>
                    <span class="p-1 txt" ><a  href="/" style={{"text-decoration": "none","color": "white;"}}>theroboticsforum@vit.edu</a></span>
                </div>
            </div>
    
            <div class="col-lg-4 pb-lg-4  text-center box">
                <h2>
                    <i class="fas fa-prescription mx-2"></i>
                    <span>Optimistic Nerds</span>
                </h2>
                <p class="d-block mt-3">
                    <small style={{"opacity": "0.75"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto unde nobis maxime esse quos.</small>
                </p>
            </div>
 
            <div class="col-lg-4 pb-4  box"> 
               <section class="r">
                <h3>Let's Connect</h3>
               
                <div class="icons">
                    <a href="/" class="social-icon">
                        <i class="fab fa-facebook-f"></i>
                    </a>
                    <a href="/" class="social-icon">
                        <i class="fab fa-instagram"></i>
                    </a>
                    <a href="/" class="social-icon">
                        <i class="fab fa-twitter"></i>
                    </a>
                    <a href="/" class="social-icon">
                        <i class="fab fa-twitter"></i>
                    </a>
                    <a href="/" class="social-icon">
                        <i class="fab fa-linkedin-in"></i>
                    </a>
                </div>
               </section>
            </div>
            
            <hr/>

            <div class="col-12 mt-4 text-center " style={{"opacity": "0.5", "fontSize": "small"}}>
                2021 @copywrites reseved and claimed by 
                <a href="/" >TRF VIT Pune</a>
            </div>
        </div>
    </footer>

  );
}

export default Footer
