/* brnad list */
const option_btn = document.querySelector('.option_btn');
const listsBtn = document.querySelector('.lists_btn');

const optionLists = document.querySelector('.optionLists');
const lists = document.querySelector('.lists');

option_btn.addEventListener('click', function(){
    if(option_btn.classList.toggle('active')){
        optionLists.classList.add('down')
    }else{
        optionLists.classList.remove('down')
    }
})

listsBtn.addEventListener('click', function(){
    if(listsBtn.classList.toggle('active')){
        lists.classList.add('down')
    }else{
        lists.classList.remove('down')
    }
})

/* brnad list end */