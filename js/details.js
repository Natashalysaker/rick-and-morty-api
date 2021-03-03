const queryString = document.location.search;
const params = new URLSearchParams(queryString);


let id;
if (params.has("id")) {
    id = params.get("id");
} else {
    document.location.herf = "index.html";
}


const baseUrl = "https://rickandmortyapi.com/api/character/";
const detailslUrl = `${baseUrl}${id}`;


function handelRespons(response) {
    return response.json();
    }

function handeljson(json) {
    creatDetails(json);
    }

function Handelerror(error) {
    console.dir(error);
  document.location.href = "error.html";
    }   

fetch(detailslUrl)
.then(handelRespons)
.then(handeljson)
.catch(Handelerror)

function creatDetails(json) {

const container = document.querySelector(".detail-container");
const title = document.querySelector("title");

    let titleHtml = "";
    let html = "";

titleHtml = `${json.name}`;
title.innerHTML = titleHtml;

html = `<div class="detail-container">
    <img class="details-image" src= ${json.image} alt="Character Name" />
    <div class="detail-details">
        <h1>${json.name}</h1>
        <p>Status: <span class="value" id="status"> ${json.status}</span></p>
        <p>Species: <span class="value" id="species">${json.species}</span></p>
        <p>Origin: <span class="value" id="origin">${json.origin.name}</span></p>
        <p>Location: <span class="value" id="location">${json.location.name}</span></p>                   
    </div>
</div>`;

container.innerHTML = html;
};