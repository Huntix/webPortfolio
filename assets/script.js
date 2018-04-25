var meStuff = ["Gamer", "Full Stack Web Developer", "Bearded guy", "Coca-Cola lover", "World of Warcraft fan", "MCU Fan"];
var count = 0;
$(document).ready(function() {
  animateH3();
  slidePage();
});


//Change h3 over time
function animateH3() {
  var changeH3 = setInterval(function(){
    if(count === 6) {
      clearInterval(changeH3);
    }
    count++;
    $("#changer").text(meStuff[count % meStuff.length]).fadeIn(500).delay(500);
  }, 2000);  
}

function slidePage() {
  $('span').on('click', function(event){
    event.preventDefault();
    $('html, body').animate({
      scrollTop: $("#hereme").offset().top
    }, 1500);

  })
  
}