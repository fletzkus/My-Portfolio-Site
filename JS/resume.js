//changing the contents of the resume iframe when the header tabs are clicked
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

//fixing resume iframe height
//height = container size - header height
//initially when the page loads and...
var containerHeight = $(document.getElementById("resume")).outerHeight();
var headerHeight = $(document.getElementById("resume-header")).outerHeight();
document.getElementById("resume-body").style.height = (containerHeight - headerHeight) + "px";
//...whenever page changes width
$(window).resize(function() {
  var containerHeight = $(document.getElementById("resume")).outerHeight();
  var headerHeight = $(document.getElementById("resume-header")).outerHeight();
  document.getElementById("resume-body").style.height = (containerHeight - headerHeight) + "px";
});
