const headerModule = () => {
    let welcome = document.createElement('div');
    welcome.id = 'welcome';
    welcome.textContent = 'Welcome to the best pizzeria in town!'

    let banner = document.createElement('div');
    banner.id = 'banner';
    banner.appendChild(welcome);

    let headerTag = document.createElement('header');
    headerTag.appendChild(banner)

    return headerTag
}

export { headerModule }