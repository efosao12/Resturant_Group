
$(document).ready(function() {
  console.log("READY TO RUMBLE WITH DOM");

$("#buttonView3").click(function() {
  console.log('clickity');

  // $("#work").empty();
  debugger
  $.ajax({
      url: "/resturants/",
      type: "GET",
      dataType: "json",
    }).done(function(data) {
      console.log(data)

      
      };
    })
    }
  });
});
});
// $.ajax({
//   method: "GET",
//   url: "/"
// }).done(function(debts) {
//   // .map is equivalent to the code below... it is a shortcut

//   // var debtEls = debts.map(function(debt) {
//   //   return Mustache.render(template, debt);
//   // })

//   var debtEls = [];

//   debts.forEach(function(debt) {
//     var html = Mustache.render(template, debt);
//     debtEls.push(html);
//   });

//   //

//   $('tbody').append(debtEls);
// });