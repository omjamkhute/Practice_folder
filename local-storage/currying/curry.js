const button = document.getElementById("btn");


// function add(a){
     
//     return function(b) {

//         return function(c) {
//             return a+b+c;
//         }
//     }
// }


// console.log(add(1)(2)(3));

// real life use auto email sending-------------------------

// function sendAutoE(to){
//     return function(subject){
//         return function(body){
//             alert(`Sending email to --> ${to} Subject : ${subject} Content : : ${body}`);
//         }
//     }
// }
// in ES6------------------------------------------------------imp

const SendAutoE = (to) => (subject) => (body) =>
   alert(`Sending email to --> ${to} Subject : ${subject} Content : : ${body}`);


// suppose we have 3 person for each task
 button.addEventListener('click',()=>{
    let person1 = SendAutoE("jonsnow@gmail.com");
    let person2 = person1(" Winter is comming");
       person2("Night king come close | prepred for war | ");
 });

