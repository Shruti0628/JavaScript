const todoInput = document.querySelector('.todoInput');
const addBtn = document.querySelector('.addBtn');
const clearAllBtn = document.querySelector('.delBtn'); // main "Delete" button
const list = document.querySelector('.list');

// Adding functionalities
const addTask = () => {
    const task = todoInput.value.trim();
    if (task === "") return;

    // Creating list items
    const li = document.createElement('li');
    li.textContent = task;

    // Mark Button
    const markBtn = document.createElement('button');
    markBtn.textContent = 'Mark';
    markBtn.className = 'markBtn';
    markBtn.onclick = () => {
        li.classList.toggle('completed');
    };

    // Delete Button (for each task)
    const delBtn = document.createElement('button');
    delBtn.textContent = 'Delete';
    delBtn.className = 'deleteBtn';
    delBtn.onclick = () => {
        list.removeChild(li);
    };

    // Append buttons to the list item
    li.appendChild(markBtn);
    li.appendChild(delBtn);

    // Append the li to the main list
    list.appendChild(li);

    // Clear input
    todoInput.value = '';
};

// Add event listeners
addBtn.addEventListener('click', addTask);

// Add task on Enter key
todoInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') addTask();
});

// Delete all tasks (main Delete button)
clearAllBtn.addEventListener('click', () => {
    list.innerHTML = '';
});
