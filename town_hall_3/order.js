const decode = (text) => {
  text = text.replace(/\+/g, " ");
  text = text.replace(/%[a-fA-F0-9]{2}/g, function(text) {
    return String.fromCharCode('0x' + text.substr(1,2));
  });
  return text;
}

const displayData = () => {
  let html = '';
  let dl = document.getElementById('data_list');
  let query = location.search.replace('?', '');
  if (query === '') return;

  let fields = query.split('&');
  if (fields.length === 0) {
    dl.innerHTML = `<p>No Data was submitted.</p>`;
  } else {
    let fieldParts;
    html += `<dl>`;
    for (let i in fields) {
      fieldParts = fields[i].split('=');
      fieldParts[0] = decode(fieldParts[0]);
      fieldParts[1] = decode(fieldParts[1]);
      html += `<dt>${fieldParts[0]}</dt>`;
      html += `<dd>${fieldParts[1]}</dd>`;
    }
    html += `</dl>`;
    dl.innerHTML = html;
  }
}

displayData();