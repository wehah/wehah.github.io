
//colorChange()

// --------------------------------------------------------------
// CAROUSEL
// --------------------------------------------------------------


$("#carousel").skippr({
   autoPlayDuration: 2000,
   speed: 1000,
   navType: 'bubble',
   arrows: true,
   autoPlay: true
});




// --------------------------------------------------------------
// COLOUR CHANGER - HERO
// --------------------------------------------------------------

// javascript settings for colour changing the hero h1 tag.

$(".hero").mousemove(function (e) {
    red = e.pageX;
    green = e.pageY;
    blue = 200;
    rgb = "rgb(" + red + "," + green + "," + blue + ")";
    $(".hero h1").css("color", rgb);
 });

 function changetext() {
    $(".hero a") .css("filter", "grayscale(100%)");
    }


 // --------------------------------------------------------------
// COLOUR CHANGER - BANNER1
// ---------------------------------------------------------------

 $(".banner").mousemove(function (e) {
    blue = e.pageX;
    yellow = e.pageY;
    white = 180;
    rgb = "rgb(" + blue + "," + yellow + "," + white + ")";
    $(".banner h2").css("color", rgb);
 });


 /* function colorChange() {
    $(".banner h2") .css("color", "white");
    } */


// --------------------------------------------------------------
// COUNTDOWN TIMER
// --------------------------------------------------------------

// Set the date we're counting down to
var countDownDate = new Date("Dec 31, 2022 15:37:25").getTime();

var x = setInterval(function () {
   var now = new Date().getTime();
   var distance = countDownDate - now;
   var days = Math.floor(distance / (1000 * 60 * 60 * 24));
   var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
   var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
   var seconds = Math.floor((distance % (1000 * 60)) / 1000);
   document.getElementById("countdown").innerHTML = days + " Days " + hours + " Hrs " +
       minutes + " m " + seconds + " s ";
   if (distance < 0) {
       clearInterval(x);
       document.getElementById("countdown").innerHTML = "IT IS ON <br> Come & Join us";
   }
}, 1000);

// --------------------------------------------------------------
// FOOTER
// --------------------------------------------------------------

$(".sendemail") .on("click", function(){
  alert("Thank you");
});
