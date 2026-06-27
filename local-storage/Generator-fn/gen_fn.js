// // generator function

// function* count(){
//     yield 2;
//     yield 4;
//     yield 6;
//     yield 8;
//     yield 10;
// }

// // with the help of yield key word we can use buitin loop function

// const even = count();

// for(const i of even){
//   console.log(i);
// }

//------------------------------------------------
// own customize iterator using generator function
const ans = document.getElementById("customOut");

function* makeMyIteratorNew(start,end,step){
    for(let i = start; i <= end ; i += step){
        yield i;
    }
}

let one = makeMyIteratorNew(5,20,1);


// function run(){
//     const one = makeMyIteratorNew(5,20,1);

//      for(const val of one){
//     ans.innerText += val;
//     console.log(val);
//     }
// }


const btn = document.getElementById('btn');

btn.addEventListener('click',()=>{
    btn.innerText = one.next().value;
});

// for loop after execution stop 
// but in this we can chanhe according to us