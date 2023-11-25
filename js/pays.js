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
function generateUUIDV4() {
    return 'xxx-xxy'.replace(/[xy]/g, function (c) {
        let r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
}

  let DATABASE = localStorage.getItem('DATABASE') ? JSON.parse(localStorage.getItem('DATABASE')) : {
    PRODUCTS: [],
    ACCOUNTS: [
        // Set User Default role ADMIN    
    ],
    ORDERS: []
  };

let ORDERS = DATABASE.ORDERS
 
const pay = document.querySelector(".pays");
const condition = getCookie('user');
let order = {};

var ngayHienTai = new Date();
var ngay = ngayHienTai.getDate();
var thang = ngayHienTai.getMonth() + 1; 
var nam = ngayHienTai.getFullYear();


let database= JSON.parse(localStorage.getItem('DATABASE')).ACCOUNTS;
                    database.forEach(data => {
                        if(data.email == condition) {
                            order = {
                                        orderId: generateUUIDV4(),
                                        userID: data.ID,  
                                        customerInfo: {
                                            customerName: data.username,
                                            customerNumber:data.phoneNumber,
                                            customerAddress: data.address,
                                            customerEmail: data.email,
                                            customerNote: 'chú thích của khách hàng'
                                        },
                                        payMethod: 'Giao Hàng Tại Nhà',
                                        products: JSON.parse(localStorage.getItem('otherProduct')),
                                        createDate: `${ngay}/${thang}/${nam}`,
                                        status: 'Đặt Hàng'
                             }
                        }
                    })

//     if (validateForm()) {
//         ORDERS.push(order);
//         localStorage.setItem('DATABASE', JSON.stringify(DATABASE));
//         alert('Đặt hàng thành công !');
//         SESSION.products = [];
//         sessionStorage.setItem('SESSION', JSON.stringify(SESSION));
//         location.reload();
//     }

//     order_btn.disabled = false;
// }

pay.addEventListener("click", () => {
    if (condition) {
        ORDERS.push(order);
        localStorage.setItem('DATABASE', JSON.stringify(DATABASE));
        localStorage.setItem(`otherProduct`,[])
       listCard.innerHTML = ''
       total.innerHTML = 0
       quantitys.innerHTML = 0
       alert('thanh toán thành công!')
    } 
     else {
        alert (' đăng nhập để thanh toán!')
        window.location.href = 'login.html';
    } 
})