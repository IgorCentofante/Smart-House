const btnMobile = document.getElementById('btn-mobile');

function openMenu () {
    const nav = document.getElementById('nav');
    nav.classList.toggle('active')
}

btnMobile.addEventListener('click', openMenu)