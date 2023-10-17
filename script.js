const togglemMenu = () => {
    const menu = document.querySelector('#heading ul');
    menu.classList.toggle('show-menu');
}

const menuButton = document.querySelector('.menu-button');
menuButton.addEventListener('click'. togglemMenu);