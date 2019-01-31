$("#show-hide-empl").on("click", function (event) {

  //  $(this).style.visibility="hidden";
  $("#hide-empl").fadeToggle();
});


$("#show-hide-edu").on("click", function (event) {

  //  $(this).style.visibility="hidden";
  $("#hide-edu").fadeToggle();

});

$("input").fadeToggle();

$("#add-skill").on("click", function (event) {

  $("input").fadeToggle();
});

$("input").on("keypress", function (e) {

  //  $(this).style.visibility="hidden";
  if (e.which == 13) {
    var value = $(this).val();
    var rand = Math.floor((Math.random() * 80) + 1);
    var r1 = Math.floor((Math.random() * 255) + 1);
    var r2 = Math.floor((Math.random() * 255) + 1);
    var r3 = Math.floor((Math.random() * 255) + 1);
    $("#adding-skills").append(
      '<p class="skill">' + value + '</p> <div class="empty-skill"><div class="java-skill" style="background-color: rgb( '+r1+', '+r2+', '+r3+'); width:' + rand + '%; font-weight: bold; text-align: right;color:white;">' + rand + '%</div></div>');

    $(this).val("");
  }
});

$( "#add-skill" ).tooltip({
  content: "Awesome title!"
});

