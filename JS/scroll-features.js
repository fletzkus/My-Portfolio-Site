//animating the page to scroll down to the about section after the initial load
function scrollPage() {
  //begin
  var canvasHeight = $('canvas').outerHeight();
  $('html, body').animate({
    scrollTop: canvasHeight
  }, 500);
  //end
  document.getElementById("body").style.overflow = "auto";
}


//creating the animated bar in the sidebar that increases in length as you scroll down the page
var sidebar = document.getElementById("sidebar");
var body = document.getElementById("body");
var scrollbar = document.getElementById("scrollbar");

var maxY = window.innerHeight + window.pageYOffset + scrollbar.offsetHeight;
var y = window.pageYOffset;// + window.innerHeight ;
function scroll() {
  // console.log("maxy" + maxY);
  // console.log("y" + y);
  // console.log("offset height" + scrollbar.offsetHeight);
  maxY = window.innerHeight + window.pageYOffset + scrollbar.offsetHeight + 1000;
  y = window.pageYOffset;
  scrollbar.style.height = ((((y*1.0)/maxY)*100) + 5) + "%";

  //yHandler code
  if (window.pageYOffset >= (window.innerHeight)) {
    //sidebar.style.visibility = "visible";
    sidebar.style.top = "0";
    sidebar.style.position = "fixed";
    scrollbar.style.position = "fixed";
  }
  else {// (window.pageYOffset < (s.offsetHeight + window.innerHeight)) {
    sidebar.style.top = "auto";
    sidebar.style.position = "absolute";
    scrollbar.style.position = "absolute";
  }
}

//This function is here to animate the transitions between sections on the main page
//transitions are triggered when a section is clicked in the nav bar
$(document).ready(function() { //this function is always going
  var time = 1000;
  $('.nav-item').click(function(e) {
    var linkHref = $(this).attr('href');
    // console.log(linkHref);
    $('html, body').animate({
       scrollTop: $(linkHref).offset().top
     }, time);
    e.preventDefault();
  });
});
