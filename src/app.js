function rickandmortyapi(){

fetch('https://rickandmortyapi.com/api/character')
.then(response => response.json())
.then(data => {
  let body ="";
  let head="";
  let json = document.getElementById("table")
  head+=`
  <tr id=titles>
  <th class="titles">ID</th>
  <th class="titles">Nombre</th>
  <th class="titles">Estado</th>
  <th class="titles">Especie</th>
  <th class="titles">Origen</th>
  <th class="titles">Imagen</th>
  </tr>
  `
  
  data.results.forEach(element => {
    body += `
    <tr>
        <th style="border: 1px solid rgb(0, 0, 0);">${element.id}</th>
        <td style="border: 1px solid rgb(0, 0, 0);">${element.name}</td>
        <td style="border: 1px solid rgb(0, 0, 0);">${element.status}</td>
        <td style="border: 1px solid rgb(0, 0, 0);">${element.species}</td>
        <td style="border: 1px solid rgb(0, 0, 0);">${element.origin.name}</td>
        <td style="border: 1px solid rgb(0, 0, 0);"><img src="${element.image}" width="50%" height="80%"></td>
    </tr>
    
    `
})
json.innerHTML = head+body;
});
}

function rickandmortyapi2(){
fetch('https://rickandmortyapi.com/api/character/?page=2')

.then(response => response.json())
.then(data => {
  let body ="";
  let head="";
  let json = document.getElementById("table")
  head+=`
  <tr id=titles>
  <th class="titles">ID</th>
  <th class="titles">Nombre</th>
  <th class="titles">Estado</th>
  <th class="titles">Especie</th>
  <th class="titles">Origen</th>
  <th class="titles">Imagen</th>
  </tr>
  `
  data.results.forEach(element => {
    body += `
    <tr>
        <th style="border: 1px solid rgb(0, 0, 0);">${element.id}</th>
        <td style="border: 1px solid rgb(0, 0, 0);">${element.name}</td>
        <td style="border: 1px solid rgb(0, 0, 0);">${element.status}</td>
        <td style="border: 1px solid rgb(0, 0, 0);">${element.species}</td>
        <td style="border: 1px solid rgb(0, 0, 0);">${element.origin.name}</td>
        <td style="border: 1px solid rgb(0, 0, 0);"><img src="${element.image}" width="50%" height="80%"></td>
    </tr>
    
    `
})
json.innerHTML =  head+body;

});
}
function pokeapi(){fetch('https://pokeapi.co/api/v2/pokemon/')

.then(response => response.json())
.then(data => {
  let body ="";
  let head="";
  let json = document.getElementById("table")
  head +=`
    <tr id="titles">
    <th class="titles">Name</th>
    <th class="titles">URL</th>
    </tr>
  
  `
  data.results.forEach(element => {
    body += `
    <tr>
        
        <th style="border: 1px solid rgb(0, 0, 0);">${element.name}</td>
        <td style="border: 1px solid rgb(0, 0, 0);">${element.url}</th>
      
    </tr>
    
    `
})
json.innerHTML =  head+body;

});
}
   
   

