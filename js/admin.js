// ===================== COMMON DEFINE ==================== 
// Formatter VND
const formatter = new Intl.NumberFormat('it-IT', {
  style: 'currency',
  currency: 'VND',
  minimumFractionDigits: 0
})

// Auto Generate ID
function generateToken() {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  const length = 20;
  let token = '';

  for (let i = 0; i < length; i++) {
    token += characters.charAt(Math.floor(Math.random() * characters.length));
  }

  return token;
}

// ==================== DATABASE ==========================

let DATABASE = localStorage.getItem('DATABASE') ? JSON.parse(localStorage.getItem('DATABASE')) : {
  PRODUCTS: [{
    id: 0,
    title: "CONVERSE CHUCK TAYLOR ALL STAR CLASSIC",
    thumbnail:
      "https://drake.vn/image/cache/catalog/Converse/Classic/M5039-300x300.jpg",
    type: "Classic",
    description:
      "Giữ nguyên thiết kế của dòng Converse Classic cổ điển, kết hợp cùng tone màu full đen thời thượng và chất liệu vải Canvas mỏng nhẹ khiến đôi chân bạn luôn dễ chịu trong từng  bước đi. Sở hữu sản phẩm này bạn hoàn toàn có thể yên tâm về chất lượng cũng như khả năng mix-macth với nhiều phong cách từ dịu dàng, nhẹ nhàng đến chất chơi, bụi bặm.",
    price: 1450000,
    saleprice: 0,
  },
  {
    id: 1,
    title: "CONVERSE CHUCK TAYLOR ALL STAR CLASSIC",
    thumbnail:
      "https://drake.vn/image/cache/catalog/Converse/GIA%CC%80Y%202/M9622C/M9622C_1-300x300.jpg",
    type: "Classic",
    description:
      "Converse Classic là dòng giày bán chạy nhất của Converse bởi tính chất cổ điển rất được ưa chuộng. Chất liệu vải canvas mềm mại, phần đế cao su với đường viền màu đặc trưng kết hợp với màu sắc đơn giản, năng động luôn kết hợp được nhiều ý tưởng thời trang, tạo ra nhiều phong cách khác nhau.",
    price: 1550000,
    saleprice: 0,
  },
  {
    id: 2,
    title: "CONVERSE CHUCK TAYLOR ALL STAR CLASSIC",
    thumbnail:
      "https://drake.vn/image/cache/catalog/Converse/GIA%CC%80Y%202/M9696C/M9696C_1-300x300.jpg",
    type: "Classic",
    description:
      "Converse Classic rực rỡ với tone đỏ thời thượng, chắc chắn đây sẽ là lựa chọn cho những ai yêu thích sự nổi bật. Thiết kế đơn giản, tươi trẻ giúp những lựa chọn mix&match của bạn trở nên độc đáo và khác biệt hơn.",
    price: 1450000,
    saleprice: 0,
  },
  {
    id: 3,
    title: "CONVERSE CHUCK TAYLOR ALL STAR CLASSIC",
    thumbnail:
      "https://drake.vn/image/cache/catalog/Converse/GIA%CC%80Y%202/M9621C/M9621C_1-300x300.jpg",
    type: "Classic",
    description:
      "Converse Classic cổ cao cá tính với tone màu đỏ rực rỡ, nổi bật. Sở hữu item này bạn hoàn toàn có thể chiếm được spotlight ở mọi lúc, mọi nơi. Đặc biệt khi kết hợp với những outfit quen thuộc vẫn tạo được điểm nhấn cho phong cách của bạn.",
    price: 1550000,
    saleprice: 0,
  },
  {
    id: 4,
    title: "CONVERSE CHUCK TAYLOR ALL STAR CLASSIC",
    thumbnail:
      "https://drake.vn/image/cache/catalog/Converse/Classic/Hi%CC%80nh%20chu%CC%89/121185-DRAKE-300x300.jpg",
    type: "Classic",
    description:
      "Converse Chuck Taylor Classic với thiết kế kinh điển phù hợp với mọi độ tuổi, giới tính, được ưa chuộng bởi sự đơn giản, thời trang, đặc biệt không kén người mang. Với gam màu kem lạ mắt tạo sự mới lạ cho tổng thể, thêm vào đó là chất liệu canvas thoáng mát cùng bộ đế cao su bền chắc tạo độ bám. Item “huyền thoại” này với sự đột phá về phong cách thời trang hứa hẹn sẽ mang lại cho bạn những outfit cực chất.",
    price: 1550000,
    saleprice: 0,
  },
  {
    id: 5,
    title: "CONVERSE CHUCK TAYLOR ALL STAR CLASSIC",
    thumbnail:
      "https://drake.vn/image/cache/catalog/Converse/Classic/Hi%CC%80nh%20chu%CC%89/135253-DRA%CC%A3E-300x300.jpg",
    type: "Classic",
    description:
      "Vẫn là thiết kế cổ điển của dòng Converse Classic cổ thấp, nay được làm mới hơn với chất liệu da mềm nhẹ cực kỳ cá tính, mạnh mẽ. Đây được xem là item được nhiều bạn trẻ yêu thích bởi độ chất chơi, bụi bặm, đặc biệt là kết hợp được nhiều style outfit khác nhau.",
    price: 1900000,
    saleprice: 900000,
  },
  {
    id: 6,
    title: "CONVERSE CHUCK TAYLOR ALL STAR CLASSIC",
    thumbnail:
      "https://drake.vn/image/cache/catalog/Converse/GIA%CC%80Y%202/M7650C/M7650C_1-300x300.jpg",
    type: "Classic",
    description:
      "Converse Chuck Taylor Classic với thiết kế kinh điển phù hợp với mọi độ tuổi, giới tính được ưa chuộng bởi sự đơn giản, thời trang, đặc biệt không kén người mang. Sở hữu phối màu basic đặc trưng, thêm vào đó là chất liệu canvas thoáng mát cùng bộ đế cao su bền chắc tạo độ bám. Item “huyền thoại” này với sự đột phá về phong cách thời trang hứa hẹn sẽ mang lại cho bạn những outfit cực chất.",
    price: 1550000,
    saleprice: 0,
  },
  {
    id: 7,
    title: "CONVERSE CHUCK TAYLOR ALL STAR CLASSIC",
    thumbnail:
      "https://drake.vn/image/cache/catalog/Converse/Classic/Hi%CC%80nh%20chu%CC%89/121184-DRAKE-300x300.jpg",
    type: "Classic",
    description:
      "Được xem là huyền thoại của dòng Converse Classic, phiên bản màu trắng cổ cao được nhiều bạn trẻ quan tâm và lựa chọn bởi chất liệu mềm nhẹ cùng kiểu dáng cực phong cách. Đây chính là sản phẩm làm bạn phải hài lòng về độ mix&match cực chuẩn, đặc biệt là khả năng làm bật lên cá tính dù bạn ở đâu, làm gì.",
    price: 1550000,
    saleprice: 950000,
  },
  {
    id: 8,
    title: "CONVERSE CHUCK TAYLOR ALL STAR CLASSIC",
    thumbnail:
      "https://drake.vn/image/cache/catalog/Converse/Classic/Hi%CC%80nh%20chu%CC%89/127440-DRAKE-300x300.jpg",
    type: "Classic",
    description:
      "Converse Classic là dòng giày bán chạy nhất của Converse bởi tính chất cổ điển rất được ưa chuộng. Chất liệu vải canvas mềm mại, phần đế cao su với đường viền màu đặc trưng kết hợp với màu sắc đơn giản, năng động luôn kết hợp được nhiều ý tưởng thời trang, tạo ra nhiều phong cách khác nhau.",
    price: 1550000,
    saleprice: 775000,
  },
  {
    id: 9,
    title: "CONVERSE CHUCK TAYLOR ALL STAR CLASSIC",
    thumbnail:
      "https://drake.vn/image/cache/catalog/Converse/Classic/Hi%CC%80nh%20chu%CC%89/127441-DRAKE-300x300.jpg",
    type: "Classic",
    description:
      "Converse Classic cổ cao cá tính với tone màu đỏ rực rỡ, nổi bật. Sở hữu item này bạn hoàn toàn có thể chiếm được spotlight ở mọi lúc, mọi nơi. Đặc biệt khi kết hợp với những outfit quen thuộc vẫn tạo được điểm nhấn cho phong cách của bạn.",
    price: 1550000,
    saleprice: 775000,
  },
  {
    id: 10,
    title: "CONVERSE CHUCK 70 NAUTICAL TRI BLOCKED",
    thumbnail:
      "https://drake.vn/image/cache/catalog/Converse/GIA%CC%80Y%202/A04968C/A04968C_1-300x300.jpg",
    type: "Chuck 1970",
    description:
      "Hi Summer - Khám phá Converse Chuck 70 Nautical Tri Blocked với phong cách thiết kế hàng hải gây ấn tượng với những sắc màu tươi mát, nhã nhặn và phóng khoáng. Phối màu ở BST đại diện cho màu sắc ven biển, tàu thuyền, hàng hải và của đại dương sâu thẳm. BST hướng đến sự năng động đúng với tinh thần “Hi Summer cùng nhiều ưu điểm về chất lượng và độ bền cao, hứa hẹn mang đến cho bạn một mùa hè thật rực rỡ và hết mình với những chuyến đi trải nghiệm của tuổi trẻ. ",
    price: 2000000,
    saleprice: 200000,
  },
  {
    id: 11,
    title: "CONVERSE CHUCK 70 NAUTICAL TRI BLOCKED",
    thumbnail:
      "https://drake.vn/image/cache/catalog/Converse/GIA%CC%80Y%202/A04969C/A04969C_1-300x300.jpg",
    type: "Chuck 1970",
    description:
      "Hi Summer - Khám phá Converse Chuck 70 Nautical Tri Blocked với phong cách thiết kế hàng hải gây ấn tượng với những sắc màu tươi mát, nhã nhặn và phóng khoáng. Navy - Aqua Mist - Egret đại diện cho màu sắc ven biển, tàu thuyền, hàng hải và của đại dương sâu thẳm. BST hướng đến sự năng động đúng với tinh thần “Hi Summer cùng nhiều ưu điểm về chất lượng và độ bền cao, hứa hẹn mang đến cho bạn một mùa hè thật rực rỡ và hết mình với những chuyến đi trải nghiệm của tuổi trẻ. ",
    price: 2000000,
    saleprice: 200000,
  },
  {
    id: 12,
    title: "CONVERSE CHUCK TAYLOR 1970S HI",
    thumbnail:
      "https://drake.vn/image/cache/catalog/Converse/GIA%CC%80Y%202/A02755C/A02755C_1-300x300.jpg",
    type: "Chuck 1970",
    description:
      "Giữ nguyên form dáng cổ điển của dòng Chuck Taylor 70s quen thuộc, thiết kế Converse Chuck Taylor 1970S Hi đã mang tới một phiên bản ấn tượng hơn cùng phối màu Squirrel Friend/Egret/Black. Kết hợp cùng đệm lót OrthoLite êm ái và chất liệu Textile hứa hẹn sẽ giúp người dùng thoải mái trong suốt thời gian sử dụng. Một thiết kế trẻ trung, năng động cùng cảm giác kết nối về gu thời trang nổi bật mà bạn không thể bỏ lỡ trong năm nay.",
    price: 1900000,
    saleprice: 190000,
  },
  {
    id: 13,
    title: "CONVERSE CHUCK 70 SEASONAL COLOR",
    thumbnail:
      "https://drake.vn/image/cache/catalog/Converse/GIA%CC%80Y%202/A01448C/A01448C_PL12-300x300.jpg",
    type: "Chuck 1970",
    description:
      "Converse Chuck 70 Seasonal Color là “đứa con lai” giữa hai dòng giày đình đám Chuck 70S và Seasonal Color của nhà Converse. Đôi giày là sự kết hợp tinh túy giữa vẻ ngoài cổ điển của Chuck 70S cùng phối màu Dark Beetroot/Egret/Black thời thượng của Seasonal Color. Đặc biệt, màu đỏ rượu vang chủ đạo mang đến vẻ đẹp ấm áp, sang trọng và quyến rũ, rất phù hợp cho outfit mùa đông sắp đến.",
    price: 1900000,
    saleprice: 190000,
  },
  {
    id: 14,
    title: "CONVERSE CHUCK TAYLOR ALL STAR 1970S",
    thumbnail:
      "https://drake.vn/image/cache/catalog/Converse/GIA%CC%80Y%202/172591C/172591C_1-300x300.jpg",
    type: "Chuck 1970",
    description:
      "Quay trở lại với thiết kế mule linh hoạt, thoải mái, BST Converse Chuck 70 Mule Recycled Canvas ra mắt với phần gót thấp đặc biệt. Đồng thời sự thoải mái, tiện nghi còn thể hiện qua phần upper textile tái chế với tinh thần giảm thiểu ô nhiễm môi trường. Trình làng với 2 phối màu trắng đen kinh điển, đôi giày còn kế thừa các đặc điểm vốn có của dòng 70s, tuy nhiên, tiêu điểm chính vẫn là đường may cắt xẻ uốn lượn, chắp vá trên thân giày. ",
    price: 2000000,
    saleprice: 200000,
  },
  {
    id: 15,
    title: "CONVERSE CHUCK TAYLOR ALL STAR 70 PLUS",
    thumbnail:
      "https://drake.vn/image/cache/catalog/Converse/GIA%CC%80Y%202/A00915C/A00915C_P1-300x300.jpg",
    type: "Chuck 1970",
    description:
      'Lấy cảm hứng từ dòng Chuck 70s, Chuck 70s Plus là một thiết kế "lệch pha" với sự kết hợp của hai loại vải 12oz và 16oz tái chế. Về tổng thể, đây là một kết cấu mới dựa trên sự tách rời - chắp vá - tái tạo đầy ấn tượng phá vỡ mọi quy tắc nhưng vẫn giữ được nét cổ điển của dòng giày kinh điển này.',
    price: 2500000,
    saleprice: 250000,
  },
  {
    id: 16,
    title: "CONVERSE CHUCK TAYLOR ALL STAR 1970S MULE RECYCLED CANVAS",
    thumbnail:
      "https://drake.vn/image/cache/catalog/Converse/GIA%CC%80Y%202/172592C/172592C_P3-300x300.jpg",
    type: "Chuck 1970",
    description:
      "Quay trở lại với thiết kế mule linh hoạt, thoải mái, BST Converse Chuck 70 Mule Recycled Canvas ra mắt với phần gót thấp đặc biệt. Đồng thời sự thoải mái, tiện nghi còn thể hiện qua phần upper textile tái chế với tinh thần giảm thiểu ô nhiễm môi trường. Trình làng với 2 phối màu trắng đen kinh điển, đôi giày còn kế thừa các đặc điểm vốn có của dòng 70s, tuy nhiên, tiêu điểm chính vẫn là đường may cắt xẻ uốn lượn, chắp vá trên thân giày. ",
    price: 2000000,
    saleprice: 200000,
  },
  {
    id: 17,
    title: "CONVERSE CHUCK TAYLOR ALL STAR 1970S MY STORY",
    thumbnail:
      "https://drake.vn/image/cache/catalog/Converse/GIA%CC%80Y%202/170282C/170282C%20-%20drake%20-%201-300x300.jpg",
    type: "Chuck 1970",
    description:
      "Converse My Story gây ấn tượng với các thiết kế độc đáo cùng họa tiết “My Story” graphics được in liền mạch đầy ấn tượng. Trên nền giày Canvas, các con chữ như nhảy múa, nối đuôi nhau một cách bất tận, mang đến phong cách mới lạ, thú vị cho người mang. Đặc biệt với phiên bản Chuck 70 cổ cao màu vàng, dòng chữ My Story như được highlight mang đến sắc thái nhấn mạnh càng làm bạn nổi bật hơn giữa đám đông.",
    price: 2000000,
    saleprice: 600000,
  },
  {
    id: 18,
    title: "CONVERSE CHUCK TAYLOR ALL STAR 1970S VALENTINE'S DAY",
    thumbnail:
      "https://drake.vn/image/cache/catalog/Converse/GIA%CC%80Y%202/171117C/171117C-300x300.jpg",
    type: "Chuck 1970",
    description:
      "Trở lại vào một dịp rất đặc biệt với phiên bản Chuck 70s trong BST Converse Valentine’s Day, các nhà thiết kế đã truyền đi thông điệp yêu thương qua lời nhắn “Made With Love” được thêu nổi bật trên thân giày. Bên cạnh đó còn điểm xuyết thêm đường thêu những trái tim nối liền tạo cảm giác [Heart-linked-with-Heart] đầy ý nghĩa, hứa hẹn sẽ tạo nên một mùa Valentine tràn ngập ngọt ngào cho đôi lứa.",
    price: 2000000,
    saleprice: 600000,
  },
  {
    id: 19,
    title: "CONVERSE CHUCK TAYLOR ALL STAR 1970S LOVE FEARLESSLY",
    thumbnail:
      "https://drake.vn/image/cache/catalog/Converse/GIA%CC%80Y%202/567153C/567153C-300x300.jpg",
    type: "Chuck 1970",
    description:
      "Kiểu dáng Converse 1970s Love Fearlessly có form cứng cáp, họa tiết chữ “LOVE” được sắp xếp linh hoạt hai bên thân giày tạo nên điểm nhấn rất riêng. Trung tâm lưỡi gà với hình trái tim đẹp mắt cộng thêm bộ đôi đường sọc đỏ chạy chạy quanh mũi và đế giày càng đánh bật lên nét cuốn hút cho thiết kế",
    price: 2200000,
    saleprice: 1400000,
  },
  {
    id: 20,
    title: "CONVERSE CHUCK TAYLOR ALL STAR KIDS INTERSTELLAR DINOS LOW TOP",
    thumbnail:
      "https://drake.vn/image/cache/catalog/Converse/Kid/665392C-300x300.jpg",
    type: "Kid",
    description:
      "Hình ảnh của những chú khủng long được biến tấu đầy ngộ nghĩnh, tinh nghịch là một phần tuổi thơ của các bé nhà bạn. Nay Converse lại mượn hình ảnh này để áp dụng vào trong những thiết kế dành cho bé với công nghệ đế lót êm ái, giúp bé có được sự thoải mái hơn khi diện giày trên chân.",
    price: 1200000,
    saleprice: 600000,
  },
  {
    id: 21,
    title: "CONVERSE KIDS' CHUCK TAYLOR ALL STAR",
    thumbnail:
      "https://drake.vn/image/cache/catalog/Converse/Kid/Trang%20ch%E1%BB%A7/326706C-300x300.jpg",
    type: "Kid",
    description:
      "Với chất liệu tốt từ Converse, mẫu mã vừa đơn giản mà không gây hại, kích ứng bàn chân của bé. Các gam màu tươi sáng sẽ làm các bé trở nên sành điệu và ngầu hơn.",
    price: 800000,
    saleprice: 400000,
  },
  {
    id: 22,
    title: "CONVERSE KIDS' CHUCK TAYLOR ALL STAR",
    thumbnail:
      "https://drake.vn/image/cache/catalog/Converse/Kid/Trang%20ch%E1%BB%A7/327470C-300x300.jpg",
    type: "Kid",
    description:
      "Với chất liệu Canvas mềm mại và thiết kế hoàn toàn giống như phiên bản của người lớn. Nay sản phẩm được tối ưu cho các bạn nhỏ bằng 1 zip khóa cùng phía với logo Converse để các bé có thể dễ dàng mang - tháo giày.",
    price: 850000,
    saleprice: 425000,
  },
  {
    id: 23,
    title: "CONVERSE KIDS' CHUCK TAYLOR ALL STAR",
    thumbnail:
      "https://drake.vn/image/cache/catalog/Converse/Kid/Trang%20ch%E1%BB%A7/326708C-DRAKE-300x300.jpg",
    type: "Kid",
    description:
      "Với chất liệu tốt từ Converse, mẫu mã vừa đơn giản, đẹp mà không gây hại, kích ứng bàn chân của bé. Các gam màu tươi sáng sẽ làm các bé trở nên sành điệu và ngầu hơn.",
    price: 800000,
    saleprice: 400000,
  },
  {
    id: 24,
    title: "CONVERSE KIDS' CHUCK TAYLOR ALL STAR",
    thumbnail:
      "https://drake.vn/image/cache/catalog/Converse/Kid/Trang%20ch%E1%BB%A7/327468C-300x300.jpg",
    type: "Kid",
    description:
      "Với chất liệu Canvas mềm mại và thiết kế hoàn toàn giống như phiên bản màu đen Classic High Top của người lớn. Nay sản phẩm được tối ưu cho các bạn nhỏ bằng 1 zip khóa cùng phía với logo Converse để các bé có thể dễ dàng mang - tháo giày.",
    price: 850000,
    saleprice: 425000,
  },
  {
    id: 25,
    title: "CONVERSE KIDS' CHUCK TAYLOR ALL STAR",
    thumbnail:
      "https://drake.vn/image/cache/catalog/Converse/Kid/Trang%20ch%E1%BB%A7/327443C-300x300.jpg",
    type: "Kid",
    description:
      "Với chất liệu tốt từ Converse, mẫu mã vừa đơn giản, đẹp mà không gây hại, kích ứng bàn chân của bé. Các gam màu tươi sáng sẽ làm các bé trở nên sành điệu và ngầu hơn.",
    price: 800000,
    saleprice: 400000,
  },
 
  
  
],
  ACCOUNTS: [
      // Set User Default role ADMIN    
  ],
  ORDERS: []
};

