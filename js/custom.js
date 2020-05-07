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
      sendBtn = document.querySelector('.send-btn #send-btn'),
      sendEmailForm = document.getElementById('email-form');


// Event Listeners

eventListerners();

function eventListerners() {
  // validate the form
  fullName.addEventListener('blur', validateField);
  email.addEventListener('blur', validateField);
  message.addEventListener('blur', validateField);

  // send email
  //sendEmailForm.addEventListener('submit', sendEmail);
}


// Function

//

$(function(){
	const sendEmailForm = $('#email-form');
	sendEmailForm.on('submit', function(e) {
		e.preventDefault();
		
		const spinner = document.querySelector('#loaders .spinner');
		spinner.style.display = 'block';

	  // create an element for the sent email image
	  const sentEmailImg = document.createElement('img');
	  sentEmailImg.src = 'img/loaders/mail.svg';
	  sentEmailImg.style.display = 'block';
	  sentEmailImg.style.width = '150px';
	  sentEmailImg.style.marginBottom = '10px';
	})
	
	$.ajax({
		url: "demo_test.txt",
		data: {fullName: fullName, email: email, message: message},
		success: function(result){
			// hide the spinner
			spinner.style.display = 'none';

			// show the sent email image
			document.querySelector('#loaders').appendChild(sentEmailImg);
			
			setTimeout(function() {
			  sendEmailForm.reset();
			  sentEmailImg.remove();
			}, 2000);
			
			//console.log(result);
		}
  });

});
 
function sendEmail(e) {
  e.preventDefault();

  // show the spinnwer
  const spinner = document.querySelector('#loaders .spinner');
  spinner.style.display = 'block';

  // create an element for the sent email image
  /*const sentEmailImg = document.createElement('img');
  sentEmailImg.src = 'img/loaders/mail.svg';
  sentEmailImg.style.display = 'block';
  sentEmailImg.style.width = '150px';
  sentEmailImg.style.marginBottom = '10px';
  */

  // hide spinner, then display the sent email image
  setTimeout(function() {
    // hide the spinner
    spinner.style.display = 'none';

    // show the sent email image
    document.querySelector('#loaders').appendChild(sentEmailImg);

    // hide the image after 5 secs and reset form
    setTimeout(function() {
      sendEmailForm.reset();
      sentEmailImg.remove();
    }, 2000);
  }, 3000);
}

// validate the form field
function validateField() {
  let errors;

  // validate the length of the field
  validateLength(this);

  // valiadte the email field
  if(this.type === 'email') {
    validateEmail(this);
  }
}

// validate the length of the fields
function validateLength(field) {
  if(field.value.length > 0) {
    field.style.borderColor = 'white';
    field.classList.remove('error');
  } else {
    field.style.borderColor = 'red';
    field.classList.add('error');
  }
}

// validate email, checks for @ in the field
function validateEmail(field) {
  let emailText = field.value;

  // check if the text conatians the @ sign
  if(emailText.indexOf('@') !== -1) {
    field.style.borderColor = 'white';
    field.classList.remove('error');
  } else {
    field.style.borderColor = 'red';
    field.classList.add('error');
  }
}

