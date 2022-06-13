function dathang(){
    let hoten = document.getElementById("hoten");

    if(hoten.value == ""){
        alert("Họ và tên không được để trống !");
        focus();
        hoten.style.border = "1px solid red";
        return;
    }else{
        hoten.style.border = "1px solid #ccc";
    }


    let dienthoai = document.getElementById("sdt");
    if(dienthoai.value == ""){
        alert("Số điện thoại không được để trống!");
        dienthoai.focus();
        dienthoai.style.border = "1px solid red"
        return;
    }else{
        var ktradienthoai = /^(0?)(3[2-9]|5[6|8|9]|7[0|6-9]|8[0-6|8|9]|9[0-4|6-9])[0-9]{7}$/
        if(!ktradienthoai.test(dienthoai.value)){
            alert("Bạn nhập sai số điện thoại!");
            dienthoai.focus();
            dienthoai.style.border = "1px solid red";
            return;
        }else{
            dienthoai.style.border = "1px solid #ccc";
        }
    }

    let chonhuyen = document.getElementById("chonhuyen");
    if(chonhuyen.value == ""){
        alert("Bạn chưa chọn tỉnh / Thành phố");
        dienthoai.focus();
        chonhuyen.style.border = "1px solid red";
        return;
    }else{
        chonhuyen.style.border = "1px solid #ccc";
    }

    let chon = document.getElementById("chon1");
    if(chon.value == ""){
        alert("Bạn chưa chọn Quận / huyện");
        chon.focus();
        chon.style.border = "1px solid red";
        return;
    }else{
        chon.style.border = "1px solid #ccc";
    }

    let chonxa = document.getElementById("chonxa");
    if(chonxa.value == ""){
        alert("Bạn chưa chọn Phường / xã");
        chonxa.focus();
        chonxa.style.border = "1px solid red";
        return;
    }else{
        chonxa.style.border = "1px solid #ccc";
    }

    let diachi = document.getElementById("diachi");
    if(diachi.value == ""){
        alert("Bạn không được để trống địa chỉ!");
        diachi.style.border = "1px solid red";
        return;
    }else if(diachi.value.length > 150){
        alert("Địa chỉ chỉ nhập 150 ký tự");
        diachi.style.border = "1px solid #ccc";
        return;
    }else{
        diachi.style.border = "1px solid #ccc";
    }
    
    let email = document.getElementById("email");
    var ktemail = /^\w(\.?[\w+])*@\w(\.?[\w+])*\.[a-z]{2,4}$/i;
    if(email.value == ""){
        alert("Email không được để trống!");
        email.focus();
        email.style.border = "1px solid red";
        return;
    }else{
        if(!ktemail.test(email.value)){
            alert("Bạn không nhập đúng định dạng email!");
            email.focus();
            email.style.border = "1px solid red";
            return;
        }else{
            email.style.border = "1px solid #ccc";
        }
    }

    let chongiaohang = document.getElementById("chongiaohang");
    if(chongiaohang.value == ""){
        alert("Bạn chưa chọn hình thức giao hàng");
        chongiaohang.focus();
        chongiaohang.style.border = "1px solid red";
        return;
    }else{
        chongiaohang.style.border = "1px solid #ccc";
    }

    let radio = document.getElementById("radio");
    if(!radio.checked){
        alert("Bạn chưa chọn hình thức giao hàng");
        radio.focus();
        return;
    }else{
        radio.style.backgroundColor = "red";
    }

    let check = document.getElementsByName("chon");

    if(!check[0].checked && !check[1].checked && !check[2].checked){
        alert("Chưa chọn Phương thức thanh toán!");
        check
        return;
    }

    alert("Bạn đã đặt hàng thành công!");
}