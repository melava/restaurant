import { headerModule } from './header'
import { navModule , choosePage } from './nav'
import { content } from './content'
import { HomeModule } from './homeContent'






const globalContainer = document.getElementById('content');
const header = headerModule();
const nav = navModule();
const contentContainer = content();
const homepage = HomeModule();

contentContainer.appendChild(homepage);
nav.childNodes.forEach(tab => {
    tab.addEventListener('click', choosePage);
    
});
globalContainer.parentNode.prepend(header);
globalContainer.appendChild(nav);
globalContainer.appendChild(contentContainer);




