// let container = document.getElementById("container")
// let main_container = document.getElementsByClassName("main-container")
// let span = document.getElementsByTagName("span")

// DOM Means Document Object Model

// let p = document.getElementsByTagName("p")
// console.log(p);'

// let body = document.childNodes[1].lastChild.childNodes[1].nodeValue

// console.log(body);

// let input = document.getElementById("input")

// let inpAttr = input.hasAttribute("src")
// input.setAttribute('class', "input-container")


// console.log(inpAttr);



let img = document.createElement("img")

img.setAttribute("src", "https://plus.unsplash.com/premium_photo-1664474619075-644dd191935f?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW1hZ2V8ZW58MHx8MHx8fDA%3D")

img.setAttribute("width", "200px")


let p = document.createElement("p")

let text = document.createTextNode("Hello!")

p.appendChild(text)
console.log(p);


let body = document.getElementsByTagName("body")
body[0].appendChild(p)
body[0].appendChild(img)

console.log(img);