localStorage.setItem('DATABASE', JSON.stringify(DATABASE));

// Get table to use
let PRODUCTS = DATABASE.PRODUCTS;
let ACCOUNTS = DATABASE.ACCOUNTS;
let ORDERS = DATABASE.ORDERS;

// ********************************* Generate DATA ********************************

let generate = document.getElementById('generate');
generate.addEventListener('click', generateData);

function generateData() {
  // read json file
  $.getJSON("js/Product.js", function (data) {
      DATABASE.PRODUCTS = data.PRODUCTS;
      localStorage.setItem('DATABASE', JSON.stringify(DATABASE));
      location.reload();
  });
}


// ========================================= PRODUCT MANAGER ===========================================

// Declare form input
let id = document.getElementById('id');
let thumbnail = document.getElementById('thumbnail');
let type = document.getElementById('category');
let description = document.getElementById('description');
let price = document.getElementById('price');
let saleprice = document.getElementById('sale-price');
let title = document.getElementById('name');

// Element Define
let tbody = document.getElementById('tbody');

window.onload = loadProductManager(PRODUCTS);

function loadProductManager(PRODUCTS) {
  PRODUCTS.forEach(product => {
      renderProduct(product);
  });
}

//  Default Page
function renderProduct(product) {
  let contents = `
      <tr>
          <th scope="row" id="${product.id}">${product.id}</th>
          <td>
              <img width="100" height="100" src="${product.thumbnail}">
          </td>
          <td>${product.type === "Kid" ? "Kid" : product.type === "Chuck 1970s" ? "Chuck 1970s" : "Classic"}</td>
          <td>${product.title}</td>
          <td>${product.description}</td>
          <td>${formatter.format(product.price)}</td>
          <td>${product.saleprice}</td>
          <td class="text-center">
              <i class="fas fa-trash-alt text-danger" data-code="${product.id}" id="delete"></i>
              <i class="fas fa-edit text-info" data-code="${product.id}" id="edit"></i>
              <i class="fas fa-info-circle text-success" data-code="${product.id}" id="detail" data-toggle="modal" data-target="#productModal"></i>
          </td>
  </tr>`;

  tbody.innerHTML += contents;
}

