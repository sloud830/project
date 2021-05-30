//Chatbox
function openForm() {
    document.getElementById("myForm").style.display = "block";
  }
  
  function closeForm() {
    document.getElementById("myForm").style.display = "none";
  }
  //Sản phẩm
  function tengicungduoc(image, price, name) {
    document.getElementById("container").innerHTML += `
    <a href="./product.html"><div class="product">
        <img id="product-img" src="` + image + `" alt="">
        <h4>` + name + `</h4>
        <h5>` + price + `</h5>
    </div></a>
    `
}
tengicungduoc("./img/3c740480132dace7f3aacc40730c5f0f.jpg","5.000.000", "Full skin")
tengicungduoc("./img/3c740480132dace7f3aacc40730c5f0f.jpg","5.000.000", "Full skin")
tengicungduoc("./img/3c740480132dace7f3aacc40730c5f0f.jpg","5.000.000", "Full skin")
tengicungduoc("./img/3c740480132dace7f3aacc40730c5f0f.jpg","5.000.000", "Full skin")
tengicungduoc("./img/3c740480132dace7f3aacc40730c5f0f.jpg","5.000.000", "Full skin")
tengicungduoc("./img/3c740480132dace7f3aacc40730c5f0f.jpg","5.000.000", "Full skin")
tengicungduoc("./img/3c740480132dace7f3aacc40730c5f0f.jpg","5.000.000", "Full skin")
tengicungduoc("./img/3c740480132dace7f3aacc40730c5f0f.jpg","5.000.000", "Full skin")
tengicungduoc("./img/3c740480132dace7f3aacc40730c5f0f.jpg","5.000.000", "Full skin")
tengicungduoc("./img/3c740480132dace7f3aacc40730c5f0f.jpg","5.000.000", "Full skin")
tengicungduoc("./img/3c740480132dace7f3aacc40730c5f0f.jpg","5.000.000", "Full skin")
tengicungduoc("./img/3c740480132dace7f3aacc40730c5f0f.jpg","5.000.000", "Full skin")
tengicungduoc("./img/3c740480132dace7f3aacc40730c5f0f.jpg","5.000.000", "Full skin")
tengicungduoc("./img/3c740480132dace7f3aacc40730c5f0f.jpg","5.000.000", "Full skin")
tengicungduoc("./img/3c740480132dace7f3aacc40730c5f0f.jpg","5.000.000", "Full skin")
tengicungduoc("./img/3c740480132dace7f3aacc40730c5f0f.jpg","5.000.000", "Full skin")
