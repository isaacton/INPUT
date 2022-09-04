const ourInput = document.getElementById("ourInput");
const ourHeader = document.getElementById("ourHeader");
ourInput.addEventListener(onclick, amazingFunction);

function amazingFunction(){
ourHeader.innerText = ourInput.value + " is cool";
}
