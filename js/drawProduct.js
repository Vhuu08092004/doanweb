let params = {
  perPages: 6,
  currentPages: 1,
  start: 0,
  end: 6,
  q: "",
};

function getCookie(cname) {
  var name = cname + "=";
  var ca = document.cookie.split(";");
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) === " ") {
      c = c.substring(1);
    }
    if (c.indexOf(name) === 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

let category = document.querySelector("#category");
let buttonRight = document.querySelector("#btn-right");
let numberPage = document.querySelector("#number-pages");
let buttonLeft = document.querySelector("#btn-left");
let inputSearch = document.querySelector("#input-search");
let buttonSearch = document.querySelector("#button-search");
let filter = document.querySelector(".filter");
let content = document.querySelector(".content__product");

const openShopping = document.querySelector(".shopping"),
  closeShopping = document.querySelector(".closeShopping"),
  body = document.querySelector("body"),
  list = document.querySelector(".list"),
  listCard = document.querySelector(".listCard"),
  total = document.querySelector(".total"),
  quantitys = document.querySelector(".quantity"),
  openSearch = document.querySelector(".search"),
  closeSearch=document.querySelector(".closesearch");
  
  


let DATABASE = JSON.parse(localStorage.getItem("DATABASE"));

let product = DATABASE.PRODUCTS;

const totalPages = Math.ceil(product.length / params.perPages);
openSearch.addEventListener("click", () => {
  body.classList.add("opensearch");
});
closeSearch.addEventListener("click", () => {
  body.classList.remove("opensearch");
});
openShopping.addEventListener("click", () => {
  body.classList.add("active");
});

closeShopping.addEventListener("click", () => {
  body.classList.remove("active");
});

let listCards = [];

let productFilter = product;
const drawProduct = (e) => {
  let arrayHTML = e.map((item, index) => {
    if (index >= params.start && index < params.end) {
      return `
                <div class="content__product-item col-lg-3">
                      <img src="${item.thumbnail}" alt="">
                      <div class="desc">${item.title}</div>
                      <div class="Drake_Price">${item.price}</div>
                      <div class="Retail-Price">${item.saleprice}</div>
                      <button onclick = "addToCard(${item.id})">Add To Card</button>
                      <span class="detail" onclick="btnDetail(${item.id})" id=${item.id}>Detail</span>
                </div>
              `;
    }
  });
  document.getElementById("products").innerHTML = arrayHTML.join("");
};
drawProduct(product);

const addToCard = (key) => {
  if (listCards[key] != null) {
    listCards[key].quantity += 1;
  }

  if (listCards[key] == null) {
    listCards[key] = JSON.parse(JSON.stringify(product[key]));
    // console.log(listCards);
    listCards[key].quantity = 1;
    // console.log(listCards[key].quantity);
  }
  reloadCard();
};

const reloadCard = () => {
  listCard.innerHTML = "";
  let count = 0;
  let totalPrice = 0;
  let pays = [];
  listCards.forEach((value, key) => {
    let products = {
      code: value.id,
      productName: value.title,
      price: value.price,
      image: value.thumbnail,
      quantity: value.quantity,
    };

    totalPrice = totalPrice + product[key].price * listCards[key].quantity;
    count = count + value.quantity;
    if (value != null) {
      let newDiv = document.createElement("li");
      newDiv.innerHTML = `
              <div><img src = "${value.thumbnail}"></div>
              <div class = "cardTitle">${value.title}</div>
              <div class = "cardPrice">${
                product[key].price * listCards[key].quantity
              }</div>

              <div>
                  <button style = "background-color:#560bad;" class = "cardButton" onclick = "changeQuantity(${key}, ${
        value.quantity - 1
      })">-</button>
                  <div class = "count">${value.quantity}</div>
                  <button style = "background-color:#560bad;" class = "cardButton" onclick = "changeQuantity(${key}, ${
        value.quantity + 1
      })">+</button>
              </div>
          `;
      listCard.appendChild(newDiv);
      pays.push(products);
    }
    localStorage.setItem("otherProduct", JSON.stringify(pays));
    total.innerText = totalPrice.toLocaleString();
    quantitys.innerText = count;
  });
};

const changeQuantity = (key, quantity) => {
  if (quantity == 0) {
    delete listCards[key];
    total.innerText = 0;
    quantitys.innerHTML = 0;
  } else {
    listCards[key].quantity = quantity;
    listCards[key].price = quantity * product[key].price;
  }
  reloadCard();
};

filter.addEventListener("submit", function (event) {
  event.preventDefault();

  let valueFilter = event.target.elements;
  productFilter = product.filter((item) => {
    // check category
    if (valueFilter.category.value != "") {
      if (item.type != valueFilter.category.value) {
        return false;
      }
    }
    // check name
    if (valueFilter.name.value != "") {
      if (
        !item.title.toUpperCase().includes(valueFilter.name.value.toUpperCase())
      ) {
        return false;
      }
    }
    // check min price
    if (valueFilter.minPrice.value != "") {
      if (item.price < valueFilter.minPrice.value) {
        return false;
      }
    }
    //  check max price
    if (valueFilter.maxPrice.value != "") {
      if (item.price > valueFilter.maxPrice.value) {
        return false;
      }
    }
    return true;
  });
  drawProduct(productFilter);
});

if (productFilter.length > 6) {
  buttonRight.addEventListener("click", () => {
    params.currentPages++;

    if (params.currentPages > totalPages) {
      params.currentPages = totalPages;
    }
    params.start = (params.currentPages - 1) * params.perPages;
    params.end = params.currentPages * params.perPages;
    drawProduct(productFilter);
    renderListPages();
  });
  buttonLeft.addEventListener("click", () => {
    params.currentPages--;

    if (params.currentPages <= 1) {
      params.currentPages = 1;
    }
    params.start = (params.currentPages - 1) * params.perPages;
    params.end = params.currentPages * params.perPages;
    drawProduct(productFilter);
    renderListPages();
  });
}

const renderListPages = () => {
  let html = "";
  html += `<li><a href="">${params.currentPages}</a></li> `;
  numberPage.innerHTML = html;
};
renderListPages();
