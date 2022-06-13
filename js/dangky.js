function dangky(){
    var hoten = document.getElementById('hoten');
    if(hoten.value == ""){
        alert("Bạn không được để trống họ tên");
        hoten.focus();
        hoten.style.backgroundColor = "yellow";
        return;
    }else{
        hoten.style.backgroundColor = "white";
    }

    var email = document.getElementById('email');

    if (email.value == "") {
        alert("Bạn không được để trống email!");
        email.focus();
        email.style.backgroundColor = "yellow";
        return;
    } else {
        var ktEmail = /^\w(\.?[\w+])*@\w(\.?[\w+])*\.[a-z]{2,4}$/i
        if (!ktEmail.test(email.value)) {
            alert("Bạn không nhập đúng định dạng email!");
            email.focus();
            email.style.backgroundColor = "yellow";
            return;
        } else {
            email.style.backgroundColor = "white";
        }
    }

    var number = document.getElementById('dienthoai');
    if(number.value == ""){
        alert("Bạn không được để trống số điện thoại!");
        number.focus();
        number.style.backgroundColor = "yellow";
        return;
    }else if(number.value.length > 11){
        alert("Số điện thoại của bạn quá 11 ký tự!");
        number.focus();
        number.style.backgroundColor = "yellow";
        return;
    }else if(number.value.length < 10){
        alert("Số điện thoại của bạn ít hơn 10 ký tự!");
        number.focus();
        number.style.backgroundColor = "yellow";
        return;
    }else{
        number.style.backgroundColor = "white";
    }

    var dangnhap = document.getElementById('tendn');
    if(dangnhap.value == ""){
        alert("Bạn không được để trống tên đăng nhập!");
        dangnhap.focus();
        dangnhap.style.backgroundColor = "yellow";
        return;
    }else{
        dangnhap.style.backgroundColor = "white";
    }

    var mk = document.getElementById('mk');
    if(mk.value == ""){
        alert("Bạn không được để trống mật khẩu!");
        mk.focus();
        mk.style.backgroundColor = "yellow";
        return;
    }else if(mk.value.length < 6){
        alert("Mật khẩu phải dài hơn 6 ký tự!");
        mk.focus();
        mk.style.backgroundColor = "yellow";
        return;
    }else if(mk.value.length > 12){
        alert("Mật khẩu không được dài quá 12 ký tự!");
        mk.focus();
        mk.style.backgroundColor = "yellow";
        return;
    }else{
        mk.style.backgroundColor = "white";
    }

    var nhaplaimk = document.getElementById('nhaplaipass');
    if(nhaplaimk.value != mk.value){
        alert("Mật khẩu không trùng khớp");
    }
    alert("Bạn đã đăng ký thành công");
}