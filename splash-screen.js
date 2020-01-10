





var changeFrame = function(param) {
  var frame = document.getElementById('iframe');
  if (param.innerHTML === '<strong>Education</strong>') {
    frame.src = 'Resume/education.html';
  }
  else if (param.innerHTML === '<strong>Skills</strong>') {
    frame.src = 'Resume/skills.html';
  }
  else if (param.innerHTML === '<strong>Experience</strong>') {
    frame.src = 'Resume/experience.html';
  }
  else {
    frame.src = 'Resume/leadership-and-service.html';
  }
};



var sidebar = document.getElementById("sidebar");
var body = document.getElementById("body");
var scrollbar = document.getElementById("scrollbar");

var maxY = window.innerHeight + window.pageYOffset + scrollbar.offsetHeight;
var y = window.pageYOffset;// + window.innerHeight ;
function scroll() {
  console.log("maxy" + maxY);
  console.log("y" + y);
  console.log("offset height" + scrollbar.offsetHeight);
  maxY = window.innerHeight + window.pageYOffset + scrollbar.offsetHeight + 1000;
  y = window.pageYOffset;
  //console.log("percent" + ((y*1.0)/maxY)*100 + "%");
  scrollbar.style.height = ((((y*1.0)/maxY)*100) + 5) + "%";
  //remove the +5 in line above?

  //yHandler code
  if (window.pageYOffset >= (window.innerHeight)) {
    //sidebar.style.visibility = "visible";
    sidebar.style.top = "0";
    sidebar.style.position = "fixed";
    scrollbar.style.position = "fixed";
  }
  else {// (window.pageYOffset < (s.offsetHeight + window.innerHeight)) {
    //sidebar.style.visibility = "hidden";
    sidebar.style.top = "auto";
    sidebar.style.position = "absolute";
    scrollbar.style.position = "absolute";
  }
}



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


    //
    // if (st > lastScrollTop){
    //     // downscroll code
    //     console.log("downscroll");
    //     var downscroll = true;
    //     var upscroll = false;
    //     //loop through all panels
    //     //system of ifs to check if me are above any id heading
    //     //near being 0.49
    //     //then automatically scroll to that heading
    //     //  .offset().top
    //     //  .outerHeight()
    //
    //
    //
    // } else {
    //    // upscroll code
    //    console.log("upscroll");
    //    var downscroll = false;
    //    var upscroll = true;
    // }
    lastScrollTop = st;
  //} //if navScrolling is false

});

// var myVar = setInterval(changePathColorAbout, 100);
// var myVar = setInterval(changePathColorContact, 200);

var resumePath = document.getElementById('resume-path');
var about = document.getElementById('about-panel');
var contact = document.getElementById('contact-panel');
var projectsPath = document.getElementById('projects-path');
//put this in an array tomorrow //FIXME

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



var navScrolling = false; //so as not to mess with automated scrolling around page
$(document).ready(function() {
  //this function is always going

// document.getElementById("about-face").style.height = document.getElementById("about-text").innerHeight;



  navScrolling = true;
  var time = 1000;
  $('.nav-item').click(function(e) {
    var linkHref = $(this).attr('href');
    // console.log(linkHref);
    $('html, body').animate({
       scrollTop: $(linkHref).offset().top
     }, time);
    e.preventDefault();
  });
  //setTimeout(finishScroll, time);
});


// function finishScroll() {
//   console.log("finishedScroll");
//   navScrolling = false;
// };
// window.onscroll = yHandler;
//
//
// function yHandler() {
//   console.log("YHANDLER");
//   // console.log("whole screen: " + window.pageYOffset);
//   // console.log("top of sidebar: " + sidebar.offsetHeight);
//   // console.log("window inner height: " + window.innerHeight);
//
// }


var c = document.getElementById("title-panel");
var ctx = c.getContext("2d");
var cH;
var cW;
var bgColor = "white";
var animations = [];
var circles = [];

function removeAnimation(animation) {
  var index = animations.indexOf(animation);
  if (index > -1) animations.splice(index, 1);
}

function calcPageFillRadius(x, y) {
  var l = Math.max(x - 0, cW - x);
  var h = Math.max(y - 0, cH - y);
  return Math.sqrt(Math.pow(l, 2) + Math.pow(h, 2));
}

function addClickListeners() {
  //document.addEventListener("touchstart", handleEvent);
  document.addEventListener("mousedown", handleEvent);
};

var q = 0;


//fixing resume iframe height
//height = container size - header height
//initially
var containerHeight = $(document.getElementById("resume")).outerHeight();
var headerHeight = $(document.getElementById("resume-header")).outerHeight();
document.getElementById("resume-body").style.height = (containerHeight - headerHeight) + "px";


$('.grid-item').each(function( index ) {
  console.log( index + ": " + $( this ).text() );

  $(this).height($(this).innerHeight()+"px");
  // $(this).height($(this).find('.box').height()+"px");
});


$(window).resize(function() { //whenever page changes width



  var containerHeight = $(document.getElementById("resume")).outerHeight();
  var headerHeight = $(document.getElementById("resume-header")).outerHeight();
  document.getElementById("resume-body").style.height = (containerHeight - headerHeight) + "px";
});



