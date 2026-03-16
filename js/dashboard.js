// ===============================
// DASHBOARD SCRIPT
// ===============================

document.addEventListener("DOMContentLoaded", loadDashboard);


// ===============================
// LOAD DATA TOKO
// ===============================

function loadDashboard(){

const data = JSON.parse(localStorage.getItem("umkmStore"));


// jika belum ada toko
if(!data){

alert("Belum ada toko, silakan buat toko terlebih dahulu.");

window.location.href = "create-store.html";

return;

}


// ambil element

const name = document.getElementById("dashboardName");
const description = document.getElementById("dashboardDescription");
const logo = document.getElementById("dashboardLogo");
const deleteBtn = document.getElementById("deleteStore");


// tampilkan data

name.textContent = data.name;
description.textContent = data.description;


// tampilkan logo

if(data.logo){

logo.src = data.logo;

}else{

logo.style.display = "none";

}


// tombol hapus

deleteBtn.addEventListener("click", deleteStore);

}



// ===============================
// HAPUS TOKO
// ===============================

function deleteStore(){

const confirmDelete =
