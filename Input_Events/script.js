const inputEle = document.getElementById('myInput');
const handleInput = (event) =>{
    console.log(event);
    console.log("Input Value:", event.target.value);
    console.log("Input name:", event.target.name);
    console.log("Input Type:", event.inputType);
    console.log("Event Type:", event.type);

    document.querySelector(
        ".inputValue"
    ).textContent = `Input Value: ${event.target.value}`;
    document.querySelector(
        ".inputName"
    ).textContent = `Input Name: ${event.target.name}`;
    document.querySelector(
        ".inputType"
    ).textContent = `Input Type: ${event.inputType}`;
    document.querySelector(
        ".eventType"
    ).textContent = `Event Type: ${event.type}`;
};


inputEle.addEventListener('input', handleInput);