// URL Grabber
let search = document.getElementById("searchbox");
let searchButton = document.getElementById("searchbtn");


// Firing The Event 

searchButton.addEventListener("click", function () {

    // URL Align

    let countryName = search.value;
    let finalUrl = `https://restcountries.com/v3.1/name/${countryName}?fullText=true`;
    // console.log(finalUrl);

    // Initializing API

    let request = new XMLHttpRequest();
    request.open("GET", finalUrl);
    request.send();

    // Making Container
    let dataContainer = document.getElementById('data');

    // Getting Data 

    request.addEventListener("load", function () {
        //  console.log(this.responseText);
        let data = JSON.parse(this.responseText);
        console.log(data)

        let htmlData = `
        <div class="image" id="image">
                <img src="${data[0].flags.svg}" alt="Country Flag" id="innerimage">
            </div>
            <div class="content" id="content">
                <ul class="contents" id="contents">
                    <li  id="item1">${data[0].name.common}</li>
                    <li class="item" id="item2"><b id="bold">Capital : </b> ${data[0].capital[0]}</li>
                    <li class="item" id="item3"><b id="bold">Population : </b> ${data[0].population}</li>
                    <li class="item" id="item4"><b id="bold">Currency : </b> ${Object.keys(data[0].currencies)[0]}</li>
                    <li class="item" id="item5"><b id="bold">Language : </b> ${Object.values(data[0].languages)[0]}</li>
                </ul>
            </div>
        `
        // dataContainer.insertAdjacentHTML('beforeb',htmlData);
        dataContainer.innerHTML = htmlData
        
    });
});
