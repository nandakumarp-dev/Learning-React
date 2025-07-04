import React from 'react'
import Navbar from './Navbar'
import Hero from './Hero'
import Projects from './Projects'

function App() {
  let name = 'Elon Musk'
  
  let designation = 'Python Django Developer'
  
  let summary = `I am a passionate Python Django developer with a strong foundation in backend development
                  and a keen interest in building scalable, secure, and efficient web applications. With hands-on experience
                  in Django, RESTful APIs, MySQL/PostgreSQL, and user authentication using JWT and OAuth,
                  I have developed and deployed full-stack web applications from scratch.
                  My projects often involve integrating third-party APIs, handling complex database queries, 
                  and managing data securely using Django's ORM.`

  let projects = [

        {
            title : 'Learning Management System',
            company : 'TCS',
            link : '127.0.0.1:8000/link1/',
            techs : ['HTML','CSS','JS','Django']
        },
        {
            title : 'Travel Bloom',
            company : 'Infosys',
            link : '127.0.0.1:8000/link2/',
            techs : ['Python','Jira','Bitbucket','Django']
        },
        {
            title : 'Farm To Home',
            company : 'UST',
            link : '127.0.0.1:8000/link3/',
            techs : ['Django','CSS','JS','Django']
        }
    ]

  return (
    <div>
      <Navbar/>
      <Hero name={name} designation={designation} summary={summary}/>
      <Projects projects={projects}/>
    </div>
  )
}

export default App