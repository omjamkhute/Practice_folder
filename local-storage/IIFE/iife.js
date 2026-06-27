// normal function------------------------------------------

let data 

async function getData(){
 data = await fetch()   
}
getData();   // need call manually | Can be called multiple times.
// Useful for reusable logic.



// iife function------------------------------------------

// run immediatly | Executes only once where it's written.
// Useful for one-time initialization.
// Suppose when your website opens,
//  you want to automatically load the logged-in user's information.

const data = (async () => await fetch())();


