var form = document.querySelector('form')
var doneToDos = document.querySelector(".done")
var input = document.querySelector('#users-toDo')

//how? by pressing the enter key || clicking the add button
form.onsubmit = function(e) {
    e.preventDefault()
    //So for the input validation, we can create the variable that will store the information from the input field and make sure we trim the white spaces from it. We can also say that if the input value is false (empty), then we just return and not run any code. You also want to make sure that once this is done, the input field on the form is reset to empty.
    var userInput = input.value
    var inputArr = userInput.trim()
    if (!inputArr) {
        userInput = ""
        return
    }
    // var node = document.createElement("li")
    // var buttonText = document.getElementById("users-toDo").value
    // var button = document.createElement("button")
    // node.appendChild(button)
    // document.getElementById("todo-list").appendChild(node)
    //add text that user inputs as a todo
    var li = document.createElement("li") 
    var button = document.createElement("button")
    document.getElementById("todo-list").appendChild(li)
    li.appendChild(button)
    button.textContent = userInput
    //In reference to the button and list item, you have the right variables created for var li and var button. I wouldn’t do button.innerHTML = this.toDo.value but instead would append a child (in this case button) to the li variable and then change the text content of the button to the variable you created above that stores the user’s information.
    this.toDo.value = ""
    //text withing input should appear below the form inside of the ul#todo-list element.
    //create a new button element nested within a li element
    //document.querySelector("li").appendChild(button)

    //if the button has the decoration of “line-through” then you remove it on click, else, we will add the line-through whenever the user clicks on it.
    if (button) { button.addEventListener('click', function() {
        if (button.style.textDecoration = "line-through") {
            li.remove()
        } else {
                button.style.textDecoration = "line-through"
            }})}
    } 
//     if (button) {
//         button.addEventListener('click', function() {
// //if it is, The item should be marked done by striking through the words using the text-decoration CSS property
//             button.style.textDecoration = "line-through"
//             li.classList.add("done")
//         })}
//     if (doneToDos){
//also watch to see if an item that has been marked as done is clicked, if so clicking an item that's been marked as done should remove the item from the list


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