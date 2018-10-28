$(window).scroll(function() {
  console.log($(document).scrollTop(),$('nav').offset().top)
 if ($(document).scrollTop() > $('nav').offset().top -1) {
   $('nav').addClass('shrink')
 } else {
   $('nav').removeClass('shrink')
 }
})
