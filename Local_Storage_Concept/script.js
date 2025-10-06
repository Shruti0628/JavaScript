const studentData = {
    firstName: "John",
    lastName: "Doe",
    age: 23,
    gender: "Male",
    courses: ["Mathematics", "Physics", "Chemistry"],
    address: {
        street: "Rosewood St",
        city: "New York",
        state: "NY",
        zip: "10001"
    }
};

//Function to add todo list to local storage
const addTodoList = () => {
    //This will just keep your data in key value pair but won't showcase whole data inside the object
    // localStorage.setItem("objectData", studentData);

    //To store whole object data we need to convert it into string using JSON.stringify()
    localStorage.setItem("objectData", JSON.stringify(studentData));
    alert("Student data added to local storage!");
}

//Function to get todo list from local storage
const getTodoList = () => {
    //Here studentData is a value to the key "objectData"
    const retrieveData = JSON.parse(localStorage.getItem("objectData"));
    console.log(retrieveData);
    alert("Check the console to see the retrieved data!");
}

//Function to remove todo list from local storage
const removeTodoList = () => {
    const removeData = localStorage.removeItem("objectData");
    alert("Student data removed from local storage!");
}


document.getElementById("setItem").addEventListener("click", () => {
    addTodoList();
});

document.getElementById("getItem").addEventListener("click", () => {
    getTodoList();
});

document.getElementById("removeItem").addEventListener("click", () => {
    removeTodoList();
});