const baseUrl = "https://rickandmortyapi.com/api/character/";

function handleResponse(response){
    return response.json();
    
}

function handleJson(json){
    creatCard(json);
    console.dir(json);
}

function handelError(error){
    document.location.href = "error.html";
    
}

fetch(baseUrl)
.then(handleResponse)
.then(handleJson)
.catch(handelError)

function creatCard(json) {

   const results = json.results;
   
   const resultConteiner = document.querySelector(".row.results");

   let html = "";

   results.forEach(card => {  
       console.log(card) 
       html += `<div class="col-sm-6 col-md-4 col-lg-3">                
       <div class="card">    
           <img class="image" src=${card.image} alt="Character Name">
           <div class="details">
               <h4 class="name">${card.name}</h4>
               <p>Type: ${card.type ? card.type : 'Unknown'}</p>    
               <p>Episode count: ${card.episode.length}</p>                                  
               <a class="btn btn-primary" href="details.html?id=${card.id}">Details</a>
           </div>
       </div>
   </div>`;
    
   });

   resultConteiner.innerHTML = html;
}
