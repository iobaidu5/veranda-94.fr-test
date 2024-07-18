$(document).ready(function () {
  $("li.active").removeClass("active");
  $('a[href="' + location.pathname + '"]')
    .closest("li")
    .addClass("active");
});



const nav = document.querySelector(".fixedNav");
window.addEventListener("scroll", fixNav);

function fixNav() {
  if (window.scrollY > nav?.offsetHeight + 150) {
    nav.classList.add("navbar-active");
   nav.removeAttribute('clip-path');
  } else {
    nav.classList.remove("navbar-active");
  }
}

$(document).ready(function() {
  $('.portfolio').each(function() {
      $(this).addClass('show');
  });

  $('#filters .filter').on('click', function() {
      var filterValue = $(this).data('filter');
      $('#filters .filter').removeClass('active');
      $(this).addClass('active');
      
      if (filterValue === '*') {
          $('.portfolio').each(function() {
              $(this).hide("slow").removeClass('show').delay(500).queue(function(next) {
                  $(this).show("slow").addClass('show');
                  next();
              });
          });
      } else {
          $('.portfolio').each(function() {
              $(this).hide("slow").removeClass('show');
          });
          $(filterValue).each(function() {
              $(this).hide("slow").removeClass('show').delay(500).queue(function(next) {
                  $(this).show("slow").addClass('show');
                  next();
              });
          });
      }
  });
});