// Add New Product
let add_new = document.getElementById('add_new');
add_new.addEventListener('click', actAddProduct);
function checkPrice(str) {
  var regex = /\d/;
  if (regex.test(str)) {
    return true; 
  } else {
    return false; 
  }
}
price.addEventListener('blur', (e) => {
    if (!checkPrice(e.target.value)){
      notificationAction("vui lòng nhập số" , "#e61212")
      price.value = ''
    } 
})

saleprice.addEventListener('blur', (e) => {
    if (!checkPrice(e.target.value)){
      notificationAction("vui lòng nhập số" , "#e61212")
      saleprice.value = ''
    }
})

function actAddProduct() {
      
  
  let product = {
      id: id.value,
      title: title.value,
      thumbnail: thumbnail.value,
      type: type.selectedIndex == 0 ? "Kid" : type.selectedIndex == 1 ? "Chuck 1970s" : "Classic", 
      description: description.value,
      price: price.value ,
      saleprice: saleprice.value
  }
  if ((validateForm(product) === true) && (checkExistProductCode(product.id) === false)) {
      PRODUCTS.push(product);
      localStorage.setItem('DATABASE', JSON.stringify(DATABASE));
      renderProduct(product);
      notificationAction("Thêm thành công.", "#12e64b");

      // Clear Form Input
      let form_id = document.getElementById('form-id');
      form_id.querySelectorAll('input').forEach(function (input) {
          input.value = '';
          input.style.border = "1px solid #ced4da";
      });
  }
  add_new.disabled = false;
}

