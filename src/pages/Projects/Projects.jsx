import React, { Component } from 'react';
import NavBar from '../../components/NavBar';
import Modal from '../../components/Modal';
import './Projects.css';

class Tile extends Component {
  constructor(props) {
    super(props)
    this.state = { isModalOpen: false }
  }

  openModal() {
    this.setState({ isModalOpen: true })
  }

  closeModal() {
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
          <div className="img" style={tileStyle}></div>
          <div className="text">
            <h2>{this.props.title}</h2>
            <p className="view">VIEW PROJECT</p>
          </div>
        </div>
        <Modal isOpen={this.state.isModalOpen} onClose={() => this.closeModal()}>
            <h1>Modal title</h1>
            <p>hello</p>
            <p><button onClick={() => this.closeModal()}>Close</button></p>
        </Modal>
      </div>
    );
  }
};

Tile.propTypes = {
  src: React.PropTypes.string.isRequired,
  title: React.PropTypes.string.isRequired
}

class TileList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tiles: [
        { imgSrc: "/static/media/bucketlist.2956f3dd.png", title: "A Drop in the Bucket" },
        { imgSrc: "/static/media/primary.c9024567.png", title: "Primary Services" },
        { imgSrc: "/static/media/bucketlist.2956f3dd.png", title: "ArtObjx" },
        { imgSrc: "/static/media/bucketlist.2956f3dd.png", title: "Farm Thing" },
        { imgSrc: "/static/media/bucketlist.2956f3dd.png", title: "Five" },
        { imgSrc: "/static/media/bucketlist.2956f3dd.png", title: "Six" },
        { imgSrc: "/static/media/bucketlist.2956f3dd.png", title: "Seven" }
      ]
    }
  }
  render() {
    const tileList = this.state.tiles.map((tile, index) =>
      <Tile key={index} src={tile.imgSrc} title={tile.title}></Tile>
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
