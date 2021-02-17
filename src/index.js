import { headerModule } from './header'

const globalContainer = document.getElementById('content');

globalContainer.parentNode.prepend(headerModule());