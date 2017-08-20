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
                <h3>Process</h3>
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
        { imgSrc: require("../../imgs/Bucketlist/home.png"), title: "A Drop in the Bucket", role: "Front-end / Back-end / UX+UI Design", github: "https://github.com/NessaDevelops/A-Drop-in-the-Bucket",
          summ: "A Drop in the Bucket is a web application that allows a user to create lists that goals are added to. These goals are aspirations that the user wants to accomplish in their lifetime. A list can either be made for solo use or completed with others. After completing a goal it is then stored as a memory where the user can leave a description & pictures to remember the event.",
          process: "I designed & programmed the web application in a total of 8 weeks while learning MEAN stack in the process. The designs were crafted using Adobe Illustrator, Indesign, & Photoshop. The front-end was done with Angular as I wanted to make it a SPA. The back-end was Node/Express with MongoDB for the database. This project included user accounts & a map API using OpenLayers.  This allowed the user to either create a custom goal or select premade goals based on location from a map. When the goal is completed the user is able to turn the goal into a memory with a description & photos - allowing them to keep a memory album of the goals they have finished.",
          tech: "Angular, Express, Node, MongoDB, JQuery, Mongoose, Nodemon, SASS, InDesign, PhotoShop, Illustrator, Grunt",
          imgs: [ 
            require("../../imgs/Bucketlist/home.png"), 
            require("../../imgs/Bucketlist/home2.png"),
            require("../../imgs/Bucketlist/home3.png"),
            require("../../imgs/Bucketlist/signup.png"),
            require("../../imgs/Bucketlist/login.png"),
            require("../../imgs/Bucketlist/create-bucketlist.png"),
            require("../../imgs/Bucketlist/create-goal.png"),
            require("../../imgs/Bucketlist/bucketlist.png"),
            require("../../imgs/Bucketlist/memory-album.png"),
            require("../../imgs/Bucketlist/memory.png"),
            require("../../imgs/Bucketlist/achievement.png")
          ] },
        { imgSrc: require("../../imgs/Primary/splash.png"), title: "Primary Services", role: "UX+UI Design", github: "",
          summ: "Primary Services contacted me to work on redesigning & implementing a new way to search & view jobs on their current website. Their job search linked to Job Diva's web application & they wanted to have their own job search located on their website.",
          process: "I researched UI & UX practices used by other successful job recruitment company websites & showed my findings to the team I was working with at Primary Services. I crafted mockups using Illustrator & InDesign. We had meetings to discuss the process & I made revisions based on the feedback. I wanted to keep the color scheme & overall feel of the current website while giving the new designs a more modern feel that will also mesh if Primary Services were to modernized their website design in the future.",
          tech: "Illustrator, InDesign",
          imgs: [ 
            require("../../imgs/Primary/splash.png"),
            require("../../imgs/Primary/jobsearch.png")
          ]
        },
        { imgSrc: require("../../imgs/Chronicled/signup1.png"), title: "Chronicled", role: "Front-end / UX+UI Design", github: "https://github.com/chronicled/partner-portal-web",
          summ: "Chronicled needed to hire interns for a team to work on their partner web portal. The partner web portal was not styled yet so the CSS needed to be added & th sign up flow was not complete.",
          process: "For this project I learned React & Redux. This was the first time I had worked with a flux based technology. I worked with the designer to add his design mockups to the partner web portal using HTML5, CSS3, & flexbox -specifically. Three steps for the sign up flow needed to be added. I updated & deleted some of the existing components that were uneccessary while creating new ones. I created the logic & design for the password  strength indicator.",          
          tech: "React, ES6, Redux, Webpack",
          imgs: [
            require("../../imgs/Chronicled/signup1.png"),
            require("../../imgs/Chronicled/signup2.png"),
            require("../../imgs/Chronicled/signup3.png")
          ]
        },
        { imgSrc: require("../../imgs/Pugger/pugger.png"), title: "Pugger", role: "Front-end / UX+UI Design", github: "https://github.com/NessaDevelops/Pugger",
          summ: "Pugger was the first web game that I created. I loved Frogger growing up so I wanted to do a spin on it. Pugger is a game where you attempt to cross a river while avoiding poops in the water. The water flows in both directions while the poops flow in both directions with the water. The objective of the game is to cross to the other side of land without getting hit by poops or falling off of the water.",
          process: "For this project I learned Createjs & how to make sprites. I created the sprites & game graphics with Illustrator. I decided to create my own collizion detection for this game.",          
          tech: "JavaScript, CreateJS, Illustrator",
          imgs: [
            require("../../imgs/Pugger/pugger.png")
          ]
        },
        { imgSrc: require("../../imgs/NuGalega/nugalega.png"), title: "NuGalega", role: "Front-end / UX+UI Design", github: "https://github.com/erob2620/NUGalega",
          summ: "NUGalega was a game I created with another student where the user controls a ship & shoots attacking ships that are shooting back. The objective is to destroy the opposing ships while avoiding their bullets.",
          process: "I implemented the shop for the ship, scoring system & the UI. At the end of each round the user is able to go to to the shop to upgrade their ship & based on their selection the ships health, maximum heath, damage output, & bullet speed can be upgraded. I used Illustrator to create the UI elements. The game was created with CreateJS.",          
          tech: "JavaScript, CreateJS",
          imgs: [
            require("../../imgs/NuGalega/nugalega.png")
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
