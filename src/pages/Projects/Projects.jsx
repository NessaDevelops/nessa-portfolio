import React, { Component } from 'react';
import NavBar from '../../components/NavBar';
import Modal from '../../components/Modal';
import Carousel from '../../components/Carousel';
import './Projects.css';

class Tile extends Component {
  constructor(props) {
    super(props)
    this.state = { isModalOpen: false }
  }

  openModal() {
    document.body.style.overflowY = "hidden";
    this.setState({ isModalOpen: true })
  }

  closeModal() {
    document.body.style.overflowY = "scroll";
    this.setState({ isModalOpen: false })
  }

  render() {
    const tileStyle = {
      background: 'url(' + this.props.src + ') no-repeat center center',
      backgroundSize: 'cover'
    };
    return (
      <div>
        <div className="tile" onClick={() => this.openModal()}>
          <div className="img" style={tileStyle} ></div>
          <div className="text">
            <h2>{this.props.title}</h2>
            <p className="view">VIEW PROJECT</p>
          </div>
        </div>
        <Modal isOpen={this.state.isModalOpen} onClose={() => this.closeModal()}>
            <div className="close" onClick={() => this.closeModal()} />
            <div className="project-wrapper">
              <h2>{this.props.title}</h2>
              <p>{this.props.role}</p>
              <a href={this.props.github}>GitHub</a>
              <Carousel imgs={this.props.imgs}></Carousel>
              <div className="summ">
                <h3>Project Summary</h3>
                <p>{this.props.summ}</p>
              </div>
              <div className="process">
                <h3>The Process</h3>
                <p>{this.props.process}</p>
              </div>
              <div className="tech">
                <h3>Technologies Involved</h3>
                <p>{this.props.tech}</p>
              </div>
            </div>
        </Modal>
      </div>
    );
  }
};

Tile.propTypes = {
  src: React.PropTypes.string.isRequired,
  title: React.PropTypes.string.isRequired,
  role: React.PropTypes.string.isRequired,
  github: React.PropTypes.string.isRequired,
  imgs: React.PropTypes.arrayOf(String),
  summ: React.PropTypes.string.isRequired,
  process: React.PropTypes.string.isRequired,
  tech: React.PropTypes.string.isRequired
}

class TileList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tiles: [
        { imgSrc: "/static/media/home.fdaef3db.png", title: "A Drop in the Bucket", role: "Front-end / Back-end / UX+UI Design", github: "https://github.com/NessaDevelops/A-Drop-in-the-Bucket",
          summ: "A Drop in the Bucket is a web application that allows a user to create lists that goals are added to. These goals are aspirations that the user wants to accomplish in their lifetime. A list can either be made for solo use or completed with others. After completing a goal it is then stored as a memory where the user can leave a description & pictures to remember the event.",
          process: "I designed & programmed the web application in a total of 8 weeks while learning MEAN stack in the process. The designs were crafted using Adobe Illustrator, Indesign, & Photoshop. The front-end was done with Angular as I wanted to make it a SPA. The back-end was Node/Express with MongoDB for the database. This project included user accounts & a map API using OpenLayers.  This allowed the user to either create a custom goal or select premade goals based on location from a map. When the goal is completed the user is able to turn the goal into a memory with a description & photos - allowing them to keep a memory album of the goals they have finished.",
          tech: "Angular, Express, Node, MongoDB, JQuery, Mongoose, Nodemon, SASS, InDesign, PhotoShop, Illustrator, Grunt",
          imgs: [ 
            "/static/media/home.fdaef3db.png", 
            "/static/media/home2.5b0b3c94.png",
            "/static/media/home3.97b2af4e.png",
            "/static/media/signup.9aab8e14.png",
            "/static/media/login.62b91427.png",
            "/static/media/create-bucketlist.7a16600c.png",
            "/static/media/create-goal.332ab29c.png",
            "/static/media/bucketlist.5c04484e.png",
            "/static/media/memory-album.f1b59e40.png",
            "/static/media/memory.0d478455.png",
            "/static/media/achievement.30d20648.png"
          ] },
        { imgSrc: "/static/media/splash.f923149e.png", title: "Primary Services", role: "UX/UI Design", github: "",
          summ: "Primary Services contacted me to work on redesigning & implementing a new way to search & view jobs on their current website. Their job search linked to Job Diva's web application & they wanted to have their own job search located on their website.",
          process: "I researched UI & UX practices used by other successful job recruitment company websites & showed my findings to the team I was working with at Primary Services. I crafted mockups using Illustrator & InDesign. We had meetings to discuss the process & I made revisions based on the feedback. I wanted to keep the color scheme & overall feel of the current website while giving the new designs a more modern feel that will also mesh if Primary Services were to modernized their website design in the future.",
          tech: "Illustrator, InDesign",
          imgs: [ 
            "/static/media/splash.f923149e.png", 
            "/static/media/jobsearch.c9024567.png"
          ]
        },
        { imgSrc: "/static/media/signup1.872c46ec.png", title: "Chronicled", role: "UX/UI Design", github: "https://github.com/chronicled/partner-portal-web",
          summ: "",
          process: "",          
          tech: "React, ES6, Redux, Webpack",
          imgs: [
            "/static/media/signup1.872c46ec.png",
            "/static/media/signup2.35575673.png",
            "/static/media/signup3.d26f55ba.png"
          ]
        },
        { imgSrc: "/static/media/pugger.4e2f6cd8.png", title: "Pugger", role: "UX/UI Design", github: "https://github.com/NessaDevelops/Pugger",
          summ: "",
          process: "",          
          tech: "JavaScript, CreateJS, Illustrator",
          imgs: [
            "/static/media/pugger.4e2f6cd8.png"
          ]
        },
        { imgSrc: "/static/media/nugalega.66ff7183.png", title: "NuGalega", role: "UX/UI Design", github: "https://github.com/erob2620/NUGalega",
          summ: "",
          process: "",          
          tech: "JavaScript, CreateJS",
          imgs: [
            "/static/media/nugalega.66ff7183.png"
          ]
        }
      ]
    }
  }
  render() {
    const tileList = this.state.tiles.map((tile, index) =>
      <Tile key={index} src={tile.imgSrc} title={tile.title} role={tile.role} github={tile.github} imgs={tile.imgs} summ={tile.summ} process={tile.process} tech={tile.tech}></Tile>
    );
    return (
      <div className="tiles">{tileList}</div>
    )
  }
};

class Projects extends Component {
  render() {
    return (
      <div className="container">
        <NavBar></NavBar>
        <div className="projects-wrapper">
          <h2>Projects</h2>
          <TileList></TileList>
        </div>
      </div>
     )
  }
};

export default Projects;
