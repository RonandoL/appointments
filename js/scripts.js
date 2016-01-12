$(document).ready(function() {
  $(".blanks form").submit(function(event) {
    var fullnameInput = $("input#fullname").val();
    var dateInput = $("input#date").val();
    var starttimeInput = $("input#starttime").val();
    var endtimeInput = $("input#endtime").val();

    // $(".fullname").text(fullnameInput);

    $("ul#list").prepend("<li>Name: " + fullnameInput + " | Date: " + dateInput + " | Time Start: " + starttimeInput + " | Time End: " + endtimeInput + "<hr></li>");

    $(".appointments").show();
    event.preventDefault();
  });

});
