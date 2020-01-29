import nav from './nav'
import homeContent from './homepage'
import menuContent from './menu'

const content = document.querySelector('#content');
let page = menuContent;

content.innerHTML = nav + page;