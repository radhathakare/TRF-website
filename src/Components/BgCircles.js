import React from 'react'
import './BgCircles.css';


function BgCircles() {
    return (
      <>
        <div className="tl">
          <div className="bgCircles1 bgCircles"></div>
          <div className="bgCircles2 bgCircles"></div>
          <div className="bgCircles3 bgCircles"></div>
          <div className="bgCircles4 bgCircles"></div>
          <div className="bgCircles5 bgCircles"></div>
        </div>

        <div className="tr">
          <div className="tr1 bgCircles"></div>
          <div className="tr2 bgCircles"></div>
          <div className="tr3 bgCircles"></div>
          <div className="tr4 bgCircles"></div>
          {/* <div className="tr5 bgCircles"></div> */}
        </div>
      
        <div className="bl">
            <div className="bgCircles bl1"></div>
            <div className="bgCircles bl2"></div>
        </div>
        
        <div className="br">
            <div className="br1 bgCircles"></div>
            <div className="br2 bgCircles"></div>
            <div className="br3 bgCircles"></div>
            <div className="br4 bgCircles"></div>
            <div className="br5 bgCircles"></div>
        </div>

      </>
    );
}

export default BgCircles