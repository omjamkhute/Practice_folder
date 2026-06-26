const button = document.getElementById("button-c");
const usern = document.getElementById("uname");
const username = document.getElementById("username");

button.addEventListener('click',() =>{
    const value = usern.value;
    localStorage.setItem('user_name',value);

    //username.innerText = value;
    // or
    location.reload();
    
});

window.addEventListener('load', () =>{
    const value = localStorage.getItem('user_name');
    username.innerText = value;

})