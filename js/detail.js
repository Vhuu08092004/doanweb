
// const detail = document.querySelector(".detail-product");

const products = [
    {
        id: 0,
        title: "Hello",
        thumbnail: "https://drake.vn/image/cache/catalog/Converse/GIA%CC%80Y%202/A04968C/A04968C_1-300x300.jpg",
        price: 2000000,
        saleprice: 1800000,
        type: "CHUCK 1970"
    },
    {
        id: 1,
        title: "CONVERSE CHUCK 70 NAUTICAL TRI BLOCKED",
        thumbnail: "https://drake.vn/image/cache/catalog/Converse/GIA%CC%80Y%202/A04969C/A04969C_1-300x300.jpg",
        price: 2000000,
        saleprice: 1800000,
        type: "CHUCK 1970"

    },
    {
        id: 2,
        title: "CONVERSE CHUCK TAYLOR 1970S HI",
        thumbnail: "https://drake.vn/image/cache/catalog/Converse/GIA%CC%80Y%202/A02755C/A02755C_1-300x300.jpg",
        price: 1900000,
        saleprice: 1710000
    },
    {
        id: 3,
        title: "CONVERSE CHUCK 70 SEASONAL COLOR RED",
        thumbnail: "https://drake.vn/image/cache/catalog/Converse/GIA%CC%80Y%202/A01448C/A01448C_PL12-300x300.jpg",
        price: 1900000,
        saleprice: 1710000
    },
    {
        id: 4,
        title: "CONVERSE CHUCK TAYLOR ALL STAR 1970S BLACK",
        thumbnail: "https://drake.vn/image/cache/catalog/Converse/1970s/TRANG%20CH%E1%BB%A6/162050-DRAKE-300x300.jpg",
        price: 1900000,
        saleprice: 1710000
    },
    {
        id: 5,
        title: "CONVERSE CHUCK 70 SEASONAL COLOR RED",
        thumbnail: "https://drake.vn/image/cache/catalog/Converse/GIA%CC%80Y%202/A01448C/A01448C_PL12-300x300.jpg",
        price: 2000000,
        saleprice: 1900000
    },
    {
        id: 6,
        title: "CONVERSE CHUCK TAYLOR ALL STAR 1970S BLACK",
        thumbnail: "https://drake.vn/image/cache/catalog/Converse/1970s/164949C-DRAKE-300x300.jpg",
        price: 1800000,
        saleprice: 1260000
    },
    {
        id: 7,
        title: "CONVERSE CHUCK TAYLOR ALL STAR 1970S",
        thumbnail: "https://drake.vn/image/cache/catalog/Converse/1970s/164944C-DRAKE-300x300.jpg",
        price: 1990000,
        saleprice: 1330000
    },
    {
        id: 8,
        title: "CONVERSE CHUCK TAYLOR ALL STAR 1970S",
        thumbnail: "https://drake.vn/image/cache/catalog/Converse/1970s/164946C/164946C-300x300.jpg",
        price: 1900000,
        saleprice: 1330000
    },
    {
        id: 9,
        title: "CONVERSE CHUCK TAYLOR ALL STAR 1970S",
        thumbnail: "https://drake.vn/image/cache/catalog/Converse/GIA%CC%80Y%202/162053c/162053C-650x650-300x300.jpg",
        price: 2000000,
        saleprice: 1810000
    },
    {
        id: 10,
        title: "CONVERSE CHUCK TAYLOR ALL STAR 1970S",
        thumbnail: "https://drake.vn/image/cache/catalog/Converse/1970s/TRANG%20CH%E1%BB%A6/162065-DRAKE-300x300.jpg",
        price: 1900000,
        saleprice: 1710000
    },
    {
        id: 11,
        title: "CONVERSE CHUCK TAYLOR ALL STAR 1970S",
        thumbnail: "https://drake.vn/image/cache/catalog/Converse/1970s/162062C/162062C-300x300.jpg",
        price: 1900000,
        saleprice: 1710000
    },
    {
        id: 12,
        title: "CONVERSE CHUCK TAYLOR ALL STAR 1970S RAINBOW",
        thumbnail: "https://drake.vn/image/cache/catalog/Hinh%20add%20dut%20size/03.02.2023/164967C_PL7-300x300.jpg",
        price: 1900000,
        saleprice: 1710000
    },
    {
        id: 13,
        title: "CONVERSE CHUCK TAYLOR ALL STAR 1970S VLTG",
        thumbnail: "https://drake.vn/image/cache/catalog/Converse/1970s/565370C-300x300.jpg",
        price: 2000000,
        saleprice: 1000000
    },
    {
        id: 14,
        title: "CONVERSE CHUCK TAYLOR ALL STAR 1970S LOVE FEARLESSLY",
        thumbnail: "https://drake.vn/image/cache/catalog/Converse/GIA%CC%80Y%202/567153C/567153C-300x300.jpg",
        price: 2200000,
        saleprice: 800000
    },
    {
        id: 15,
        title: "CONVERSE CHUCK TAYLOR ALL STAR 1970S VALENTINE'S DAY",
        thumbnail: "https://drake.vn/image/cache/catalog/Converse/GIA%CC%80Y%202/171117C/171117C-300x300.jpg",
        price: 2000000,
        saleprice: 1400000
    },
    {
        id: 16,
        title: "CONVERSE CHUCK TAYLOR ALL STAR 1970S MULE RECYCLED CANVAS",
        thumbnail: "https://drake.vn/image/cache/catalog/Converse/GIA%CC%80Y%202/172592C/172592C_P3-300x300.jpg",
        price: 2000000,
        saleprice: 1900000
    },
    {
        id: 17,
        title: "CONVERSE CHUCK TAYLOR ALL STAR CLASSIC",
        thumbnail: "https://drake.vn/image/cache/catalog/Converse/GIA%CC%80Y%202/M9166C/M9166C_1-300x300.jpg",
        price: 1400000,
        saleprice: 1100000
    },
    {
        id: 18,
        title: "CONVERSE CHUCK TAYLOR ALL STAR CLASSIC",
        thumbnail: "https://drake.vn/image/cache/catalog/Converse/GIA%CC%80Y%202/M9160C/M9160C_1-300x300.jpg",
        price: 1550000,
        saleprice: 1200000
    },
    {
        id: 19,
        title: "CONVERSE CHUCK TAYLOR ALL STAR CLASSIC",
        thumbnail: "https://drake.vn/image/cache/catalog/Converse/Classic/Hi%CC%80nh%20chu%CC%89/127440-DRAKE-300x300.jpg",
        price: 1500000,
        saleprice: 750000
    },
    {
        id: 20,
        title: "CONVERSE CHUCK TAYLOR ALL STAR CLASSIC",
        thumbnail: "https://drake.vn/image/cache/catalog/Converse/Classic/M5039-300x300.jpg",
        price: 1900000,
        saleprice: 1710000
    },
    {
        id: 21,
        title: "CONVERSE CHUCK TAYLOR ALL STAR CLASSIC",
        thumbnail: "https://drake.vn/image/cache/catalog/Converse/GIA%CC%80Y%202/M9621C/M9621C_1-300x300.jpg",
        price: 1500000,
        saleprice: 1200000
    }

]

const btnDetail = key => { 
    const idProduct = key
        let arrayHTML = products.map((item , index) => {
            if (idProduct == index) {
              return `
                <div class="container">
                    <div class="row">
                        <div class="detail-product-left">
                            <img src="${item.thumbnail}" alt="">
                        </div>
                        <div class="detail-product-right">
                            <p><strong>Product Name: ${item.title} </strong></p>
                            <p><strong>Description: </strong></p>
                            <p><strong>Price: ${item.price}</strong></p>
                            <p><strong>saleprice: ${item.saleprice} </strong></p>
                            <button onclick = "addToCard(${index})">Add To Card</button>
                        </div>
                    </div>
                </div>
              `
            }
        });

       
        document.querySelector(".detail-product").innerHTML = arrayHTML.join('');
}
