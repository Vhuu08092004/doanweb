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
function deleteCookie(cname) {
    document.cookie = `${cname}=; expires=Thu, 01 Jan 1970 00:00:00 UTC`;
  }
const user = document.querySelector(".user")
let newHTML ;

const conditonUser = getCookie('token')

const Login = () => {
    window.location.href = "login.html" ;
}

const Register = () => {
    window.location.href = "register.html";
}

const Logout = () => {
    deleteCookie("token")
    window.location.reload()
}
// let data = JSON.parse(localStorage.getItem())
if (conditonUser) {
        newHTML = `
        <i class="fa-regular fa-user"></i>
        <span>Chào khách hàng</span>

        <ul user-menu>
            <li>Thông tin khách hàng</li>
            <li onclick="Logout()">Đăng Xuất</li>        
        </ul>
        `
    user.innerHTML = newHTML ;
} else {
    newHTML = `
            <div onclick = "Login()">Đăng nhập</div>
            <div onclick="Register()"> Đăng kí </div>
        `
    
    user.innerHTML = newHTML   ;

 
}