// Validate Form
function validateForm(product) {
  if (product.id === "" || product.title === ""
      || product.description === "" || product.price === ""
      || product.saleprice === "" || product.type === "" || product.thumbnail === "") {
      notificationAction("Vui Lòng Điền Đầy Đủ Thông Tin.", "#e61212");

      // Error Input
      let form_id = document.getElementById('form-id');
      let form_input = form_id.querySelectorAll('input');

      form_input.forEach(function (input) {
          if (input.value === "") {
              input.style.border = "1px solid red";
          } else {
              input.style.border = "1px solid #ced4da";
          }
      })

      add_new.disabled = true;
      return false;
  }
  return true;
}

// Check exist ProductCode
function checkExistProductCode(code) {
  let check = 0;
  PRODUCTS.forEach(function (product) {
      if (product.id === code) {
          notificationAction("Mã Sản Phẩm Đã Tồn Tại.", "#e61212");
          add_new.disabled = true;
          check++;
      }
  })

  
  if (check > 0) {
      return true;
  } else {
      return false;
  }

}

// Display notification
let notifi = document.getElementById('notifi');
let notifi_content = document.getElementById('notifi-content');

function notificationAction(content, color) {
  notifi_content.innerHTML = content;
  notifi.style.display = "block";
  notifi.style.width = "270px";
  notifi.style.backgroundColor = color;

  setTimeout(
      function () {
          notifi.style.display = "none";
      }, 3000);
}

