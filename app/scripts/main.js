$('.carousel').carousel({
    interval: 5000 //changes the speed
});


$('#mc-embedded-subscribe-form').submit(function(e) {
      var $this = $(this);
      $.ajax({
          type: 'POST', // GET & url for json slightly different
          url: '//rimella.us15.list-manage.com/subscribe/post?u=991bff77fc9adcf8678ad2f1a&amp;id=531016102f',
          data: $this.serialize(),
          dataType    : 'jsonp',
          contentType: 'application/json; charset=utf-8',
          error       : function(err) {
            console.log(err);
            $('#mce-success-response').css('display', 'block');
          },
          success: function(data) {
              if (data.result != 'success') {
                  // Something went wrong, parse data.msg string and display message
                  $('#mce-error-response').css('display', 'block');
              } else {
                  // It worked, so hide form and display thank-you message.
                  $('#mce-success-response').css('display', 'block');
              }
          }
      });
      return false;
});

$(document).ready(function() {
  //Set the carousel options
  $('#quote-carousel').carousel({
    pause: true,
    interval: 5000,
  });
});
