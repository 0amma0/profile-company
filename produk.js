
const openBtn = document.getElementById("openPopup");
const popup = document.getElementById("myPopup");
const closeBtn = document.querySelector(".close");
openBtn.addEventListener("click", function() {
    popup.style.display = "block";
});
closeBtn.addEventListener("click", function() {
    popup.style.display = "none";
});
window.addEventListener("click", function(e) {
    if (e.target === popup) {
        popup.style.display = "none";
    }
});

const sendBtn = document.getElementById("sendBtn");
const payPopup = document.getElementById("payPopup");
const payBtn = document.getElementById("payBtn");
const closePayBtn = document.querySelector(".closePay");

const orderInput = document.getElementById("order");
const listPesanan = document.getElementById("listPesanan");
let currentOrder = "";

openBtn.addEventListener("click", function() {
    popup.style.display = "block";
});

closeBtn.addEventListener("click", function() {
    popup.style.display = "none";
});

window.addEventListener("click", function(e) {
    if (e.target === popup) popup.style.display = "none";
    if (e.target === payPopup) payPopup.style.display = "none";
});

sendBtn.addEventListener("click", function() {
    let text = orderInput.value.trim();
    if (text === "") {
        alert("Please write your request first!");
        return;
    }
    currentOrder = text;
    popup.style.display = "none";
    payPopup.style.display = "block";
});

closePayBtn.addEventListener("click", function() {
    payPopup.style.display = "none";
});

payBtn.addEventListener("click", function() {
    let div = document.createElement("div");
    let now = new Date().toLocaleString();
    div.classList.add("pesanan");
    div.textContent = `🍪${currentOrder} (Ordered at: ${now})`;
    listPesanan.appendChild(div);

    orderInput.value = "";
    currentOrder = "";
    payPopup.style.display = "none";
});
