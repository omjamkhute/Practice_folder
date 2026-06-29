const input = document.getElementById('number-input');
const result = document.getElementById('result');

function handleClickButton(el){
    console.log(el.innerText);
    const exp = `${input.value}${el.innerText}`;
    input.value = exp;
    // no any symbol in last
    // + 1 then return
    if(['+','-','*','/'].includes(el.innerText)) return;
    // built function in js
    result.value = eval(exp);
}

function reset(){
    input.value ="";
    result.value ="";
}