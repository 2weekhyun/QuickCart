/* brnad list */
const option_btn = document.querySelector('.option_btn');
const listsBtn = document.querySelector('.lists_btn');
const M_option_btn = document.querySelector('.M_option_btn');
const M_lists_btn = document.querySelector('.M_lists_btn');

const optionLists = document.querySelector('.optionLists');
const lists = document.querySelector('.lists');
const M_optionLists = document.querySelector('.M_optionLists');
const M_lists = document.querySelector('.M_lists');

option_btn.addEventListener('click', function(){
    if(option_btn.classList.toggle('active')){
        optionLists.classList.add('down')
    }else{
        optionLists.classList.remove('down')
    }
})
M_option_btn.addEventListener('click', function(){
    if(M_option_btn.classList.toggle('active')){
        M_optionLists.classList.add('down')
    }else{
        M_optionLists.classList.remove('down')
    }
})

listsBtn.addEventListener('click', function(){
    if(listsBtn.classList.toggle('active')){
        lists.classList.add('down')
    }else{
        lists.classList.remove('down')
    }
})
M_lists_btn.addEventListener('click', function(){
    if(M_lists_btn.classList.toggle('active')){
        M_lists.classList.add('down')
    }else{
        M_lists.classList.remove('down')
    }
})
/* brnad list end */