var once = false;
function handleEvent(e) {
  navScrolling = true;
  //don't need
    // if (e.touches) {
    //   e.preventDefault();
    //   e = e.touches[0];
    // }
  //
    if (once === false ) {


    var currentColor = "white";//colorPicker.current();
    var nextColor = "#E14154";//colorPicker.next();
    var targetR = calcPageFillRadius(e.pageX, e.pageY);
    var rippleSize = Math.min(200, (cW * .4));
    var minCoverDuration = 1000;

    document.getElementById("h1").style.color = "transparent";
    document.getElementById("h2").style.color = "transparent";

    var pageFill = new Circle({
      x: e.pageX,
      y: e.pageY,
      r: 0,
      fill: nextColor
    });
    var fillAnimation = anime({
      targets: pageFill,
      r: targetR,
      duration:  Math.max(targetR / 2 , minCoverDuration ),
      easing: "easeOutQuart",
      complete: function(){
        bgColor = pageFill.fill;
        removeAnimation(fillAnimation);
      }
    });




    var ripple = new Circle({
      x: e.pageX,
      y: e.pageY,
      r: 0,
      fill: currentColor,
      stroke: {
        width: 3,
        color: currentColor
      },
      opacity: 1
    });
    var rippleAnimation = anime({
      targets: ripple,
      r: rippleSize,
      opacity: 0,
      easing: "easeOutExpo",
      duration: 900,
      //complete: removeAnimation
      complete: function(){
        //bgColor = pageFill.fill;
        removeAnimation(rippleAnimation);
      }
    });



    var particles = [];
    for (var i=0; i<32; i++) {
      var particle = new Circle({
        x: e.pageX,
        y: e.pageY,
        fill: currentColor,
        r: anime.random(24, 48)
      })
      particles.push(particle);
    }
    var particlesAnimation = anime({
      targets: particles,
      x: function(particle){
        return particle.x + anime.random(rippleSize, -rippleSize);
      },
      y: function(particle){
        return particle.y + anime.random(rippleSize * 1.15, -rippleSize * 1.15);
      },
      r: 0,
      easing: "easeOutExpo",
      duration: anime.random(1000,1300),
      //complete: removeAnimation
      complete: function(){
        //bgColor = pageFill.fill;
        removeAnimation(rippleAnimation);
      }
    });
    if (q === 0) {
       animations.push(fillAnimation, rippleAnimation, particlesAnimation);
    }
    q++;
  document.getElementById("h1").style.color = "white";
    document.getElementById("h2").style.color = "white";
    document.getElementById("title").style.backgroundColor = "transparent";

    setTimeout(scrollPage, 1000);
    once = true;
    navScrolling = false;
    //document.getElementById("title").style.background = "radial-gradient(#E16D7B, #E14154)";
    //document.getElementById("c").style.backgroundRepeat = "no-repeat";
  }
}

function scrollPage() {
  console.log("hellow");

  //FIXME
  // var canvasHeight = $('canvas').outerHeight();
  // $('html, body').animate({
  //   scrollTop: canvasHeight
  // }, 500);
  document.getElementById("body").style.overflow = "auto";
  //END FIXME


//   //document.getElementById("title").style.transition = "0.2s";
//   document.getElementById("title").style.background = "radial-gradient(#E16D7B, #E14154)";
}

function extend(a, b){
  for(var key in b) {
    if(b.hasOwnProperty(key)) {
      a[key] = b[key];
    }
  }
  return a;
}

var Circle = function(opts) {
  extend(this, opts);
}

Circle.prototype.draw = function() {
  ctx.globalAlpha = this.opacity || 1;
  ctx.beginPath();
  ctx.arc(this.x, this.y, this.r, 0, 2 * Math.PI, false);
  if (this.stroke) {
    ctx.strokeStyle = this.stroke.color;
    ctx.lineWidth = this.stroke.width;
    ctx.stroke();
  }
  if (this.fill) {
    ctx.fillStyle = this.fill;
    ctx.fill();
  }
  ctx.closePath();
  ctx.globalAlpha = 1;
}

var animate = anime({
  duration: Infinity,
  update: function() {
    ctx.fillStyle = bgColor;
    ctx.fillRect(0, 0, cW, cH);
    animations.forEach(function(anim) {
      anim.animatables.forEach(function(animatable) {
        animatable.target.draw();
      });
    });
  }
});

var resizeCanvas = function() {
  cW = window.innerWidth;
  cH = window.innerHeight;
  c.width = cW * devicePixelRatio;
  c.height = cH * devicePixelRatio;
  ctx.scale(devicePixelRatio, devicePixelRatio);
};

(function init() {
  resizeCanvas();
  // if (window.CP) {
  //   // CodePen's loop detection was causin' problems
  //   // and I have no idea why, so...
  //   window.CP.PenTimer.MAX_TIME_IN_LOOP_WO_EXIT = 6000;
  // }
  window.addEventListener("resize", resizeCanvas);
  addClickListeners();
  if (!!window.location.pathname.match(/fullcpgrid/)) {
    startFauxClicking();
  }
  handleInactiveUser();
})();

function handleInactiveUser() {
  var inactive = setTimeout(function(){
    fauxClick(cW/2, cH/2);
  }, 1200);

  function clearInactiveTimeout() {
    clearTimeout(inactive);
    document.removeEventListener("mousedown", clearInactiveTimeout);
    document.removeEventListener("touchstart", clearInactiveTimeout);
  }

  document.addEventListener("mousedown", clearInactiveTimeout);
  //document.addEventListener("touchstart", clearInactiveTimeout);
}

function startFauxClicking() {
  setTimeout(function(){
    fauxClick(anime.random( cW * .2, cW * .8), anime.random(cH * .2, cH * .8));
    startFauxClicking();
  }, anime.random(200, 900));
}

function fauxClick(x, y) {
  var fauxClick = new Event("mousedown");
  fauxClick.pageX = x;
  fauxClick.pageY = y;
  document.dispatchEvent(fauxClick);
}
