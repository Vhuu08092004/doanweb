 let params = {
  perPages: 6,
  currentPages: 1,
  start :0,
  end: 6,
  q: ''
};

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
      quantity = document.querySelector(".quantity")

const product = [
  {
    id: 1,
    title: "Hello",
    thumbnail: "https://drake.vn/image/cache/catalog/Converse/GIA%CC%80Y%202/A04968C/A04968C_1-300x300.jpg",
    price: 2000000,
    saleprice: 1800000,
    type : "CHUCK 1970"
  },
  {
    id: 2,
    title: "CONVERSE CHUCK 70 NAUTICAL TRI BLOCKED",
    thumbnail: "https://drake.vn/image/cache/catalog/Converse/GIA%CC%80Y%202/A04969C/A04969C_1-300x300.jpg",
    price: 2000000,
    saleprice: 1800000,
    type : "CHUCK 1970"
  
  },
  {
    id: 3,
    title: "CONVERSE CHUCK TAYLOR 1970S HI",
    thumbnail: "https://drake.vn/image/cache/catalog/Converse/GIA%CC%80Y%202/A02755C/A02755C_1-300x300.jpg",
    price: 1900000,
    saleprice: 1710000
  },
  {
    id: 4,
    title: "CONVERSE CHUCK 70 SEASONAL COLOR RED",
    thumbnail: "https://drake.vn/image/cache/catalog/Converse/GIA%CC%80Y%202/A01448C/A01448C_PL12-300x300.jpg",
    price: 1900000,
    saleprice: 1710000
  },
  {
    id: 5,
    title: "CONVERSE CHUCK TAYLOR ALL STAR 1970S BLACK",
    thumbnail: "https://drake.vn/image/cache/catalog/Converse/1970s/TRANG%20CH%E1%BB%A6/162050-DRAKE-300x300.jpg",
    price: 1900000,
    saleprice: 1710000
  },
  {
    id: 4,
    title: "CONVERSE CHUCK 70 SEASONAL COLOR RED",
    thumbnail: "https://drake.vn/image/cache/catalog/Converse/GIA%CC%80Y%202/A01448C/A01448C_PL12-300x300.jpg",
    price: 2000000,
    saleprice: 1900000
  },
  {
    id: 5,
    title: "CONVERSE CHUCK TAYLOR ALL STAR 1970S BLACK",
    thumbnail: "https://drake.vn/image/cache/catalog/Converse/1970s/164949C-DRAKE-300x300.jpg",
    price: 1800000,
    saleprice: 1260000
  },
  {
    id: 6,
    title: "CONVERSE CHUCK TAYLOR ALL STAR 1970S",
    thumbnail: "https://drake.vn/image/cache/catalog/Converse/1970s/164944C-DRAKE-300x300.jpg",
    price: 1990000,
    saleprice: 1330000
  },
  {
    id: 7,
    title: "CONVERSE CHUCK TAYLOR ALL STAR 1970S",
    thumbnail: "https://drake.vn/image/cache/catalog/Converse/1970s/164946C/164946C-300x300.jpg",
    price: 1900000,
    saleprice: 1330000
  },
  {
    id: 8,
    title: "CONVERSE CHUCK TAYLOR ALL STAR 1970S",
    thumbnail: "https://drake.vn/image/cache/catalog/Converse/GIA%CC%80Y%202/162053c/162053C-650x650-300x300.jpg",
    price: 2000000,
    saleprice: 1810000
  },
  {
    id: 9,
    title: "CONVERSE CHUCK TAYLOR ALL STAR 1970S",
    thumbnail: "https://drake.vn/image/cache/catalog/Converse/1970s/TRANG%20CH%E1%BB%A6/162065-DRAKE-300x300.jpg",
    price: 1900000,
    saleprice: 1710000
  },
  {
    id: 10,
    title: "CONVERSE CHUCK TAYLOR ALL STAR 1970S",
    thumbnail: "https://drake.vn/image/cache/catalog/Converse/1970s/162062C/162062C-300x300.jpg",
    price: 1900000,
    saleprice: 1710000
  },
  {
    id: 11,
    title: "CONVERSE CHUCK TAYLOR ALL STAR 1970S RAINBOW",
    thumbnail: "https://drake.vn/image/cache/catalog/Hinh%20add%20dut%20size/03.02.2023/164967C_PL7-300x300.jpg",
    price: 1900000,
    saleprice: 1710000
  },
  {
    id: 12,
    title: "CONVERSE CHUCK TAYLOR ALL STAR 1970S VLTG",
    thumbnail: "https://drake.vn/image/cache/catalog/Converse/1970s/565370C-300x300.jpg",
    price: 2000000,
    saleprice: 1000000
  },
  {
    id: 13,
    title: "CONVERSE CHUCK TAYLOR ALL STAR 1970S LOVE FEARLESSLY",
    thumbnail: "https://drake.vn/image/cache/catalog/Converse/GIA%CC%80Y%202/567153C/567153C-300x300.jpg",
    price: 2200000,
    saleprice: 800000
  },
  {
    id: 14,
    title: "CONVERSE CHUCK TAYLOR ALL STAR 1970S VALENTINE'S DAY",
    thumbnail: "https://drake.vn/image/cache/catalog/Converse/GIA%CC%80Y%202/171117C/171117C-300x300.jpg",
    price: 2000000,
    saleprice: 1400000
  },
  {
    id: 15,
    title: "CONVERSE CHUCK TAYLOR ALL STAR 1970S MULE RECYCLED CANVAS",
    thumbnail: "https://drake.vn/image/cache/catalog/Converse/GIA%CC%80Y%202/172592C/172592C_P3-300x300.jpg",
    price: 2000000,
    saleprice: 1900000
  },
  {
    id: 16,
    title: "CONVERSE CHUCK TAYLOR ALL STAR CLASSIC",
    thumbnail: "https://drake.vn/image/cache/catalog/Converse/GIA%CC%80Y%202/M9166C/M9166C_1-300x300.jpg",
    price: 1400000,
    saleprice: 1100000
  },
  {
    id: 17,
    title: "CONVERSE CHUCK TAYLOR ALL STAR CLASSIC",
    thumbnail: "https://drake.vn/image/cache/catalog/Converse/GIA%CC%80Y%202/M9160C/M9160C_1-300x300.jpg",
    price: 1550000,
    saleprice: 1200000
  },
  {
    id: 18,
    title: "CONVERSE CHUCK TAYLOR ALL STAR CLASSIC",
    thumbnail: "https://drake.vn/image/cache/catalog/Converse/Classic/Hi%CC%80nh%20chu%CC%89/127440-DRAKE-300x300.jpg",
    price: 1500000,
    saleprice: 750000
  },
  {
    id: 19,
    title: "CONVERSE CHUCK TAYLOR ALL STAR CLASSIC",
    thumbnail: "https://drake.vn/image/cache/catalog/Converse/Classic/M5039-300x300.jpg",
    price: 1900000,
    saleprice: 1710000
  },
  {
    id: 20,
    title: "CONVERSE CHUCK TAYLOR ALL STAR CLASSIC",
    thumbnail: "https://drake.vn/image/cache/catalog/Converse/GIA%CC%80Y%202/M9621C/M9621C_1-300x300.jpg",
    price: 1500000,
    saleprice: 1200000
  }

]

