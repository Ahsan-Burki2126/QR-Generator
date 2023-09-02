let input = document.getElementById("input");
let generateBtn = document.getElementById("generate-btn");
let qrImg = document.getElementById("qrImage");
let qrBox = document.getElementById("qrBox");

generateBtn.addEventListener("click", () => {
    qrImg.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + encodeURIComponent(input.value);
    qrBox.style.width = "100%";
    qrBox.style.height = "300px";
   qrImg.style.border = "8px solid black";
   qrImg.style.borderRadius = "15px";
   qrImg.style.padding = "10px";
});
