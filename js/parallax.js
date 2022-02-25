$(document).ready(function(){
  const windowWidth = $(window).width(); // calculo el ancho de la pantalla
  //console.log(windowWidth);
  if(windowWidth > 800) {
// cuando el usuario haga scroll en la página
$(window).scroll(function(){
  const scroll = $(window).scrollTop();
  //console.log(scroll);

  $("header .textos").css({
    // translate (lo que va horizontal y vertical, los movimientos de los ejes)
    "transform": "translate(0px," + scroll/2 + "%)"
// transform: translate(0px, 76%) en css
  });

  $(".acerca-de article").css({
    "transform": "translate(0px,-" + scroll/4 + "%)"
  })

});
}
});