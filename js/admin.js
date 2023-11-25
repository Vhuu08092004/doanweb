// ===================== COMMON DEFINE ==================== 
// Formatter VND
const formatter = new Intl.NumberFormat('it-IT', {
<<<<<<< HEAD
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
  PRODUCTS: [],
  ACCOUNTS: [
      // Set User Default role ADMIN    
  ],
  ORDERS: []
=======
    style: 'currency',
    currency: 'VND',
    minimumFractionDigits: 0
})

// Auto Generate ID
function generateUUIDV4() {
    return 'xxx-xxy'.replace(/[xy]/g, function (c) {
        let r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
}

// ==================== DATABASE ==========================
let DATABASE = localStorage.getItem('DATABASE') ? JSON.parse(localStorage.getItem('DATABASE')) : {
    PRODUCTS: [],
    ACCOUNTS: [
        // Set User Default role ADMIN
        {
            ID: generateUUIDV4(),
            username: "Lê Minh Vương",
            phoneNumber: "0336907472",
            address: "Phường 4, quận 6, TP.HCM",
            email: "admin@gmail.com",
            password: "123",
            role: "Admin"
        }
    ],
    ORDERS: []
>>>>>>> 3882c6319ff5c266f5f99655347751dd2ea0f19e
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
<<<<<<< HEAD
  // read json file
  $.getJSON("js/Product.js", function (data) {
      DATABASE.PRODUCTS = data.PRODUCTS;
      localStorage.setItem('DATABASE', JSON.stringify(DATABASE));
      location.reload();
  });
=======
    // read json file
    $.getJSON("js/Product.js", function (data) {
        DATABASE.PRODUCTS = data.PRODUCTS;
        localStorage.setItem('DATABASE', JSON.stringify(DATABASE));
        location.reload();
    });
>>>>>>> 3882c6319ff5c266f5f99655347751dd2ea0f19e
}


// ========================================= PRODUCT MANAGER ===========================================

// Declare form input
let id = document.getElementById('id');
let thumbnail = document.getElementById('thumbnail');
<<<<<<< HEAD
let type = document.getElementById('category');
let description = document.getElementById('description');
let price = document.getElementById('price');
let saleprice = document.getElementById('sale-price');
let title = document.getElementById('name');
=======
let type = document.getElementById('type');
let description = document.getElementById('description');
let price = document.getElementById('price');
let saleprice = document.getElementById('saleprice');
>>>>>>> 3882c6319ff5c266f5f99655347751dd2ea0f19e

// Element Define
let tbody = document.getElementById('tbody');

window.onload = loadProductManager(PRODUCTS);

function loadProductManager(PRODUCTS) {
<<<<<<< HEAD
  PRODUCTS.forEach(product => {
      renderProduct(product);
  });
=======
    PRODUCTS.forEach(product => {
        renderProduct(product);
    });
>>>>>>> 3882c6319ff5c266f5f99655347751dd2ea0f19e
}

//  Default Page
function renderProduct(product) {
<<<<<<< HEAD
  let contents = `
      <tr>
          <th scope="row">${product.id}</th>
          <td>
              <img width="100" height="100" src="${product.thumbnail}">
          </td>
          <td>${product.type === 0 ? "Kid" : product.type === 1 ? "Chuck 1970s" : "Classic"}</td>
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
=======
    let contents = `
        <tr>
            <th scope="row">${product.id}</th>
            <td>
                <img width="120" height="80" src="images/${product.thumbnail}">
            </td>
            <td>${product.productName}</td>
            <td>${product.idcategory === "0" ? "Giày Nam" : product.idcategory === "1" ? "Giày Nữ" : "Phụ Kiện"}</td>
            <td>${formatter.format(product.price)}</td>
            <td>${product.material}</td>
            <td>${product.amount}</td>
            <td>${product.entry}</td>
            <td class="text-center">
                <i class="fas fa-trash-alt text-danger" data-code="${product.code}" id="delete"></i>
                <i class="fas fa-edit text-info" data-code="${product.code}" id="edit"></i>
                <i class="fas fa-info-circle text-success" data-code="${product.code}" id="detail" data-toggle="modal" data-target="#productModal"></i>
            </td>
    </tr>`;

    tbody.innerHTML += contents;
>>>>>>> 3882c6319ff5c266f5f99655347751dd2ea0f19e
}

// Add New Product
let add_new = document.getElementById('add_new');
add_new.addEventListener('click', actAddProduct);

function actAddProduct() {
<<<<<<< HEAD
  let product = {
      id: id.value,
      title: title.value,
      thumbnail: thumbnail.value,
      type: type.selectedIndex,
      description: description.value,
      price: price.value,
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
=======
    let product = {
        id: id.value,
        title: title.value,
        thumbnail: thumbnail.value,
        type: type.value,
        decription: description.value,
        price: price.value,
        saleprice: saleprice.value
    }

    if ((validateForm(product) === true) && (checkExistProductCode(product.code) === false)) {
        PRODUCTS.push(product);
        localStorage.setItem('DATABASE', JSON.stringify(DATABASE));
        renderProduct(product);
        notificationAction("Completed Add.", "#12e64b");

        // Clear Form Input
        let form_id = document.getElementById('form-id');
        form_id.querySelectorAll('input').forEach(function (input) {
            input.value = '';
            input.style.border = "1px solid #ced4da";
        });
    }
    add_new.disabled = false;
>>>>>>> 3882c6319ff5c266f5f99655347751dd2ea0f19e
}

// Validate Form
function validateForm(product) {
<<<<<<< HEAD
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
=======
    if (product.code === "" || product.productName === ""
        || product.material === "" || product.price === ""
        || product.amount === "" || product.entry === "" || product.image === "") {
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
>>>>>>> 3882c6319ff5c266f5f99655347751dd2ea0f19e
}

// Check exist ProductCode
function checkExistProductCode(code) {
<<<<<<< HEAD
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
=======
    let check = 0;
    PRODUCTS.forEach(function (product) {
        if (product.code === code) {
            notificationAction("Mã Sản Phẩm Đã Tồn Tại.", "#e61212");
            add_new.disabled = true;
            check++;
        }
    })

    // Stupid :))
    if (check > 0) {
        return true;
    } else {
        return false;
    }
>>>>>>> 3882c6319ff5c266f5f99655347751dd2ea0f19e

}

// Display notification
let notifi = document.getElementById('notifi');
let notifi_content = document.getElementById('notifi-content');

function notificationAction(content, color) {
<<<<<<< HEAD
  notifi_content.innerHTML = content;
  notifi.style.display = "block";
  notifi.style.width = "270px";
  notifi.style.backgroundColor = color;

  setTimeout(
      function () {
          notifi.style.display = "none";
      }, 3000);
=======
    notifi_content.innerHTML = content;
    notifi.style.display = "block";
    notifi.style.width = "270px";
    notifi.style.backgroundColor = color;

    setTimeout(
        function () {
            notifi.style.display = "none";
        }, 3000);
>>>>>>> 3882c6319ff5c266f5f99655347751dd2ea0f19e
}

// Delete And Update Product
tbody.addEventListener('click', actProduct);

function actProduct(event) {
<<<<<<< HEAD
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
      type.value = productFilter[0].type;
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
      alert('bạn có muốn xóa sản phẩm này không')
      PRODUCTS = PRODUCTS.filter(product => product.id !== data_code);
      DATABASE.PRODUCTS = PRODUCTS;
      localStorage.setItem('DATABASE', JSON.stringify(DATABASE));
      ev.closest('tr').remove();
      notificationAction("Xóa Sản Phẩm Thành Công.", "#38e867");
  }
=======
    let ev = event.target;
    let data_code = ev.getAttribute('data-code');
    if (!ev) {
        return;
    }

    // Edit
    if (ev.matches('#edit')) {
        let update = document.getElementById('update');
        let productFilter = PRODUCTS.filter(product => product.code === data_code);

        code.value = productFilter[0].code;
        category.value = productFilter[0].idcategory;
        name.value = productFilter[0].productName;
        material.value = productFilter[0].material;
        price.value = productFilter[0].price;
        amount.value = productFilter[0].amount;
        entry.value = productFilter[0].entry;
        // image.value = productdFilter[0].image;

        add_new.style.display = "none";
        update.style.display = "inline-block";
        code.disabled = true;
        document.documentElement.scrollTop = 0;
    }
    // Detail
    if (ev.matches('#detail')) {
        let product_detail = document.getElementById('product-detail');
        let productDetail = PRODUCTS.filter(product => product.code === data_code);
        let modals = `
                <h6>${productDetail[0].productName}</h6>
                <p>Code: ${productDetail[0].code} </p>
                <img width="220" height="180" src="images/${productDetail[0].image}" alt="">
                <div class="mt-2">Giá Tiền: ${formatter.format(productDetail[0].price)}</div>
                <div>Ngày Nhập Kho: ${productDetail[0].entry}</div>
        `;
        product_detail.innerHTML = modals;
    }
    // Delete
    if (ev.matches('#delete')) {
        PRODUCTS = PRODUCTS.filter(product => product.code !== data_code);
        DATABASE.PRODUCTS = PRODUCTS;
        localStorage.setItem('DATABASE', JSON.stringify(DATABASE));
        ev.closest('tr').remove();
        notificationAction("Xóa Sản Phẩm Thành Công.", "#38e867");
    }
>>>>>>> 3882c6319ff5c266f5f99655347751dd2ea0f19e
}

// Edit
let update = document.getElementById('update');
update.addEventListener('click', actUpdate);

function actUpdate() {
<<<<<<< HEAD
  PRODUCTS.forEach(function (product) {
      if (product.id === id.value) {
        // id.value = productFilter[0].id;
        // type.value = productFilter[0].type;
        // title.value = productFilter[0].title;
        // thumbnail.value = productFilter[0].thumbnail;
        // price.value = productFilter[0].price;
        // saleprice.value = productFilter[0].saleprice;
        // description.value = productFilter[0].decription;
          let images = thumbnail.value;
          product.type = type.value;
          product.title = title.value;
          product.decription = description.value;
          product.price = price.value;
          product.saleprice = saleprice.value;
          product.id = id.value;
          if (images !== '') {
              product.image = images.slice(12, images.length);
          }
          localStorage.setItem('DATABASE', JSON.stringify(DATABASE));
          location.reload();
          notificationAction("Cập Nhật Sản Phẩm Thành Công.", "#1216e6");
      }
  })
=======
    PRODUCTS.forEach(function (product) {
        if (product.code === code.value) {

            let images = image.value;
            product.idcategory = category.value;
            product.productName = name.value;
            product.material = material.value;
            product.price = price.value;
            product.amount = amount.value;
            product.entry = entry.value;
            if (images !== '') {
                product.image = images.slice(12, images.length);
            }
            localStorage.setItem('DATABASE', JSON.stringify(DATABASE));
            location.reload();
            notificationAction("Cập Nhật Sản Phẩm Thành Công.", "#1216e6");
        }
    })
>>>>>>> 3882c6319ff5c266f5f99655347751dd2ea0f19e
}

// Search
let search = document.getElementById("search");
search.addEventListener('input', actSearch);

function actSearch() {
<<<<<<< HEAD
  let searchInput = search.value;
  let productCompare = PRODUCTS.filter(product => searchCompare(searchInput, product.title));
  tbody.innerHTML = '';
  productCompare.forEach(product => {
      renderProduct(product);
  });
=======
    let searchInput = search.value;
    let productCompare = PRODUCTS.filter(product => searchCompare(searchInput, product.productName));
    tbody.innerHTML = '';
    productCompare.forEach(product => {
        renderProduct(product);
    });
>>>>>>> 3882c6319ff5c266f5f99655347751dd2ea0f19e
}

// Search Compare
function searchCompare(searchInput, productName) {
<<<<<<< HEAD
  let searchInputLower = searchInput.toLowerCase();
  let productNameLower = productName.toLowerCase();
  return productNameLower.includes(searchInputLower);
=======
    let searchInputLower = searchInput.toLowerCase();
    let productNameLower = productName.toLowerCase();
    return productNameLower.includes(searchInputLower);
>>>>>>> 3882c6319ff5c266f5f99655347751dd2ea0f19e
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
<<<<<<< HEAD
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
  renderOrder();
=======
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
    renderOrder();
>>>>>>> 3882c6319ff5c266f5f99655347751dd2ea0f19e

}

// ========================================= OPEN TAB MANAGER ===========================================

let user_tbody = document.getElementById('user_tbody');

function renderAccount() {
<<<<<<< HEAD
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
=======
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
>>>>>>> 3882c6319ff5c266f5f99655347751dd2ea0f19e
}

// ========================================= ORDER MANAGER ===========================================

let order_tbody = document.getElementById('order_tbody');

function renderOrder() {
<<<<<<< HEAD
  let contents = '';
  ORDERS.forEach(order => {
      let options = '';
      if (order.status === "Đặt Hàng") {
          options = `
              <option value="Đặt hàng" selected>Đặt hàng</option>
              <option value="Giao hàng thành công" >Giao hàng thành công</option>`
      } else {
          options = `
              <option value="Đặt Hàng">Đặt Hàng</option>
              <option value="Giao Hàng Thành Công" selected>Giao Hàng Thành Công</option>`
      }
      contents += `
          <tr>
              <th scope="row">${order.orderId}</th>
              <th scope="row">${order.userID}</th>
              <td>${order.createDate}</td>
              <td>${order.payMethod}</td>
              <td> 
                  <select class="form-control" id="orderStatus" data-id="${order.orderId}">
                      ${options}
                  </select>
              </td>
              <td>
                  <i class="fas fa-calendar-week text-info" data-code="${order.orderId}" id="order-detail" data-toggle="modal" data-target="#orderModal"></i>
              </td>
          </tr>`;
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
=======
    let contents = '';
    ORDERS.forEach(order => {
        let options = '';
        if (order.status === "Đặt Hàng") {
            options = `
                <option value="Đặt hàng" selected>Đặt hàng</option>
                <option value="Giao hàng thành công" >Giao hàng thành công</option>`
        } else {
            options = `
                <option value="Đặt Hàng">Đặt Hàng</option>
                <option value="Giao Hàng Thành Công" selected>Giao Hàng Thành Công</option>`
        }
        contents += `
            <tr>
                <th scope="row">${order.orderId}</th>
                <th scope="row">${order.userID}</th>
                <td>${order.createDate}</td>
                <td>${order.payMethod}</td>
                <td> 
                    <select class="form-control" id="orderStatus" data-id="${order.orderId}">
                        ${options}
                    </select>
                </td>
                <td>
                    <i class="fas fa-calendar-week text-info" data-code="${order.orderId}" id="order-detail" data-toggle="modal" data-target="#orderModal"></i>
                </td>
            </tr>`;
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
                <img width="50" height="25" src="images/${p.image}" alt="">
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
>>>>>>> 3882c6319ff5c266f5f99655347751dd2ea0f19e
