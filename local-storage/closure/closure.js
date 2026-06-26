const button = document.getElementById("click-btn");
const dname = document.getElementById('name');


//----------------------------------------------------------
// const username = prompt('Enter name',"garuda");

// function main(){

//   const name = username;
//    // inner function is a closure
//   function child(){
//     console.log(name);
//     dname.innerText = name;
//   }
//   return child;
// }

// let fn = main();

// button.addEventListener('click',fn)
//-----------------------------------------------------------------

//---------------------------------------------------------------
     function textSiza(){
         let size = 10; 
         let num = 1;
     function changeSize(){
       dname.style.fontSize = `${size}px`;
                size = size + 10;
        dname.style.color = 'red';
        dname.style.fontFamily = 'cursive';
        dname.innerText = num;
        num++;
        }
        
       return changeSize;
    }

         const nameSize = textSiza();

     button.addEventListener('click',nameSize);
//-----------------------------------------------------------------

// counter-------------------------------------------

// function counter(){
//     let countno =100 ;
//     function count(){
//         dname.innerText = countno;
//         countno++;
//         dname.style.fontFamily = 'cursive';
//     }
//     return count;
// }

// const c1 = counter();


// button.addEventListener('click',c1);