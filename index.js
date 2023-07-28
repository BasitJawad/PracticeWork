const mobile_nav = document.querySelector('.mobile-navbar-btn');
const nav_header = document.querySelector('.header');
const section = document.querySelector('.main');

const toggleNavbar=()=>{
nav_header.classList.toggle("active");
section.classList.toggle("active");



}





mobile_nav.addEventListener("click",()=>toggleNavbar());