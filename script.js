
// TODO: refactor to make less repetitive

// When the user clicks on the submit button in the new task form, print that task to the DOM
document.querySelector("#page-content").addEventListener("click", function(){
    if(event.target.id === "new-task-submit-btn"){
        console.log("You clicked on the submit button")
        const taskValue = document.querySelector("#new-task-input").value
        // Print the task value to the DOM
        document.querySelector("#page-content").innerHTML += buildSingleTask(taskValue)
    }
})


// When the user clicks on the "My Todo List" link in the nav bar, print the from
document.querySelector("#my-todo-list").addEventListener("click", function(){
    // Print the heading and build the form
    const pageContentContainer = document.querySelector("#page-content");
    pageContentContainer.innerHTML = `<h1>My To Do List</h1>`;
    pageContentContainer.innerHTML += buildTaskForm();
})


// When the user clicks on the family list link in the nav bar, print a heading
document.querySelector("#family-todo-list").addEventListener("click", function(){
    document.querySelector("#page-content").innerHTML = `<h1>Family To Do List</h1>`
})

// When the user clicks on the completed list link in the nav bar, print a heading
document.querySelector("#completed-tasks").addEventListener("click", function(){
    document.querySelector("#page-content").innerHTML = `<h1>Completed Tasks</h1>`
})





