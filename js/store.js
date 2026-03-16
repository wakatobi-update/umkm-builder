// ===============================
// LOAD STORE DATA
// ===============================

document.addEventListener("DOMContentLoaded", loadStore);


function loadStore(){

const data = JSON.parse(localStorage.getItem("umkmStore"));

if(!data) return;


// ELEMENT

const storeName = document.getElementById("storeName");
const storeTitle = document.getElementById("storeTitle");
const storeDescription = document.getElementById("storeDescription");
const storeLogo = document.getElementById("storeLogo");
const whatsappBtn = document.getElementById("whatsappBtn");


// SET DATA

storeName.textContent = data.name;
storeTitle.textContent = data.name;
storeDescription.textContent = data.description;


// LOGO

if(data.logo){

storeLogo.src = data.logo;

}else{

storeLogo.style.display = "none";

}


// WHATSAPP LINK

if(data.whatsapp){

whatsappBtn.href = "https://wa.me/" + data.whatsapp;

}else{

whatsappBtn.style.display = "none";

}

}
