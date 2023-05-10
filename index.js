const entireDisplay = document.querySelector('.Entire-Container');
const keypadDisplay = document.querySelector('.Keypad-Container');
const messageDisplay = document.querySelector('.Messages');

const keybutton = ["A","B","C","D","E","F","G","H","I","J","<<","K","L","M","N","O","P","ENTER","Q","R","S","T","U","V","W","X","Y","Z",];
const wordleWord = 'APPLE';
// const handclick = () => {
//     console.log("clicked");
// }
let currentRow = 0;
let currentTile = 0;
let isGameOver = false;

const inputguess = [
    ['', '', '', '', ''],
    ['', '', '', '', ''],
    ['', '', '', '', ''],
    ['', '', '', '', ''],
    ['', '', '', '', ''],
    ['', '', '', '', '']
];

inputguess.forEach((inputguess,inputguessIndex) => {
    const cellinput = document.createElement('div');
    cellinput.setAttribute('id', 'inputguess-' + inputguessIndex);
    inputguess.forEach((input, inputIndex) => {
        const inputElement = document.createElement('div');
        inputElement.setAttribute('id', 'input-' + inputguessIndex + '-placeinput-' + inputIndex);
        inputElement.classList.add('placeinput');
        cellinput.append(inputElement);
    })
    entireDisplay.append(cellinput);
})
 
keybutton.forEach(key => { 
    const buttonKey = document.createElement('button');
    buttonKey.textContent = key;
    buttonKey.setAttribute("id",key);
    buttonKey.addEventListener("click", () => handclick(key));
    keypadDisplay.append(buttonKey);
  });
  
function handclick(key){

    console.log('clicked', key);
    if(key === '<<'){
        deleteLetter()
        console.log('inputguess', inputguess);
        return
    }
    if(key === 'ENTER'){
        checkRow()
        console.log('inputguess', inputguess);
        return
    }
    addLetter(key);
}

function addLetter(letter){

    if(currentTile < 5 && currentRow < 6){
        const Tile = document.getElementById('input-' + currentRow + '-placeinput-' + currentTile);
        Tile.textContent = letter;
        inputguess[currentRow][currentTile] = letter;
        Tile.setAttribute('data', letter);
        currentTile++;
        console.log('inputguess', inputguess);
    } 
}
function deleteLetter(){

    if(currentTile > 0){
    currentTile--;
    const Tile = document.getElementById('input-' + currentRow + '-placeinput-' + currentTile);
    Tile.textContent = '';
    inputguess[currentRow][currentTile] = '';
    Tile.setAttribute('data', '');
    }    
}

function checkRow(){

    const guess = inputguess[currentRow].join('');
    changeColor();

    if(currentTile > 4){
     console.log('guess is ' + guess, 'worlde is ' + wordleWord);
     if(wordleWord == guess){
        showMessage('Magnificient');
        isGameOver = true;
        return
     }else{
        if(currentRow >= 5){
            isGameOver = false;
            showMessage('Game Over')
            return
        }
        if(currentRow < 5){
            currentRow++;
            currentTile = 0;
        }
     }
    }
} 

function showMessage(message){
    const messageElement = document.createElement('p');
    messageElement.textContent = message;
    messageDisplay.append(messageElement);
    setTimeout(() => messageDisplay.removeChild(messageElement), 2000);
}

function changeColor(){
    const rowTiles = document.querySelector('#inputguess-' + currentRow).childNodes;
    rowTiles.forEach((tile, index) =>{
        const dataLetter = tile.getAttribute('data');

        setTimeout(() => {
            

            if(dataLetter == wordleWord[index]){
            tile.classList.add('flip');
            tile.classList.add('green-overlay');
        
            }else if(wordleWord.includes(dataLetter)){
                tile.classList.add('yellow-overlay');

            }else{
                tile.classList.add('grey-overlay');
                 tile.classList.add('flip');
            }
        }, 500 * index)
    })
}