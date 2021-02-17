import { addContent } from './content'

const navModule = () => {
    const nav = document.createElement('nav');
    nav.id = 'tabs';

    const homeTab = document.createElement('div');
    homeTab.classList.add('tab');
    homeTab.classList.add('home');
    homeTab.classList.add('active');
    homeTab.textContent = 'Home';

    const menuTab = document.createElement('div');
    menuTab.classList.add('tab');
    menuTab.classList.add('menu');
    menuTab.textContent = 'Menu';

    const contactTab = document.createElement('div');
    contactTab.classList.add('tab');
    contactTab.classList.add('contact');
    contactTab.textContent = 'Contact';

    nav.appendChild(homeTab);
    nav.appendChild(menuTab);
    nav.appendChild(contactTab);

    return nav
}

const choosePage = (e) => {
    let siblings = e.target.parentNode.childNodes;
    siblings.forEach(tab => {
        tab.classList.remove('active')
    });
    let newPage = e.target.className.replace('tab', '').trim();
    addContent(newPage);
    e.target.classList.add('active');
}

export { navModule , choosePage }