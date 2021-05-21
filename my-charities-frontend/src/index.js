const BASE_URL = "http://localhost:3000"
const CHARITIES_URL = `${BASE_URL}/charities`;
const USERS_URL = `${BASE_URL}/users`;

const signUpForm = document.querySelector(".container")
const addUserForm = document.querySelector(".signup-form")
const inputFields = document.querySelectorAll(".input-text")
const signUpBtnPhrase = document.querySelector(".sign-up-btn")
const mainContainer = document.querySelector("main")
const logoutBtn = document.querySelector(".logout-btn")
const sortOptions = document.querySelector('.sort-menus')

let loggedIn = null
let signedUp = false

listBtn.addEventListener('mouseover', () =>{
    listContainer.style.display = "block"
})

listBtn.addEventListener('mouseout', () => {
    listContainer.style.display = "none"
    
})

// let glyphStates = {
//     "♡": "♥",
//     "♥": "♡"
//   };

// let colorStates = {
//     "blue" : "",
//     "": "blue"
// };

// let articleHearts = document.querySelectorAll(".like-glyph");


// function likeCallback(e) {
//     let heart = e.target;
//     heart.innerText = glyphStates[heart.innerText];
//     heart.style.color = colorStates[heart.style.color];
// }

// for (let glyph of articleHearts) {
//     glyph.addEventListener("click", likeCallback);
// }

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

function renderLoggedInUser(){
    let currentList = loggedIn.lists[loggedIn.lists.length - 1]
    let welcome = document.querySelector('#welcome')
    welcome.innertText = " "
    welcome.innerText = `Welcome ${loggedIn.name}!`
    listContainer.innerHTML = " "
    updateQuantity()
    for (let name in charitiesObj) {
        let list_charity = charitiesObj[name][0]
        listContainer.innerHTML += `<div id="listcharity-${list_charity.id}"><p> <img src=${removeIcon} onClick=removeFromList(event) data-list-charity-id="${list_charity.id}"> 
        <img src=${addIcon} onClick=addToList(event) data-list-charity-id="${list_charity.id}" data-charity-id="${list_charity.charity.id}"> <strong>${list_charity.charity.name}</strong> </p></div>`
    }
    fetchCharities() 
}

function addToList(event){
    let listId = loggedIn.carts[loggedIn.carts.length - 1].id
    let charityCard = event.target.parentElement
    fetch(LIST_CHARITIES_URL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
        },
        body: JSON.stringify({
            list_id: `${listId}`,
            charity_id: `${event.target.dataset.charityId}`,
        }),
    })
    .then(res => res.json())
    .then(res => {
        loggedIn = res
        renderLoggedInUser()
    })
}

function removeFromList(event){
    let listCharity = event.target.dataset.listCharityId
    fetch(CART_PLANTS_URL + "/" + cartPlant, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
        },
        body: JSON.stringify({
            id: listCharity,
        }),
    })
    .then(res => res.json())
    .then(res => {
        loggedIn = res
        renderLoggedInUser()
    })
}

function checkForUser(){
    if(localStorage.loggedIn){
        let id = localStorage.loggedIn
        fetch(USERS_URL + "/" + id)
        .then(res => res.json())
        .then(function(res){
            loggedIn = res 
            renderLoggedInUser()
        })
        hideSignUpForm();
    } else {
        signUpForm.style.display = "block"
    }
}

checkForUser();



signUpForm.addEventListener('submit', function(e){
    e.preventDefault()
    fetch(USERS_URL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
        },
        body: JSON.stringify({
            name: inputFields[0].value,
            email: inputFields[1].value,
        })
    })
    .then(res => res.json())
    .then(function(object){
        loggedIn = object
        localStorage.loggedIn = object.id
        renderLoggedInUser()
        }
    )
})

function checkForUser(){
    if(localStorage.loggedIn){
        let id = localStorage.loggedIn
        fetch(USERS_URL + "/" + id)
        .then(res => res.json())
        .then(function(res){
            loggedIn = res 
            renderLoggedInUser()
        })
        hideSignUpForm();
    } else {
        signUpForm.style.display = "block"
    }
}

checkForUser()

logoutBtn.addEventListener('click', () => {
    localStorage.clear(loggedIn)
    window.location.reload()
})



