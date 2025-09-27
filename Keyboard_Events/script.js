var myInput = document.getElementById("myInput");

const handleKeyPress = ( event )=>{
    console.log(event);
    console.log("Key Pressed: " , event.key);
    console.log("Key Code: ", event.code);
    console.log("Event Type: ", event.type);

    // Displaying the values in the HTML by targeting the classes
    document.querySelector(
        ".keyPressed"   
    ).textContent = `Key Pressed: ${event.key}`;
    document.querySelector(
        ".keyCode"
    ).textContent = `Key Code: ${event.code}`;
    document.querySelector(
        ".charCode"
    ).textContent = `Char Code: ${event.key.charCodeAt(0)}`;
    document.querySelector(
        ".eventType"
    ).textContent = `Event Type: ${event.type}`;

}
myInput.addEventListener("keydown", handleKeyPress);