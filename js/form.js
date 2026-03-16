// ===============================
// ELEMENT
// ===============================

const form = document.getElementById("storeForm");
const templateSelect = document.querySelector("select[name='template']");
const previewFrame = document.getElementById("templatePreview");
const logoInput = document.querySelector("input[name='storeLogo']");


// ===============================
// INIT
// ===============================

document.addEventListener("DOMContentLoaded", init);

function init(){
    initTemplatePreview();
    initFormSubmit();
}


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
// FORM SUBMIT
// ===============================

function initFormSubmit(){

    form.addEventListener("submit", handleSubmit);

}


function handleSubmit(e){

    e.preventDefault();

    const formData = new FormData(form);

    const storeName = formData.get("storeName").trim();

    if(storeName === ""){
        alert("Nama toko harus diisi");
        return;
    }

    const storeData = {
        name: storeName,
        description: formData.get("storeDescription"),
        whatsapp: formData.get("whatsapp"),
        template: formData.get("template")
    };

    saveStore(storeData);

    redirectToStore();

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
// REDIRECT
// ===============================

function redirectToStore(){

    window.location.href = "store.html";

              }
