$(document).ready(function(){
    $('.carousel').carousel();
  });

$('.carousel').carousel({
    fullWidth: true
});
autoplay();
function autoplay() {
    $('.carousel').carousel('next');
    setTimeout(autoplay, 4500);
}