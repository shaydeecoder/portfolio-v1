// ANIMATION WOW Activattion

$(function() {

  // Animate On Scroll
  new WOW().init();

});


//NAVIGATION SECTION

// Show/Hide Nav Transparent Background On Scroll
$(function() {

  $(window).scroll(function(){

    if($(this).scrollTop() < 50) {
      // hide nav
      $("nav").removeClass("sc-top-nav");
    } else {
      // show nav
      $("nav").addClass("sc-top-nav");
    }

  });

});

// Smooth Scrolling
$(function(){

  $("a.smooth-scroll").click(function(event){

    event.preventDefault();

    // Get/Return ID like #services, #about, and #contact and etc
    var section = $(this).attr("href");

    $('html, body').animate({
      scrollTop: $(section).offset().top - 100
    }, 1250);

  });

});


// CONTACT SECTION

// Variables
const fullName = document.getElementById('full-name'),
      email = document.getElementById('email'),
      message = document.getElementById('message'),
      sendBtn = document.getElementsByClassName('send-btn'),
      sendEmailForm = document.getElementsById('email-form');


// Event Listeners

eventListerners();

function eventListerners() {
  // validating the forms
  // fullName.addEventListener('blur' validateField);
  // email.addEventListener('blur' validateField);
  // message.addEventListener('blur' validateField);

  // send email
  sendEmailForm.addEventListener('submit', sendEmail);
}


// Function
function sendEmail(e) {
  e.preventDefault();

  // show the spinner
  const spinner = document.querySelector('.spinner');
  spinner.style.display = 'block';
}


/*
// validating the fields
function validateField() {
  let errors;

  // validating the length of the fields
  validateLength(this);
}

// function for validating the length of the fields
function validateLength(field) {
  if(field.value.length > 0) {
    field.style.borderColor = 'green';
    field.classList.add('error');
  } else {
    field.style.borderColor = 'red';
    field.classList.add('error');
  }
}
*/
