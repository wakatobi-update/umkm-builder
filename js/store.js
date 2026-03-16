/* =========================
   LOAD DATA TOKO
========================= */

document.addEventListener("DOMContentLoaded", () => {

const storeData = JSON.parse(localStorage.getItem("storeData"));

if(!storeData){
return;
}

/* =========================
   ISI DATA TOKO
========================= */

const storeName = document.getElementById("storeName");
const storeDesc = document.getElementById("storeDesc");
const storeLogo = document.getElementById("storeLogo");
const whatsappBtn = document.getElementById("whatsappBtn");

if(storeName){
storeName.textContent = storeData.name || "Nama Toko";
}

if(storeDesc){
storeDesc.textContent = storeData.description || "";
}

if(storeLogo && storeData.logo){
storeLogo.src = storeData.logo;
}

/* =========================
   WHATSAPP LINK
========================= */

if(whatsappBtn && storeData.whatsapp){

const phone = storeData.whatsapp.replace(/[^0-9]/g,'');

whatsappBtn.href =
"https://wa.me/" + phone + "?text=Halo saya tertarik dengan produk Anda";

}

/* =========================
   LOAD PRODUK
========================= */

const productList = document.getElementById("productList");

if(productList && storeData.products){

productList.innerHTML = "";

storeData.products.forEach(product => {

const productCard = document.createElement("div");

productCard.className = "product-card";

productCard.innerHTML = `
<img src="${product.image}">
<div class="product-info">
<div class="product-name">${product.name}</div>
<div class="product-price">Rp ${product.price}</div>
</div>
`;

productList.appendChild(productCard);

});

}

/* =========================
   QR CODE TOKO
========================= */

const qrImage = document.getElementById("storeQR");

if(qrImage){

const storeUrl = window.location.href;

qrImage.src =
"https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=" + encodeURIComponent(storeUrl);

}

});
