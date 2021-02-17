const navModule = () => {
    let nav = document.createElement('nav');
    nav.id = 'tabs';

    let homeTab = document.createElement('div');
    homeTab.classList.add('tab');
    homeTab.classList.add('home');
    homeTab.classList.add('active');
    homeTab.textContent = 'Home'

    let menuTab = document.createElement('div');
    menuTab.classList.add('tab');
    menuTab.classList.add('menu');
    menuTab.textContent = 'Menu';

    let contactTab = document.createElement('div');
    contactTab.classList.add('tab');
    contactTab.classList.add('contact');
    contactTab.textContent = 'Contact';

    nav.appendChild(homeTab);
    nav.appendChild(menuTab);
    nav.appendChild(contactTab);

    return nav
}

export { navModule }