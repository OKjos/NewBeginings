document.getElementById("facebookButton").addEventListener("click", function() {
    // Handle click for Facebook button
    window.location.href = "https://www.facebook.com/";
});

$(document).ready(function() {
    var slideIndex = 0;
    showSlides();
  
    function showSlides() {
      var slides = $('.slider img');
      for (var i = 0; i < slides.length; i++) {
        slides.eq(i).hide();
      }
      slideIndex++;
      if (slideIndex > slides.length) {
        slideIndex = 1;
      }
      slides.eq(slideIndex - 1).fadeIn(500);
      setTimeout(showSlides, 3000); // Change image every 3 seconds (adjust as needed)
    }
  });
  