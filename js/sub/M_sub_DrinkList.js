//import products from "../main_db.json" assert {type: 'json'}
let products;
let myProduct;

async function getJson(){
    const response = await fetch("../js/db/M_sub_DrinkDB.json");  
    products = await response.json();
    return products;
}
getJson()
.then((products)=>importData(products))


//li만들어서 ul에 넣어주는 함수
//main ramen
const createItem = (product)=>{
    const M_allItemUl = document.querySelector('.M_allItemUl');
    const li = document.createElement('li');
    const img = document.createElement('img');
    const a = document.createElement('a');
    const p = document.createElement('p');

    a.setAttribute('href',product.href);
    a.classList = 'M_allItemA';

    img.setAttribute('src',product.img);
    img.classList = 'M_allItemImg';

    li.id = product.id;
    li.classList = 'M_allItemLi';
    
    p.className = 'M_allItemText';
    p.innerHTML = product.name;

    M_allItemUl.append(li)
    li.append(a)
    a.append(img,p)
}
//만든 li들이 반복되게
const importData = ()=>{
  myProduct = products.MobileSubDrink;
  myProduct.map((product)=>{ 
    //계속 추가되는 것을 방지(동일한아이디값이 이미 있을때는 작동X)
    if(!document.getElementById(product.id)) {  
      createItem(product);
    }
  })
}