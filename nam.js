// alert("")
const btn = document.getElementById("Send")
btn.addEventListener("click",function(){
    const eml = document.getElementById("Email")
    const mk = document.getElementById("mk")
    if (eml.value == "") {
        alert("Bạn chưa nhập email")
    
        
    }
   else if(mk.value == ""){
    alert("Bạn chưa nhập mật khẩu")
   }
        
    
})
