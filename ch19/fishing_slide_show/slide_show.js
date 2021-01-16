$(function() {
  let nextCaption, nextSlideSource, nextSlide = $('#slides img:first-child');

  // the function for running the slide show
  const runSlideShow = function() {
    $('#caption').fadeOut(3000);
    $('#slide').fadeOut(3000, 
      function() {
        if ( nextSlide.next().length === 0 ) {
          nextSlide = $('#slides img:first-child');
        } else {
          nextSlide = nextSlide.next();
        }
        nextSlideSource = nextSlide.attr('src');
        nextCaption = nextSlide.attr('alt');
        $('#slide').attr('src', nextSlideSource).fadeIn(3000);
        $('#caption').text(nextCaption).fadeIn(3000);
      }  
    );
  }

  // start slide show
  let timer1 = setInterval(runSlideShow, 3000);

  // one way to start and stop slide show
  $('#slide').click(function() {
    if ( timer1 !== null ) {
      clearInterval(timer1);
      timer1 = null;
    } else {
      timer1 = setInterval(runSlideShow, 3000);
    }
  }); //? end click
}); //? end ready