$(function() {
  // preload images
  $('#image_list a').each(function() {
    const image = new Image();
    image.src = $(this).attr('href');
  });

  // set up event handlers for links
  $('#image_list a').click(function(e) {
    // swap image
    const imageURL = $(this).attr('href');
    $('#image').attr('src', imageURL);

    // swap caption
    const caption = $(this).attr('title');
    $('#caption').text(caption);

    // cancel the default action of the link
    e.preventDefault();
  });//? end click
}); //? end ready