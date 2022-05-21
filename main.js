const navIconEL = document.querySelector('.nav-icon');
const navCloseEL = document.querySelector('.nav-close');
const navList = document.querySelector('.nav-list');
const navBgoverlayEL = document.querySelector('.nav-bgpverlay');

const navOpen = () => {
    navList.classList.add('show');
    navBgoverlayEL.classList.add('active');
    document.body.style='visibility:visible;height:100vh;width:100vw;overflow:hidden;';
}

const navClose = () => {
    navList.classList.remove('show');
    navBgoverlayEL.classList.remove('active');
    document.body.style='visibility:visible;height:initial;width:100%;overflow-x:hidden;';
}

navIconEL.addEventListener('click',navOpen);
navCloseEL.addEventListener('click',navClose);
navBgoverlayEL.addEventListener('click',navClose);







