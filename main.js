

window.addEventListener('scroll', () => {
    document.querySelector('nav').classList.toggle('window_scroll',window.scrollY > 40)
})

const openMenu = document.querySelector('.menu-open');
const closeMenu = document.querySelector('.menu-close');
const mainMenu = document.querySelector('.menu-items');


openMenu.addEventListener('click', () => {
    mainMenu.style.display = "flex";
    closeMenu.style.display = "inline-block"
    openMenu.style.display = "none";
})

closeMenu.addEventListener('click', () => {
    mainMenu.style.display = "none";
    closeMenu.style.display = "none"
    openMenu.style.display = "inline-block";
})

// menu javascript

const vegMenu = document.querySelectorAll('.starters');

vegMenu.forEach(element => {
    element.addEventListener('click', () => {
        console.log(element)
        element.querySelector('.starters__info').style.display = "inline-block";
    
        const currentIcon = element.querySelector('.icon i');
    
        if(currentIcon.className === 'fa-solid fa-plus'){
            currentIcon.className = 'fa-solid fa-minus';
        }
        else{
            currentIcon.className = 'fa-solid fa-plus';
            element.querySelector('.starters__info').style.display = "none";
    
    
        }
    })
})