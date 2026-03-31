let popupButton = document.getElementById("popup-button") 
let image = document.getElementById("cat")
let imgButton = document.getElementById("imgToggle")


imgButton.addEventListener('click', function() {
document.getElementById(id).style.visibility = "hidden";
document.getElementById(id).style.visibility = "visible";
    if (image.style.display == "hidden") {
        image.style.display = "inline";
}  
  else  {
     image.style.display = "visible";  
   }

})
    


popupButton.addEventListener('click', function() {
    
    // variables are not exactly necessary, can do it on one line
    // document.getElementById("message").textContent= "GET OUT NOW!"
    let message = document.getElementById("message")
    message.textContent = "GET OUT NOW!"
    
})
 
f 