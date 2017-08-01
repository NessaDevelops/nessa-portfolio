import React, { Component } from 'react';
import './Contact.css';
import NavBar from '../../components/NavBar';
import ValidateForm from './form';

class Contact extends Component {

  componentDidMount() {
    // ValidateForm();
  }

  render() {
    return (
      <div className="content">
        <NavBar></NavBar>
        <div className="form-wrapper">
          <h2>Enjoy my work?<br/>Send me an email if you&#39;d like to hire me, collaborate, or have any questions.</h2>
          <form method="POST" id="contactForm" name="contactform" action="contact-form-handler.php" onsubmit="return validateForm()">
            <input type="text" id="name" name="name" placeholder="Name"></input>
            <input type="text" id="email" name="email" placeholder="Email"></input>
            <textarea id="message" name="message" placeholder="Message"></textarea>
            <input type="submit" value="Submit" />
          </form>
          <a href="https://www.linkedin.com/in/jenessa-stabler"><div className="linkedin"></div></a>
        </div>
      </div>
    );
  }
}

export default Contact;
