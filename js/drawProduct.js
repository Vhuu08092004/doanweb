let params = {
  perPages: 6,
  currentPages: 1,
  start :0,
  end: 6,
  totalPages: 0
};

function getCookie(cname) {
  var name = cname + "=";
  var ca = document.cookie.split(';');
  for(var i = 0; i <ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0)===' ') {
          c = c.substring(1);
      }
      if (c.indexOf(name) === 0) {
          return c.substring(name.length,c.length);
      }
  }
  return "";
}
const pay = document.querySelector(".pays");
 let category = document.querySelector("#category");
 let buttonRight = document.querySelector("#btn-right");
 let numberPage =document.querySelector("#number-pages"); 
 let buttonLeft = document.querySelector("#btn-left");
 let inputSearch = document.querySelector("#input-search");
 let buttonSearch =document.querySelector("#button-search");
 let filter = document.querySelector(".filter");
 let content = document.querySelector(".content__product");
 let searchBasic=document.querySelector(".search-basic");

 const openShopping = document.querySelector(".shopping"),
      closeShopping = document.querySelector(".closeShopping"),
      body = document.querySelector("body"),
      list= document.querySelector(".list"),
      listCard = document.querySelector(".listCard"),
      total = document.querySelector(".total"),
      quantitys = document.querySelector(".quantity"),
      closeSearch = document.querySelector(".closesearch"),
      closeProfile=document.querySelector(".closeProfile"),
      openMenu = document.querySelector(".header-menu"),
      header = document.querySelector(".header"),
      catogoryDesc=document.querySelector(".catogory-desc"),
      showAccount=document.querySelector(".show-account");


      
  
  let DATABASE = JSON.parse(localStorage.getItem('DATABASE'))
  let product = DATABASE.PRODUCTS;
  let ACCOUNTS = DATABASE.ACCOUNTS;
  let ORDERS = DATABASE.ORDERS;
  //  thao tac su kien
  openMenu.addEventListener("click", function(){
      header.classList.toggle("show-menu")
  });
  catogoryDesc.addEventListener("click",function(){
      document.querySelector(".show__catogogy-item").classList.toggle("show_item");
  });
  function userProfile(){
    body.classList.add("show");
  }
  closeProfile.addEventListener("click",function (){
    body.classList.remove("show");
  });
  function openSearch(){
    body.classList.add("opensearch");
  };

  closeSearch.addEventListener("click", () => {
    body.classList.remove("opensearch");
  });
openShopping.addEventListener("click", () => {
  body.classList.add("active");
})
closeShopping.addEventListener("click", () => {
  body.classList.remove("active")
})
  // end thao tac su kien
var profileInfo=document.getElementById("s_profileInfo"),
    profileOrder=document.getElementById("s_profileOrder"),
    contentProfile=document.querySelector(".right-profile"),
    contentOrder=document.querySelector(".order-info");
    profileInfo.addEventListener("click", () => {
      contentProfile.style.display="block";
      contentOrder.style.display="none";
    });
    profileOrder.addEventListener("click", () => {
      contentProfile.style.display="none";
      contentOrder.style.display="block";
    });

   
    function actProfileToggle() {
      ACCOUNTS.forEach(function (account) {
        let cookieValue=getCookie("user");
          if (account.email === cookieValue) {
              renderProfileDetail(account);
             renderProfileOrder(account.ID);
          }
      });
  };
   actProfileToggle();
    function renderProfileDetail(account) {
    
      let p_name = document.getElementById('p_name');
      let p_number = document.getElementById('p_number');
      let p_email = document.getElementById('p_email');
      let p_address = document.getElementById('p_address');
      let p_nameTitle = document.getElementById('p_nameTitle');
  
      p_nameTitle.innerText = account.username;
      p_name.value = account.username;
      p_number.value = account.phoneNumber;
      p_email.value = account.email;
      p_address.value = account.address;
  
  
      //Update profile
      let updateProfile = document.getElementById('updateProfile');
      updateProfile.addEventListener('click', updateUserProfile);
  
      function updateUserProfile() {
          account.username = p_name.value;
          account.phoneNumber = p_number.value;
          account.email = p_email.value;
          account.address = p_address.value;
          localStorage.setItem('DATABASE', JSON.stringify(DATABASE));
          alert('Update Thành Công !');
      }
  }
  function renderProfileOrder(ID) {
    let profileTbody = document.getElementById("profileTbody");
    let content = '';
    for(let i=1;i< ORDERS.length;i++) {
        let order= ORDERS[i];
        if (order.userID === ID) {
            let productList = ``;
            let total_price = 0;
            order.products.forEach(p => {
                productList += `
                    ${p.productName} (x${p.quantity})<br>
                `
                total_price += p.quantity * p.price
            });
            content += `
            <tr>
                <th scope="row" class="text-info">${order.orderId}</th>
                <td>${order.createDate}</td>
                <td>${productList}</td>
                <td>${total_price}đ</td>
                <td class="text-center">${order.status}</td>
            </tr>
            `;
        }
    }
    profileTbody.innerHTML = content;
}
      // end profile