const totalPages = Math.ceil(product.length / params.perPages) ;

openShopping.addEventListener("click", () => {
  body.classList.add("active");
})

closeShopping.addEventListener("click", () => {
  body.classList.remove("active")
})

let listCards = [];

let productFilter = product ;
 const drawProduct = (e) => {
    let arrayHTML = e.map((item , index) => {
      if (index >= params.start && index < params.end) {
        return `
                <div class="content__product-item col-lg-3">
                      <img src="${item.thumbnail}" alt="">
                      <div class="desc">${item.title}</div>
                      <div class="Drake_Price">${item.price}</div>
                      <div class="Retail-Price">${item.saleprice}</div>
                      <button onclick = "addToCard(${index})">Add To Card</button>
                      <span class="detail" id=${index}>Detail</span>
                </div>
              `
      }
    });
    document.getElementById("products").innerHTML = arrayHTML.join('');
  }
drawProduct(product);

const addToCard = key => {
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

  listCards.forEach((value, key) => {
      totalPrice = totalPrice + value.price
      count = count + value.quantity;

      if(value != null) {
          let newDiv = document.createElement("li");
          newDiv.innerHTML = `
              <div><img src = "img/${value.thumbnail}"></div>
              <div class = "cardTitle">${value.title}</div>
              <div class = "cardPrice">${value.price.toLocaleString()}</div>

              <div>
                  <button style = "background-color:#560bad;" class = "cardButton" onclick = "changeQuantity(${key}, ${value.quantity - 1})">-</button>
                  <div class = "count">${value.quantity}</div>
                  <button style = "background-color:#560bad;" class = "cardButton" onclick = "changeQuantity(${key}, ${value.quantity + 1})">+</button>
              </div>
          `
          listCard.appendChild(newDiv)
      }

      total.innerText = totalPrice.toLocaleString();
      quantity.innerText = count;
  })
}


const changeQuantity = (key, quantity) => {
  if(quantity == 0) {
      delete listCards[key]
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
          if(!item.title.includes(valueFilter.name.value)){
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
  
})

if(productFilter.length > 6) {
    buttonRight.addEventListener("click", () => {
      params.currentPages++;
      
      if(params.currentPages > totalPages) {
        params.currentPages = totalPages;
      }
      params.start = (params.currentPages - 1) * params.perPages;
      params.end = params.currentPages * params.perPages;
      drawProduct(productFilter);
      renderListPages();
    })
    buttonLeft.addEventListener("click", () => {
      params.currentPages--;
     
      if(params.currentPages  <= 1) {
        params.currentPages = 1;
      }
      params.start = (params.currentPages - 1) * params.perPages;
      params.end = params.currentPages * params.perPages;
      drawProduct(productFilter);
      renderListPages();
    })
  }

    
  const renderListPages= () => {
      let html = '';
      html+= `<li><a href="">${params.currentPages}</a></li>` 
      numberPage.innerHTML = html
    }
 renderListPages();



