//Chatbox
function openForm() {
    document.getElementById("myForm").style.display = "block";
  }
  
  function closeForm() {
    document.getElementById("myForm").style.display = "none";
  }
  //Product
let skinimg = ["./img/1001.jpg" , "./img/1002.jpg" , "./img/1003.jpg" , "./img/1011.jpg","./img/2003.jpg","./img/3004.jpg","./img/4007.jpg","./img/4011.jpg","./img/6015.jpg","./img/7005.jpg","./img/11009.jpg","./img/157009.jpg" ]
let skinname = ["Annie Gô-Tích","Annie Quàng Khăn đỏ", "Annie Công chúa","Annie Siêu nhân thiên hà","Brolaf","Galio địa nguc","TF âm phủ","TF Siêu công nghệ","Urgot Pijama","Leblanc thần rừng","Master Yi Siêu Phẩm","Yasuo Ma kiếm" ]
let i
for (i = 0; i < skinimg.length; i++) {
    document.getElementById("skin").innerHTML += `
    <div class="product">
        <img id="skinimg" src="` + skinimg[i] + `" alt="">
        <h4>` + skinname[i] + `</h4>

    </div>
    `
  } 
 //on click 
    function myFunction(){
alert("Mua acc thành công.")
  }