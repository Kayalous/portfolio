import React, { Component } from "react";
import ReactDOM from "react-dom";
import Clipboard from "react-clipboard.js";
import {
  FaAngleDoubleDown,
  FaCode,
  FaJsSquare,
  FaReact,
  FaAngular,
  FaPython,
  FaJava,
  FaDatabase,
  FaGamepad,
  FaBootstrap,
  FaCss3Alt,
  FaHtml5,
  FaExternalLinkAlt,
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaRegEnvelope,
  FaGithubSquare,
  FaFile,
  FaFireAlt,
  FaPhp,
  FaLaravel,
  FaWordpress,
  FaFigma,
  FaAdobe,
  FaVuejs,
} from "react-icons/fa";
import { IoMdArrowDropright } from "react-icons/io";
import "jquery";
import "popper.js";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import Typewriter from "typewriter-effect";
import "./styles.css";
import AOS from "aos";
import "./aos.css";
import marekimg from "./img/marek.jpg";
import rihannaimg from "./img/rihanna.jpg";
import newsimg from "./img/news.jpg";
import gamershareimg from "./img/gamershare.png";
import eduimg from "./img/edu.png";
import veedrosimg from "./img/veedros.png";
import twitterimg from "./img/twitter.png";

AOS.init();
class Navbar extends React.Component {
  render() {
    return (
      <nav className="navbar navbar-expand-sm navbar-light navbar-bg-theme-mine bg-light">
        <div className="navbar-header ml-auto">
          <ul className="navbar-nav ml-auto mt-2 mt-lg-0 navbar-inner">
            <li className="nav-item">
              <a className="nav-link nav-link-mine" href="#skills">
                <div className="nav-icon">
                  <IoMdArrowDropright />
                </div>
                Skills
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link nav-link-mine" href="#projects">
                <div className="nav-icon">
                  <IoMdArrowDropright />
                </div>
                Projects
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link nav-link-mine" href="#about">
                <div className="nav-icon">
                  <IoMdArrowDropright />
                </div>
                About
              </a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}
class Copy extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: this.props.name,
      icon: this.props.icon,
      link: this.props.link,
    };
  }
  onCopySuccess = () => {
    const originalName = this.state.name;
    this.setState({ name: "Copied!" });
    let nameReset = () => {
      this.setState({ name: originalName });
      clearInterval(timer);
    };
    let timer = setInterval(() => nameReset(), 3000);
  };
  render() {
    return (
      <Clipboard
        component="a"
        button-href="#"
        data-clipboard-text={this.state.link}
        button-title="Click to copy."
        onClick={this.onCopySuccess}
      >
        <div className="contact-icon">{this.state.icon}</div>
        <h4>{this.state.name}</h4>
      </Clipboard>
    );
  }
}
class Hero extends React.Component {
  contacts = [
    {
      name: "Email",
      icon: <FaRegEnvelope />,
      link: "aelkayal88@gmail.com",
      copy: true,
    },
    {
      name: "Github",
      icon: <FaGithubSquare />,
      link: "https://github.com/Kayalous?tab=repositories",
      copy: false,
    },
    {
      name: "Resume",
      icon: <FaFile />,
      link:
        "https://drive.google.com/open?id=1riJQGIG4dDGCGJ-ponE5MgJCgxaKReKQ",
      copy: false,
    },
    {
      name: "LinkedIn",
      icon: <FaLinkedin />,
      link: "https://www.linkedin.com/in/abdulrhmanelkayal/",
      copy: false,
    },
  ];
  render() {
    return (
      <section className="hero-mine">
        <h1>
          <Typewriter
            options={{
              delay: 60,
            }}
            onInit={(typewriter) => {
              typewriter
                .changeDeleteSpeed(20)
                .typeString("Hello, I'm <span>Abdulrhman Elkayal</span><br/>")
                .pauseFor(200)
                .typeString("Full-St")
                .deleteChars(2)
                .typeString("stack w")
                .pauseFor(100)
                .deleteChars(8)
                .typeString(" Stack Web Developer.")
                .start();
            }}
          />
        </h1>
        <div className="row w-100 mt-5">
          <div className="contacts col-12 mx-auto">
            {this.contacts.map((contact, i) => (
              <div className="contact" key={i}>
                {contact.copy ? (
                  <Copy
                    link={contact.link}
                    icon={contact.icon}
                    name={contact.name}
                  />
                ) : (
                  <a
                    href={contact.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="contact-icon">{contact.icon}</div>
                    <h4>{contact.name}</h4>
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
        <a href="#skills" className="down-icon">
          <FaAngleDoubleDown />
        </a>
      </section>
    );
  }
}
class Slices extends React.Component {
  render() {
    return (
      <div className="slices">
        <div className="slice-1" />
        <div className="slice-2" />
        <div className="slice-3" />
      </div>
    );
  }
}
class Projects extends React.Component {
  proj = [
    {
      name: "Veedros",
      madeWith: [
        <FaLaravel className="project-icon laravel" />,
        <FaHtml5 className="project-icon html5" />,
        <FaCss3Alt className="project-icon css3" />,
        <FaBootstrap className="project-icon bootstrap" />,
        <FaJsSquare className="project-icon js" />,
      ],
      desc: `Veedros is an online educational platform that empowers course creators to share and monitize their courses.`,
      image: veedrosimg,
      previewLink: "https://veedros.com",
      githubLink: false,
    },
    {
      name: "Twitter Clone",
      madeWith: [
        <FaLaravel className="project-icon laravel" />,
        <FaHtml5 className="project-icon html5" />,
        <FaCss3Alt className="project-icon css3" />,
        <FaVuejs className="project-icon" style={{ color: "#41B883" }} />,
        <FaJsSquare className="project-icon js" />,
      ],
      desc: `A simple Twitter clone made using TailwindCSS, VueJS, and Laravel.`,
      image: twitterimg,
      previewLink: "https://twitter.elkayal.me",
      githubLink: "https://github.com/Kayalous/twitter-clone",
    },
    {
      name: "Gamer Share",
      madeWith: [
        <FaFireAlt className="project-icon js" />,
        <FaHtml5 className="project-icon html5" />,
        <FaCss3Alt className="project-icon css3" />,
        <FaBootstrap className="project-icon bootstrap" />,
        <FaJsSquare className="project-icon js" />,
      ],
      desc: `I made this using Firebase. This project features a fully fledged login system, and google classrom like rooms where anyone can create, and manage their own rooms and invite their friends into them.
       I also used IGDB which is an API provider that helped me procedually insert images for the games without the users having to upload them theirselves.`,
      image: gamershareimg,
      previewLink: "https://gamershare.elkayal.me",
      githubLink: false,
    },
    {
      name: "Marek",
      madeWith: [
        <FaHtml5 className="project-icon html5" />,
        <FaCss3Alt className="project-icon css3" />,
        <FaBootstrap className="project-icon bootstrap" />,
        <FaJsSquare className="project-icon js" />,
      ],
      desc: `Marek is a resposive sample portfolio created to showcase my
      knowledge in HTML 5, CSS 3, and Bootstrap 4.`,
      image: marekimg,
      previewLink: "https://marek.elkayal.me",
      githubLink: "https://github.com/Kayalous/Marek",
    },
    {
      name: "Edu",
      madeWith: [
        <FaHtml5 className="project-icon html5" />,
        <FaCss3Alt className="project-icon css3" />,
        <FaBootstrap className="project-icon bootstrap" />,
        <FaJsSquare className="project-icon js" />,
      ],
      desc: `Edu is a fully responsive sample online education website.`,
      image: eduimg,
      previewLink: "https://edu.elkayal.me",
      githubLink: "https://github.com/Kayalous/edu",
    },

    {
      name: "Rihanna",
      madeWith: [
        <FaAngular className="project-icon angular" />,
        <FaHtml5 className="project-icon html5" />,
        <FaCss3Alt className="project-icon css3" />,
        <FaBootstrap className="project-icon bootstrap" />,
        <FaJsSquare className="project-icon js" />,
      ],
      desc: `Rihanna is a SPA made with Angular 8. this site contains many of
      the basic Angular functions, including routing, bindings,
      services, and many more.`,
      image: rihannaimg,
      previewLink: "https://rihanna.elkayal.me",
      githubLink: "https://github.com/Kayalous/Rihanna",
    },
    // {
    //   name: "News",
    //   madeWith: [
    //     <FaHtml5 className="project-icon html5" />,
    //     <FaCss3Alt className="project-icon css3" />,
    //     <FaBootstrap className="project-icon bootstrap" />,
    //     <FaJsSquare className="project-icon js" />,
    //   ],
    //   desc: `Used RESTful API (NewsAPI) to fetch current news, and allow users to filter them based on the genre, and the country of publication.`,
    //   image: newsimg,
    //   previewLink: "https://news.elkayal.me",
    //   githubLink: "https://github.com/Kayalous/News",
    // },
  ];
  render() {
    return (
      <section className="projects" id="projects">
        <div className="container container-mine">
          <h1
            className="projects-header mt-5"
            data-aos="fade-up"
            data-aos-once="true"
          >
            Things I've <span>worked</span> on
          </h1>
          <div className="row mt-5 mb-2 d-flex justify-content-center align-items-center">
            {this.proj.map((project, i) => (
              <div
                className="col-md-12 d-flex justify-content-center align-items-center overflow-hidden"
                data-aos="zoom-in"
                data-aos-once="true"
                key={i}
              >
                <div className="project">
                  <div className="col-12 col-lg-6 project-img">
                    <img
                      src={project.image}
                      alt={project.name}
                      className="img-fluid"
                    />
                    <div className="project-overlay d-none d-lg-flex">
                      <a
                        className="btn btn-project-preview p-3 mb-4"
                        href={project.previewLink}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Live preview <FaExternalLinkAlt />
                      </a>
                      <a
                        className={`btn btn-project-preview p-3${
                          !project.githubLink ? " disabled" : ""
                        }`}
                        href={project.githubLink ? project.githubLink : "#"}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        View source <FaGithub />
                      </a>
                    </div>
                  </div>
                  <div className="col-12 col-lg-6">
                    <h1>Project: {project.name}</h1>
                    <h3 className="project-tools-used">
                      Made with: {project.madeWith}
                    </h3>
                    <h5 className="project-desc">{project.desc}</h5>
                    <div className="w-100 d-flex d-lg-none align-items-center justify-content-center flex-column my-4">
                      <a
                        className="btn btn-project-preview p-3 m-2"
                        href={project.previewLink}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Live preview <FaExternalLinkAlt />
                      </a>
                      <a
                        className={`btn btn-project-preview p-3 m-2${
                          !project.githubLink ? " disabled" : ""
                        }`}
                        href={project.githubLink ? project.githubLink : "#"}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        View source <FaGithub />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
}
class Skills extends React.Component {
  skills = [
    {
      title: "Front End Development",
      desc: "HTML5, CSS3, Sass, Bootstrap 4, TailwindCSS",
      Icon: <FaCode className="skill-icon code" />,
      fadeInDelay: 0,
      fadeInDirection: "",
    },
    {
      title: "JavaScript",
      desc: "jQuery, Babel, TypeScript",
      Icon: <FaJsSquare className="skill-icon js" />,
      fadeInDelay: 0,
      fadeInDirection: "",
    },
    {
      title: "Front End JS Frameworks",
      desc: "React, Angular, Vue",
      Icon: <FaReact className="skill-icon react" />,
      fadeInDelay: 0,
      fadeInDirection: "",
    },
    {
      title: "Back End Development",
      desc: "PHP",
      Icon: <FaPhp className="skill-icon python" />,
      fadeInDelay: 0,
      fadeInDirection: "",
    },
    {
      title: "Back End Frameworks",
      desc: "Laravel",
      Icon: <FaLaravel className="skill-icon laravel" />,
      fadeInDelay: 0,
      fadeInDirection: "",
    },
    {
      title: "Database managment systems",
      desc: "MySQL, SQLite, MongoDB, Firebase/Firestore",
      Icon: <FaDatabase className="skill-icon db" />,
      fadeInDelay: 0,
      fadeInDirection: "",
    },
    {
      title: "Content Management Systems",
      desc: "Wordpress",
      Icon: <FaWordpress className="skill-icon python" />,
      fadeInDelay: 0,
      fadeInDirection: "",
    },
    {
      title: "Design tools",
      desc: "Adobe XD, Illustrator, Figma",
      Icon: <FaAdobe className="skill-icon adobe" />,
      fadeInDelay: 0,
      fadeInDirection: "",
    },
  ];

  render() {
    for (let i = 0; i < this.skills.length - 1; i++) {
      this.skills[i + 1].fadeInDelay += this.skills[i].fadeInDelay + 100;
    }

    for (let i = 0; i < this.skills.length; i++) {
      if (i % 2 === 0) {
        this.skills[i].fadeInDirection = "fade-right";
      } else {
        this.skills[i].fadeInDirection = "fade-left";
      }
    }

    return (
      <section className="skills" id="skills">
        <div className="container skills-container">
          <h1
            className="skills-header mb-5"
            data-aos="fade-up"
            data-aos-once="true"
          >
            I <span>enjoy</span> working with
          </h1>
          <div className="row mt-5">
            {this.skills.map((skill, i) => (
              <div
                className="col-lg-6 d-flex justify-content-center align-items-center overflow-hidden"
                data-aos={skill.fadeInDirection}
                data-aos-once="true"
                data-aos-delay={skill.fadeInDelay}
                key={i}
              >
                <div className="skill">
                  {skill.Icon}
                  <br />
                  <h3>{skill.title}</h3>
                  <h6>{skill.desc}</h6>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
}
class About extends React.Component {
  render() {
    return (
      <section className="about" id="about">
        <div className="container my-5">
          <div className="about-inner">
            <h1
              className="about-header mt-5"
              data-aos="fade-up"
              data-aos-once="true"
            >
              About <span>me</span>
            </h1>
            <br />
            <div className="col-12">
              <div className="about-card mt-5">
                <h2
                  data-aos="fade-up"
                  data-aos-once="true"
                  data-aos-delay="400"
                >
                  <span className="about-block developer noselect">
                    Fullstack Developer
                  </span>
                  ,{" "}
                  <span className="about-block freelancer noselect">
                    Freelancer
                  </span>
                  , and{" "}
                  <span className="about-block designer noselect">
                    Designer
                  </span>
                  .
                  <br />
                  I'm driven by the desire to design and build things. I'm
                  passionate about learning and I love challenging myself to
                  create interesting, fun things.
                </h2>
                <h2
                  data-aos="fade-up"
                  data-aos-once="true"
                  data-aos-delay="800"
                >
                  Outside of programming, I enjoy{" "}
                  <span className="about-block reading noselect">reading</span>,{" "}
                  <span className="about-block music noselect">music</span>, and{" "}
                  <span className="about-block games noselect">
                    video games
                  </span>
                  .
                </h2>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
class Footer extends React.Component {
  render() {
    let year = new Date().getFullYear();
    return (
      <footer className="footer mt-5">
        <h4>
          Abdulrhman Elkayal | <span>©{year}</span>{" "}
        </h4>
      </footer>
    );
  }
}
class App extends React.Component {
  render() {
    return (
      <div className="global-body" id="customScrollbar">
        <Slices />
        <Navbar />
        <Hero />
        <Skills />
        <Projects />
        <About />
        <Footer />
      </div>
    );
  }
}
ReactDOM.render(<App />, document.getElementById("root"));
