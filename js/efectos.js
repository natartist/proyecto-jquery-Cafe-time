$(document).ready(function(){
  /* EFECTOS DE LOS MENUS*/
  $(".menu a").each(function(index, elemento){
// this significa que hacemos referencia al elemento actual
$(this).css({
  "top": "-200px"
});

$(this).animate({
  "top": "0"
}, 2000 + (index * 500))
  });
});

/* Para el texto del header */
//calcula el ancho de la pantalla
if($(window).width() > 800) {
  $("header .textos").css({
    opacity: 0,
    marginTop:0,
  });

  $("header .textos").animate({
    opacity: 1,
    marginTop:"-52px"
  }, 1500);
}

//Enlaces del menu

const acercaDe = $("#acerca-de").offset().top //calculmos la posición en la pantalla de acerca-de con el scroll
const menu = $("#productos").offset().top //calculmos la posición en la pantalla de acerca-de con el scroll
const galeria = $("#galeria").offset().top //calculmos la posición en la pantalla de acerca-de con el scroll
const ubicacion = $("#ubicacion").offset().top //calculmos la posición en la pantalla de acerca-de con el scroll

$("#btn-acerca-de").on("click", function(event){
  event.preventDefault();
  //console.log("click en acerca de");
  //console.log(acercaDe);
  $("html, body").animate({
    scrollTop: acercaDe
  }, 500);
});

$("#btn-menu").on("click", function(event){
  event.preventDefault();
  $("html, body").animate({
    scrollTop: menu
  }, 500);
});

$("#btn-galeria").on("click", function(event){
  event.preventDefault();
  $("html, body").animate({
    scrollTop: galeria
  }, 500);
});

$("#btn-ubicacion").on("click", function(event){
  event.preventDefault();
  $("html, body").animate({
    scrollTop: ubicacion
  }, 500);
});