// Delete And Update Product
tbody.addEventListener('click', actProduct);

function actProduct(event) {
  let ev = event.target;
  let data_code = ev.getAttribute('data-code');
 
  if (!ev) {
      return;
  }

  // Edit
  if (ev.matches('#edit')) {
      let update = document.getElementById('update');
      let productFilter = PRODUCTS.filter(product => product.id == data_code);
      id.value = productFilter[0].id;
      type.value = productFilter[0].type == "Kid" ? 0 : productFilter[0].type == "Chuck 1970s" ? 1 : 2;
      title.value = productFilter[0].title;
      thumbnail.value = productFilter[0].thumbnail;
      price.value = productFilter[0].price;
      saleprice.value = productFilter[0].saleprice;
      description.value = productFilter[0].description;
      add_new.style.display = "none";
      update.style.display = "inline-block";
      id.disabled = true;
      document.documentElement.scrollTop = 0;
  }

  
  // Detail
  if (ev.matches('#detail')) {
      let product_detail = document.getElementById('product-detail');
      let productDetail = PRODUCTS.filter(product => product.id == data_code);
      let modals = `
              <h6>${productDetail[0].title}</h6>
              <p>Code: ${productDetail[0].id} </p>
              <img width="300" height="300" src="${productDetail[0].thumbnail}" alt="">
              <div class="mt-2">Giá Tiền: ${formatter.format(productDetail[0].price)}</div>
              <div>Mô tả: ${productDetail[0].description}</div>
      `;
      product_detail.innerHTML = modals;
  }
  // Delete
  if (ev.matches('#delete')) {
      confirm('bạn có muốn xóa sản phẩm này không')
      PRODUCTS = PRODUCTS.filter(product => product.id !== data_code);
      DATABASE.PRODUCTS = PRODUCTS;
      localStorage.setItem('DATABASE', JSON.stringify(DATABASE));
      ev.closest('tr').remove();
      notificationAction("Xóa Sản Phẩm Thành Công.", "#38e867");
  }
}

