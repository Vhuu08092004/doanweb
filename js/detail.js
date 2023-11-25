
// const detail = document.querySelector(".detail-product");

const detail = JSON.parse(localStorage.getItem('DATABASE')).PRODUCTS; 

const btnDetail = key => { 
  let arrayHTML;
  for(let i = 0 ; i < detail.length ; i++){
    if(detail[i].id == key){
      arrayHTML = 
      `
                <div class="container">
                    <div class="row">
                        <div class="detail-product-left">
                            <img src="${detail[i].thumbnail}" alt="">
                        </div>
                        <div class="detail-product-right">
                            <p><strong>Product Name: ${detail[i].title} </strong></p>
                            <p><strong>Description: </strong></p>
                            <p><strong>Price: ${detail[i].price}</strong></p>
                            <p><strong>saleprice: ${detail[i].saleprice} </strong></p>
                            <button onclick = "addToCard(${detail[i].id})">Add To Card</button>
                        </div>
                    </div>
                </div>
              `
    }
  }   
    console.log(arrayHTML)
    document.querySelector(".detail-product").innerHTML = arrayHTML;
}
