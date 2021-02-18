const MenuModule = () => {
    let menu = document.createElement('div');
    menu.id = 'menu-content';
    
    let h1 = document.createElement('h1');
    h1.textContent = 'You must make your pick!';

    let p1 = document.createElement('p');
    p1.textContent = 'Even if it\'s so hard to choose between all our delicious pizza!';

    let ul = document.createElement('ul');

    let json = require('./menuList.json');
    let pizzaList = json["Pizzas"];
    pizzaList.forEach(pizza => {
        let li = document.createElement('li');
        li.textContent = `${pizza.name} - ${pizza.price}`;
        li.style.backgroundImage = `url(../img/${pizza.img})`
        ul.appendChild(li)
    });

    
    menu.appendChild(h1);
    menu.appendChild(p1);
    menu.appendChild(ul);
    
    return menu
}

export { MenuModule }