/* toggle menu */
const menuTrigger = document.querySelector('.menu_trigger');
const MmenuTrigger = document.querySelector('.M_menu_trigger');

const navMenu = document.querySelector('.nav_wrap');
const navOpen = document.querySelector('.nav_open');

const MnavMenu = document.querySelector('.M_nav_wrap');
const MnavOpen = document.querySelector('.M_nav_open');


menuTrigger.addEventListener('click', function(){
    if(menuTrigger.classList.toggle('active')){
        navMenu.classList.add('open')
        navOpen.classList.add('open')
    }else{
        navMenu.classList.remove('open')
        navOpen.classList.remove('open')
    }
})

MmenuTrigger.addEventListener('click', function(){
    if(MmenuTrigger.classList.toggle('active')){
        MnavMenu.classList.add('open')
        MnavOpen.classList.add('open')
    }else{
        MnavMenu.classList.remove('open')
        MnavOpen.classList.remove('open')
    }
})
/* toggle menu end */