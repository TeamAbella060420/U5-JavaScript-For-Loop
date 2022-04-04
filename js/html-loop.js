const main = document.querySelector('main');

let html = '';

for ( let i = 0; i <= 100; i+=5 ) {
    html += `<div>${i}</div>`;
    main.innerHTML = html;
    console.log(html)
}

