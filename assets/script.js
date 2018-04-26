var meStuff = ["Test6", "Test1", "Test2", "Test3", "Test4", "Test5"];

var count = 0;
$(document).ready(function() {
  animateH3();
  slidePage();

  meStuff.forEach(item => {
    console.log(item);
  });

  var cats = {
    cat1: 'Tomi',
    cat2: "Tomas",
    cat3: "Minka",
    cat4: "Vushka",
    "Patka": 55 
  };



  for (var item in cats) {
    console.log(cats[item]);
  }

  console.log(cats["Patka"]);

  

});


//Change h3 over time
function animateH3() {
  var changeH3 = setInterval(function(){
    if (count === 6) {
      clearInterval(changeH3);
    }

    count++;
    $("#changer").text(meStuff[count % meStuff.length]).fadeIn(500).delay(500);
  }, 2000);  
}

function slidePage() {
  $('.slideAbout').on('click', function(event){
    console.log("ASDASDASD");
    var scrolll = $(window).scrollTop();
    var divHeight = $(".section").height();
    var finalka = Math.floor(scrolll / divHeight);
    $('html, body').animate({
      scrollTop: $($('.section')[finalka + 1]).offset().top
    }, 1500);
  });
  console.log($(this));
  
}

