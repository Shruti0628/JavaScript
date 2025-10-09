const mainTodoEle = document.querySelector(".list");
const inputValue = document.getElementById("inputValue");
const form = document.querySelector("form");


// We will use an array to store multiple todo lists and declaring here appends the other elements into the array.
    let localTodoLists = [];

// Now we'll create a fn() as `getTodoListFromLocal` to retrieve and display the todo lists from local storage when the page loads.
    const getTodoListFromLocal = () => {
        return JSON.parse(localStorage.getItem("todoLists"));
    };

// Function to remove a todo list from local storage

const removeTodoList = (e) =>{
    const todoRemove = e.target;
    let todoListContent = todoRemove.previousElementSibling.textContent;
    localTodoLists = localTodoLists.filter((currentTodo) => {
        return currentTodo !== todoListContent;
    });
    // Updating localStorage with new array
    localStorage.setItem("todoLists", JSON.stringify(localTodoLists));
    console.log(todoListContent);
    console.log(localTodoLists);
}

// Function to add todo list dynamically to the DOM
const addTodoListDyanmically = (todo) => {
     // Create new list item
    const li = document.createElement("li");
    
    // Create delete button for this item
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.className = "deleteBtn";
    
    // Add task text and delete button to li
    li.innerHTML = `
        <span>${todo}</span>
    `;
    li.appendChild(deleteBtn);
    
    // Add delete functionality
    deleteBtn.addEventListener("click", () => {
        li.remove();
    });

    // Add to list
    mainTodoEle.appendChild(li);
    
};

 // Function to display the current todo lists 
    const showTodoLists = () => {
        // console.log(localTodoLists);
        const todos = getTodoListFromLocal() || [];
        todos.forEach((todo) => {
            addTodoListDyanmically(todo);
        });
    };
    showTodoLists();

const addTodoList = (e) => {
    e.preventDefault();
    
    if (inputValue.value.trim() === '') return;

    localTodoLists = getTodoListFromLocal() || [];
  
    // We will trim the whitespaces from the give input values
    const todoListValue = inputValue.value.trim();

    // We'll check a condition if the current input is alreasdy present in the localTodoLists array or not. If it's present we will return from the function and won't add it to the array.
    if(localTodoLists.includes(todoListValue) && todoListValue === ""){
        alert("This todo is already present in the list.");
        inputValue.value = "";
        return;
    }else{
    //We will push items to the array using "push()"
    localTodoLists.push(todoListValue);
    localTodoLists = [...new Set(localTodoLists)]; // This will ensure that there are no duplicate entries in the array, we use spread operator to convert the Set back to an array.
    localStorage.setItem("todoLists",JSON.stringify(localTodoLists)); //We will convert the array into a string using JSON.stringify() method and then store it in local storage.
    console.log(localTodoLists);

    // Clear input
    inputValue.value = "";
    addTodoListDyanmically(todoListValue);
}
};

// Event listeners
form.addEventListener("submit", addTodoList);
document.querySelector(".addBtn").addEventListener("click", addTodoList);
document.querySelector(".delBtn").addEventListener("click", () => {
    mainTodoEle.innerHTML = "";
});

