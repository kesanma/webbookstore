function addProductToCart(id) {
  let quantity = document.getElementById("quantity").value;
  $.ajax({
    type: "GET",
    url: "action/addProductTocart.php",
    data: { id, quantity }
  }).then(function(data) {
    updateModalCart();
    alert("Thêm vào giỏ hàng thành công");
  });
}
