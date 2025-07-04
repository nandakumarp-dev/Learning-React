import React from 'react'
import PortfolioImage from './assets/images/profile-pic.png'

function Hero({name,designation,summary}) {

  return (
    <div className='row'>
        <div className="col-8">

            <div className="col-3">

                <img className="profile-img" src={PortfolioImage} alt="" />

            </div>
            <div className="col-5">

                <h3>{name}</h3>
                <h5>{designation}</h5>
                <p>{summary}</p>

            </div>

        </div>
    </div>
  )
}

export default Hero