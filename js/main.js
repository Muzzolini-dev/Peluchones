(function ($) {
    "use strict";
    
    // Smooth scrolling on the navbar links
    $(".navbar-nav a").on('click', function (event) {
        if (this.hash !== "") {
            event.preventDefault();
            
            $('html, body').animate({
                scrollTop: $(this.hash).offset().top - 45
            }, 1500, 'easeInOutExpo');
            
            if ($(this).parents('.navbar-nav').length) {
                $('.navbar-nav .active').removeClass('active');
                $(this).closest('a').addClass('active');
            }
        }
    });
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Modal Video
    $(document).ready(function () {
        var $videoSrc;
        $('.btn-play').click(function () {
            $videoSrc = $(this).data("src");
        });
        console.log($videoSrc);

        $('#videoModal').on('shown.bs.modal', function (e) {
            $("#video").attr('src', $videoSrc + "?autoplay=1&amp;modestbranding=1&amp;showinfo=0");
        })

        $('#videoModal').on('hide.bs.modal', function (e) {
            $("#video").attr('src', $videoSrc);
        })
    });


    // Service and team carousel
    $(".team-carousel").owlCarousel({
        autoplay: false,
        smartSpeed: 1500,
        margin: 30,
        dots: false,
        loop: true,
        nav : true,
        navText : [
            '<i class="fa fa-angle-left" aria-hidden="true"></i>',
            '<i class="fa fa-angle-right" aria-hidden="true"></i>'
        ],
        responsive: {
            0:{
                items:1
            },
            576:{
                items:1
            },
            768:{
                items:2
            },
            992:{
                items:3
            },
            1200:{
                items:4
            }
        }
    });

     // Service and team carousel
     $(".service-carousel, .post-carousel").owlCarousel({
        autoplay: false,
        smartSpeed: 1500,
        margin: 30,
        dots: false,
        loop: true,
        nav : true,
        navText : [
            '<i class="fa fa-angle-left" aria-hidden="true"></i>',
            '<i class="fa fa-angle-right" aria-hidden="true"></i>'
        ],
        responsive: {
            0:{
                items:1
            },
            576:{
                items:1
            },
            768:{
                items:2
            },
            992:{
                items:3
            },
            
        }
    });


    // Product carousel
    $(".product-carousel").owlCarousel({
        autoplay: false,
        smartSpeed: 1500,
        margin: 30,
        dots: false,
        loop: true,
        nav : true,
        navText : [
            '<i class="fa fa-angle-left" aria-hidden="true"></i>',
            '<i class="fa fa-angle-right" aria-hidden="true"></i>'
        ],
        responsive: {
            0:{
                items:1
            },
            576:{
                items:2
            },
            768:{
                items:3
            },
            992:{
                items:4
            }
        }
    });


    // Portfolio isotope and filter
    var portfolioIsotope = $('.portfolio-container').isotope({
        itemSelector: '.portfolio-item',
        layoutMode: 'fitRows'
    });

    $('#portfolio-flters li').on('click', function () {
        $("#portfolio-flters li").removeClass('active');
        $(this).addClass('active');

        portfolioIsotope.isotope({filter: $(this).data('filter')});
    });

    


    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1500,
        dots: true,
        loop: true,
        items: 1
    });

    const now = new Date();

const now_string =  new Intl.DateTimeFormat('es-Es', {
    dateStyle: 'full',
    timeStyle: 'long',
    timeZone: 'Europe/Madrid',
  }).format(now);
  
console.log(now_string);

document.addEventListener("DOMContentLoaded", (event) => {
    const fecha = document.getElementById("fecha");
    const now = new Date();
    const options = { 
        weekday: 'short',  // Full day name
        day: '2-digit',   // Day as number without leading zero
        month: '2-digit',    // Full month name
        year: 'numeric'   // Full year
    };
    fecha.innerText = now.toLocaleDateString('es-ES', options);
  });
    
window.addEventListener('scroll', function() {
    var navbar = document.querySelector('.navbar-expand-lg');
    var navbarTop = navbar.offsetTop + 50;
    
    if (window.pageYOffset > navbarTop) {
      navbar.classList.add('fixed');
    } else {
      navbar.classList.remove('fixed');
    }
  });

  $(document).ready(function() {
    $('#contactModal').on('shown.bs.modal', function() {
      $('#contactForm').on('submit', function(e) {
        e.preventDefault();
        fetch(this.action, {
          method: 'POST',
          mode: 'cors', // Añadido
          headers: {
            'Accept': 'application/json' // Añadido
          },
          body: new FormData(this)
        })
        .then(response => {
          if (!response.ok) throw new Error('Network response was not ok');
          $('#contactModal').modal('hide');
          this.reset();
          alert('Mensaje enviado correctamente');
        })
        .catch(error => {
          console.error('Error:', error);
          alert('Hubo un problema al enviar el mensaje. Inténtalo de nuevo.');
        });
      });
    });
  });

// Obtener los botones que abren el modal
var btns = document.getElementsByClassName("portfolio-btn");

// Recorrer todos los botones y agregar el evento click
for (var i = 0; i < btns.length; i++) {
  btns[i].onclick = function(e) {
    e.preventDefault();
    var modalId = this.getAttribute("href").substring(1); // Obtener el ID del modal
    var modal = document.getElementById(modalId); // Obtener el modal correspondiente
    modal.style.display = "block";
    modal.querySelector(".polaroid-header h2").innerHTML = this.getAttribute("data-name");
    modal.querySelector(".polaroid-image").src = this.parentElement.querySelector("img").src;
    modal.querySelector(".polaroid-footer h5").innerHTML = this.getAttribute("data-description");

    // Obtener el elemento <span> que cierra el modal
    var span = modal.getElementsByClassName("close")[0];

    // Cuando el usuario hace clic en <span> (x), cierra el modal
    span.onclick = function() {
      modal.style.display = "none";
    }

    // Cuando el usuario hace clic fuera del modal, ciérralo
    window.onclick = function(event) {
      if (event.target == modal) {
        modal.style.display = "none";
      }
    }
  }

  $(".photo-carousel").owlCarousel({
    center: true,
    items: 3,
    loop: true,
    margin: 30,
    autoplay: true,
    autoplayTimeout: 3000,
    nav: true,
    navText: [
        '<i class="fa fa-angle-left" aria-hidden="true"></i>',
        '<i class="fa fa-angle-right" aria-hidden="true"></i>'
    ],
    responsive: {
        0: {
            items: 1,  // Cambiamos de 0 a 1 para móviles
            center: true,
            touchDrag: true,
            mouseDrag: true,
            nav: true
        },
        576: {
            items: 1
        },
        768: {
            items: 2
        },
        960: {
            items:2
        },
        1200: {
            items:3
        },
    }
    
});

};
})(jQuery);

