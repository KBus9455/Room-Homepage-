const menuOpen = document.querySelector('.menu-bar');
const menuList = document.querySelector('.menu-mobile');
const menuClose = document.querySelector('.menu-mobile ul li:nth-child(1)');

menuOpen.addEventListener('click', ()=>{
menuList.classList.add('active');
});

menuClose.addEventListener('click', ()=>{
menuList.classList.remove('active');
});