/*var colors = ["red", "blue", "green", "yellow", "grey"];
var colorIndex = 0;

function bg() {
    colorIndex = (colorIndex + 1) % colors.length;
    document.body.style.backgroundColor = colors[colorIndex];
};

document.getElementById("learnMoreBtn").addEventListener("click", function() {
    alert("Robotics is transforming healthcare by assisting in precise surgeries, reducing recovery times, and improving patient outcomes through automation and AI.");
    bg();
});



document.getElementById("generateImagesBtn").onclick = function() {
    const container = document.getElementById("robotImages");
    if (container.innerHTML === "") {
        container.innerHTML = "<img src='robot.webp' alt='Surgical Robot'>";
    } else {
        container.innerHTML = "";
    };
    bg();
};

 
 document.getElementById("externalResourceBtn").addEventListener("click", function() {
    window.location.href = "https://link.springer.com/article/10.1007/s42979-023-02551-0";
    bg();
});





document.getElementById("factBtn").onclick = function() {
    alert(" The first surgical robot, the Arthrobot, was used in 1983 for orthopedic procedures, while the PUMA 560 performed the first robotic brain biopsy in 1985.");
     
 bg();
}



document.getElementById("subscribeForm").addEventListener("submit", function(event) {
    event.preventDefault();
    document.getElementById("subscribeMessage").textContent = "Thank you for subscribing!";
    bg();
});  */

let learnMoreBtn = document.querySelector("#learnMoreBtn")
let generateImagesBtn = document.querySelector("#generateImagesBtn")
let externalResource = document.querySelector("#externalResourceBtn")
let factBtn = document.querySelector("#factBtn")
let submitBtn = document.querySelector("#submitBtn")

let colors = ["red", "blue", "green", "yellow", "grey"];
let colorIndex = 0;

function bg() {
  colorIndex = (colorIndex + 1) % colors.length;
  document.body.style.backgroundColor = colors[colorIndex];
};

let buttons = document.querySelectorAll("button")
buttons.forEach(button => {
  button.addEventListener("click", () => {
    bg()
  })
})



learnMoreBtn.addEventListener("click", () => {
  window.alert("Robotics in healthcare enhances patient care through increased precision, efficiency, and safety, with the market expected to reach $63.8 billion by 2032. Key applications include minimally invasive robot-assisted surgery ")
})

generateImagesBtn.addEventListener("click", () => {

  let img = document.querySelector("#robotImage")
  img.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBqV_8aeyH8CDdnnxUCGWs2Ybl4oJvW_hjA6vj6yEC3g&s=10"

})

externalResource.addEventListener("click", () => {
  window.location.href = "https://ep.jhu.edu/news/robots-making-a-difference-in-healthcare/"
})

factBtn.addEventListener("click", () => {
  window.alert(1) 70% Drop in Hospital Acquired Infections due to Xenex Robot
Statistics of the Centers for Disease Control and Prevention show that in the United States 1 in every 25 patients will contract hospital acquired infections (HAIs) such as MRSA (methicillin-resistant Staphylococcus aureus) and C. diff (Clostridium difficile), and 1 in 9 will die.)
})

submitBtn.addEventListener("click", () => {
  document.querySelector("#subscribeMessage").textContent = "Thank you for subscribing!"
})