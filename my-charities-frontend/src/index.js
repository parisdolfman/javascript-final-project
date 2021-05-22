const BASE_URL = "http://localhost:3000"
const CHARITIES_URL = `${BASE_URL}/charities`;
const LIST_CHARITIES_URL = `${BASE_URL}/list_charities`;
const LISTS_URL = `${BASE_URL}/lists`;
const USERS_URL = `${BASE_URL}/users`;

const signUpForm = document.querySelector(".container")
const addUserForm = document.querySelector(".signup-form")
const inputFields = document.querySelectorAll(".input-text")
const signUpBtnPhrase = document.querySelector(".sign-up-btn")
const mainContainer = document.querySelector("main")
const listContainer = document.querySelector(".list-container")
const listBtn = document.querySelector(".list-button")
const logoutBtn = document.querySelector(".logout-btn")
const sortOptions = document.querySelector('.sort-menus')

let loggedIn = null
let signedUp = false
let charitiesObj = {}


function hideSignUpForm(){
    signUpForm.style.display = 'none'
}

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
        sessionStorage.setItem('loggedIn', object.id)
        renderLoggedInUser(object)
        }
    )
})

listBtn.addEventListener('mouseover', () =>{
    listContainer.style.display = "block"
})

listBtn.addEventListener('mouseout', () => {
    listContainer.style.display = "none"  
})

logoutBtn.addEventListener('click', () => {
    localStorage.clear(loggedIn)
    window.location.reload()
})

sortOptions.addEventListener('change', function(e){
    fetch(BASE_URL + `/${e.target.value}`)
    .then(res => res.json())
    .then(charities => renderCharities(charities))
})

function renderLoggedInUser(){
    // let currentList = loggedIn.lists[loggedIn.lists.length - 1]
    let welcome = document.querySelector('#welcome-container')
    welcome.innertText = " "
    welcome.innerText = `Welcome ${loggedIn.name}!`
    listContainer.innerHTML = " "
    // for (let name in charitiesObj) {
        // let list_charity = charitiesObj[name][0]
        // listContainer.innerHTML += `<div id="listcharity-${list_charity.id}"><p> <img src=${removeIcon} onClick=removeFromList(event) data-list-charity-id="${list_charity.id}"> 
        // <img src=${addIcon} onClick=addToList(event) data-list-charity-id="${list_charity.id}" data-charity-id="${list_charity.charity.id}"> <strong>${list_charity.charity.name}</strong> </p></div>`
    // }
    fetchCharities() 
}



function fetchCharities() {
    fetch(CHARITIES_URL)
      .then((res) => res.json())
      .then((charities) => renderCharities(charities));
}
fetchCharities();
  
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


function addToList(event){
    let listId = loggedIn.lists[loggedIn.lists.length - 1].id
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
    fetch(LIST_CHARITIES_URL + "/" + listCharity, {
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





