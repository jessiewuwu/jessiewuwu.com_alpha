$(document).ready(function(){
  $('.header-changing').spectrum();
  scrollSection();
});

var scrollSection = function(){
  $('a[href^="#"]').on('click', function(event) {

      var fullUrl = document.URL;
      var baseUrl = location.origin;

      if (fullUrl === baseUrl || fullUrl === baseUrl + '/index.html') {
        event.preventDefault();
        $('html, body').animate({
            scrollTop: $('#about-section').offset().top
          }, 1000);
      }
  });
};