// Edit
let update = document.getElementById('update');
update.addEventListener('click', actUpdate);

function actUpdate() {
 
  PRODUCTS.forEach(function (product) {
      if (product.id == id.value) {
          let images = thumbnail.value;
          product.type = type.value == 0 ? "Kid" : type.value == 1 ? "Chuck 1970s" : "Classic";
          product.title = title.value;
          product.decription = description.value;
          product.price = price.value;
          product.saleprice = saleprice.value;
          product.id = id.value;
          if (images !== '') {
              product.image = images.slice(12, images.length);
          }
          localStorage.setItem('DATABASE', JSON.stringify(DATABASE));
          if(!product.price || !product.saleprice) {
            alert('Vui lòng nhập giá và giá khuyến mãi!')
          } else {
            location.reload();
          notificationAction("Cập Nhật Sản Phẩm Thành Công.", "#1216e6");
          const element = document.getElementById(`${product.id}`);
          element.scrollIntoView();
          }
          
      }
  })
}

// Search
let search = document.getElementById("search");
search.addEventListener('input', actSearch);

function actSearch() {
  let searchInput = search.value;
  let productCompare = PRODUCTS.filter(product => searchCompare(searchInput, product.title));
  tbody.innerHTML = '';
  productCompare.forEach(product => {
      renderProduct(product);
  });
}

