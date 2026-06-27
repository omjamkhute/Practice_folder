const button = document.getElementById("btn");
const ans = document.getElementById("res");


// // 1
// function add(a,b){
//     return a+b;
// }
// // 2
// function squre(val){
//     return val*val;
// }
// // 3
// function cube(cu){
//     return cu*cu*cu;
// }
// // ans fn
// function result(a,b){
//     return cube(squre(add(a,b)));
// }

// // 1 add -> 2 squre -> 3 cube -> Ans
// console.log(result(2,4));


//--------------------------------------------------------------
// if we want a function which run in sequence 
// so this approach not optimal , suppose it has no of function 
// if difficult to write

// with the composed function


// user input



function add(a,b){
    return a+b;
}
// 2
function squre(val){
    return val*val;
}
// 3
function cube(val){
    return val*val*val;
}
// 4
function div(val){
    return val / 2;
}

// ans fn-------------------------------------------
// function Compose3(fn1,fn2,fn3,fn4) {
//     return  function (a,b){
//             return fn4(fn3(fn2(fn1(a,b))));
//         };
// }

// with ES6
const Compose3 = (fn1,fn2,fn3,fn4) =>(a,b) =>fn4(fn3(fn2(fn1(a,b))));


function ansButton() {
    const a1 = Number(document.getElementById('numA').value);
    const b1 = Number(document.getElementById('numB').value);

    const task = Compose3(add,squre,cube,div);
    const result = task(a1,b1);
    ans.innerText = result;
}


button.addEventListener('click',ansButton);