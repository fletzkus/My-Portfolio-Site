
//idea to learn implement an auto scroll feature
//learned about animated jquery scrolling: https://www.youtube.com/watch?v=o6eJ1K_1CKA
//learned about detecting scroll direction: https://stackoverflow.com/questions/4326845/how-can-i-determine-the-direction-of-a-jquery-scroll-event
var lastScrollTop = 0;
var downscroll = false;
var upscroll = false;
$(window).scroll(function(event){
  console.log("in the func");
  //if (navScrolling === false) {
    console.log("in the func, navScrolling === false");
    var st = $(this).scrollTop();


    var panels = $( ".panel" );
    panels.each(function( index ) {
      if (index > 0) { //panels.size()-1) { //not the last one
        //var nextPanel = panels.get(index + 1);

        var panelTop = $(this).offset().top;
        var panelHeight = $(this).outerHeight();
        var justAbovePanel = panelTop - (panelHeight/2);
        console.log( index + ": top: " + panelTop + " height: " + panelHeight);
        console.log("st: " + st + " justAbovePanel: " + justAbovePanel + " panelHeight: " + panelHeight);
        if (st > justAbovePanel && st < panelTop && st > lastScrollTop) { //just above the panel and scrolling down
          //jump to current panel automatically
          console.log("less than half way above, scrolling down");
          // $('html, body').animate({
          //    scrollTop: panelTop
          //  }, 300);
        }

      }
   });

    lastScrollTop = st;
});





//idea to animate the gradient panels on the main page

// var myVar = setInterval(changePathColorAbout, 100);
// var myVar = setInterval(changePathColorContact, 200);

var resumePath = document.getElementById('resume-path');
var about = document.getElementById('about-panel');
var contact = document.getElementById('contact-panel');
var projectsPath = document.getElementById('projects-path');
//put this in an array  //FIXME

var h = 0;
var s = 1;
var l = 2;
var maxVal = 0;
var minVal = 1;
var topVal = 2;
var botVal = 3;

var aboutValues = [[247, 177, 247, 218], [53, 51, 51, 52], [38, 33, 38, 36]];

var aboutIncHue = false;
var aboutIncSat = true;
var aboutIncLight = false;
function changePathColorAbout() {
  //purple: hsl(247,51%,38%)
  //intermediate color: hsl(218,55%,35%)
  //green: hsl(176,53%,33%)
  if (aboutValues[h][botVal] <= aboutValues[h][minVal]) {
    aboutIncHue = true;
  }
  if (aboutValues[h][topVal] >= aboutValues[h][maxVal]) {
    aboutIncHue = false;
  }
  if (aboutValues[s][botVal] <= aboutValues[s][minVal]) {
    aboutIncSat = true;
  }
  if (aboutValues[s][topVal] >= aboutValues[s][maxVal]) {
    aboutIncSat = false;
  }
  if (aboutValues[l][botVal] <= aboutValues[l][minVal]) {
    aboutIncLight = true;
  }
  if (aboutValues[l][topVal] >= aboutValues[l][maxVal]) {
    aboutIncLight = false;
  }

  if (aboutIncHue === true) {
    aboutValues[h][botVal] = aboutValues[h][botVal] + 1;
    aboutValues[h][topVal] = aboutValues[h][topVal] + 1;
  }
  else {
    aboutValues[h][botVal] = aboutValues[h][botVal] - 1;
    aboutValues[h][topVal] = aboutValues[h][topVal] - 1;
  }
  if (aboutIncSat === true) {
    aboutValues[s][botVal] = aboutValues[s][botVal] + 1;
    aboutValues[s][topVal] = aboutValues[s][topVal] + 1;
  }
  else {
    aboutValues[s][botVal] = aboutValues[s][botVal] - 1;
    aboutValues[s][topVal] = aboutValues[s][topVal] - 1;
  }
  if (aboutIncLight === true) {
    aboutValues[l][botVal] = aboutValues[l][botVal] + 1;
    aboutValues[l][topVal] = aboutValues[l][topVal] + 1;
  }
  else {
    aboutValues[l][botVal] = aboutValues[l][botVal] - 1;
    aboutValues[l][topVal] = aboutValues[l][topVal] - 1;
  }

  about.style.background = "linear-gradient(" + 180 + "deg, hsl(" +
    aboutValues[h][topVal] + "," + 55 + "%," + 35 + "%), hsl(" +
    aboutValues[h][botVal] + "," + 55 + "%," +35 + "%))";
  resumePath.style.fill = "hsl(" + aboutValues[h][botVal] + "," + 55 +
  "%," + 35+ "%)";

  // about.style.background = "linear-gradient(" + 180 + "deg, hsl(" +
  //   aboutValues[h][topVal] + "," + aboutValues[s][topVal] + "%," + aboutValues[l][topVal] + "%), hsl(" +
  //   aboutValues[h][botVal] + "," + aboutValues[s][botVal] + "%," + aboutValues[l][botVal] + "%))";
  // resumePath.style.fill = "hsl(" + aboutValues[h][botVal] + "," + 55 +
  // "%," + 35+ "%)";
}

var contactValues = [[353, 247, 247, 300], [73, 51, 51, 62], [57, 38, 38, 47]];
var contactIncHue = true;
var contactIncSat = true;
var contactIncLight = true;
function changePathColorContact() {
  //purple: hsl(247,51%,38%)
  //intermediate color: hsl(300,62%,47%)
  //red: hsl(353,73%,57%)
  if (contactValues[h][botVal] <= contactValues[h][minVal]) {
    contactIncHue = true;
  }
  if (contactValues[h][topVal] >= contactValues[h][maxVal]) {
    contactIncHue = false;
  }
  if (contactValues[s][botVal] <= contactValues[s][minVal]) {
    contactIncSat = true;
  }
  if (contactValues[s][topVal] >= contactValues[s][maxVal]) {
    contactIncSat = false;
  }
  if (contactValues[l][botVal] <= contactValues[l][minVal]) {
    contactIncLight = true;
  }
  if (contactValues[l][topVal] >= contactValues[l][maxVal]) {
    contactIncLight = false;
  }

  if (contactIncHue === true) {
    contactValues[h][botVal] = contactValues[h][botVal] + 1;
    contactValues[h][topVal] = contactValues[h][topVal] + 1;
  }
  else {
    contactValues[h][botVal] = contactValues[h][botVal] - 1;
    contactValues[h][topVal] = contactValues[h][topVal] - 1;
  }
  if (contactIncSat === true) {
    contactValues[s][botVal] = contactValues[s][botVal] + 1;
    contactValues[s][topVal] = contactValues[s][topVal] + 1;
  }
  else {
    contactValues[s][botVal] = contactValues[s][botVal] - 1;
    contactValues[s][topVal] = contactValues[s][topVal] - 1;
  }
  if (contactIncLight === true) {
    contactValues[l][botVal] = contactValues[l][botVal] + 1;
    contactValues[l][topVal] = contactValues[l][topVal] + 1;
  }
  else {
    contactValues[l][botVal] = contactValues[l][botVal] - 1;
    contactValues[l][topVal] = contactValues[l][topVal] - 1;
  }

  contact.style.background = "linear-gradient(" + 180 + "deg, hsl(" +
    contactValues[h][topVal] + "," + contactValues[s][topVal] + "%," + contactValues[l][topVal] + "%), hsl(" +
    contactValues[h][botVal] + "," + contactValues[s][botVal] + "%," + contactValues[l][botVal] + "%))";
  projectsPath.style.fill = "hsl(" + contactValues[h][botVal] + "," + contactValues[s][botVal] +
  "%," + contactValues[l][botVal]+ "%)";
}
