import slideMenu from './menu.js'
import renderVideo from './renderVideo.js'
import menuLink from './menuLink.js'
import search  from './search.js'



// slideMenu('.header__burger-btn', '.navigation', 'navigation_active', '.navigation__link', '.navigation__close')

slideMenu({
  openBtn: '.header__burger-btn',
  menu: '.navigation',
  classActiveMenu: 'navigation_active',
  closeTrigger: '.navigation__link, .navigation__close',
})

renderVideo();
menuLink();
search();
