import { headerModule } from './header'
import { navModule } from './nav'
import { content } from './content'
import { HomeModule } from './homeContent'
import { MenuModule } from './menuContent'
import { contactModule } from './contactContent'





const globalContainer = document.getElementById('content');
const contentContainer = content();

globalContainer.parentNode.prepend(headerModule());
globalContainer.appendChild(navModule());
// contentContainer.appendChild(HomeModule());
//contentContainer.appendChild(MenuModule());
contentContainer.appendChild(contactModule());


globalContainer.appendChild(contentContainer)
