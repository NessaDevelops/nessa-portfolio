import React, { Component } from 'react';
import './styles.css';

class CarouselInput extends Component {
  constructor(props) {
    super(props)
    this.state = { first: 'checked' }
  }
  render() {
    const index = this.props.index + 1;  
    if (index == 1) {
      return (
        <input type="radio" id={index} name="thumb" checked="checked" className="carousel__activator"/>
      )
    } else {
      return (
      <input type="radio" id={index} name="thumb" className="carousel__activator"/>
      )
    }
  }
}

CarouselInput.propTypes = {
  index: React.PropTypes.number.isRequired
}

class CarouselControls extends Component {
  render() {
    const index = this.props.index + 1;
    let backwardsIndex = index - 1;
    let forwardsIndex = index + 1;
    if (index == 1) {
      backwardsIndex = 11;
    }
    if (index == 11) {
      forwardsIndex = 1;
    }
    return (
      <div className="carousel__controls">
        <label htmlFor={backwardsIndex} className="carousel__control carousel__control--backward"></label>
        <label htmlFor={forwardsIndex} className="carousel__control carousel__control--forward"></label>
      </div>
    )
  }
}

CarouselControls.propTypes = {
  index: React.PropTypes.number.isRequired  
}

class Indicator extends Component {
  render() {
    const indicatorStyle = {
      backgroundImage: 'url(' + this.props.src + ')'
    };
    const index = this.props.index + 1;
    return (
      <label htmlFor={index} style={indicatorStyle} className="carousel__indicator"></label>
    )
  }
}

Indicator.propTypes = {
  index: React.PropTypes.number.isRequired,
  src: React.PropTypes.string.isRequired
}

class Slide extends Component {
  render() {
    const slideStyle = {
      backgroundImage: 'url(' + this.props.src + ')'
    };
    return (
      <li style={slideStyle} className="carousel__slide" /> 
    )
  }
}

Slide.propTypes = {
  src: React.PropTypes.string.isRequired
}

class Carousel extends Component {
  render() {
    const inputList = this.props.imgs.map((slide, index) =>
      <CarouselInput key={index} index={index} />
    );
    const controlList = this.props.imgs.map((slide, index) =>
      <CarouselControls key={index} index={index} />
    );
    const slideList = this.props.imgs.map((slide, index) =>
      <Slide key={index} src={slide} />
    );
    const indicatorList = this.props.imgs.map((slide, index) =>
      <Indicator key={index} index={index} src={slide} />
    );
    return (
    <div className="carousel-container">
      <ul className="carousel carousel--translate">
        {inputList}
        {controlList}
        <div className="carousel__track">
          {slideList}
        </div>
        <div className="carousel__indicators">
          {indicatorList}
        </div>
      </ul>
    </div>
    )
  }
}

Carousel.PropTypes = {
  imgs: React.PropTypes.arrayOf(String).isRequired
}

export default Carousel;