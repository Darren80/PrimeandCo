$( document ).ready(function() {

  $( "#contact-form" ).submit(function( event ) {
    event.preventDefault();

    var fullname = $('#fullname').val();
    var emailAddress = $('#email-address').val();
    var phoneNumber = $('#phone-number').val();
    var message = $('#message').val();

    emailjs.send("gmail","template_BdcC5dI9",{to_name: "Evans", from_name: fullname,
    emailAddress: emailAddress, phoneNumber: phoneNumber, message_html: message})
    .then(function(response) {
      console.log("SUCCESS. status=%d, text=%s", response.status, response.text);
    }, function(err) {
      console.log("FAILED. error=", err);
    });
  });

  //$('#phone-number')[0].setCustomValidity('Phone number must be in the format XXXX-XXX-XXXX');


  var element_position = $('.cards').offset().top;
  var screen_height = $(window).height();
  var activation_offset = 0.7;//determines how far up the the page the element needs to be before triggering the function
  var activation_point = element_position - (screen_height * activation_offset);
  var max_scroll_height = $('body').height() - screen_height - 5;//-5 for a little bit of buffer
  //Does something when user scrolls to it OR
  //Does it when user has reached the bottom of the page and hasn't triggered the function yet
  $(window).on('scroll', animateWhenVisible);

  function animateWhenVisible() { //e.g. animateWhenVisible('.card', 'fadeInLeft');

    var y_scroll_pos = window.pageYOffset;
    var element_in_view = y_scroll_pos > activation_point;
    var has_reached_bottom_of_page = max_scroll_height <= y_scroll_pos && !element_in_view;
    if(element_in_view || has_reached_bottom_of_page) {
      //$('.card').css("", "visible");
      if (!$('#c1').hasClass('imagePopUp')) {
      $('#c1').addClass('imagePopUp');
      $('#c2').addClass('imagePopUp');
      $('#c3').addClass('imagePopUp');
      $('#c4').addClass('imagePopUp');
      console.log("GG");
    }
      //$('#c2').addClass('fadeInRightBig');
      //$('#c3').addClass('fadeInLeftBig');
      //$('#c4').addClass('fadeInRightBig');

      /*$('.card').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend',
      function(e) {

        $('.card').removeClass('fadeInRightBig');

      });*/
    }
  };
});
$(window).load(function() {
  	// Get the Object by ID
  	var a = document.querySelector("#svgObject");
    var b = document.querySelector("#svg1");

  	// Get the SVG document inside the Object tag
  	var svgDoc = a.contentDocument;
  	// Get one of the SVG items by ID;
  	var svgItem = svgDoc.querySelector("g");
  	// Set the colour to something else

    document.querySelectorAll('object').forEach(svgNode => {
      //Add blur
      svgNode.addEventListener('mouseover', (event) => {
         let svgDocument = event.target.contentDocument;
         let svgItems = svgDocument.querySelectorAll('g');
         svgItems.forEach(svgItem => {
           svgItem.classList.add('blur');
         });
       });
       //Remove blur
       svgNode.addEventListener('mouseout', (event) => {
          let svgDocument = event.target.contentDocument;
          let svgItems = svgDocument.querySelectorAll('g');
          svgItems.forEach(svgItem => {
            svgItem.classList.remove('blur');
          });
        });
    });

    // document.querySelector('#svg1').addEventListener("mouseover", function() {
    //   svgItem.classList.add('blur');
    //   // classSwitcher(b);
    // });
    // document.querySelector('#svg1').addEventListener("mouseout", function() {
    //   svgItem.classList.remove('blur');
    //   // classSwitcher(b);
    // });
    let navElement = document.querySelector('#navbar-pages');
    let ms = new MenuSpy(navElement);

//Scroll to Hash
document.querySelectorAll('#navbar #navbar-pages li').forEach(node => {
    node.addEventListener('click', (event) => {

      let hash = event.target.getAttribute('href');
      $('html, body').animate({
          scrollTop: $(hash).offset().top - 80
      }, 200);
      
    });
  });

    function svgHovered(e) {
      console.log(e);
    }





  });

  function classSwitcher(element) {
    if (element.className.includes('up')) {
      element.classList.add('down');
      element.classList.remove('up');
  } else {
    element.classList.remove('down');
    element.classList.add('up');
  }
};
