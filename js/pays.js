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
const condition = getCookie('token');

pay.addEventListener("click", () => {
    let check = getCookie('hBUowWKbil0UDP0eJqH0 + product')
    if (condition) {
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