function tashizan() {
    let l = document.querySelector('input[name="left"]');
    let lint = Number(l.value);
    let r = document.querySelector('input[name="right"]');
    let rint = Number(r.value);
    let add = lint + rint;
    let answer = document.querySelector('span#answer');
    answer.textContent = add;
}

let b = document.querySelector('button#calc');
b.addEventListener('click', tashizan);

