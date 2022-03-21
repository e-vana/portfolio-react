import Badge from "./Badge";
import DemoCarousel from "./Carousel";
import "./Home.css";
import ProjectCard from "./ProjectCard";
function Home() {
  const projects = [
    {
      title: "Floor & Decor - Daily Safety Design Studio",
      usage: "Contract Work",
      para1: "This application allows employees at certain branches of the company to fill out a daily safety audit questionairre for their store location.  Users can also sign in with their credentials and generate and view reporting metrics regarding the completion of the safety audits across the company.",
      para2: "I created this application doing contract work for a small media agency for the company Floor & Decor.  This project was created in Vue2, Vue Router, Vuex, HTML and CSS on the frontend.  The backend webserver is created in Express and uses a remote MongoDB database (hosted on Mongo Atlas).  Emails are sent using a third party API called Mailgun.  Scheduling is done using Node Cron.  Reports are generated with an HTML template to PDF library.",
      image: `/images/fd-design-studio.jpg`,

      alt: `Floor & Decor - Daily Safety Design Studio`
    },
    {
      title: "Home Depot - Safety Takes Everyone",
      usage: "Contract Work",
      para1: "A 'scratch off' style prize redemption application for Home Depot employees across the United States. \n Codes were generated and distributed to stores throughout the country where employees can then redeem them for prizes using this application.",
      para2: "I created this application doing contract work for a small media agency for the company Home Depot.  This project was created in Vue2, Vue Router, Vuex, HTML and CSS on the frontend.  The backend webserver is created in Express and uses a remote MongoDB database (hosted on Mongo Atlas).",
      image: `/images/hd-safety-takes-everyone.jpg`,
      alt: `Home Depot - Safety Takes Everyone`
    },
    {
      title: "Mortgage Calculator",
      usage: "Personal Project",
      para1: `A simple mortgage calculator built in VueJS.  I mostly made this to play around with animated transitions and building out a nice looking form, check it out and let me know what you think.`,
      para2: `This project uses the VueJS cli and several javascript functions to calculate an estimated monthly mortage payment.`,
      image: `/images/mortgage_calc.png`,
      github: `https://github.com/e-vana/mortgage-calculator`,
      alt: `Mortgage Calculator Application`,
      deployed: `https://jovial-lamport-555d10.netlify.app/`,
    },
    {
      title: "Guitar Center Scraper",
      usage: "Personal Project",
      para1: `I built this application as a proof of concept to monitor the used classified sections of the Guitar Center website.  They don't have alerts set up for notifiying users for items at certain price ranges, so I thought it would be an interesting idea to build out.`,
      para2: `This project uses Puppeteer to scrape the website, ExpressJS for an API and scraping logic and MongoDB for a database.  The frontend is a small UI built out in VueJS using the Vue Router and Vuex.`,
      image: `/images/gcWatcher.gif`,
      github: `https://github.com/e-vana/GC-Scraper`,
      alt: `Guitar Center Scraper GIF`,
    },
    {
      title: "Vue Login",
      usage: "Personal Project",
      para1: `This application is a login & authentication system.  Users can register accounts, login, get a token to validate other requests, reset their passwords, and get email notifications for certain tasks.`,
      para2: `This project is build in ExpressJS, Vue and MongoDB.  It utilizes JSON webtoken for authentication, bootstrap for styling and mailjet to send emails.`,
      image: `/images/vuelogin.png`,
      github: `https://github.com/e-vana/vue-login-template-public`,
      alt: `Vue Login Splashpage`,
    },
  ];

  return (
    <div>
      <div className="name-container">
        <div className="name-wrapper">
          <h1>Evan Vana</h1>
          <h2>Javascript Developer</h2>
          <div className="button-bar">
            <Badge
              backgroundColor={`var(--blue)`}
              color={`white`}
              text={`about`}
              scrollTo={"about"}
            ></Badge>
            <Badge
              backgroundColor={`var(--orange)`}
              color={`white`}
              text={`projects`}
              scrollTo={"projects"}
            ></Badge>
            <Badge
              backgroundColor={`var(--purple)`}
              color={`white`}
              text={`UI`}
              scrollTo={"ui"}
            ></Badge>
          </div>
        </div>
      </div>
      <div className="content-container">
        <div className="about-container" id="about">
          <h1>About</h1>
          <p>Hey there!  I'm a Javascript Developer who currently lives in West Palm Beach, Florida.  I have a background in Electrical Engineering and worked for several years in the radio broadcast world working as a Broadcast and IT Engineer for the media company iHeartMedia.  I'm currently working on a masters degree in Software Engineering from <a href="https://kennesaw.edu/">Kennesaw State University</a> and have been working as a contract Javascript developer for almost a year now.</p>
          <p>
            I'm primarily a Vue developer but I've started to get more
            acquainted with the React ecosystem. If I'm writing a backend I
            always reach for Express and MongoDB.  I'm currently spending a lot of time trying to learn Typescript and learning about the transition from Vue2 to Vue3.
          </p>

        </div>
        <div className="contact-container" id="contact">
          <h1>Contact</h1>
          <p>
            Have any questions or want to reach out?  I'd love to chat, feel free to contact me on{" "}
            <a href="https://www.github.com/e-vana">Github</a> or{" "}
            <a href="https://www.linkedin.com/in/evanvana/">LinkedIn</a> or shoot me an email <a href="mailto:evjava@gmail.com">here.</a>
          </p>
        </div>
        <div className="projects-container" id="projects">
          <h1>Projects</h1>
          {projects.map((e) => {
            return (
              <ProjectCard
                title={e.title}
                para1={e.para1}
                para2={e.para2}
                image={e.image}
                github={e.github}
                alt={e.alt}
                deployed={e.deployed}
                usage={e.usage}
              ></ProjectCard>
            );
          })}
        </div>
        <div className="ui-container" id="ui">
          <h1>UI & Design </h1>
          <p>Below are some small layout and image designs mostly made in Figma.</p>
          <DemoCarousel></DemoCarousel>
        </div>
        {/* <div className="ui-container" id="ui">
          <h1>UI & Figma Design</h1>
          <p>
            Want to see some UI mockups / Figma sketches I've created?{" "}
            <a href="https://imgur.com/a/f9x30jA">Check it out here</a>
          </p>
        </div> */}
      </div>
    </div>
  );
}

export default Home;
