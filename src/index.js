import { headerModule } from './header'
import { navModule } from './nav'
import { content } from './content'
import { HomeModule } from './homeContent'



const globalContainer = document.getElementById('content');
const contentContainer = content();

globalContainer.parentNode.prepend(headerModule());
globalContainer.appendChild(navModule());
contentContainer.appendChild(HomeModule());
globalContainer.appendChild(contentContainer)
