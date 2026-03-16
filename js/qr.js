// ===============================
// GENERATE QR CODE
// ===============================

document.addEventListener("DOMContentLoaded", generateQR);


function generateQR(){

const qrContainer = document.getElementById("qrcode");

if(!qrContainer) return;


// URL halaman saat ini
const storeURL = window.location.href;


// generate QR
new QRCode(qrContainer, {

text: storeURL,
width: 180,
height: 180,
colorDark: "#000000",
colorLight: "#ffffff",
correctLevel: QRCode.CorrectLevel.H

});

}
