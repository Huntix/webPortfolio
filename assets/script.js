var meStuff = ["Gamer", "Bearded guy", "Coca-Cola lover", "World of Warcraft fan", "MCU Fan"];
var count = 0;
$( document ).ready(function() {
    setInterval(function(){
        count++;
        $("#changer").text(meStuff[count]).fadeIn(400);
    }, 2000);

});