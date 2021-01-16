const $ = (id) =>  document.getElementById(id); 

const joinList = () => {
  const email_1 = $('email_1').value;
  const email_2 = $('email_2').value;
  let isValid = true;

  if( email_1 === '') {
    $('email_1_error').firstChild.nodeValue = 'This field is required.';
    isValid = false;
  } else {
    $('email_1_error').firstChild.nodeValue = '';
  }

  if( email_2 === '') {
    $('email_2_error').firstChild.nodeValue = 'This field is required.';
    isValid = false;
  } else {
    $('email_2_error').firstChild.nodeValue = '';
  }

  if( $('first_name').value === '') {
    $('first_name_error').firstChild.nodeValue = 'This field is required.';
    isValid = false;
  } else {
    $('first_name_error').firstChild.nodeValue = '';
  }

  if (isValid) {
    $('email_form').submit();
  }
}

onload = () => {
  $('join_list').onclick = joinList;
  $('email_1').focus();
}