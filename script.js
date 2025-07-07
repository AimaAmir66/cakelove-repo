// Login Form
if (document.getElementById("loginForm")) {
  document.getElementById("loginForm").addEventListener("submit", function(e){
    e.preventDefault();
    var u = document.getElementById("username").value;
    var p = document.getElementById("password").value;
    if(u==="aima" && p==="1234"){
      alert("Login Successful!");
      window.location.href = "index.html";
    } else {
      alert("Invalid username or password.");
    }
  });
}

// Add to Order (menu page)
function addToOrder(item, price) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  cart.push({name: item, price: price});
  localStorage.setItem("cart", JSON.stringify(cart));
  alert(item + " added to your order!");
}

// Show Order (order page)
if (document.getElementById("orderList")) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  let html = "";
  let total = 0;

  if(cart.length === 0) {
    html = "<p>Your order is empty!</p>";
  } else {
    html = "<ul>";
    cart.forEach(function(item){
      html += "<li>" + item.name + " - Rs. " + item.price + "</li>";
      total += item.price;
    });
    html += "</ul>";
  }

  document.getElementById("orderList").innerHTML = html;
  document.getElementById("totalPrice").innerText = "Total: Rs. " + total;

  document.getElementById("orderForm").addEventListener("submit", function(e){
    e.preventDefault();
    let name = document.getElementById("customerName").value;
    alert("Thanks " + name + "! Your order has been placed.");
    localStorage.removeItem("cart");
    window.location.href = "index.html";
  });
}
