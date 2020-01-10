
// document.getElementById("grad").style.background = "radial-gradient(black,black,red)";
// document.getElementById("grad").style.color = "white";
//
// var maxY = window.innerHeight + window.pageYOffset + document.getElementById("h").offsetHeight;
// var y = window.pageYOffset + window.innerHeight ;
// var pgy = window.pageYOffset;
// function scroll() {
//   console.log("maxy" + maxY);
//   console.log("y" + y);
//   console.log("offset height" + document.getElementById("h").offsetHeight);
//   //var pgy = window.pageYOffset;
//   document.getElementById("scrollbar").style.height = ((y*1.0)/maxY)*100 + "%";
// }
//
// function yHandler() {
//   console.log("maxy" + maxY);
//   console.log("y" + y);
//   console.log("pgy" + pgy)
//   pgy = window.pageYOffset;
//   console.log("offset height" + document.getElementById("h").offsetHeight);
// }

var maxY = window.innerHeight + window.pageYOffset + document.getElementById("scrollbar").offsetHeight;
var y = window.pageYOffset;// + window.innerHeight ;
function scroll() {
  console.log("maxy" + maxY);
  console.log("y" + y);
  console.log("offset height" + document.getElementById("scrollbar").offsetHeight);
  maxY = window.innerHeight + window.pageYOffset + document.getElementById("scrollbar").offsetHeight;
  y = window.pageYOffset;
  //console.log("percent" + ((y*1.0)/maxY)*100 + "%");
  document.getElementById("scrollbar").style.height = ((((y*1.0)/maxY)*100) + 5) + "%";
  //remove the +5 in line above?
}

window.onscroll = scroll;

// window.onscroll = yHandler;
//
// var s = document.getElementById("s");
// var body = document.getElementById("grad");
// function yHandler() {
//   console.log("whole screen: " + window.pageYOffset);
//   console.log("top of sidebar: " + s.offsetHeight);
//   console.log("window inner height: " + window.innerHeight);
//   if (window.pageYOffset >= (s.offsetHeight + window.innerHeight)) {
//     s.style.visibility = "visible";
//   }
//   else {// (window.pageYOffset < (s.offsetHeight + window.innerHeight)) {
//     s.style.visibility = "hidden";
//   }
// }
