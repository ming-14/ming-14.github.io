/*-----------------------------------------------------------------------------------

    Template Name: Vemo
    Description: 404 Error Animated Templates

-----------------------------------------------------------------------------------*/

/* =====================  
    Js Scripts
 ===================== */

(function ($) {

  "use strict";

  firstLoad();

  function firstLoad() {
    var counter = 0;
    var count = 0;
    var i = setInterval(function () {
      $(".loader_count").html(count);
      counter++;
      count++;
      if (counter == 100) {
        clearInterval(i);
      }
    }, 13);
    TweenMax.to($(".loading-text-container"), 1.0, {
      force3D: true,
      y: "-150px",
      opacity: 0,
      ease: Expo.easeInOut,
      delay: 1.2,
      onComplete: function () {

        /* =====================  
            Preloader 
        ===================== */
        
        TweenMax.to($(".loader-anim"), 0.8, {
          force3D: true,
          bottom: "100%",
          ease: Expo.easeInOut,
        });

        TweenMax.to($(".loader-anim2"), 0.8, {
          force3D: true,
          bottom: "100%",
          delay: 0.2,
          ease: Expo.easeInOut,
          onComplete: function () {
            $(".loader").fadeOut(1);
          },
        });

        /* =====================  
            Loading Element Script (Version 1)
        ===================== */

        TweenMax.from($(".four-zero-four-section.version-1 h1.first"), 1, {
          delay: 0.6,
          opacity: 0.7,
          x: -80,
          ease: Expo.easeInOut,
        });

        TweenMax.from($(".four-zero-four-section.version-1 h1.second"), 1, {
          delay: 0.6,
          opacity: 0.7,
          x: 80,
          ease: Expo.easeInOut,
        });

        TweenMax.from($(".four-zero-four-section.version-1 .planet-div"), 1, {
          delay: 0.6,
          opacity: 0.7,
          rotation: 45,
          ease: Expo.easeInOut,
        });

        TweenMax.from($(".four-zero-four-section.version-1 h2"), 1, {
          delay: 0.7,
          opacity: 0,
          y: -20,
          ease: Expo.easeInOut,
        });

        TweenMax.from($(".four-zero-four-section.version-1 p"), 1, {
          delay: 0.78,
          opacity: 0,
          y: -20,
          ease: Expo.easeInOut,
        });

        TweenMax.from($(".four-zero-four-section.version-1 a"), 1, {
          delay: 0.86,
          opacity: 0,
          y: -20,
          ease: Expo.easeInOut,
        });

        TweenMax.staggerFrom(
          ".four-zero-four-section.version-1 .social-icons ul li",
          1,
          {
            delay: 0.9,
            opacity: 0,
            y: -40,
            ease: Expo.easeInOut,
          },
          0.08
        );

         /* =====================  
            Loading Element Script (Version 2)
        ===================== */

        TweenMax.staggerFrom(
          ".four-zero-four-section.version-2 .error-code li",
          1,
          {
            delay: 0.6,
            opacity: 0,
            y: 100,
            ease: Expo.easeInOut,
          },
          0.08
        );

        TweenMax.from(".four-zero-four-section.version-2 h3", 1, {
          delay: 1,
          opacity: 0,
          y: 30,
          ease: Expo.easeInOut,
        });

        TweenMax.from(".four-zero-four-section.version-2 p", 1, {
          delay: 1.2,
          opacity: 0,
          y: 30,
          ease: Expo.easeInOut,
        });

        TweenMax.from(".four-zero-four-section.version-2 button", 1, {
          delay: 1.4,
          opacity: 0,
          y: 30,
          ease: Expo.easeInOut,
        });

         /* =====================  
            Loading Element Script (Version 3)
        ===================== */

        TweenMax.staggerFrom(
          ".four-zero-four-section.version-3 .error-code li",
          1,
          {
            delay: 0.6,
            opacity: 0,
            y: 100,
            ease: Expo.easeInOut,
          },
          0.08
        );

        TweenMax.from(".four-zero-four-section.version-3 p", 1, {
          delay: 1.2,
          opacity: 0,
          y: 30,
          ease: Expo.easeInOut,
        });

        TweenMax.from(".four-zero-four-section.version-3 button", 1, {
          delay: 1.4,
          opacity: 0,
          y: 30,
          ease: Expo.easeInOut,
        });

         /* =====================  
            Loading Element Script (Version 4)
        ===================== */

        TweenMax.from($(".four-zero-four-section.version-4 .nudles-img"), 1.3, {
          delay: 0.7,
          opacity: 0.7,
          rotation: '180deg',
          ease: Expo.easeInOut,
        });        

        TweenMax.staggerFrom(
          ".four-zero-four-section.version-4 .error-code li",
          1,
          {
            delay: 0.6,
            opacity: 0,
            y: 100,
            ease: Expo.easeInOut,
          },
          0.09
        );

        TweenMax.from(".four-zero-four-section.version-4 h3", 1, {
          delay: 0.7,
          opacity: 0,
          y: 30,
          ease: Expo.easeInOut,
        });

        TweenMax.from(".four-zero-four-section.version-4 p", 1, {
          delay: 0.8,
          opacity: 0,
          y: 30,
          ease: Expo.easeInOut,
        });

        TweenMax.from(".four-zero-four-section.version-4 button", 1, {
          delay:1,
          opacity: 0,
          y: 30,
          ease: Expo.easeInOut,
        });

        TweenMax.from(".four-zero-four-section.version-4 .circle-1", 1, {
          delay: 1,
          opacity: 0,
          x: -30,
          ease: Expo.easeInOut,
        });

        TweenMax.from(".four-zero-four-section.version-4 .circle-2", 1, {
          delay: 1.1,
          opacity: 0,
          x: 30,
          ease: Expo.easeInOut,
        });

        TweenMax.from(".four-zero-four-section.version-4 .blob-1", 1, {
          delay: 1.2,
          opacity: 0,
          x: -30,
          ease: Expo.easeInOut,
        });

        TweenMax.from(".four-zero-four-section.version-4 .blob-2", 1, {
          delay: 1.2,
          opacity: 0,
          x: -30,
          ease: Expo.easeInOut,
        });

        TweenMax.from(".four-zero-four-section.version-4 .blob-3", 1, {
          delay: 1.2,
          opacity: 0,
          x: 30,
          ease: Expo.easeInOut,
        });

         /* =====================  
            Loading Element Script (Version 5)
        ===================== */

        TweenMax.staggerFrom(
          ".four-zero-four-section.version-5 .error-code li",
          1,
          {
            delay: 0.6,
            opacity: 0,
            y: 100,
            ease: Expo.easeInOut,
          },
          0.09
        );

        TweenMax.from(".four-zero-four-section.version-5 h3", 1, {
          delay: 0.7,
          opacity: 0,
          y: 30,
          ease: Expo.easeInOut,
        });

        TweenMax.from(".four-zero-four-section.version-5 p", 1, {
          delay: 0.8,
          opacity: 0,
          y: 30,
          ease: Expo.easeInOut,
        });

        TweenMax.from(".four-zero-four-section.version-5 button", 1, {
          delay:1,
          opacity: 0,
          y: 30,
          ease: Expo.easeInOut,
        });

         /* =====================  
            Loading Element Script (Version 6)
        ===================== */

        TweenMax.staggerFrom(
          ".four-zero-four-section.version-6 .error-code li",
          1,
          {
            delay: 0.6,
            opacity: 0,
            y: 100,
            ease: Expo.easeInOut,
          },
          0.09
        );

        TweenMax.from(".four-zero-four-section.version-6 h3", 1, {
          delay: 0.7,
          opacity: 0,
          y: 30,
          ease: Expo.easeInOut,
        });

        TweenMax.from(".four-zero-four-section.version-6 p", 1, {
          delay: 0.8,
          opacity: 0,
          y: 30,
          ease: Expo.easeInOut,
        });

        TweenMax.from(".four-zero-four-section.version-6 a", 1, {
          delay:1,
          opacity: 0,
          y: 30,
          ease: Expo.easeInOut,
        });

      },
    });
  }
})(jQuery);
