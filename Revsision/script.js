// let var const

// let array = ["London", "Canada", "Kuwait", "Quetta", "Peshawar", "Multan", "Heydrabad"]

// methods push, pop, shift, unshift, splice, slice
// array.push("Karachi")
// array.pop()
// array.shift()
// array.unshift("Islamabad")

// array.splice(2, 0, "Lahore")

// let newArray = array.slice(2, 6)
// console.log(newArray);
// console.log(array);


// for loop
//  declaration condition increment

// let table = prompt("Enter any number to print your table")

// for (let i = 1; i <= 10; i++) {
//     document.write(table + " X " + i + " = " + table * i + "<br /><br />")
// }

// let array = ["London", "Canada", "Kuwait", "Quetta", "Peshawar", "Multan", "Heydrabad"]

// console.log(array[3]);


// let products = ["Moniter", "Mouse", "Keyboard", "System Unit", "Mobile", "Laptop", "Tablet"]

// // declaration condition increment
// for (let i = 0; i < products.length; i++) {
//     document.write(products[i] + "<br /><br />");
// }

let date = new Date()
// console.log(date);

// getDay
// getDate
// getMonths
// getFullYear
// getSecond
// getMinutes
// getHours

// console.log(date.getDay())
// console.log(date.getDate())
// console.log(date.getMonth())
// console.log(date.getFullYear())
// console.log(date.getHours())
// console.log(date.getMinutes())
// console.log(date.getSeconds())


let seconds = 0
setInterval(function () {
    console.log(seconds++)
}, 3600000)