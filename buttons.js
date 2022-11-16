


let copyNumber = ''
// экран 
const out1 = document.querySelector('.calc-screen p');

// copy, paste, theme buttons
const copyHandler = function (e) {
    copyNumber = out1.textContent;
}
const copyButton = document.getElementById("copy")
copyButton?.addEventListener("click", copyHandler)

const pasteHandler = function (e) {
    out1.textContent = copyNumber    
}
const pasteButton = document.getElementById("paste")
pasteButton?.addEventListener("click", pasteHandler)

