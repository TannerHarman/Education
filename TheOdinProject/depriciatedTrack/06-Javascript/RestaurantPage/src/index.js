import nav from './nav';
import homeContent from './homepage';
import menuContent from './menu';
import contactContent from './contact';

const content = document.querySelector('#content');

function switchPage() {
  if (this.innerText === 'Home') {
    pageSetup(homeContent);
  } else if (this.innerText === 'Menu') {
    pageSetup(menuContent);
  } else {
    pageSetup(contactContent)
  }
}

function pageSetup(page) {
  content.innerHTML = nav + page;
  const menuButtons = document.querySelectorAll('li');

  menuButtons.forEach((button) => {
    button.addEventListener('click', switchPage);
  })
};

pageSetup(homeContent);