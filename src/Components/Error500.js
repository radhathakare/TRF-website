import oops500Error from '../Resources/oops-500-error.svg'
import React from 'react'
import './Error500.css'
import error500Bkgrnd from '../Resources/error500Bkgrnd.png'

function Error500() {
    return (
        <>
        <div className="error500Maindiv">
          <img src={error500Bkgrnd} className="oops500ErrorBkgrnd" alt="Oops 500 Error"/>
          <img src={oops500Error} className="oops500Error" alt="Oops 500 Error"/>
        </div>
        </>
    );
  }

export default Error500;