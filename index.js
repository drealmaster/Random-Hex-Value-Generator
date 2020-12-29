const Hex = [0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"];
const mybutton = document.getElementById("btn");
const color = document.querySelector(".color");

mybutton.addEventListener("click", function(){
      let colorOfHex = "#"
    for(let x = 0; x<6; x++){
        colorOfHex += Hex[myRandomNumber()]
    }

    color.textContent = colorOfHex
    document.body.style.backgroundColor = colorOfHex
})

function myRandomNumber(){
    return Math.floor(Math.random() * Hex.length)
}