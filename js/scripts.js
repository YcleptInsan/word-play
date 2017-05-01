$(document).ready(function(){
  $("form#wordPlay").submit(function(event){
    event.preventDefault()

    var words = $("#words").val().split(" ");
    // console.log(words)

  });
});
