function decode(text) {
  text = text.replace(/\+/g, '');
  text = text.replace(/%[a-fA-F0-9]{2}/g, 
    function(text) {
      return String.fromCharCode('0x' + text.substr(1,2));
    });
    return text;
}

function displayData() {
  let urlParts = window.location.toString().split('?');
  if (urlParts.length !== 2) return;

  let fields = urlParts[1].split('&');

  if (fields.length === 0) {
    document.write('<p>No data was submitted.</p>');
  } else {
    document.write('<dl>');
    let fieldParts;
    for (let i in fields) {
      fieldParts = fields[i].split('=');
      fieldParts[0] = decode(fieldParts[0]);
      fieldParts[1] = decode(fieldParts[1]);
      document.write(`<dt>${fieldParts[0]}</dt>`);
      document.write(`<dd>${fieldParts[1]}</dd>`)
    }
    document.write('</dl>');
  }
}