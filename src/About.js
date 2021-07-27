import './About.css'
function About(){
  return (
    <div className="about-container">
      <div className="about-text">

        <h3>Background</h3>
        <p>I’m a self taught Javascript Developer with a background in electrical engineering and the radio braoadcast world.  I’ve spend several years in the commercial radio industry as a broadcast engineer supporting radio stations and IT infrastructure in south Florida.  Due to the changing landscape of the radio industry, I’ve decided that transitioning into the web development world is a leap I want to take.  I’ve been a hobby developer for many years and am looking to take the plunge into the industry full time.</p>

        <p>I'm primarily a Vue developer but I've started to get more acquainted with the React ecosystem.  If I'm writing a backend I always reach for Express and MongoDB.</p>
        <p>There are several examples of my projects and work below, if you have any comments or questions feel free to reach out to me.</p>

        <h3>Contact</h3>
        <p>Feel free to contact me at any of the below links:</p>
        <a href="mailto:evjava@gmail.com">Send me an Email</a> 

        <div className="button-bar">
          <a href="https://github.com/e-vana" target="_blank" rel="noopener noreferrer"><img src="images/GitHub_Logo.png" alt="github logo"></img></a>
          <a href="https://www.linkedin.com/in/evanvana/" target="_blank" rel="noopener noreferrer"><img src="images/linkedin.png" alt="linkedin logo"></img></a>
        </div>
      </div>

    </div>
  )
}

export default About;