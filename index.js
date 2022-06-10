var form = document.querySelector('form')
var newToDos = document.querySelector("li button")
var doneToDos = document.querySelector(".done")

//how? by pressing the enter key || clicking the add button
form.onsubmit = function(e) {
    debugger
    e.preventDefault()
    if (this.toDo.value = "" || /^\s*$/) return
    // var node = document.createElement("li")
    // var buttonText = document.getElementById("users-toDo").value
    // var button = document.createElement("button")
    // node.appendChild(button)
    // document.getElementById("todo-list").appendChild(node)
    // this.toDo.value = ""
    //add text that user inputs as a todo
    var li = document.createElement("li") 
    var button = document.createElement("button")
    button.innerHTML = this.toDo.value
    //text withing input should appear below the form inside of the ul#todo-list element.
    document.getElementById("todo-list").appendChild(li)
    //create a new button element nested within a li element
    document.querySelector(li).appendChild(button)
    if (button) {
        button.addEventListener('click', function() {
            newToDos.style.textDecoration = "line-through"
            newToDos.classList.add("done")
        })}
    if (doneToDos){
        li.remove()
    }
}

// //watch to see if that added item is clicked
// newToDos.onclick = function() {
//     //if it is, The item should be marked done by striking through the words using the text-decoration CSS property
//     newToDos.style.textDecoration = "line-through"
//     newToDos.classList.add("done");
// }

// //also watch to see if an item that has been marked as done is clicked, if so clicking an item that's been marked as done should remove the item from the list
// doneToDos.onclick = function() {
//     li.remove()
// }