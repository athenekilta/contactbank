function renderTableRow(name, email, keywords) {
  var html = "<tr>";
  html += "<td>" + name +  "</td>";
  html += "<td>" + email + "</td>";
  html += "<td>" + keywords + "</td>";
  html += "</tr>";
  return html;
}

window.onload = () => {

  /**
   * MVP works on a local json file.
   * This parses the addresses to the table in the template.
   */
  $.getJSON("emails.json", (json) => {
    $.each(json, (index, value) => {
      console.log(value);
      $('#tablerows').append(renderTableRow("firstnamelastname", value.Email, "keywords"));
    });
  });

  /**
   * When the user types, hide everything else but the
   * rows that match the search
   */
  $("#contactinput").on('keyup', (e) => {
    var value = e.target.value.toLowerCase();

    $('#tablerows tr').each( (i, v) => {
      $(v).toggle( $(v).text().toLowerCase().indexOf(value) !== -1 );
    });
  });

};
