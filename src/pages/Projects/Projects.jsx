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
              <p className="desc">{this.props.desc}</p>
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
  desc: React.PropTypes.string.isRequired
}

class TileList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tiles: [
        { imgSrc: "/static/media/home.fdaef3db.png", title: "A Drop in the Bucket", role: "UX/UI Design", github: "https://github.com/NessaDevelops/A-Drop-in-the-Bucket",
          desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sem lectus, lacinia eget libero non, bibendum tincidunt justo. Duis diam turpis, efficitur id euismod porttitor, pretium hendrerit velit. Nam eu eleifend augue. Suspendisse interdum est a velit finibus, sed aliquam tellus finibus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aenean feugiat velit pharetra tempus tempus. Sed pharetra non erat nec rhoncus. Cras nec turpis blandit, pulvinar urna eget, luctus nisi.",
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
          desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sem lectus, lacinia eget libero non, bibendum tincidunt justo. Duis diam turpis, efficitur id euismod porttitor, pretium hendrerit velit. Nam eu eleifend augue. Suspendisse interdum est a velit finibus, sed aliquam tellus finibus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aenean feugiat velit pharetra tempus tempus. Sed pharetra non erat nec rhoncus. Cras nec turpis blandit, pulvinar urna eget, luctus nisi.",
          imgs: [ 
            "/static/media/splash.f923149e.png", 
            "/static/media/jobsearch.c9024567.png"
          ]
        },
        { imgSrc: "/static/media/signup1.872c46ec.png", title: "Chronicled", role: "UX/UI Design", github: "https://github.com/chronicled/partner-portal-web",
          desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sem lectus, lacinia eget libero non, bibendum tincidunt justo. Duis diam turpis, efficitur id euismod porttitor, pretium hendrerit velit. Nam eu eleifend augue. Suspendisse interdum est a velit finibus, sed aliquam tellus finibus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aenean feugiat velit pharetra tempus tempus. Sed pharetra non erat nec rhoncus. Cras nec turpis blandit, pulvinar urna eget, luctus nisi.", 
          imgs: [
            "/static/media/signup1.872c46ec.png",
            "/static/media/signup2.35575673.png",
            "/static/media/signup3.d26f55ba.png"
          ]
        },
        { imgSrc: "/static/media/pugger.4e2f6cd8.png", title: "Pugger", role: "UX/UI Design", github: "https://github.com/NessaDevelops/Pugger",
          desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sem lectus, lacinia eget libero non, bibendum tincidunt justo. Duis diam turpis, efficitur id euismod porttitor, pretium hendrerit velit. Nam eu eleifend augue. Suspendisse interdum est a velit finibus, sed aliquam tellus finibus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aenean feugiat velit pharetra tempus tempus. Sed pharetra non erat nec rhoncus. Cras nec turpis blandit, pulvinar urna eget, luctus nisi.", 
          imgs: [
            "/static/media/pugger.4e2f6cd8.png"
          ]
        },
        { imgSrc: "/static/media/nugalega.66ff7183.png", title: "NuGalega", role: "UX/UI Design", github: "https://github.com/erob2620/NUGalega",
          desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sem lectus, lacinia eget libero non, bibendum tincidunt justo. Duis diam turpis, efficitur id euismod porttitor, pretium hendrerit velit. Nam eu eleifend augue. Suspendisse interdum est a velit finibus, sed aliquam tellus finibus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aenean feugiat velit pharetra tempus tempus. Sed pharetra non erat nec rhoncus. Cras nec turpis blandit, pulvinar urna eget, luctus nisi.", 
          imgs: [
            "/static/media/nugalega.66ff7183.png"
          ]
        }
      ]
    }
  }
  render() {
    const tileList = this.state.tiles.map((tile, index) =>
      <Tile key={index} src={tile.imgSrc} title={tile.title} role={tile.role} github={tile.github} imgs={tile.imgs} desc={tile.desc}></Tile>
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
