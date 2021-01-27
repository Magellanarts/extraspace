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