// const detail = document.querySelector(".detail-product");

const detail = JSON.parse(localStorage.getItem("DATABASE")).PRODUCTS;

const btnDetail = (key) => {
  let arrayHTML;
  for (let i = 0; i < detail.length; i++) {
    if (detail[i].id == key) {
      arrayHTML = `  
      <div class="container">
      <div class="row">
        <div class="detail-innerwrap">
            <div class="detail-product-left">
              <img src="${detail[i].thumbnail}" alt="">
            </div>
            <div class="detail-product-right">
                <p><strong>Product Name: ${detail[i].title} </strong></p>
                <div class="price">Price: ${detail[i].price}</div>
                <div class="saleprice">Sale Price: ${detail[i].saleprice}</div>
                <div class="desc">${detail[i].description}</div>
                <button onclick = "addToCard(${detail[i].id})">Add To Card</button>
                <span class="closeDetail" onclick="closeDetail()"><i class="fa-solid fa-xmark"></i></div>
            </div>
          </div>
      </div>
  </div>
              `;
    }
  }
 
  document.querySelector(".detail-product").innerHTML = arrayHTML;
  document.querySelector(".detail-product").style.display ="block";
};
var detailProduct=document.querySelector(".detail-product");
function closeDetail(){
  detailProduct.style.display="none";
}

