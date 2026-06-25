const loc = document.getElementById('location');
const button = document.getElementById('get-loc');

async function getData(lat,long) {
    // we can insert value dynamically
    const promise = await fetch(
        `https://api.weatherapi.com/v1/current.json?key=4df1994539eb4a43a4e193129262506&q=${lat},${long}&aqi=yes`
    );
    // parse into json -- json bydefault return promis
    return await promise.json()
}


async function gotLoc(position){
   let result = await getData(position.coords.latitude,position.coords.longitude);
   console.log(result);
   alert(result.location.region);
  loc.innerHTML = `
    ${result.location.name},
    ${result.location.region},
    ${result.location.country},
    ${result.current.temp_c}

`;
}



function failed(){
    alert('turn on gps');
}

button.addEventListener('click', async () =>{
     navigator.geolocation.getCurrentPosition( gotLoc, failed )
   
});