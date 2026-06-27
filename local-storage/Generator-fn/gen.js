// iterator 
const output = document.getElementById('output');


for(const val of [1,2,3,4]){
    output.innerHTML +=  val+ " ";
}

// cutomize iterator
// but this is not able to use js built in js iterable(loop)
function makeIterator( start=0, end=Infinity, step = 1){
     let nextStart = start;
     let iterationCount = 0;


     return{
        next() {
            let result ;
            if(iterationCount < end){
               result = { value:nextStart , done:false}
               nextStart = nextStart + step;
               iterationCount++;
               return result;
            }
            else{
                return { value: iterationCount, done: true}
            }
        },
     };
}

const customOut = document.getElementById("customOut");

function loop(){
const myIterator = makeIterator(1,10,5);
let result = myIterator.next();

while(!result.done){
    console.log(result.value);
    customOut.innerText += result.value;
    result = myIterator.next();
}
}

document.getElementById("btn").addEventListener('click',loop);