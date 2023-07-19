/* toggle menu */
const menuTrigger = document.querySelector('.menu_trigger');
const navMenu = document.querySelector('.M_nav_wrap');
const navOpen = document.querySelector('.nav_open');

menuTrigger.addEventListener('click', function(){
    if(menuTrigger.classList.toggle('active')){
        navMenu.classList.add('open')
        navOpen.classList.add('open')
    }else{
        navMenu.classList.remove('open')
        navOpen.classList.remove('open')
    }
})
/* toggle menu end */