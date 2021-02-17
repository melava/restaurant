import { HomeModule } from './homeContent'
import { MenuModule } from './menuContent'
import { contactModule } from './contactContent'



const content = () => {
    const contentContainer = document.createElement('div');
    contentContainer.id = 'page-content';
    
    return contentContainer
}

const addContent = (page) => {
    const globalContainer = document.getElementById('content');
    let child;
    let container = document.querySelectorAll('#page-content');
    globalContainer.removeChild(container[0]);
    container = content();
    switch (page) {
        case 'home':
            child = HomeModule();
            break;
        case 'menu':
            child = MenuModule();
            break;
        case 'contact':
            child = contactModule();
        break;
        default:
            child = HomeModule();
            break;
    }
    container.appendChild(child);
    globalContainer.appendChild(container);
}

export { content , addContent }