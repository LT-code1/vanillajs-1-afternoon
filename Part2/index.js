


console.log("The house always wins!");

//const card = document.getElementById('diamonds');
const idInput = document.getElementById('idInput');
const colorInput = document.getElementById('colorInput');

console.log(idInput);
console.log(colorInput);

function setCard() {
   const card = document.getElementById('idInput').value;  //gets diamonds spades hearts clubs
    // console.log(card);
    // console.log( document.getElementById('idInput').value);
    // console.log( document.getElementById('colorInput').value);

    document.getElementById(card).style.color =  document.getElementById('colorInput').value;
}
    

    // card.textContent= document.getElementById('idInput').value;
    // card.style.color = document.getElementById('colorInput').value;
//   console.log(card);
//     console.log(colorInput.nodeValue);
//document.getElementById("myP2").style.color = "blue";


// function setCard() {
//     const card = document.getElementById(idInput.value);
//     card.style.color = colorInput.value;
//   }

