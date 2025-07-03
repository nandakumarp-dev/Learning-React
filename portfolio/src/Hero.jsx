import React from 'react'
import PortfolioImage from './assets/images/profile-pic.png'

function Hero() {

    let name = 'Elon Musk'

    let designation = 'Python Django Developer'

    let summary = `I am a passionate Python Django developer with a strong foundation in backend development
                    and a keen interest in building scalable, secure, and efficient web applications. With hands-on experience
                    in Django, RESTful APIs, MySQL/PostgreSQL, and user authentication using JWT and OAuth,
                    I have developed and deployed full-stack web applications from scratch.
                    My projects often involve integrating third-party APIs, handling complex database queries, 
                    and managing data securely using Django's ORM.`

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