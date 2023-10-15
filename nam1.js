const sdt = document.getElementById("dk")

sdt.addEventListener("click",function(){
    const dc = document.getElementById("dc")
    const mk2 = document.getElementById("mk2")
    const sdt = document.getElementById("sdt")
    if (dc.value == "") {
        alert("Bạn chưa nhập địa chỉ ")
    
        
    }
    else if (mk2.value == "") {
        alert("Bạn chưa nhập mật khẩu")
    }
    else if (sdt.value == "") {
        alert("Bạn chưa có Email hay Số điện thoại")
    } else {
        
    }
        
    
})
