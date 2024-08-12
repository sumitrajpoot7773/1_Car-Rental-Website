let menu=document.querySelector('#menu-icon');
let nav=document.querySelector('.navbar');




menu.addEventListener('click',()=>{
    menu.classList.toggle('bx-x');
    nav.classList.toggle('active');   
});

window.onscroll =()=>{
    nav.classList.remove('active');
    menu.classList.remove('bx-x');
}