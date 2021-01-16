$(function() {
  $('#join_list').click(function() {
    const email1 = $('#email_1').val();
    const email2 = $('#email_2').val();
    let isValid = true;

    if ( email1 === '' ) {
      $('#email_1').next().text('This field is required.');
      isValid = false;
    } else {
      $('#email_1').next().text('');
    }

    if ( email2 === '' ) {
      $('#email_2').next().text('This field is required.');
      isValid = false;
    } else if ( email2 !== email1 ) {
      $('#email_2').next().text('This entry must equal the first entry.');
      isValid = false;
    } else {
      $('#email_2').next().text('');
    }

    if ( $('#first_name').val() === '' ) {
      $('#first_name').next().text('This field is required.');
      isValid = false;
    } else {
      $('#first_name').next().text('');
    }

    if ( isValid ) {
      $('#email_form').submit();
    }
  }); //? end click
}); //? end ready