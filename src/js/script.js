$(document).ready(function(){
    $('.carousel__inner').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        prevArrow: '<button type="button" class="slick-prev"><img src="../img/prev.png"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="../img/next.png"></button>',
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                arrows: false,
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                autoplay: true
                }
            }
        ]
    });
  });
          