const wrapper = document.querySelector('.wrapper');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');
const btnPopup = document.querySelector('.btnLogin-popup');
const iconclose = document.querySelector('.icon-close');

registerLink.addEventListener('click',()=>{
    wrapper.classList.add('active');  
});

loginLink.addEventListener('click',()=>{
    wrapper.classList.remove('active');  
});

btnPopup.addEventListener('click',()=>{
    wrapper.classList.add('active-popup');  
});

iconclose.addEventListener('click',()=>{
    wrapper.classList.remove('active-popup');  
});



// ------------- toggle icon navbar(Hamburger menu) ---------------------
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navigation');

menuIcon.onclick = ()=>{
    // <i class='bx bx-x'></i>
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};
btnPopup.onclick =()=>{
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};



