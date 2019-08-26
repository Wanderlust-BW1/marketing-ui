
const controller = new ScrollMagic.Controller();

const timeline = new TimelineMax();

timeline
.to('#sixth', 6, {y: -550})
.to('#fifth', 6, {y: -500}, '-=6')
.to('#fourth', 6, {y: -400}, '-=6')
.to('#third', 6, {y: -300}, '-=6')
.to('#second', 6, {y: -200}, '-=6')
.to('#first', 6, {y: -100}, '-=6')
.to('.choose-experience', 6, {top: '0%', left: '0%', right: '0%'}, '-=6')
.to('.parallax-header .hero-content', 6, {y: -600,}, '-=6')

const scene = new ScrollMagic.Scene({
    triggerElement: 'section.parallax-header',
    duration: '100%',
    triggerHook: 0
})
.setTween(timeline)
.setPin('section.parallax-header')
.addTo(controller);


//Slider
const slider = {
  
    el: {
      slider: document.querySelector(".slider"),
      allSlides: document.querySelectorAll(".slide"),
    },
    
    timing: 800,
    slideWidth: 300,
    
    init: function() {
      this.el.slider.addEventListener("scroll", function(event) {
        slider.moveSlidePosition(event);
      });
    },
    
    moveSlidePosition: function(event) {
      // Magic Numbers
      this.el.allSlides.syle.backgroundPosition = `${event.target}.scrollLeft()/6-100+ "px 0"`;
    },
    
  };
  
  slider.init();