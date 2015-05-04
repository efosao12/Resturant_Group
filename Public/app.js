$(document).ready(function() {
  console.log("READY TO RUMBLE WITH DOM");

$("#buttonView3").click(function() {
  console.log('clickity');

  $("#work").empty();
  // debugger
  $.ajax({
      url: "/restaurants/",
      type: "GET",
      dataType: "json",
    }).done(function(data) {
      console.log(data)
      for (var i = 0; i < data.length; i++) {
            data[i].name;
            console.log(data[0].name);
            var names = data[i].name
            
            $("#work").append("<h3>" + names + "</h3>")
          };

      
      }
    )
    }
 );
});
;