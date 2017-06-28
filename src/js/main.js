//jQuery begin
$(document).ready(function() {

  $(".slider-js").slick({
    infinite: true,
    slidesToShow: 3,
    centerMode: true,
    nextArrow: "slider-control-js",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1        
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });  

});
  var tl = new TimelineMax();  
  tl
  .fromTo('.section__logo', 1, { y: -300, opacity: 0}, {y: 0, opacity: 1})
  .fromTo('.page-header__mail', 0.7, { y: -100, opacity: 0}, {y: 0, opacity: 1})
  .fromTo('.section__bar', 0.5, { x: -100, opacity: 0}, {x: 0, opacity: 1})




