import { headerModule } from './header'
import { navModule } from './nav'
import { content } from './content'
import { HomeModule } from './homeContent'
import { MenuModule } from './menuContent'
import { contactModule } from './contactContent'

const globalContainer = document.getElementById('content');
const header = headerModule();
const nav = navModule();
const contentContainer = content();
const homePage = HomeModule();
const menuPage = MenuModule();
const contactPage = contactModule();

const addContent = (page) => {
    let child = contentContainer.childNodes[0];
    contentContainer.removeChild(child);
    switch (page) {
        case 'home':
            child = homePage;
            break;
        case 'menu':
            child = menuPage;
            break;
        case 'contact':
            child = contactPage;
        break;
        default:
            child = homePage;
            break;
    }
    contentContainer.appendChild(child);
}

const choosePage = (e) => {
    let siblings = e.target.parentNode.childNodes;
    siblings.forEach(tab => {
        tab.classList.remove('active')
    });
    let newPage = e.target.id.replace('-tab', '');
    addContent(newPage);
    e.target.classList.add('active');
}


nav.childNodes.forEach(tab => {
    tab.addEventListener('click', choosePage);
    
});
globalContainer.parentNode.prepend(header);
globalContainer.appendChild(nav);
globalContainer.appendChild(contentContainer);
contentContainer.appendChild(homePage);




