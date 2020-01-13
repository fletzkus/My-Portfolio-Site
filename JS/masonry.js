// external js: masonry.pkgd.js
$('.grid').masonry({
itemSelector: '.grid-item',
columnWidth: 320,
horizontalOrder: true,
gutter: 30,
isFitWidth: true
});

//making the grid-items (the project and design boxes) the correct height for their content
$('.grid-item').each(function( index ) {
  // console.log( index + ": " + $( this ).text() );
  $(this).height($(this).innerHeight()+"px");
});
