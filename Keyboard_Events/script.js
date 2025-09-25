var myInput = document.getElementById("myInput");

const handleKeyPress = ( event )=>{
    console.log(event);
    console.log("Key Pressed: " , event.key);
    console.log("Key Code: ", event.code);
    console.log("Event Type: ", event.type);
}
myInput.addEventListener("keydown", handleKeyPress);