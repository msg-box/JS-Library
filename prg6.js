let s = '';
let d = document.getElementById('d');

function k(x) {
    s += x;
    d.innerText = s;
}

function calculate() {
    try {
        s = eval(s);
        if (!isFinite(s)) throw Error();
        d.innerText = s;
        s = String(s);
    } catch {
        s = '';
        d.innerText = 'Error';
    }
}

document.querySelectorAll('[data-value]').forEach(b =>
    b.addEventListener('click', () => k(b.dataset.value))
);

document.querySelector('[data-action="clear"]').addEventListener('click', () => {
    s = '';
    d.innerText = '0';
});

document.querySelector('[data-action="equal"]').addEventListener('click', calculate);

document.addEventListener('keydown', e => {
    if ('0123456789+-*/.'.includes(e.key)) k(e.key);
    if (e.key === 'Enter' || e.key === '=') calculate();
});