let productFilter = product ;
params.totalPages = Math.ceil(productFilter.length / params.perPages) ;

 const drawProduct = (e) => {
    let arrayHTML = e.map((item , index) => {
      if (index >= params.start && index < params.end) {
        return `
                <div class="content__product-item col-lg-3">
                      <img src="${item.thumbnail}" alt="">
                      <div class="desc">${item.title}</div>
                      <div class="Drake_Price"> giá giày: ${item.price}</div>
                      <div class="Retail-Price">giá giảm: ${item.saleprice}</div>
                      <button onclick = "addToCard(${item.id})">Add To Card</button>
                      <span class="detail" onclick="btnDetail(${item.id})" id=${item.id}>Detail</span>
                </div>
              `
      } 
    });
    document.getElementById("products").innerHTML = arrayHTML.join('');
    
  }
drawProduct(product);


if(localStorage.getItem('cart')){
  var cart = JSON.parse(localStorage.getItem('cart'))
  var listCards = cart.filter(function(item) {
    return item !== null;
});
} else {
  var listCards = []

}


// let listCards = [] ;

  
const addToCard = key => {
  if(listCards[key]!= null) {
    listCards[key].quantity += 1;
    localStorage.setItem(`otherProduct`,JSON.stringify( listCards[key].quantity))
  }
  
  if(listCards[key] == null) {
      listCards[key] = JSON.parse(JSON.stringify(product[key]));
      listCards[key].quantity = 1; 
  }
  reloadCard()
}



const reloadCard = () => {
  listCard.innerHTML = "";
  let count = 0;
  let totalPrice= 0;
  let pays = [];
  listCards.forEach((value, key) => {
    localStorage.setItem('cart' , JSON.stringify(listCards))
    let products = {
                  code: value.id,
                  productName: value.title,                                    
                  price: value.price,
                  image: value.thumbnail,                                    
                  quantity: value.quantity                                  
               };

      totalPrice = totalPrice + product[key].price * listCards[key].quantity
      count = count + value.quantity;
      if(value != null) {
          
          let newDiv = document.createElement("li");
          newDiv.innerHTML = `
              <div><img src = "${value.thumbnail}"></div>
              <div class = "cardTitle">${value.title}</div>
              <div class="cardPrice">${(product[key].price * listCards[key].quantity).toLocaleString()} VNĐ</div>
              <div>
                  <button style = "background-color:#560bad;" class = "cardButton" onclick = "changeQuantity(${key}, ${value.quantity - 1})">-</button>
                  <div class = "count">${value.quantity}</div>
                  <button style = "background-color:#560bad;" class = "cardButton" onclick = "changeQuantity(${key}, ${value.quantity + 1})">+</button>
              </div>
          `                                                                                                           
          listCard.appendChild(newDiv)
        pays.push(products)
      }
      localStorage.setItem(`otherProduct`,JSON.stringify(pays))
      total.innerText = totalPrice.toLocaleString() + ' VNĐ';
      quantitys.innerText = count;
  })
}

