import Badge from './Badge'
import './Home.css'
import ProjectCard from './ProjectCard'
function Home() {

  const projects = [
    {
      title: 'Guitar Center Scraper',
      para1: `I built this application as a proof of concept to monitor the used classified sections of the Guitar Center website.  They don't have alerts set up for notifiying users for items at certain price ranges, so I thought it would be an interesting idea to build out.`,
      para2: `This project uses Puppeteer to scrape the website, ExpressJS for an API and scraping logic and MongoDB for a database.  The frontend is a small UI built out in VueJS using the Vue Router and Vuex.`,
      image: `/images/gcWatcher.gif`,
      github: `https://github.com/e-vana/GC-Scraper`,
      alt: `Guitar Center Scraper GIF`
    },
    {
      title: 'Vue Login',
      para1: `This application is a login & authentication system.  Users can register accounts, login, get a token to validate other requests, reset their passwords, and get email notifications for certain tasks.`,
      para2: `This project is build in ExpressJS, Vue and MongoDB.  It utilizes JSON webtoken for authentication, bootstrap for styling and mailjet to send emails.`,
      image: `/images/vuelogin.png`,
      github: `https://github.com/e-vana/vue-login-template-public`,
      alt: `Vue Login Splashpage`
    }
  ]


  return(
    <div>
      <div className="name-container">
        <div className="name-wrapper">
          <h1>Evan Vana</h1>
          <h2>Javascript Developer</h2>
          <div className="button-bar">
            <Badge backgroundColor={`var(--blue)`} color={`white`} text={`about`} scrollTo={'about'}></Badge>
            <Badge backgroundColor={`var(--orange)`} color={`white`} text={`projects`} scrollTo={'projects'}></Badge>
            <Badge backgroundColor={`var(--purple)`} color={`white`} text={`UI`}></Badge>
          </div>
        </div>
      </div>
      <div className="content-container">
        <div className="about-container" id="about">
          <h1>About</h1>
          <p>I’m a self taught Javascript Developer with a background in electrical engineering and the radio broadcast world. I’ve spend several years in the commercial radio industry as a broadcast engineer supporting radio stations and IT infrastructure in south Florida. Due to the changing landscape of the radio industry, I’ve decided that transitioning into the web development world is a leap I want to take. I’ve been a hobby developer for many years and am looking to take the plunge into the industry full time.</p>
          <p>I'm primarily a Vue developer but I've started to get more acquainted with the React ecosystem. If I'm writing a backend I always reach for Express and MongoDB.</p>
          <p>Want to reach out?  Feel free to contact me on <a href="https://www.github.com/e-vana">Github</a> or <a href="https://www.linkedin.com/in/evanvana/">LinkedIn</a></p>
        </div>
        <div className="projects-container" id="projects">
          <h1>Projects</h1>
          {projects.map((e) => {
            return <ProjectCard title={e.title} para1={e.para1} para2={e.para2} image={e.image} github={e.github} alt={e.alt}></ProjectCard>
          })}
        </div>
      </div>

    </div>
  )
}

export default Home;