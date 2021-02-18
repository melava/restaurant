const navModule = () => {
    const nav = document.createElement('nav');
    nav.id = 'tabs';

    const homeTab = document.createElement('div');
    homeTab.id = 'home-tab';
    homeTab.classList.add('tab');
    homeTab.classList.add('active');
    homeTab.textContent = 'Home';

    const menuTab = document.createElement('div');
    menuTab.id = 'menu-tab';
    menuTab.classList.add('tab');
    menuTab.textContent = 'Menu';

    const contactTab = document.createElement('div');
    contactTab.id = 'contact-tab';
    contactTab.classList.add('tab');
    contactTab.textContent = 'Contact';

    nav.appendChild(homeTab);
    nav.appendChild(menuTab);
    nav.appendChild(contactTab);

    return nav
}

export { navModule }