reloadCard()

pay.addEventListener('click' , () => {
  listCards = []
})
    
const changeQuantity = (key, quantity) => {
  if(quantity == 0) {
      delete listCards[key];
      total.innerText = 0;
      quantitys.innerHTML = 0
      localStorage.setItem('cart' ,[])
  }
  else {
      listCards[key].quantity = quantity;
      listCards[key].price = quantity * product[key].price
  }
  reloadCard()
}
// Search
    function catogorySearch(value){

      productFilter =product.filter(item => {
      
        if(value != ''){
          if(item.type != value){
              return false;
          }
        };
        return true;
    })
    drawProduct(productFilter);
    params.totalPages = Math.ceil(productFilter.length / params.perPages);
    renderListPages();
  }

searchBasic.addEventListener('submit',function(event) {
  event.preventDefault();

  let valueFilter = event.target.elements;
 
  productFilter =product.filter(item => {
   
    if(valueFilter.name.value != ''){
      if(!item.title.toUpperCase().includes(valueFilter.name.value.toUpperCase())){
          return false;
      }
  };
  return true;
  })
  drawProduct(productFilter);
  params.totalPages = Math.ceil(productFilter.length / params.perPages);
  renderListPages();
})

filter.addEventListener('submit', function(event){
  event.preventDefault();

  let valueFilter = event.target.elements;
  productFilter = product.filter(item => {
      // check category
      if(valueFilter.category.value != ''){
          if(item.type != valueFilter.category.value){
              return false;
          }
      };
      // check name
      if(valueFilter.name.value != ''){
          if(!item.title.toUpperCase().includes(valueFilter.name.value.toUpperCase())){
              return false;
          }
      };
      // check min price
      if(valueFilter.minPrice.value != ''){
          if(item.price < valueFilter.minPrice.value){
              return false;
          }
      };
      //  check max price
      if(valueFilter.maxPrice.value != ''){
          if(item.price > valueFilter.maxPrice.value){
              return false;
          }
      };
      return true;
  })
  drawProduct(productFilter);
  params.totalPages = Math.ceil(productFilter.length / params.perPages);
  renderListPages();
})
// end Search

function getCurrentPage(currentPage){
  params.currentPages = currentPage;
  params.start = (params.currentPages - 1) * params.perPages;
  params.end = params.currentPages * params.perPages;
}

if(productFilter.length > 6) {
    buttonRight.addEventListener("click", () => {
      params.currentPages++;
      if(params.currentPages > params.totalPages) {
        params.currentPages = params.totalPages;
      }
      getCurrentPage(params.currentPages)
      drawProduct(productFilter);
     
    })
    buttonLeft.addEventListener("click", () => {
      params.currentPages--;
      if(params.currentPages  <= 1) {
        params.currentPages = 1;
      }
      getCurrentPage(params.currentPages);
      drawProduct(productFilter);

    })
  }

    
  const renderListPages= () => {
    if(params.totalPages == 1 || params.totalPages == 0) {
      numberPage.innerHTML =''
      var myList = document.querySelector('.content_pagging')
      var listItems = myList.getElementsByTagName('li')
      while (listItems.length > 0) {
        myList.removeChild(listItems[0]);
      }
    } else {
      let html = '';
      html+= `<li><a href="#">${1}</a></li>`;
      for(let i = 2 ; i <= params.totalPages ; i++) {
        html += `<li><a href="#">${i}</a></li>`
      }
      numberPage.innerHTML = html
      var myList = document.querySelector('.content_pagging')
      var listItems = myList.getElementsByTagName('li')
      changePages()

    }
    }
 renderListPages();

 function changePages () {
  const currentPages =document.querySelectorAll('.number-pages li')
  for(let  i = 0 ; i < currentPages.length; i++) {
    currentPages[i].addEventListener('click' , () => {
      const value = i + 1;
      params.currentPages = value;
      getCurrentPage(params.currentPages);
      drawProduct(productFilter);
    })
  }
 }

 changePages();
