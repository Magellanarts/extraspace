import "./styles.css"
import "../node_modules/@glidejs/glide/dist/glide.min.js"

import Glide from '@glidejs/glide'

new Glide('.glide', {
  type: 'carousel',
  autoplay: 5000
}).mount();