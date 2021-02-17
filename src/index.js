import { headerModule } from './header'
import { navModule } from './nav'


const globalContainer = document.getElementById('content');

globalContainer.parentNode.prepend(headerModule());
globalContainer.prepend(navModule());