let currentPlayer = "X";  // first player default val X
let arr = Array(9).fill(null);
const res = document.getElementById('res');
let gameOver = false;
function checkWinner() {
    if(   // row
        (arr[0] !== null && arr[0] == arr[1] && arr[1] == arr[2] ) ||
        (arr[3] !== null && arr[3] == arr[4] && arr[4] == arr[5] ) ||
        (arr[6] !== null && arr[6] == arr[7] && arr[7] == arr[8] ) ||
          // column
        (arr[0] !== null && arr[0] == arr[3] && arr[3] == arr[6] ) ||
        (arr[1] !== null && arr[1] == arr[4] && arr[4] == arr[7] ) ||
        (arr[2] !== null && arr[2] == arr[5] && arr[5] == arr[8] ) ||
        // digonal
        (arr[0] !== null && arr[0] == arr[4] && arr[4] == arr[8] ) ||
        (arr[2] !== null && arr[2] == arr[4] && arr[4] == arr[6] ) 
    ){
         res.innerText = `Winner is ${currentPlayer}`;
         res.style.color = 'green';
             gameOver = true;
             return;
        // document.write(`Winnner is ${currentPlayer}`);
    }
    // draw
     if (!arr.includes(null)) {
        res.innerText = "It's a Draw!";
        res.style.color = "red";
        gameOver = true;
    }

}


function handleClick(el){
    if(gameOver)return;
    const id = Number(el.id);
    if(arr[id] != null) return;
    arr[id] = currentPlayer;
    el.innerText = currentPlayer;
    checkWinner();
    currentPlayer = currentPlayer === "X" ? "O" : "X";
    
}

// reset button

const reset = document.getElementById("reset");

function resetGame(){
    // Reset player
    currentPlayer = "X";
    gameOver = false;
    // Reset array
    arr = Array(9).fill(null);

    // Clear all boxes
    const col = document.querySelectorAll(".col");

    col.forEach(box => {
        box.innerText = "";
    });

    // result also reset
      res.innerText ="Result";
       res.style.color = "black";
    // Clear winner message (if you have one)
   // gpt1 document.getElementById("winner").innerText = "";
}

reset.addEventListener('click',resetGame);