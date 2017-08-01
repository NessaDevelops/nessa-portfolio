import $ from 'jquery';

function validateForm() {
    var validForm = true;
    var name = document.forms["contactForm"]["name"].value;
    var email = document.forms["contactForm"]["email"].value;
    var message = document.forms["contactForm"]["message"].value;

    $(".error").remove();

    if (name.length < 1 ) {
    $('#name').after('<span className="error">Name must be filled out</span>');
    validForm = false;
    }

    if (email.length < 1 ) {
    $('#email').after('<span className="error">Email must be filled out</span>');
        validForm = false;
    } else {
        var regEx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        var validEmail = regEx.test(email);
        if (!validEmail) {
            $('#email').after('<span className="error">Email must be valid</span>');
        }
    }

    if (message.length < 1) {
    $('#message').after('<span className="error">Message must be filled out</span>');
        validForm = false;
    }

    if (!validForm) {
        return false;
    }
    }