const BASE_URL = "http://localhost:3000"
const CHARITIES_URL = `${BASE_URL}/charities`;

const signUpForm = document.querySelector(".container")
const addUserForm = document.querySelector(".signup-form")
const inputFields = document.querySelectorAll(".input-text")
const signUpBtnPhrase = document.querySelector(".sign-up-btn")
const mainContainer = document.querySelector("main")
const logoutBtn = document.querySelector(".logout-btn")
const sortOptions = document.querySelector('.sort-menus')

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

sortOptions.addEventListener('change', function(e){
    fetch(BASE_URL + `/${e.target.value}`)
    .then(res => res.json())
    .then(charities => renderCharities(charities))
})


function fetchCharities() {
    fetch(CHARITIES_URL)
      .then((res) => res.json())
      .then((charities) => renderCharities(charities));
  }
  
  function renderCharities(charities) {
    console.log(charities);
    const mainContainer = document.getElementById('main-container');
    charities.forEach((charity) => {
      mainContainer.innerHTML += `<div class="card">
          <img src=${charity.image} class="charity-avatar" />
          <h2>${charity.name}</h2>
          <p><em>${charity.category}</em></p>
  
          <button onClick=addToList(event) data-charity-id="${charity.id}"> Add To List </button>
          </br>
        </div>`;
    });
  }

fetchCharities();

