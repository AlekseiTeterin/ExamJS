$(document).ready(function(){
    $('.pictures').slick({
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        dots: true,
        pauseOnDotsHover: true
      });

      $('.pictures2').slick({
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
      });

  });


  

  