$(document).ready(function () {
  var owl = $(".owl");
  owl.owlCarousel({
    items: 1,
    nav: false,
    loop: true,
    autoplay: true,
    margin: 20,
    autoplayTimeout: 5000,
    autoplayHoverPause: false,
    dots: true,
    animateIn: "fadeIn",
    animateOut: "fadeOut",
    // navText: [
    //   "<i class='fas fa-circle owlNav-left'></i>",
    //   "<i class='fas fa-circle owlNav-right'></i>",
    // ],
    responsiveClass: true,
    responsive: {
      100: {
        items: 1,
        nav: true,
      },
      400: {
        items: 1,
        nav: true,
      },
      768: {
        items: 1,
        nav: true,
      },
      1200: {
        items: 1,
        nav: false,
      },
      1600: {
        items: 1,
        nav: true,
        loop: false,
      },
    },
  });

  function limitDots() {
    var dots = $('.owl-dot');
    if (dots.length > 3) {
      dots.slice(3).hide(); // Hide all dots after the third one
    }
  }

  // Call the function to limit dots
  limitDots();

  // Reapply the limitDots function after each change (like when navigating)
  owl.on('changed.owl.carousel', function (event) {
    limitDots();
  });
  $(".play").on("click", function () {
    owl.trigger("play.owl.autoplay", [5000]);
  });
  $(".stop").on("click", function () {
    owl.trigger("stop.owl.autoplay");
  });
});


  $(document).ready(function () {
    $('#accordion').on('show.bs.collapse', function (e) {
      var $cardArrow = $(e.target).prev('.accordion-title').find('.card-arrow');
      $cardArrow.find('i').removeClass('fa-plus').addClass('fa-minus');
      $cardArrow.css('transform', 'rotate(0deg)');
    }).on('hide.bs.collapse', function (e) {
      var $cardArrow = $(e.target).prev('.accordion-title').find('.card-arrow');
      $cardArrow.find('i').removeClass('fa-minus').addClass('fa-plus');
      $cardArrow.css('transform', 'rotate(0deg)');
    });
  });

  function addTitleToLinks() {
    var links = document.querySelectorAll('a');
  
    links.forEach(function(link) {
        if (!link.hasAttribute('title')) {
            var linkText = link.textContent;
            link.setAttribute('title', linkText);
        }
    });
  }
  
  addTitleToLinks();
  
  
   $(document).ready(function(){

      $("#choix1").click(function(){
           $(this).addClass("active");
			$("#choix2").removeClass("active");
			$("#choix3").removeClass("active");
			$("#choix4").removeClass("active");
			$("#choix5").removeClass("active");
			$("#choix6").removeClass("active");
			$("#choix7").removeClass("active");
			$("#choix8").removeClass("active");

           $("#contenu1").fadeIn(1000);
			$("#contenu2").fadeOut(1000);
			$("#contenu3").fadeOut(1000);
			$("#contenu4").fadeOut(1000);
			$("#contenu5").fadeOut(1000);
			$("#contenu6").fadeOut(1000);
			$("#contenu7").fadeOut(1000);
			$("#contenu8").fadeOut(1000);
       });

        $("#choix2").click(function(){
           $(this).addClass("active");
			$("#choix1").removeClass("active");
			$("#choix3").removeClass("active");
			$("#choix4").removeClass("active");
			$("#choix5").removeClass("active");
			$("#choix6").removeClass("active");
			$("#choix7").removeClass("active");
			$("#choix8").removeClass("active");

           $("#contenu2").fadeIn(1000);
           $("#contenu1").fadeOut(1000);
           $("#contenu3").fadeOut(1000);
			$("#contenu4").fadeOut(1000);
			$("#contenu5").fadeOut(1000);
			$("#contenu6").fadeOut(1000);
			$("#contenu7").fadeOut(1000);
			$("#contenu8").fadeOut(1000);
         
       });
         $("#choix3").click(function(){
           $(this).addClass("active");
           $("#choix1").removeClass("active");
           $("#choix2").removeClass("active");
           $("#choix4").removeClass("active");
			$("#choix5").removeClass("active");
			$("#choix6").removeClass("active");
			$("#choix7").removeClass("active");
			$("#choix8").removeClass("active");

           $("#contenu3").fadeIn(1000);
           $("#contenu1").fadeOut(1000);
           $("#contenu2").fadeOut(1000);
			$("#contenu4").fadeOut(1000);
			$("#contenu5").fadeOut(1000);
			$("#contenu6").fadeOut(1000);
			$("#contenu7").fadeOut(1000);
			$("#contenu8").fadeOut(1000);
         
       });


          $("#choix4").click(function(){
           $(this).addClass("active");
           $("#choix1").removeClass("active");
           $("#choix2").removeClass("active");
           $("#choix3").removeClass("active");
			$("#choix5").removeClass("active");
			$("#choix6").removeClass("active");
			$("#choix7").removeClass("active");
			$("#choix8").removeClass("active");

           $("#contenu4").fadeIn(1000);
           $("#contenu1").fadeOut(1000);
           $("#contenu2").fadeOut(1000);
			$("#contenu3").fadeOut(1000);
			$("#contenu5").fadeOut(1000);
			$("#contenu6").fadeOut(1000);
			$("#contenu7").fadeOut(1000);
			$("#contenu8").fadeOut(1000);
         
       });

         $("#choix5").click(function(){
           $(this).addClass("active");
           $("#choix1").removeClass("active");
           $("#choix2").removeClass("active");
           $("#choix3").removeClass("active");
			$("#choix4").removeClass("active");
			$("#choix6").removeClass("active");
			$("#choix7").removeClass("active");
			$("#choix8").removeClass("active");

           $("#contenu5").fadeIn(1000);
           $("#contenu1").fadeOut(1000);
           $("#contenu2").fadeOut(1000);
			$("#contenu3").fadeOut(1000);
			$("#contenu4").fadeOut(1000);
			$("#contenu6").fadeOut(1000);
			$("#contenu7").fadeOut(1000);
			$("#contenu8").fadeOut(1000);
         
       });


         $("#choix6").click(function(){
           $(this).addClass("active");
           $("#choix1").removeClass("active");
           $("#choix2").removeClass("active");
           $("#choix3").removeClass("active");
			$("#choix4").removeClass("active");
			$("#choix5").removeClass("active");
			$("#choix7").removeClass("active");
			$("#choix8").removeClass("active");

           $("#contenu6").fadeIn(1000);
           $("#contenu1").fadeOut(1000);
           $("#contenu2").fadeOut(1000);
			$("#contenu3").fadeOut(1000);
			$("#contenu4").fadeOut(1000);
			$("#contenu5").fadeOut(1000);
			$("#contenu7").fadeOut(1000);
			$("#contenu8").fadeOut(1000);
         
       });


           $("#choix7").click(function(){
           $(this).addClass("active");
           $("#choix1").removeClass("active");
           $("#choix2").removeClass("active");
           $("#choix3").removeClass("active");
			$("#choix4").removeClass("active");
			$("#choix5").removeClass("active");
			$("#choix6").removeClass("active");
			$("#choix8").removeClass("active");

           $("#contenu7").fadeIn(1000);
           $("#contenu1").fadeOut(1000);
           $("#contenu2").fadeOut(1000);
			$("#contenu3").fadeOut(1000);
			$("#contenu4").fadeOut(1000);
			$("#contenu5").fadeOut(1000);
			$("#contenu6").fadeOut(1000);
			$("#contenu8").fadeOut(1000);
         
       });

           $("#choix8").click(function(){
           $(this).addClass("active");
           $("#choix1").removeClass("active");
           $("#choix2").removeClass("active");
           $("#choix3").removeClass("active");
			$("#choix4").removeClass("active");
			$("#choix5").removeClass("active");
			$("#choix6").removeClass("active");
			$("#choix7").removeClass("active");

           $("#contenu8").fadeIn(1000);
           $("#contenu1").fadeOut(1000);
           $("#contenu2").fadeOut(1000);
			$("#contenu3").fadeOut(1000);
			$("#contenu4").fadeOut(1000);
			$("#contenu5").fadeOut(1000);
			$("#contenu6").fadeOut(1000);
			$("#contenu7").fadeOut(1000);
         
       });

  });


  
  $(document).ready(function(){
    $(".carousel").owlCarousel({
      loop: true,
      margin: 10,
      nav: false,
      arrow: false,
      dots: false,
      responsive: {
        0: {
          items: 1
        },
        600: {
          items: 2
        },
        1000: {
          items: 3
        }
      }
    });
  });
  


$('.counter-count').each(function () {
  $(this).prop('Counter', 0).animate({
    Counter: $(this).text()
  }, {

    //chnage count up speed here
    duration: 4000,
    easing: 'swing',
    step: function (now) {
      $(this).text(Math.ceil(now));
    }
  });
});