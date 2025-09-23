let myButton = document.getElementById("myButton");
let rect = document.querySelector(".shape_rectangle");

function handleMouseEvents() {
    console.log("click");
    rect.style.backgroundColor = "yellow";
};

function handleMouseEvents2() {
    console.log("double-click");
    rect.style.backgroundColor = "orange";
    rect.classList.add("addTransition"); //to add the transition effect on double click
};

myButton.addEventListener("click", handleMouseEvents); //since, no args are passed, we can use directly a function rather than a cal
myButton.addEventListener("dblclick",handleMouseEvents2);
