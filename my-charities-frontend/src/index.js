const BASE_URL = "http://localhost:3000"
const CHARITIES_URL = '${BASE_URL}/charities'
const USERS_URL = '${BASE_URL}/users'

let glyphStates = {
    "♡": "♥",
    "♥": "♡"
  };

let colorStates = {
    "blue" : "",
    "": "blue"
};

let articleHearts = document.querySelectorAll(".like-glyph");


function likeCallback(e) {
    let heart = e.target;
    heart.innerText = glyphStates[heart.innerText];
    heart.style.color = colorStates[heart.style.color];
}

for (let glyph of articleHearts) {
    glyph.addEventListener("click", likeCallback);
}


function fetchCharities(){
    fetch(CHARITIES_URL)
    .then(res => res.json())
    .then(charities => renderCharities(charities))     
}

function renderCharities(charities){
    mainContainer.innerHTML = ""
    charities.forEach(charity => {
        mainContainer.innerHTML += `<div class="card">
        <img src=${charity.image} class="charity-avatar" />
        <h2>${charity.name}</h2>
        <p><em>${charity.category}</em></p> 
        
        <button onClick=addToList(event) data-charity-id="${charity.id}"> Add To List </button>
        </br>
      </div>`
    })
}
