// MENU 

const menuOpen = document.querySelector('.menu-bar');
const menuList = document.querySelector('.menu-mobile');
const menuClose = document.querySelector('.menu-mobile ul li:nth-child(1)');

menuOpen.addEventListener('click', ()=>{
menuList.classList.add('active');
});

menuClose.addEventListener('click', ()=>{
menuList.classList.remove('active');
});

// SLIDER


const carouselSlide = document.querySelector('.carousel-slide');
const carouselImg = [...document.querySelectorAll('.carousel-slide img')];


const buttons = document.querySelectorAll("[data-carousel-button]")

buttons.forEach(button => {
  button.addEventListener("click", () => {
    const offset = button.dataset.carouselButton === "next" ? 1 : -1
    const slides = button
      .closest("[data-carousel]")
      .querySelector("[data-slides]")

    const activeSlide = slides.querySelector("[data-active]")
    let newIndex = [...slides.children].indexOf(activeSlide) + offset
    if (newIndex < 0) newIndex = slides.children.length - 1
    if (newIndex >= slides.children.length) newIndex = 0

    slides.children[newIndex].dataset.active = true
    delete activeSlide.dataset.active
  })
})