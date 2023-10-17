const menu = document.querySelector('.menu');
const close = document.querySelector('.close');
const nav = document.querySelector('.nav');

console.log(menu)

menu.onclick = () => {
    menu.style.display = 'none'
    close.style.display = 'block'
    nav.style.left = '0%'
    document.body.style.overflow = 'hidden'
}

close.onclick = () => {
    menu.style.display = 'block'
    close.style.display = 'none'
    nav.style.left = '-100%'
    document.body.style.overflow = 'auto'
}