const mainTodoEle = document.querySelector(".list");
const inputValue = document.getElementById("inputValue");
const form = document.querySelector("form");

const addTodoList = (e) => {
    e.preventDefault();
    
    if (inputValue.value.trim() === '') return;

    // Create new list item
    const li = document.createElement("li");
    
    // Create delete button for this item
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.className = "deleteBtn";
    
    // Add task text and delete button to li
    li.innerHTML = `
        <span>${inputValue.value}</span>
    `;
    li.appendChild(deleteBtn);
    
    // Add delete functionality
    deleteBtn.addEventListener("click", () => {
        li.remove();
    });

    // Add to list
    mainTodoEle.appendChild(li);
    
    // Clear input
    inputValue.value = "";
}

// Event listeners
form.addEventListener("submit", addTodoList);
document.querySelector(".addBtn").addEventListener("click", addTodoList);
document.querySelector(".delBtn").addEventListener("click", () => {
    mainTodoEle.innerHTML = "";
});