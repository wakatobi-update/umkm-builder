// ===============================
// ELEMENT SELECTOR
// ===============================

const form = document.getElementById("storeForm");
const templateSelect = document.querySelector("[name='template']");
const previewFrame = document.getElementById("templatePreview");
const logoInput = document.querySelector("[name='storeLogo']");
const submitBtn = form.querySelector("button");


// ===============================
// INIT APP
// ===============================

document.addEventListener("DOMContentLoaded", () => {

    initTemplatePreview();
    initLogoPreview();
    initFormSubmit();

});


// ===============================
// TEMPLATE PREVIEW
// ===============================

function initTemplatePreview(){

    templateSelect.addEventListener("change", () => {

        const template = templateSelect.value;

        previewFrame.src = `../templates/${template}.html`;

    });

}


// ===============================
// LOGO PREVIEW
// ===============================

function initLogoPreview(){

    logoInput.addEventListener("change", function(){

        const file = this.files[0];

        if(!file) return;

        const reader = new FileReader();

        reader.onload = function(e){

            localStorage.setItem("storeLogoPreview", e.target.result);

        };

        reader.readAsDataURL(file);

    });

}


// ===============================
// FORM SUBMIT
// ===============================

function handleSubmit(e){

    e.preventDefault();

    if(!validateForm()) return;

    setLoading(true);

    const formData = new FormData(form);

    /* =========================
       AMBIL DATA PRODUK
    ========================= */

    const productNames = document.querySelectorAll(".product-name");
    const productPrices = document.querySelectorAll(".product-price");
    const productImages = document.querySelectorAll(".product-image");

    let products = [];

    productNames.forEach((input, index) => {

        const name = input.value;
        const price = productPrices[index].value;

        let image = "";

        if(productImages[index].files[0]){
            image = URL.createObjectURL(productImages[index].files[0]);
        }

        products.push({
            name:name,
            price:price,
            image:image
        });

    });

    /* =========================
       DATA TOKO
    ========================= */

    const storeData = {

        name: formData.get("storeName").trim(),
        description: formData.get("storeDescription").trim(),
        whatsapp: formData.get("whatsapp").trim(),
        template: formData.get("template"),
        logo: localStorage.getItem("storeLogoPreview") || null,
        products: products

    };

    saveStore(storeData);

    redirectToStore();

}
    
// ===============================
// VALIDATION
// ===============================

function validateForm(){

    const storeName = form.querySelector("[name='storeName']").value.trim();
    const whatsapp = form.querySelector("[name='whatsapp']").value.trim();

    if(storeName === ""){

        alert("Nama toko wajib diisi");
        return false;

    }

    if(whatsapp !== "" && !whatsapp.match(/^62\d+/)){

        alert("Nomor WhatsApp harus diawali dengan 62");
        return false;

    }

    return true;

}


// ===============================
// SAVE STORE
// ===============================

function saveStore(data){

    localStorage.setItem(
        "umkmStore",
        JSON.stringify(data)
    );

}


// ===============================
// BUTTON LOADING
// ===============================

function setLoading(state){

    if(state){

        submitBtn.disabled = true;
        submitBtn.textContent = "Membuat Toko...";

    }else{

        submitBtn.disabled = false;
        submitBtn.textContent = "Buat Website Toko";

    }

}


// ===============================
// REDIRECT
// ===============================

function redirectToStore(){

    setTimeout(() => {

        window.location.href = "store.html";

    }, 700);

}

/* =========================
TAMBAH PRODUK
========================= */

const addProductBtn = document.getElementById("addProductBtn");
const productContainer = document.getElementById("productContainer");

if(addProductBtn){

addProductBtn.addEventListener("click", () => {

const productHTML = document.createElement("div");

productHTML.className = "product-item";

productHTML.innerHTML = `
<input type="text" placeholder="Nama Produk" class="product-name">

<input type="number" placeholder="Harga Produk" class="product-price">

<input type="file" class="product-image">
`;

productContainer.appendChild(productHTML);

});

}
