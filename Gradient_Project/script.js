let btn1 = document.getElementById("myButton");
let btn2 = document.getElementById("myButton2");
let section = document.querySelector("section");
let colorCode = document.querySelector(".colorCode");
let copyBtn = document.getElementById("copyButton");

let myHex = "0123456789abcdef";

// A function to generate random hex color code and making it modular one's.
const hexValues = () => {
     let colors = "#";
    //Since hexcolors have 6-digit code so we will run a loop 6 times
    for(let i = 0; i < 6; i++){
        //Math.floor() is used to round off the decimal value to the nearest integer and Math.random() will help to generate a random value.
        colors = colors + (myHex[Math.floor(Math.random() * 16)]);
    }
    return colors;
}


const handleButton1 = () => {
    let rgb1 = hexValues();
    let rgb2 = hexValues();
    
    btn1.innerText = rgb1;
    btn2.innerText = rgb2;
    
    // Update only the gradient text, not the whole element
    const gradientText = `background-image : linear-gradient(to right, ${rgb1}, ${rgb2})`;
    document.querySelector(".gradient-text").textContent = gradientText;
   

    section.style.backgroundImage = `linear-gradient(${rgb1}, ${rgb2})`;
    document.querySelector(".color1").textContent = `Color 1: ${rgb1}`
}

const handleButton2 = () => {
    let rgb1 = hexValues();
    let rgb2 = hexValues();
    btn1.innerText = rgb1;
    btn2.innerText = rgb2;
    
    // Update only the gradient text, not the whole element
    const gradientText = `background-image : linear-gradient(to right, ${rgb1}, ${rgb2})`;
    document.querySelector(".gradient-text").textContent = gradientText;
    
    section.style.backgroundImage = `linear-gradient(${rgb1}, ${rgb2})`;
    document.querySelector(".color1").textContent = `Color 1: ${rgb2}`;
}

btn1.addEventListener("click", handleButton1);
btn2.addEventListener("click", handleButton2);

copyBtn.addEventListener("click", () => {
   //Get the gradient text content
   const textCopy = document.querySelector(".gradient-text").textContent;
   //Alert notice to show
   navigator.clipboard.writeText(textCopy)
   .then(() => {
    alert("Gradient CSS copied to clipboard sucessfully!");
   })
   .catch((err) => {
    alert("Failed to copy the text: ", err);
   });
});