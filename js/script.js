// $(document).ready(function() {
//     for (var i = 5; i > 0; i -= 1) {
//       $(".loop").append("<p>This is the " + i + "th of code.</p>")
//     };
//
//     $("button").addClass("animated bounce");
//
//
//
// })



$(document).ready(function() {
  $("#target1").click(function() {
    $("#text1").hide();
    $("#text2").show();
    $("#target1").html("Keep Going...");
    $(this).attr("id","target1-2");
    $("#target1-2").click(function() {
      $("#text2").hide();
      $("#text3").show();
      $("#row2").show();
      $("#target1-2").html("Yes We Can!");
      $(this).attr("id","target1-3")

      /* Later Insert Loop Function */
      $("#target1-3").click(function() {
        $("#text3").hide();
        $("#text4").show();
        $("#target2").appendTo("#right-well")
        $(this).html("We Can Do More.")
        $(this).attr("id","target1-4")
        $("#target1-4").click(function() {
          $("#text4").hide();
          $("#text5").show();
          $("#left-well").addClass("adjust");
          $("#right-well").addClass("adjust");
          $("#target5").show();
          $(this).hide();
        });

      })
    });
  });
  $("#target5").click(function() {
    $("#text5").hide();
    $("#text6").show();
    $(this).html("Water with Water");
    $("#target2").hide();
    $("#target3").hide();
    $("#target4").hide();
    $("#target6").show();
    $("#target7").show();
    $("#target8").show();
    $(this).click(function() {
      $("#target6").clone().appendTo("#right-well");
      $("#text6").hide();
      $("#text7").show();
      $(this).click(function() {
        $("#left-well").hide();
        $("#right-well").hide();
        $("#text7").show();
        $(this).hide();
        $("#row3").show();
      });
    });
  });

  // $("#gamebtn").click(function) {
  //   var age = $("#age").val();
  //   var select1 = $("#select1").val();
  //   var select2 = $("#select2").val();
  //
  //   if (age >= 25 && )
  // }

});
