const HomeModule = () => {
    let home = document.createElement('div');
    home.classList.add('home');

    let h1 = document.createElement('h1');
    h1.textContent = 'Pizzzzza!';

    let p1 = document.createElement('p');
    p1.textContent = 'Come and eat the yummiest pizza ever!';

    let p2 = document.createElement('p');
    p2.textContent = 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab laboriosam vero sunt suscipit saepe quasi sit molestiae distinctio ipsam vel sequi qui, consequatur, blanditiis dolorum rem facere mollitia laudantium commodi!';

    home.appendChild(h1);
    home.appendChild(p1);
    home.appendChild(p2);
    
    return home
}

export { HomeModule }