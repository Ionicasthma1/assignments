// Enable/Disable Alert Button
const alertBtn = document.getElementById("alertBtn");
const enableAlert = document.getElementById("enableAlert");

enableAlert.addEventListener("change", function() {
  alertBtn.disabled = !enableAlert.checked; // Enable or disable the button based on the radio button state
});

alertBtn.addEventListener("click", function() {
  alert("Alert! Potential threat detected.");
  alertBtn.disabled = true; // Disable the button after it is clicked
  enableAlert.checked = false; // Uncheck the radio button
});

 // Dynamically Adding Images to the Page

document.getElementById("addImageBtn").addEventListener("click", function() {
    // Check if the image already exists
    if (!document.querySelector("#newImage img")) {
        const img = document.createElement("img");
        img.src = "mitt.jpg";
        img.alt = "Security Image";
        img.style.marginTop = "10px";
        document.getElementById("newImage").appendChild(img);
    } else {
        console.log("Image already added."); // Optionally log or provide feedback
    }
});

//Redirecting Users to Another URL
document.getElementById("redirectBtn").addEventListener("click", function() {
    window.location.href = "https://www.cisco.com";
});



//Replacing the H1 Text Dynamically
const changeTitleBtn = document.getElementById("changeTitleBtn");
const titleInput = document.getElementById("titleInput");
const mainTitle = document.getElementById("mainTitle");


changeTitleBtn.addEventListener("click", function() {
    const newTitle = titleInput.value;
    if (newTitle.trim() !== "") {
        mainTitle.textContent = newTitle;
    }
});


//Changing the Background Color
const changeBgBtn = document.getElementById("changeBgBtn");
const bgColorOptions = document.getElementsByName("bgColor");

changeBgBtn.addEventListener("click", function() {
    let selectedColor;
    bgColorOptions.forEach(option => {
        if (option.checked) {
            selectedColor = option.value;
        }
    });
    if (selectedColor) {
        document.body.style.backgroundColor = selectedColor;
    }
});

