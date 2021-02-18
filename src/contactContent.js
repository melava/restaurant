const contactModule = () => {
    let contact = document.createElement('div');
    contact.id = 'contact-content';

    let h1 = document.createElement('h1');
    h1.textContent = 'We are located next to you!';

    let h3_1 = document.createElement('h3');
    h3_1.textContent = 'How to make an order';
    
    let p1 = document.createElement('p');
    p1.textContent = 'Just call us: xxxx xxx xxx';

    let h3_2 = document.createElement('h3');
    h3_2.textContent = 'Our adress to come pick up your order';

    let p2 = document.createElement('p');
    p2.textContent = 'Anonymus street nr. 123';
    let p3 = document.createElement('p');
    p3.textContent = '88320 Incredible City';
    let p4 = document.createElement('p');
    p3.textContent = 'Beloved Republic';

    contact.appendChild(h1);
    contact.appendChild(h3_1);
    contact.appendChild(p1);
    contact.appendChild(h3_2);
    contact.appendChild(p2);
    contact.appendChild(p3);
    contact.appendChild(p4);

    
    return contact
}

export { contactModule }