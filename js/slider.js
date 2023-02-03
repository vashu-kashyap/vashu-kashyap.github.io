$(document).ready(function(){
  $('.testimonial-wraper').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 7000,
    nextArrow:".next-btn-s",
    prevArrow:".prev-btn-s",
  });
});

$(document).ready(function(){
  $('.p-card-wraper').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 7000,
    nextArrow:".next-btn",
    prevArrow:".prev-btn",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 454,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
    

  });
});
	
	