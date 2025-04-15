// function hide() {
//     let image = document.getElementById("image")
//     let hideBtn = document.getElementsByClassName("hide")
//     let showBtn = document.getElementsByClassName("show")
//     console.log("image", image);
//     console.log("hideBtn", hideBtn[0]);
//     showBtn[0].classList.toggle("showThing")
//     hideBtn[0].classList.toggle("hidden")
//     image.classList.add("hidden")
// }

// function show() {
//     let image = document.getElementById("image")
//     let showBtn = document.getElementsByClassName("show")
//     let hideBtn = document.getElementsByClassName("hide")

//     console.log("image", image);
//     console.log("showBtn", showBtn[0]);

//     image.classList.toggle("showThing")
//     showBtn[0].classList.toggle("hidden")
//     hideBtn[0].classList.toggle("showThing")
// }

// function changeTheColor(btn) {

//     btn.classList.toggle("dark")

//     if (btn.innerText === "Dark Mode") {
//         btn.innerText = "Light Mode"
//     } else {
//         btn.innerText = "Dark Mode"
//     }
// }

let container = document.getElementById("container")

// function changeColor() {
//     container.style.backgroundColor = "green"
// }

function changeColor() {
    // container.className = "blue-color"
    // container.classList.add("blue-color")
    container.classList.remove("container")
}



function swapImage() {
    console.log("Swapp")
    let image = document.getElementById("image")
    image.src = "https://www.apple.com/newsroom/images/product/mac/standard/Apple_new-macbookair-wallpaper-screen_11102020_big.jpg.large.jpg"
}