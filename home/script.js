const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('navbar-links')[0]
const navBar = document.getElementsByClassName('navbar')[0]

toggleButton.addEventListener('click', () => {
    navbarLinks.classList.toggle('active')
    
})

toggleButton.addEventListener('click', () => {
    navBar.classList.toggle('active')
    
})


let changeIcon = function(icon){
    icon.classList.toggle('fa-times')
}

// const navLinkEls = document.querySelectorAll('.nav__link');

// navLinkEls.forEach(navLinkEl => {
//     navLinkEl.addEventListener('click', () =>{
//         document.querySelector('.active')?.classList.remove('active');
//         navLinkEl.classList.add('active');
//     });
// });


// const activePage = window.location.pathname;
// const navLinks = document.querySelectorAll('navbar-links a').forEach(link => {
//     if(link.href.includes(`${activePage}`)){
//         link.classList.add('active1');
//     }
// });