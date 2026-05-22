function changeDom() {
    let l = document.createElement('li');
    l.textContent = 'ヨット';
    let u = document.querySelector('ul#kazoeuta');
    u.insertAdjacentElement('beforeend', l);

    let i = document.querySelector('img#bluemoon');
    i.setAttribute('src', 'bluemoon.jpg');

    let a = document.createElement('a');
    a.textContent = '拓殖大学HP';
    a.setAttribute('href', 'https://www.takushoku-u.ac.jp');
    let p = document.querySelector('p#takudai');
    p.insertAdjacentElement('afterend', a);

    u = document.querySelector('ul#kassen');
    u.remove();

    p = document.querySelector('p#primary');
    u = document.createElement('ul');
    p.insertAdjacentElement('afterend', u);
    l = document.createElement('li'); 
    l.textContent = '赤';
    u.insertAdjacentElement('beforeend', l);
    l = document.createElement('li');
    l.textContent = '緑';
    u.insertAdjacentElement('beforeend', l);
    l = document.createElement('li');
    l.textContent = '青'; 
    u.insertAdjacentElement('beforeend', l);
}

let b = document.querySelector('button#henkou');
b.addEventListener('click', changeDom);