import "./styles.css"
import 'aos/dist/aos.css';
import { tns } from "../node_modules/tiny-slider/src/tiny-slider";

// AOS
import AOS from 'aos';
AOS.init();
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
    document.querySelector('.js-tab-toggle.-is-active').classList.remove('-is-active');
    document.querySelector('.js-tabs-content.-is-active').classList.remove('-is-active');

    this.classList.add('-is-active');
    document.querySelector(`.js-tabs-content[data-tab="${tab}"]`).classList.add('-is-active');
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