// Search Compare
function searchCompare(searchInput, productName) {
  let searchInputLower = searchInput.toLowerCase();
  let productNameLower = productName.toLowerCase();
  return productNameLower.includes(searchInputLower);
}


// ========================================= ACCOUNT MANAGER ===========================================

// Show Tab
let s_product = document.getElementById('s_product');
let s_user = document.getElementById('s_user');
let s_order = document.getElementById('s_order');

let product_manager = document.getElementById('product-manager');
let user_manager = document.getElementById('user-manager');
let order_manager = document.getElementById('order-manager');

s_product.addEventListener('click', showProductManager);
s_user.addEventListener('click', showUserManager);
s_order.addEventListener('click', showOrderManager);

function showProductManager() {
  product_manager.style.display = 'block';
  user_manager.style.display = 'none';
  order_manager.style.display = 'none';
}

function showUserManager() {
  product_manager.style.display = 'none';
  user_manager.style.display = 'block';
  order_manager.style.display = 'none';
  renderAccount();
}

function showOrderManager() {
  product_manager.style.display = 'none';
  user_manager.style.display = 'none';
  order_manager.style.display = 'block';
  renderOrder(ORDERS);
}

// ========================================= OPEN TAB MANAGER ===========================================

let user_tbody = document.getElementById('user_tbody');

function renderAccount() {
  let contents = '';
  ACCOUNTS.forEach(account => {
      contents += `
          <tr>
              <th scope="row">${account.ID}</th>
              <td>${account.username}</td>
              <td>${account.phoneNumber}</td>
              <td>${account.address}</td>
              <td>${account.email}</td>
              <td>${account.role}</td>
          </tr>`;
  })
  user_tbody.innerHTML = contents;
}

// ========================================= ORDER MANAGER ===========================================

let order_tbody = document.getElementById('order_tbody');

function disableSelectedOption() {
  let selectOrder = document.querySelectorAll('#order_tbody .select-order')
  for(let i = 0 ; i < selectOrder.length ; i++) {
    selectOrder[i].addEventListener('blur' , (e) => { 
        selectOrder[i].setAttribute("disabled", "disabled");
    })
  }
}

const orderTime = document.querySelector(".order-time")



var ngayHienTai = new Date();
var ngay = ngayHienTai.getDate();
var thang = ngayHienTai.getMonth() + 1; 
var nam = ngayHienTai.getFullYear();
var yesterday = new Date(Date.now() - 86400000); // that is: 24 * 60 * 60 * 1000
// orderTime.addEventListener("blur" , (e) => {
//   let valueDate = [];
//   if (e.target.options.selectedIndex == 0) {
//       valueDate = `${ngay}/${thang}/${nam}`     
//   } else if (e.target.options.selectedIndex == 1) {
//     valueDate = `${yesterday.getDate()}/${yesterday.getMonth() + 1}/${yesterday.getFullYear()}`
//   } else if (e.target.options.selectedIndex == 2){
//     let i = 1
//     let week = new Date(Date.now());
//     while(i < 8 ) {
//       week = new Date(week - 86400000)
//       i++;
//       valueDate.push(`${week.getDate()}/${week.getMonth() + 1}/${week.getFullYear()}`) 
//     }
//   } 
//   let ordersdate = [];
//   ORDERS.filter(order => {
//     if(order.createDate == valueDate)
//     {
//       ordersdate.push(order)  ;
//     } else {
//       for(let i = 0 ; i < valueDate.length ; i++){
//         if(order.createDate == valueDate[i]){
//           ordersdate.push(order)
//           break
//         }
//       }
//     }
//   })
//   if(ordersdate != ''){
//     renderOrder(ordersdate)
//   }
//   // else{
//   //   renderOrder(ORDERS)
//   // }

