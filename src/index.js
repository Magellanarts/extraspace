import "./styles.css"
import 'aos/dist/aos.css';
import { tns } from "../node_modules/tiny-slider/src/tiny-slider";

// AOS
import AOS from 'aos';
AOS.init();

// Slider
if(document.querySelector('.my-slider')) {
  var slider = tns({
    container: '.my-slider',
    items: 1,
    slideBy: 'page',
    autoplay: true,
    mode: 'gallery',
    controls: false,
    nav: true,
    autoplayButton: false,
    autoplayButtonOutput: false,
    navPosition: document.querySelector('.my-slider').getAttribute('data-position') ? document.querySelector('.my-slider').getAttribute('data-position')  : 'top'
  });

  // bind function to event
  slider.events.on('indexChanged', function(info, eventName) {
    if(document.querySelector('.home-landing__lights')) {
      document.querySelector('.home-landing__lights').classList.remove('-is-visible')
      setTimeout(function(){
document.querySelector('.home-landing__lights').classList.add('-is-visible')
      }, 100)
      
    }
  });
}


// leadership bios
document.querySelectorAll('.js-leadership-button').forEach(button => {
  button.addEventListener('click', function(){
    let person = this.getAttribute('data-person');
    
    console.log(document.querySelector(`.js-leadership-main[data-bio="${person}"]`));

    // remove active
    document.querySelector('.js-leadership-button.-is-active').classList.remove('-is-active');
    document.querySelector('.js-leadership-photo.-is-active').classList.remove('-is-active');
    document.querySelector('.js-leadership-main.-is-active').classList.remove('-is-active')
    
    // show new
    document.querySelector(`.js-leadership-photo[data-photo="${person}"]`).classList.add('-is-active');
    document.querySelector(`.js-leadership-main[data-bio="${person}"]`).classList.add('-is-active');
    this.classList.add('-is-active');
  });
});

// tabs
document.querySelectorAll('.js-tab-toggle').forEach(toggle => {
  toggle.addEventListener('click', function(){
    const tab = this.getAttribute('data-tab');
    const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);

    if(this.classList.contains('-is-active')) {
       if(vw < 786) {
        // add active to this toggle
        this.classList.remove('-is-active');

        // if small screen, activate the content
        this.nextElementSibling.classList.remove('-is-active');
  
        // deactivate content
        document.querySelector(`.js-tabs-content[data-tab="${tab}"]`).classList.remove('-is-active');
      }
    } else {
      // remove active from current tab
      if(document.querySelector('.js-tab-toggle.-is-active')) {
        document.querySelector('.js-tab-toggle.-is-active').classList.remove('-is-active');
      }

      // if there is a mobile tab content active, remove it
      if(document.querySelector('.c-tabs__set__content.-is-active')) {
        document.querySelector('.c-tabs__set__content.-is-active').classList.remove('-is-active');
      }

      // remove active from current content
      if(document.querySelector('.js-tabs-content.-is-active')) {
        document.querySelector('.js-tabs-content.-is-active').classList.remove('-is-active');
      }
  
    
      // add active to this toggle
      this.classList.add('-is-active');

      // if small screen, activate the content
      if(vw < 786) {
        this.nextElementSibling.classList.add('-is-active');
      } 

      // activate content
      document.querySelector(`.js-tabs-content[data-tab="${tab}"]`).classList.add('-is-active');
    }
  
   
  })
})

// mobile nav
document.querySelector('.js-navigation-toggle').addEventListener('click', () => {
  document.querySelector('.c-site-header__mobile-navigation').classList.toggle('-is-open');
})

// sticky header
var h = document.querySelector('.c-site-header');
var brow = document.querySelector('.c-site-brow');
var stuck = false;
var stickPoint = getDistance();

function getDistance() {
  var topDist = h.offsetTop;
  return topDist;
}

window.onscroll = function(e) {
  var distance = getDistance() - window.pageYOffset;
  var offset = window.pageYOffset;
  if ( (distance <= 0) && !stuck) {
    h.style.position = 'fixed';
    h.style.top = '0px';
    stuck = true;
    brow.classList.add('-is-hidden');
    document.querySelector('body').classList.add('sticky-header');
    
  } else if (stuck && (offset <= stickPoint)){
    h.style.position = 'static';
    stuck = false;
     brow.classList.remove('-is-hidden');
         document.querySelector('body').classList.remove('sticky-header');
  }
}