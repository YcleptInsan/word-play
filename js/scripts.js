$(document).ready(function(){
  $("form#wordPlay").submit(function(event){
    event.preventDefault()

    var words = $("#words").val().split(" ");
    // console.log(words)

    var longerWords = words.filter(function(word){
      return word.length > 3
    });

    longerWords.reverse()

    $("ul").append(longerWords.join(" "));
  });
});
