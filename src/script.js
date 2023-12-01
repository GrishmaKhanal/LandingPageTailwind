const btn = document.getElementById('menu-btn')
const nav = document.getElementById('menu')
console.log("button", btn);

btn.addEventListener('click', () => {
    console.log('click');
    btn.classList.toggle('open')
    nav.classList.toggle('flex')
    nav.classList.toggle('hidden')
})