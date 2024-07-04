
const apiKey = 'OxYbdNDyahk6Yff8McT5QyT9NXwzcKgpQatfCScf';
const apiUrl = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}`;
const apiUrlTwo = `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=${apiKey}`

fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
        console.log(data);
        document.getElementById("title").innerText = data.title;
        document.getElementById("image").src = data.url;
        document.getElementById("explanation").innerText = data.explanation;
        

    })
    .catch(error => console.log('Error', error));


fetch(apiUrlTwo)
    .then(response => response.json())
    .then(data => {
        console.log(data);
        document.getElementById("image2").src = data.photos[0].img_src;
        document.getElementById("hover").innerText = data.photos[0].rover.name;
        
    

    })
    .catch(error => console.log('Error', error));