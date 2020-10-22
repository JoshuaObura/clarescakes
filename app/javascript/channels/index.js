// Load all the channels within this directory and all subdirectories.
// Channel files must be named *_channel.js.

const channels = require.context('.', true, /_channel\.js$/)
channels.keys().forEach(channels)

/* EFFET SMOOTH SCOLL */

// Pour tous les liens commençant par #.
$("a[href^='#']").click(function (e) {
  var 
    yPos,
    yInitPos,
    target = ($($(this).attr("href") + ":first"));
    
  // On annule le comportement initial au cas ou la base soit différente de la page courante.
  e.preventDefault(); 
  
  yInitPos = $(window).scrollTop();
  
  // On ajoute le hash dans l'url.
  window.location.hash = $(this).attr("href");
  
  // Comme il est possible que l'ajout du hash perturbe le défilement, on va forcer le scrollTop à son endroit inital.
  $(window).scrollTop(yInitPos);
  
  // On cible manuellement l'ancre pour en extraire sa position.
  // Si c'est un ID on l'obtient.
  target = ($($(this).attr("href") + ":first"));

  // Sinon on cherche l'ancre dans le name d'un a.
  if (target.length == 0) {
    target = ($("a[name=" + $(this).attr("href").replace(/#/gi,"") + "]:first"))
  }
  
  // Si on a trouvé un name ou un id, on défile.
  if (target.length == 1) {
    yPos = target.offset().top; // Position de l'ancre.
  
          // La largeur minimale de l'écran correspond
    if (window.matchMedia ('(min-width: 1000px)').matches)
    {
      $('html,body').animate({ scrollTop: yPos - 60 }, 1000);
    }
    // Sinon
    else
    {
      $('html,body').animate({ scrollTop: yPos - 60 }, 1000);
    }
    // On anime le défilement jusqu'à l'ancre.
     // On décale de 190 pixels l'affichage pour ne pas coller le bord haut de l'affichage du navigateur et on défile en 1 seconde jusqu'à l'ancre.
  }
});

/* ~~~~~~~~~~~~~~~~~~~ */

$(document).ready(function(){
$(window).bind('scroll', function() {
var navHeight = $( window ).height() - 81;
     if ($(window).scrollTop() > navHeight) {
       $('.up').addClass('fixed');
       $("#top-anchor").css({bottom: '30px'});
     }
     else {
       $('.up').removeClass('fixed');
       $("#top-anchor").css({bottom: '-50px'});
     }
  });
});



$('.slider').each(function() {
  var $this = $(this);
  var $group = $this.find('.slide_group');
  var $slides = $this.find('.slide');
  var bulletArray = [];
  var currentIndex = 0;
  var timeout;
  
  function move(newIndex) {
    var animateLeft, slideLeft;
    
    advance();
    
    if ($group.is(':animated') || currentIndex === newIndex) {
      return;
    }
    
    bulletArray[currentIndex].removeClass('active');
    bulletArray[newIndex].addClass('active');
    
    if (newIndex > currentIndex) {
      slideLeft = '100%';
      animateLeft = '-100%';
    } else {
      slideLeft = '-100%';
      animateLeft = '100%';
    }
    
    $slides.eq(newIndex).css({
      display: 'block',
      left: slideLeft
    });
    $group.animate({
      left: animateLeft
    }, function() {
      $slides.eq(currentIndex).css({
        display: 'none'
      });
      $slides.eq(newIndex).css({
        left: 0
      });
      $group.css({
        left: 0
      });
      currentIndex = newIndex;
    });
  }
  
  function advance() {
    clearTimeout(timeout);
    timeout = setTimeout(function() {
      if (currentIndex < ($slides.length - 1)) {
        move(currentIndex + 1);
      } else {
        move(0);
      }
    }, 4000);
  }
  
  $('.next_btn').on('click', function() {
    if (currentIndex < ($slides.length - 1)) {
      move(currentIndex + 1);
    } else {
      move(0);
    }
  });
  
  $('.previous_btn').on('click', function() {
    if (currentIndex !== 0) {
      move(currentIndex - 1);
    } else {
      move(3);
    }
  });
  
  $.each($slides, function(index) {
    var $button = $('<a class="slide_btn">&bull;</a>');
    
    if (index === currentIndex) {
      $button.addClass('active');
    }
    $button.on('click', function() {
      move(index);
    }).appendTo('.slide_buttons');
    bulletArray.push($button);
  });
  
  advance();
});


/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */
/* navbar */

$(document).ready(function() {
        // Transition effect for navbar 
        $(window).scroll(function() {
          // checks if window is scrolled more than 500px, adds/removes solid class
          if($(this).scrollTop() > 100) { 
              $('.navbar-lewagon').addClass('transparent');
          } else {
              $('.navbar-lewagon').removeClass('transparent');
          }
        });
});