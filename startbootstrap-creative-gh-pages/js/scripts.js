var skarpa = [
  {
    src: "assets/img/zemeljska/20200522_164201.jpg",
  },
  {
    src: "assets/img/zemeljska/20200423_093652.jpg",
  },
  {
    src: "assets/img/zemeljska/20200425_121119.jpg",
  },

  {
    src: "assets/img/zemeljska/skarpa.jpg",
  },
  {
    src: "assets/img/zemeljska/20191207_084500.jpg",
  },
  {
    src: "assets/img/zemeljska/20191210_092335.jpg",
  },
  {
    src: "assets/img/zemeljska/20200314_093523.jpg",
  },
];
var okolica = [
  {
    src: "assets/img/zemeljska/okolica.jpg",
  },
];
var prevozi = [
  {
    src: "assets/img/zemeljska/prevozi.jpg",
  },
];
var rusenje = [
  {
    src: "assets/img/zemeljska/rusenje.jpg",
  },
];
var cistilna = [
  {
    src: "assets/img/zemeljska/cistilna.jpg",
  },
];
var kanalizacija = [
  {
    src: "assets/img/zemeljska/kanalizacija.jpg",
  },
];
var rezervoar = [
  {
    src: "assets/img/zemeljska/rezervv.jpg",
  },
];
var vlaka = [
  { src: "assets/img/zemeljska/20191201_142852.jpg" },
  { src: "assets/img/zemeljska/vlaka1.jpg" },
  { src: "assets/img/zemeljska/vlaka2.jpg" },
  { src: "assets/img/zemeljska/vlaka3.jpg" },
  {
    src: "assets/img/zemeljska/vlaka.jpg",
  },
];
var izkop = [
  {
    src: "assets/img/zemeljska/strojniizkopi.jpg",
  },
  {
    src: "assets/img/zemeljska/20191201_142852.jpg",
  },
  {
    src: "assets/img/zemeljska/20200211_161746.jpg",
  },
];
var jame = [
  {
    src: "assets/img/zemeljska/jama.jpg",
  },

  {
    src: "assets/img/zemeljska/20190620_090807.jpg",
  },
  {
    src: "assets/img/zemeljska/20190620_130646.jpg",
  },
  {
    src: "assets/img/zemeljska/20191129_111023.jpg",
  },
  {
    src: "assets/img/zemeljska/20200324_161017.jpg",
  },
  {
    src: "assets/img/zemeljska/20200328_134000.jpg",
  },
  {
    src: "assets/img/zemeljska/20200515_112422.jpg",
  },
  {
    src: "assets/img/zemeljska/20190330_131053.jpg",
  },
  {
    src: "assets/img/zemeljska/20190413_173416.jpg",
  },
];
var podboj = [
  {
    src: "assets/img/zemeljska/podboj.jpg",
  },
  {
    src: "assets/img/zemeljska/20200415_154949.jpg",
  },
];
var hiab = [
  {
    src: "assets/img/zemeljska/hiap.jpg",
  },
  {
    src: "assets/img/zemeljska/20190810_094325.jpg",
  },
  {
    src: "assets/img/zemeljska/20200527_072135.jpg",
  },
];

var okolica = [
  {
    src: "assets/img/zemeljska/okolica.jpg",
  },
  {
    src: "assets/img/zemeljska/20200405_092042.jpg",
  },
  {
    src: "assets/img/zemeljska/20200406_065024.jpg",
  },
];
var silos = [
  {
    src: "assets/img/zemeljska/20200423_093652.jpg",
  },
  {
    src: "assets/img/zemeljska/20200425_121119.jpg",
  },
  {
    src: "assets/img/zemeljska/20200522_164201.jpg",
  },
];
var items = [];
/*!
 * Start Bootstrap - Creative v6.0.3 (https://startbootstrap.com/themes/creative)
 * Copyright 2013-2020 Start Bootstrap
 * Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-creative/blob/master/LICENSE)
 */
const porftolioy = document.querySelector("#portfolio");
const firstPortFChild = porftolioy.querySelectorAll(".element");
firstPortFChild.forEach((el) =>
  el.addEventListener("click", () => {
    var id = el.id;
    if (id == "podboj") {
      items = podboj;
    } else if (id == "hiab") {
      items = hiab;
    } else if (id == "jama") {
      items = jame;
    } else if (id == "izkop") {
      items = izkop;
    } else if (id == "skarpa") {
      items = skarpa;
    } else if (id == "okolica") {
      items = okolica;
    } else if (id == "cistilna") {
      items = cistilna;
    } else if (id == "prevozi") {
      items = prevozi;
    } else if (id == "vlaka") {
      items = vlaka;
    } else if (id == "kanalizacija") {
      items = kanalizacija;
    } else if (id == "rezervoar") {
      items = rezervoar;
    } else if (id == "rusenje") {
      items = rusenje;
    }

    (function ($) {
      $("#portfolio").magnificPopup(
        {
          items,
          type: "image",
          tLoading: "Loading image #%curr%...",
          mainClass: "mfp-img-mobile",
          gallery: {
            enabled: true,
            navigateByImgClick: true,
            preload: [0, 1],
          },
          image: {
            tError:
              '<a href="%url%">The image #%curr%</a> could not be loaded.',
          },
        },
        setTimeout(1000)
      );
    })(jQuery);
  })
);
(function ($) {
  "use strict"; // Start of use strict

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function () {
    if (
      location.pathname.replace(/^\//, "") ==
        this.pathname.replace(/^\//, "") &&
      location.hostname == this.hostname
    ) {
      var target = $(this.hash);
      target = target.length ? target : $("[name=" + this.hash.slice(1) + "]");
      if (target.length) {
        $("html, body").animate(
          {
            scrollTop: target.offset().top - 72,
          },
          1000,
          "easeInOutExpo"
        );
        return false;
      }
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $(".js-scroll-trigger").click(function () {
    $(".navbar-collapse").collapse("hide");
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $("body").scrollspy({
    target: "#mainNav",
    offset: 75,
  });

  // Collapse Navbar
  var navbarCollapse = function () {
    if ($("#mainNav").offset().top > 100) {
      $("#mainNav").addClass("navbar-scrolled");
    } else {
      $("#mainNav").removeClass("navbar-scrolled");
    }
  };
  // Collapse now if page is not at top
  navbarCollapse();
  // Collapse the navbar when page is scrolled
  $(window).scroll(navbarCollapse);

  // Magnific popup calls
})(jQuery); // End of use strict
$(document).on("keydown", function (event) {
  if (event.keyCode === 8) {
    event.preventDefault();
  }
});
