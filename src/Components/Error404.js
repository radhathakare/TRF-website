import oops404Error from '../Resources/oops-404-error.svg'
import React from 'react'
import './Error404.css'
import error404Bkgrnd from '../Resources/error404Bkgrnd.png'

function Error404() {
    return (
        <>
        <div className="error404Maindiv">
          <img src={error404Bkgrnd} className="oops404ErrorBkgrnd" alt="Oops 404 Error"/>
          <img src={oops404Error} className="oops404Error" alt="Oops 404 Error"/>
        </div>
        </>
    );
  }

export default Error404;