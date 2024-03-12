const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('navbar-links')[0]

toggleButton.addEventListener('click', () => {
    navbarLinks.classList.toggle('active')
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