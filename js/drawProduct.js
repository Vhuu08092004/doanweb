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

 const openShopping = document.querySelector(".shopping"),
      closeShopping = document.querySelector(".closeShopping"),
      body = document.querySelector("body"),
      list= document.querySelector(".list"),
      listCard = document.querySelector(".listCard"),
      total = document.querySelector(".total"),
      quantitys = document.querySelector(".quantity"),
      openSearch = document.querySelector(".search"),
      closeSearch = document.querySelector(".closesearch"),
      userProfile=document.querySelector(".userProfile"),
      closeProfile=document.querySelector(".closeProfile");
  let DATABASE = JSON.parse(localStorage.getItem('DATABASE'))
  let product = DATABASE.PRODUCTS;
  let ACCOUNTS = DATABASE.ACCOUNTS;
  let ORDERS = DATABASE.ORDERS;
  ORDERS.forEach(function(order) {
    console.log(order);
   console.log(order.userID);
      
  })
  
 
  userProfile.addEventListener("click",function (){
      body.classList.add("show");
  })
  closeProfile.addEventListener("click",function (){
    body.classList.remove("show");
  });
  openSearch.addEventListener("click", () => {
    body.classList.add("opensearch");
  });
  closeSearch.addEventListener("click", () => {
    body.classList.remove("opensearch");
  });
openShopping.addEventListener("click", () => {
  body.classList.add("active");
})

closeShopping.addEventListener("click", () => {
  body.classList.remove("active")
})
var profileInfo=document.getElementById("s_profileInfo"),
    profileOrder=document.getElementById("s_profileOrder"),
    contentProfile=document.querySelector(".right-profile"),
    contentOrder=document.querySelector(".order-info");
    profileInfo.addEventListener("click", () => {
      contentProfile.style.display="block";
      contentOrder.style.display="none";
      
    });
    profileOrder.addEventListener("click", () => {
      contentOrder.style.display="block";
      contentProfile.style.display="none";
      
    });

      // profile
  
    function actProfileToggle() {
      ACCOUNTS.forEach(function (account) {
        let cookieValue=getCookie("user");
          if (account.email === cookieValue) {
              renderProfileDetail(account);
             // renderProfileOrder(account.ID);
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
//   function renderProfileOrder(ID) {
//     let profileTbody = document.getElementById("profileTbody");
//     let content = '';
//     ORDERS.forEach(order => {
//         if (order.userID === ID) {
//             let productList = ``;
//             let total_price = 0;
//             // order.products.forEach(p => {
//             //     productList += `
//             //         ${p.productName} (x${p.quantity})<br>
//             //     `
//             //     total_price += p.quantity * p.price
//             // });

//             content += `
//             <tr>
//                 <th scope="row" class="text-info">${order.orderId}</th>
//                 <td>${order.createDate}</td>
//                 <td>${productList}</td>
//                 <td>${formatter.format(total_price)}</td>
//                 <td class="text-center">${order.status}</td>
//             </tr>
//             `;
//         }
//     })
//     profileTbody.innerHTML = content;
// }
      // end profile
let listCards = [];

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

const addToCard = key => {
  if(listCards[key]!= null) {
    listCards[key].quantity += 1;
  }
  
  if(listCards[key] == null) {
      listCards[key] = JSON.parse(JSON.stringify(product[key]));
      // console.log(listCards);
      listCards[key].quantity = 1;
      // console.log(listCards[key].quantity);
      
  }
  reloadCard()
}

const reloadCard = () => {
  listCard.innerHTML = "";
  let count = 0;
  let totalPrice= 0;
  let pays = [];
  listCards.forEach((value, key) => {
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
              <div class = "cardPrice">${product[key].price * listCards[key].quantity}</div>

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
      total.innerText = totalPrice.toLocaleString();
      quantitys.innerText = count;
  })
}

pay.addEventListener('click' , () => {
  listCards = []
})
    
const changeQuantity = (key, quantity) => {
  if(quantity == 0) {
      delete listCards[key];
      total.innerText = 0;
      quantitys.innerHTML = 0
  }
  else {
      listCards[key].quantity = quantity;
      listCards[key].price = quantity * product[key].price
  }
  reloadCard()
}


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
    if(params.totalPages == 1) {
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

