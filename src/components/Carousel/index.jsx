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
      <CarouselInput key={index} index={index} src={slide} />
    );
    const slideList = this.props.imgs.map((slide, index) =>
      <Slide key={index} src={slide} />
    );
    const indicatorList = this.props.imgs.map((slide, index) =>
      <Indicator key={index} index={index} src={slide} />
    );
    return (
    <div className="carousel-container">
      <ul className="carousel my-carousel carousel--translate carousel--thumb">
        {inputList}
        <div className="carousel__controls">
          <label htmlFor="11" className="carousel__control carousel__control--backward"></label>
          <label htmlFor="2" className="carousel__control carousel__control--forward"></label>
        </div>
        <div className="carousel__controls">
         <label htmlFor="1" className="carousel__control carousel__control--backward"></label>
         <label htmlFor="3" className="carousel__control carousel__control--forward"></label>
        </div>
        <div className="carousel__controls">
         <label htmlFor="2" className="carousel__control carousel__control--backward"></label>
         <label htmlFor="4" className="carousel__control carousel__control--forward"></label>
        </div>
        <div className="carousel__controls">
         <label htmlFor="3" className="carousel__control carousel__control--backward"></label>
         <label htmlFor="5" className="carousel__control carousel__control--forward"></label>
        </div>
        <div className="carousel__controls">
         <label htmlFor="4" className="carousel__control carousel__control--backward"></label>
         <label htmlFor="6" className="carousel__control carousel__control--forward"></label>
        </div>
        <div className="carousel__controls">
         <label htmlFor="5" className="carousel__control carousel__control--backward"></label>
         <label htmlFor="7" className="carousel__control carousel__control--forward"></label>
        </div>
        <div className="carousel__controls">
         <label htmlFor="6" className="carousel__control carousel__control--backward"></label>
         <label htmlFor="8" className="carousel__control carousel__control--forward"></label>
        </div>
        <div className="carousel__controls">
         <label htmlFor="7" className="carousel__control carousel__control--backward"></label>
         <label htmlFor="9" className="carousel__control carousel__control--forward"></label>
        </div>
        <div className="carousel__controls">
         <label htmlFor="8" className="carousel__control carousel__control--backward"></label>
         <label htmlFor="10" className="carousel__control carousel__control--forward"></label>
        </div>
        <div className="carousel__controls">
         <label htmlFor="9" className="carousel__control carousel__control--backward"></label>
         <label htmlFor="11" className="carousel__control carousel__control--forward"></label>
        </div>
        <div className="carousel__controls">
         <label htmlFor="10" className="carousel__control carousel__control--backward"></label>
         <label htmlFor="1" className="carousel__control carousel__control--forward"></label>
        </div>
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