
const apiKey = 'OxYbdNDyahk6Yff8McT5QyT9NXwzcKgpQatfCScf';
const apiUrl = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}`;


fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
        console.log(data);
        document.getElementById("title").innerText = data.title;
        document.getElementById("image").src = data.url;
        document.getElementById("explanation").innerText = data.explanation;
    })
    .catch(error => console.log('Error', error));


$(document).ready(function () {
    $("#infoBtn").click(function () {
        $("#explanation").fadeIn();
        $("#closeBtn").show();
        $("#infoBtn").hide();
        $("#closeBtn").click(function () {
            $("#explanation").fadeOut();
            $("#infoBtn").show();
            $("#closeBtn").hide();

        })
    })
}); 