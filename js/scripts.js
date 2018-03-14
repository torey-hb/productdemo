console.log('Be like Browser.');

// Light Gallery
$('#gallery-1').lightGallery({
  mode : 'lg-slide-circular-vertical',
  download : false,
  share : false,
});

//Parallax
$('.para').imageScroll({
  parallax: true,
  coverRatio: .9,
});

$('.para2').imageScroll({
  parallax: true,
  coverRatio: .5,
});