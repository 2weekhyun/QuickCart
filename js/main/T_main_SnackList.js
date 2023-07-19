let products;
let myProduct;

async function getJson(){
    const response = await fetch("js/db/T_main_SnackDB.json");
    products = await response.json();
    return products;
}
getJson()
.then((products)=>importData(products))


//li만들어서 ul에 넣어주는 함수
const createItem = (product)=>{
  const T_snack = document.querySelector('.T_snack');
  const li = document.createElement('li');
  const a = document.createElement('a');
  const img = document.createElement('img');
  const p = document.createElement('p');

  li.id = product.id;
  li.classList = 'T_items';

  a.setAttribute('href',product.href);
  a.classList = 'T_item_link';

  img.setAttribute('src',product.img);
  img.classList = 'T_item_img';
  
  p.className = 'T_items_name';
  p.innerHTML = product.name;

  T_snack.append(li)
  li.append(a)
  a.append(img,p)
}
//만든 li들이 반복되게
const importData = ()=>{
  myProduct = products.TabletSnackData;
  myProduct.map((product)=>{ 
    //계속 추가되는 것을 방지(동일한아이디값이 이미 있을때는 작동X)
    if(!document.getElementById(product.id)) {  
      createItem(product);
    }
  })
}