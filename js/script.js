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

  /** Hinge Game Button Start **/

  $("#clickmebutton").click(function() {
    $(this).attr("id","clickme1");
    $("#clickme1").addClass("animated hinge clickmenow1")
    $("#clickme1").click(function() {
      $(this).attr("id","clickme2");
      $(this).removeClass("animated hinge clickmenow1").addClass("animated bounce clickmenow2").hide(3000);
      $("#clickme2").click(function() {
        $(this).removeClass("animated bounce clickmenow2 clickmenow1");
        $("#button12").css("margin-top","600px").show().addClass("animated hinge");
        $("#button12").click(function() {
          $("#button13").removeClass("animated bounce hinge").show();
          $("#button14").show().fadeOut(1500).click(function(){
            $("#button13").hide();
            $("#danger1").show().hide(2500);
            $("#danger3").show().hide(2500);
            $("#danger4").show().hide(2500);
            $("#danger5").show().hide(2500);
            $("#danger2").show().hide(4000).click(function() {
              var answer = prompt("How do spell 'hippopotamus?'\n HURRY! YOU HAVE 7 SECONDS.\n Just kidding, you have plenty of time.");
              if (answer === "hippopotamus") {
                alert("Congratulations! You win! :) \n When you click on OK the page will refresh.")
                location.reload();
              } else {
                alert("You fail. :( When you click on OK the page will refresh.");
                location.reload();
              }
            });
          });
        });
      });
    });
  });



  $("#restartbtn").click(function() {
    $(this).css("color","red");
    $(this).addClass("animated hinge").html("HELP!").addClass("afterbounce");
    setTimeout(function() {
      location.reload();
    },2000)
  });

  $("#target1").click(function() {
    $("#text1").hide();
    $("#text2").show();
    $("#target1").html("Keep Going...");
    $(this).attr("id","target1-2");
    $("#target1-2").click(function() {
      $("#text2").hide();
      $("#text3").show();
      $("#row2").show();
      $("#target1-2").attr("id","target1-3")

      /* Later Insert Loop Function */
      $("#target2").click(function() {
        $("#text3").hide();
        $("#text4").show();
        $("#target2").appendTo("#right-well")
        $("#target1-3").html("We Can Do More.")
        $().attr("id","target1-3")
        $("#target1-3").click(function() {
          $("#text4").hide();
          $("#text3").hide();
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
      $(this).html("Vacation Game")
      $(this).click(function() {
        $("#left-well").hide();
        $("#right-well").hide();
        $("#text7").hide();
        $("#text8").show();
        $(this).hide();
        $("#row3").show();
      });
    });
  });

  $("#gamebtn").click(function(event) {
    var age = $("#age").val();
    var select1 = $("#select1").val();
    var select2 = $("#select2").val();
    var select3 = $("#select3").val();
    var select4 = $("#select4").val();
    $("#row8").show();
    $("#answer1").hide();
    $("#answer2").hide();
    $("#answer3").hide();

    if (age === "") {
        alert("You didn't enter an age.\n\nNow you have to go back to start as punishment!");
        location.reload();
    } else if (select1 === "aliens") {
        $("#answer1").fadeIn("slow");
        $("#img1").show();
    } else if (select1 === "cars") {
        $("#answer2").fadeIn("slow");
        $("#img2").show();
    } else if (select1 === "hotGirls") {
        $("#img3").show();;
        $("#answer3").fadeIn("slow");
    };

    $(".realgamebtn").show();
    $("#text9").show();
    $("#text8").hide();

    /** Dungeon Button Game Start **/

    $(".realgamebtn").click(function() {
      $("#well2").hide();
      $("#well3").hide();
      $("#well4").hide();
      $("#text9").hide();
      $(this).hide();
      $("#text10").show();
      $("#hingegamebutton").show();
    });


    event.preventDefault();
  });




});
