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
          <div className="img" style={tileStyle}></div>
          <div className="text">
            <h2>{this.props.title}</h2>
            <p className="view">VIEW PROJECT</p>
          </div>
        </div>
        <Modal isOpen={this.state.isModalOpen} onClose={() => this.closeModal()}>
            <div className="close" onClick={() => this.closeModal()} />
            <div className="project-wrapper">
              <div className="project-left">
                <h2>{this.props.title}</h2>
                <p>{this.props.role}</p>
                <p className="desc">{this.props.desc}</p>
              </div>
              <div className="project-right">
                <Carousel></Carousel>
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
  desc: React.PropTypes.string.isRequired
}

class TileList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tiles: [
        { imgSrc: "/static/media/bucketlist.2956f3dd.png", title: "A Drop in the Bucket", role: "UX/UI Design",
          desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sem lectus, lacinia eget libero non, bibendum tincidunt justo. Duis diam turpis, efficitur id euismod porttitor, pretium hendrerit velit. Nam eu eleifend augue. Suspendisse interdum est a velit finibus, sed aliquam tellus finibus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aenean feugiat velit pharetra tempus tempus. Sed pharetra non erat nec rhoncus. Cras nec turpis blandit, pulvinar urna eget, luctus nisi." },
        { imgSrc: "/static/media/primary.c9024567.png", title: "Primary Services", role: "UX/UI Design",
          desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sem lectus, lacinia eget libero non, bibendum tincidunt justo. Duis diam turpis, efficitur id euismod porttitor, pretium hendrerit velit. Nam eu eleifend augue. Suspendisse interdum est a velit finibus, sed aliquam tellus finibus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aenean feugiat velit pharetra tempus tempus. Sed pharetra non erat nec rhoncus. Cras nec turpis blandit, pulvinar urna eget, luctus nisi." },
        { imgSrc: "/static/media/bucketlist.2956f3dd.png", title: "Chronicled", role: "UX/UI Design",
          desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sem lectus, lacinia eget libero non, bibendum tincidunt justo. Duis diam turpis, efficitur id euismod porttitor, pretium hendrerit velit. Nam eu eleifend augue. Suspendisse interdum est a velit finibus, sed aliquam tellus finibus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aenean feugiat velit pharetra tempus tempus. Sed pharetra non erat nec rhoncus. Cras nec turpis blandit, pulvinar urna eget, luctus nisi." },
        { imgSrc: "/static/media/bucketlist.2956f3dd.png", title: "Pugger", role: "UX/UI Design",
          desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sem lectus, lacinia eget libero non, bibendum tincidunt justo. Duis diam turpis, efficitur id euismod porttitor, pretium hendrerit velit. Nam eu eleifend augue. Suspendisse interdum est a velit finibus, sed aliquam tellus finibus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aenean feugiat velit pharetra tempus tempus. Sed pharetra non erat nec rhoncus. Cras nec turpis blandit, pulvinar urna eget, luctus nisi." },
        { imgSrc: "/static/media/bucketlist.2956f3dd.png", title: "NuGalactica", role: "UX/UI Design",
          desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sem lectus, lacinia eget libero non, bibendum tincidunt justo. Duis diam turpis, efficitur id euismod porttitor, pretium hendrerit velit. Nam eu eleifend augue. Suspendisse interdum est a velit finibus, sed aliquam tellus finibus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aenean feugiat velit pharetra tempus tempus. Sed pharetra non erat nec rhoncus. Cras nec turpis blandit, pulvinar urna eget, luctus nisi." },
        { imgSrc: "/static/media/bucketlist.2956f3dd.png", title: "Six", role: "UX/UI Design",
          desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sem lectus, lacinia eget libero non, bibendum tincidunt justo. Duis diam turpis, efficitur id euismod porttitor, pretium hendrerit velit. Nam eu eleifend augue. Suspendisse interdum est a velit finibus, sed aliquam tellus finibus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aenean feugiat velit pharetra tempus tempus. Sed pharetra non erat nec rhoncus. Cras nec turpis blandit, pulvinar urna eget, luctus nisi." },
        { imgSrc: "/static/media/bucketlist.2956f3dd.png", title: "Seven", role: "UX/UI Design",
          desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sem lectus, lacinia eget libero non, bibendum tincidunt justo. Duis diam turpis, efficitur id euismod porttitor, pretium hendrerit velit. Nam eu eleifend augue. Suspendisse interdum est a velit finibus, sed aliquam tellus finibus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aenean feugiat velit pharetra tempus tempus. Sed pharetra non erat nec rhoncus. Cras nec turpis blandit, pulvinar urna eget, luctus nisi." }
      ]
    }
  }
  render() {
    const tileList = this.state.tiles.map((tile, index) =>
      <Tile key={index} src={tile.imgSrc} title={tile.title} role={tile.role} desc={tile.desc}></Tile>
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
