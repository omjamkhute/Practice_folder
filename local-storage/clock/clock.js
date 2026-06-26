const button = document.getElementById('stop-button');
const time = document.getElementById('time');

let alarm = Number(prompt('time','10000'));

 function showTime(){
    const value = new Date();
    const ctime = `${value.getHours()}:${value.getMinutes()}:${value.getSeconds()}`;
    time.innerText = ctime;
}

const interval = setInterval(showTime,1000);

setTimeout(() => {
    clearInterval(interval);
    alert("Clock stopped!");
}, alarm);



 





// function Time(){
//     const currentTime = new Date();
//     alert(currentTime);
// }
// Time();

