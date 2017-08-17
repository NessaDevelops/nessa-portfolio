import React, { Component } from 'react';
import './styles.css';

class Slide extends Component {
  render() {
    const slideStyle = {
      backgroundImage: 'url(' + this.props.src + ')',
      backgroundSize: 'cover',
	    backgroundPosition: 'center'
    };
    return (
      <li style={slideStyle} className="carousel__slide" /> 
    )
  }
}

Slide.PropTypes = {
  src: React.PropTypes.string.isRequired
}

class Carousel extends Component {
  render() {
    const slideList = this.props.imgs.map((slide, index) =>
      <Slide key={index} src={slide} /> 
    );
    return (
    <div className="carousel-container">
      <ul className="carousel my-carousel carousel--translate carousel--thumb">
        <input type="radio" id="K" name="thumb" checked="checked" className="carousel__activator"/>
        <input type="radio" id="L" name="thumb" className="carousel__activator"/>
        <input type="radio" id="M" name="thumb" className="carousel__activator"/>
        <input type="radio" id="N" name="thumb" className="carousel__activator"/>
        <input type="radio" id="O" name="thumb" className="carousel__activator"/>
        <div className="carousel__controls">
          <label htmlFor="O" className="carousel__control carousel__control--backward"></label>
          <label htmlFor="L" className="carousel__control carousel__control--forward"></label>
        </div>
        <div className="carousel__controls">
         <label htmlFor="K" className="carousel__control carousel__control--backward"></label>
         <label htmlFor="M" className="carousel__control carousel__control--forward"></label>
        </div>
        <div className="carousel__controls">
         <label htmlFor="L" className="carousel__control carousel__control--backward"></label>
         <label htmlFor="N" className="carousel__control carousel__control--forward"></label>
        </div>
        <div className="carousel__controls">
         <label htmlFor="M" className="carousel__control carousel__control--backward"></label>
         <label htmlFor="O" className="carousel__control carousel__control--forward"></label>
        </div>
        <div className="carousel__controls">
         <label htmlFor="N" className="carousel__control carousel__control--backward"></label>
         <label htmlFor="K" className="carousel__control carousel__control--forward"></label>
        </div>
        <div className="carousel__track">
          {slideList}
        </div>
        <div className="carousel__indicators">
          <label htmlFor="K" className="carousel__indicator"></label>
          <label htmlFor="L" className="carousel__indicator"></label>
          <label htmlFor="M" className="carousel__indicator"></label>
          <label htmlFor="N" className="carousel__indicator"></label>
          <label htmlFor="O" className="carousel__indicator"></label>
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