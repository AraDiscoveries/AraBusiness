(function ($) {
  "use strict";

  // Header Scrolling Set White Background
  scrollNavBar();

  // Window Resize Mobile Menu Fix
  mobileNav();

  // Scroll animation init
  window.sr = new scrollReveal();

  // Menu Dropdown Toggle
  if ($(".menu-trigger").length) {
    $(".menu-trigger").on("click", function () {
      $(this).toggleClass("active");
      $(".header-area .nav").slideToggle(200);
    });
  }

  // Menu elevator animation
  $("a[href*=\\#]:not([href=\\#])").on("click", function () {
    if (
      location.pathname.replace(/^\//, "") ==
        this.pathname.replace(/^\//, "") &&
      location.hostname == this.hostname
    ) {
      var target = $(this.hash);
      target = target.length ? target : $("[name=" + this.hash.slice(1) + "]");
      if (target.length) {
        var width = $(window).width();
        if (width < 991) {
          $(".menu-trigger").removeClass("active");
          $(".header-area .nav").slideUp(200);
        }
        $("html,body").animate(
          {
            scrollTop: target.offset().top - 30,
          },
          700
        );
        return false;
      }
    }
  });

  // Home number counterup
  if ($(".count-item").length) {
    $(".count-item strong").counterUp({
      delay: 10,
      time: 1000,
    });
  }

  // Blog cover image
  if ($(".blog-post-thumb").length) {
    $(".blog-post-thumb .img").imgfix();
  }

  // About Us Image
  if ($(".about-image").length) {
    $(".about-image").imgfix({
      scale: 1.1,
    });
  }

  // Sidebar contact banner image
  if ($(".sidebar .box").length) {
    $(".sidebar .box").imgfix();
  }

  // Home Us Image
  if ($(".home-img").length) {
    $(".home-img").imgfix({
      scale: 1.1,
    });
  }

  // Page standard gallery
  if ($(".page-gallery").length && $(".page-gallery-wrapper").length) {
    $(".page-gallery").imgfix({
      scale: 1.1,
    });

    $(".page-gallery").magnificPopup({
      type: "image",
      gallery: {
        enabled: true,
      },
      zoom: {
        enabled: true,
        duration: 300,
        easing: "ease-in-out",
      },
    });
  }

  // Page loading animation
  $(window).on("load", function () {
    if ($(".cover").length) {
      $(".cover").parallax({
        imageSrc: $(".cover").data("image"),
        zIndex: "1",
      });
    }

    $("#preloader").animate(
      {
        opacity: "0",
      },
      600,
      function () {
        setTimeout(function () {
          // Home Parallax
          if ($("#parallax-text").length) {
            $("#parallax-text").parallax({
              imageSrc: "assets/images/home-bg-one.png",
              zIndex: "1",
            });
          }

          // Home Parallax Counter
          if ($("#counter").length) {
            $("#counter").parallax({
              imageSrc: "assets/images/home-bg-one.png",
              zIndex: "1",
            });
          }
          $("#preloader").css("visibility", "hidden").fadeOut();
        }, 300);
      }
    );
  });

  // Header Scrolling Set White Background
  $(window).on("scroll", function () {
    scrollNavBar();
  });

  // Window Resize Mobile Menu Fix
  $(window).on("resize", function () {
    mobileNav();
  });

  // Window Resize Mobile Menu Fix
  function mobileNav() {
    var width = $(window).width();
    $(".submenu").on("click", function () {
      if (width < 992) {
        $(".submenu ul").removeClass("active");
        $(this).find("ul").toggleClass("active");
      }
    });
  }

  // Navbar Scroll Set White Background Function
  function scrollNavBar() {
    var width = $(window).width();
    if (width > 991) {
      var scroll = $(window).scrollTop();
      if (scroll >= 30) {
        $(".header-area").addClass("header-sticky");
      } else {
        $(".header-area").removeClass("header-sticky");
      }
    }
  }
})(window.jQuery);

// Inspect Off

document.addEventListener("contextmenu", (event) => event.preventDefault());

document.addEventListener("keydown", (event) => {
  if (
    event.key === "F12" ||
    (event.ctrlKey && event.shiftKey && event.key === "I") ||
    (event.ctrlKey && event.shiftKey && event.key === "J") ||
    (event.ctrlKey && event.key === "U")
  ) {
    event.preventDefault();
  }
});

(function () {
  const threshold = 160;

  function detectDevTools() {
    if (
      window.outerWidth - window.innerWidth > threshold ||
      window.outerHeight - window.innerHeight > threshold
    ) {
      document.body.innerHTML = "<h1>Access Denied!</h1>";
    }
  }

  setInterval(detectDevTools, 1000);
})();

document.addEventListener("DOMContentLoaded", function () {
  // Select all collapsible elements
  const collapseElements = document.querySelectorAll(".collapse");

  collapseElements.forEach((collapse) => {
    collapse.addEventListener("show.bs.collapse", function () {
      // Find the icon in the related header and change it to downward
      const icon = this.previousElementSibling.querySelector(".icon");
      icon.classList.remove("fa-chevron-right");
      icon.classList.add("fa-chevron-down");
    });

    collapse.addEventListener("hide.bs.collapse", function () {
      // Reset the icon to right direction when collapsed
      const icon = this.previousElementSibling.querySelector(".icon");
      icon.classList.remove("fa-chevron-down");
      icon.classList.add("fa-chevron-right");
    });
  });
});
