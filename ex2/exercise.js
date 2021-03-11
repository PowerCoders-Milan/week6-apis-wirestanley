var stan = "st";

function weather(city) {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=bf15a3a3727eeba9a6a6e7a1cfce7383&units=metric`)
    .then(response => response.json())
    .then(data => {
      var body = document.querySelector("body")
      var div = document.createElement("div")
      var p1 = document.createElement("p")
      var p2 = document.createElement("p")
      var p3 = document.createElement("p")
      body.appendChild(div)
      div.appendChild(p1)
      div.appendChild(p2)
      div.appendChild(p3)
      p1.innerHTML = data.name
      p2.innerHTML = data.main.temp
      p3.innerHTML = data.weather[0].description
      console.log(data);
      console.log(data.main);
      console.log(data.weather[2]);
    });

}
weather ("Turin");
weather ("London");
weather ("Milan");

/*fetch(`https://api.openweathermap.org/data/2.5/weather?q=${stanley}&appid=bf15a3a3727eeba9a6a6e7a1cfce7383&units=metric`)
.then(response => response.json())
  .then(data => {
      var body = document.querySelector("body")
      var div = document.createElement("div")
      var p1 = document.createElement("p")
      var p2 = document.createElement("p")
      var p3 = document.createElement("p")
      body.appendChild(div)
      div.appendChild(p1)
      div.appendChild(p2)
      div.appendChild(p3)
      p1.innerHTML = data.name
      p2.innerHTML = data.main.temp
      p3.innerHTML = data.weather[0].description
      console.log(data);
      console.log(data.main);
      console.log(data.weather[2]);
});*/




/*fetch('https://api.openweathermap.org/data/2.5/weather?q=Turin,it&appid=bf15a3a3727eeba9a6a6e7a1cfce7383')
.then(response => response.json())
  .then(data => {
      var body = document.querySelector("body")
      var div = document.createElement("div")
      var p1 = document.createElement("p")
      var p2 = document.createElement("p")
      var p3 = document.createElement("p")
      body.appendChild(div)
      div.appendChild(p1)
      div.appendChild(p2)
      div.appendChild(p3)
      p1.innerHTML = data.name
      p2.innerHTML = data.main.temp
      p3.innerHTML = data.weather[0].description
      console.log(data);
      console.log(data.main);
      console.log(data.weather[2]);
});*/