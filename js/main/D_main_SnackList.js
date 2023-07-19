let products;
let myProduct;

async function getJson(){
    const response = await fetch("js/db/D_main_SnackDB.json");
    products = await response.json();
    return products;
}
getJson()
.then((products)=>importData(products))


//li만들어서 ul에 넣어주는 함수
const createItem = (product)=>{
    const D_snack = document.querySelector('.D_snack');
    const li = document.createElement('li');
    const a = document.createElement('a');
    const img = document.createElement('img');
    const p = document.createElement('p');

    img.setAttribute('src',product.img);
    img.classList = 'item_img';

    a.setAttribute('href',product.href);
    a.classList = 'item_link';
    
    li.id = product.id;
    li.classList = 'D_items';

    p.className = 'items_name';
    p.innerHTML = product.name;

    D_snack.append(li)
    li.append(a)
    a.append(img,p)
}
//만든 li들이 반복되게
const importData = ()=>{
  myProduct = products.DeskSnackData;
  myProduct.map((product)=>{ 
    //계속 추가되는 것을 방지(동일한아이디값이 이미 있을때는 작동X)
    if(!document.getElementById(product.id)) {  
      createItem(product);
    }
  })
}