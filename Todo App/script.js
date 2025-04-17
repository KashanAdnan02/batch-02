function addTodo() {
    let todo = document.getElementById("todo").value
    let showData = document.getElementById("show-data")
    console.log(showData);

    console.log(todo);

    let p = document.createElement("p")
    let textNode = document.createTextNode(todo)

    p.appendChild(textNode)
    showData.append(p)
}