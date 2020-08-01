$(".tab").click(function() {
    $("#" + $(this).attr('id').replace("goto", "")).addClass("active");
    $(this).parent().parent().removeClass("active");
  });
  <button onclick="survey.html">VISIT PAGE NOW</button>