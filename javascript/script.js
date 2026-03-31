let popupButton = document.querySelector("#popup-button")
let imgButton = document.querySelector("#show-image")
let img = document.querySelector("#my-image")
let submitButton = document.querySelector("#submitBtn")
let message = document.querySelector("#message")
let display = document.querySelector("#displayMessage")
let changBac
popupButton.addEventListener("click", () => {

    window.alert("Hello, this is a javascript interaction")
})

// imgButton.addEventListener("click", () => {
//     if ( img.classList.contains('visible') ) {
//         img.classList.remove("visible")
//         img.classList.add('hidden')
//         imgButton.innerHTML = "Show image"
//     } else {
//         img.classList.remove("hidden")
//         img.classList.add('visible')
//         imgButton.innerHTML = "Hide image"
//     }
// })

imgButton.addEventListener("click", () => {
    const isHidden = img.classList.toggle("hidden")
    imgButton.innerHTML = isHidden ? "Show Image" : "Hide image"
})

submitButton.addEventListener("click", () => {
    display.innerHTML = message.value    
} )
 

 
const colors = ["pink", "blue", "red", "green", "yellow", "purple"];
let colorIndex = 0;

function changeBackground() {
    colorIndex = (colorIndex + 1) % colors.length;
    document.body.style.backgroundColor = colors[colorIndex];
}

 
function goToGoogle() {
    window.location.href = "https://www.google.com";
}