// })
function renderOrder(e) {
  let contents = '';
  e.filter(order => {
      let options = '';
      if (order.status === "Đặt Hàng") {
          options = `
              <option value="Đặt hàng" selected>Đặt hàng</option>
              <option value="Giao hàng thành công" >Giao hàng thành công</option>`
              contents += `
          <tr>
              <th scope="row">${order.orderId}</th>
              <th scope="row">${order.userID}</th>
              <td>${order.createDate}</td>
              <td>${order.payMethod}</td>
              <td> 
                  <select class="form-control select-order" onchange="disableSelectedOption()" id="orderStatus" data-id="${order.orderId}")}
                  >
                      ${options}
                  </select>
              </td>
              <td>
                  <i class="fas fa-calendar-week text-info" data-code="${order.orderId}" id="order-detail" data-toggle="modal" data-target="#orderModal"></i>
              </td>
          </tr>`;
      } else {
          options = `
              <option value="Đặt Hàng">Đặt Hàng</option>
              <option value="Giao Hàng Thành Công" selected>Giao Hàng Thành Công</option>`
              contents += `
          <tr>
              <th scope="row">${order.orderId}</th>
              <th scope="row">${order.userID}</th>
              <td>${order.createDate}</td>
              <td>${order.payMethod}</td>
              <td> 
                  <select class="form-control select-order" onchange="disableSelectedOption()" id="orderStatus" data-id="${order.orderId}")}
                  disabled >
                      ${options}
                  </select>
              </td>
              <td>
                  <i class="fas fa-calendar-week text-info" data-code="${order.orderId}" id="order-detail" data-toggle="modal" data-target="#orderModal"></i>
              </td>
          </tr>`;
      }
      
     
      
  })
  order_tbody.innerHTML = contents;

  actOrderDetail();
  actUpdateOrderStatus();
}

function actOrderDetail() {
  let order_detail = document.querySelectorAll('#order-detail');
  // let detail_content = document.getElementById('detail-content');

  order_detail.forEach(orderbtn => {
      orderbtn.addEventListener('click', renderOrderDetail);
  })

  function renderOrderDetail() {
      let data_code = this.getAttribute('data-code');
      ORDERS.forEach(o => {
          if (o.orderId == data_code) {
              renderCustomerOrderInfor(o);
          }
      })
  }
}

function renderCustomerOrderInfor(order) {
  let customer_info = document.getElementById('customer-info');
  let customer = order.customerInfo;

  customer_info.innerHTML = `
      <div class="col-2">
          <p>Tên Khách Hàng: </p>
          <p>Số Điện Thoại: </p>
          <p>Thư Điện Tử: </p>
          <p>Địa Chỉ Giao Hàng:</p>
          <p>Ghi Chú: </p>
      </div>
      <div class="col-7">
          <p>${customer.customerName}</p>
          <p>${customer.customerNumber}</p>
          <p>${customer.customerEmail}</p>
          <p>${customer.customerAddress}</p>
          <p>${customer.customerNote}</p>
      </div>
      <div class="col-3">
          <div class="bg-light p-2">
              <p>Mã Hóa Đơn: #${order.orderId}</p>
              <p>Ngày Tạo: ${order.createDate}</p>
          </div>
      </div>
      <div class="col-6">
          <p>Phương Thức Thanh Toán</p>
      </div>
      <div class="col-6">
          <p>${order.payMethod}</p>
      </div>
  `;
  renderCustomerProductInfo(order);
}

function renderCustomerProductInfo(order) {
  let customer_product = document.getElementById('customer-product');
  let total_order = document.getElementById('total-order');
  let contents = ``;
  let products = order.products;
  let total = 0;
  products.forEach(p => {
      contents += `
      <tr>
          <td>
              <img width="100" height="100" src="${p.image}" alt="">
          </td>
          <td>
            ${p.productName}  
          </td>
          <td>
            ${formatter.format(p.price)}
          </td>
          <td class="text-center">
            ${p.quantity}  
          </td>
          <td>
            ${formatter.format(p.quantity * p.price)} 
          </td>
      </tr>`;

      total += p.quantity * p.price;
  })

  customer_product.innerHTML = contents;
  total_order.innerText = `${formatter.format(total)}`;
}

function actUpdateOrderStatus() {
  let orderStatuss = document.querySelectorAll('#orderStatus');

  orderStatuss.forEach(orderStatus => {
      orderStatus.addEventListener('change', function () {
          ORDERS.forEach(order => {
              if (order.orderId === orderStatus.getAttribute('data-id')) {
                  order.status = orderStatus.value;
                  localStorage.setItem('DATABASE', JSON.stringify(DATABASE));
              }
          })
      });
  })

}

// Update new commit


let innerUpdate = document.querySelector(".innerUpdate");

