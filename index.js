const entireDisplay = document.querySelector('.Entire-Container');
const keypadDisplay = document.querySelector('.Keypad-Container');

const keybutton = ["A","B","C","D","E","F","G","H","I","J","K","L","M","<<","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","ENTER"];

// const handclick = () => {
//     console.log("clicked");
// }

function handclick(){
    console.log('clicked');
}

keybutton.forEach(key => {
    const buttonKey = document.createElement('button');
    buttonKey.textContent = key;
    buttonKey.setAttribute("id",key);
    buttonKey.addEventListener("click", handclick);
    keypadDisplay.append(buttonKey);
});