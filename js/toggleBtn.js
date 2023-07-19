/* toggle menu */
const TmenuTrigger = document.querySelector('.T_menu_trigger');
const MmenuTrigger = document.querySelector('.M_menu_trigger');

const TnavMenu = document.querySelector('.T_nav_wrap');
const TnavOpen = document.querySelector('.T_nav_open');

const MnavMenu = document.querySelector('.M_nav_wrap');
const MnavOpen = document.querySelector('.M_nav_open');


TmenuTrigger.addEventListener('click', function(){
    if(TmenuTrigger.classList.toggle('active')){
        TnavMenu.classList.add('open')
        TnavOpen.classList.add('open')
    }else{
        TnavMenu.classList.remove('open')
        TnavOpen.classList.remove('open')
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