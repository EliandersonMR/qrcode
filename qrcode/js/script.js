const qrcodebtn = document.querySelector("#qr-form button");
const container = document.querySelector(".container");
const inputcode = document.querySelector("#qr-form input");
const imgqrcode = document.querySelector("#qr-code img");

function geretorQrcode () {

    const valueInput = inputcode.value;

    if(!valueInput) return;


  
    imgqrcode.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${valueInput}`

    qrcodebtn.innerHTML = "Gerando código..."
    imgqrcode.addEventListener("load", () =>{
        container.classList.add("active");
        qrcodebtn.innerHTML = "Código criado!"
    })
}


qrcodebtn.addEventListener("click", () =>{
geretorQrcode();

})

inputcode.addEventListener("keydown", (e) => {
    if(e.code === "Enter"){
        geretorQrcode();
    };
})

inputcode.addEventListener("keyup", () =>{
    if(!inputcode.value){
        container.classList.remove("active")
        qrcodebtn.innerHTML = "Gerar QR Código"
    }
})

