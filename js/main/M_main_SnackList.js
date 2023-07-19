let products;
let myProduct;

async function getJson(){
    const response = await fetch("js/db/M_main_SnackDB.json");
    products = await response.json();
    return products;
}
getJson()
.then((products)=>importData(products))


//li만들어서 ul에 넣어주는 함수
const createItem = (product)=>{
    const M_snack = document.querySelector('.M_snack');
    const li = document.createElement('li');
    const a = document.createElement('a');
    const img = document.createElement('img');
    const p = document.createElement('p');

    img.setAttribute('src',product.img);
    img.classList = 'M_item_img';

    a.setAttribute('href',product.href);
    a.classList = 'M_item_link';
    
    li.id = product.id;
    li.classList = 'M_items';

    p.className = 'M_items_name';
    p.innerHTML = product.name;

    M_snack.append(li)
    li.append(a)
    a.append(img,p)
}
//만든 li들이 반복되게
const importData = ()=>{
  myProduct = products.MobileSnackData;
  myProduct.map((product)=>{ 
    //계속 추가되는 것을 방지(동일한아이디값이 이미 있을때는 작동X)
    if(!document.getElementById(product.id)) {  
      createItem(product);
    }
  })
}