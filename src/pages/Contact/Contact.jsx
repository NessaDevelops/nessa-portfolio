import React, { Component } from 'react';
import './Contact.css';
import NavBar from '../../components/NavBar';
// import ValidateForm from './form';
// import $ from 'jquery';

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fname: "",
      email: "",
      message: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    event.target.classList.add('active');
    
    this.setState({
      [event.target.name]: event.target.value
    });

    this.showInputError(event.target.name);
  }

  handleSubmit(event) {    
    event.preventDefault();
    
    console.log('component state', JSON.stringify(this.state));
    
    if (!this.showFormErrors()) {
      console.log('form is invalid: do not submit');
    } else {
      console.log('form is valid: submit');
      // $.ajax({  
      //   type: "POST",  
      //   url: "contact-form-handler.php", 
      //   data: { form: this.state },
      //   success: function(response) {
      //     // content.html(response);
      //     return response;
      //   }
      // });
    }
  }

  showFormErrors() {
    const inputs = document.querySelectorAll('input');
    let isFormValid = true;
    
    inputs.forEach(input => {
      input.classList.add('active');
      
      const isInputValid = this.showInputError(input.name);
      
      if (!isInputValid) {
        isFormValid = false;
      }
    });
    
    return isFormValid;
  }
  
  showInputError(refName) {
    const validity = this.refs[refName].validity;
    const label = refName.charAt(0).toUpperCase() + refName.slice(1);
    const error = document.getElementById(`${refName}Error`);
        
    if (!validity.valid) {
      if (validity.valueMissing) {
        error.textContent = `${label} is a required field`; 
      } else if (validity.typeMismatch) {
        error.textContent = `${label} should be a valid email address`; 
      } 
      return false;
    }
    error.textContent = '';
    return true;
  }

  render() {
    return (
      <div className="container">
        <NavBar></NavBar>
        <div className="form-wrapper">
          <h2>Enjoy my work?<br/>Send me an email if you&#39;d like to hire me, collaborate, or have any questions.</h2>
          <form noValidate method="POST" id="contactForm" name="contactform" action="contact-form-handler.php">
            <div className="form-group">
              <input className="form-control"
                type="text"
                id="fname"
                name="fname"
                ref="fname"
                placeholder="Name"
                value={this.state.fname} 
                onChange={this.handleChange}
                required />
              <div className="error" id="fnameError" />
            </div>
            <div className="form-group">
              <input className="form-control"
                type="email" 
                id="email"
                name="email"
                ref="email"
                placeholder="Email"
                value={this.state.email} 
                onChange={this.handleChange}
                required />
              <div className="error" id="emailError" />
            </div>
            <div className="form-group">
              <input className="form-control"
                type="text"
                id="message"
                name="message"
                ref="message"
                placeholder="Message"
                value={this.state.message} 
                onChange={this.handleChange}
                required />
              <div className="error" id="messageError" />
            </div>
            <button className="btn btn-primary"
              onClick={this.handleSubmit}>submit</button>
          </form>
          <a href="https://www.linkedin.com/in/jenessa-stabler"><div className="linkedin"></div></a>
        </div>
      </div>
     )
  }
};

export default Contact;
