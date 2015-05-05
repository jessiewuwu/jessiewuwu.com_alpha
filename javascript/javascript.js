$(document).ready(function(){
  $('.header-changing').spectrum();
  scrollSection();
  switchClassyDesign();
  switchPlayfulDesign();
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

var switchClassyDesign = function(){
  $('#classy-button').on('click', function(){
  var link = $('html').find('link[href*="stylesheet.css"]')[0]
  $(link).attr('href', 'sleek_stylesheet.css');

  })
}

var switchPlayfulDesign = function(){
  $('#playful-button').on('click', function(){
  var link = $('html').find('link[href*="stylesheet.css"]')[0];
  $(link).attr('href', 'playful_stylesheet.css');
  })
}
