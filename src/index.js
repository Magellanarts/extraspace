import "./styles.css"
import { tns } from "../node_modules/tiny-slider/src/tiny-slider"

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