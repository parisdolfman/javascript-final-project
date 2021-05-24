const BASE_URL = 'http://localhost:3000';
const CHARITIES_URL = `${BASE_URL}/charities`;
const LIST_CHARITIES_URL = `${BASE_URL}/list_charities`;
const LISTS_URL = `${BASE_URL}/lists`;
const USERS_URL = `${BASE_URL}/users`;
const USER_CHARITIES = `${BASE_URL}/user_charities`;

const signUpForm = document.querySelector('.container');
const addUserForm = document.querySelector('.signup-form');
const inputFields = document.querySelectorAll('.input-text');
const signUpBtnPhrase = document.querySelector('.sign-up-btn');
const mainContainer = document.querySelector('main');
const listContainer = document.querySelector('.list-container');
const listBtn = document.querySelector('.list-button');
const logoutBtn = document.querySelector('.logout-btn');
const sortOptions = document.querySelector('.sort-menus');

let loggedIn = null;
let signedUp = false;
let charitiesObj = {};

function hideSignUpForm() {
  signUpForm.style.display = 'none';
}

signUpForm.addEventListener('submit', function (e) {
  e.preventDefault();
  fetch(USERS_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify({
      name: inputFields[0].value,
      email: inputFields[1].value,
    }),
  })
    .then((res) => res.json())
    .then(function (object) {
      localStorage.setItem('loggedIn', object.data.id);
      renderLoggedInUser(object.data);
    });
});

listBtn.addEventListener('mouseover', () => {
  listContainer.style.display = 'block';
});

listBtn.addEventListener('mouseout', () => {
  listContainer.style.display = 'none';
});

logoutBtn.addEventListener('click', () => {
  localStorage.clear(loggedIn);
  window.location.reload();
});

sortOptions.addEventListener('change', function (e) {
  fetch(BASE_URL + `/${e.target.value}`)
    .then((res) => res.json())
    .then((charities) => renderCharities(charities));
});

function renderLoggedInUser(loggedIn, userCharityIds) {
  let welcome = document.querySelector('#welcome-container');
  welcome.innertText = ' ';
  welcome.innerText = `Welcome ${loggedIn.name}!`;
  fetchCharities(userCharityIds);
}

function fetchCharities(userCharityIds) {
  fetch(CHARITIES_URL)
    .then((res) => res.json())
    .then((charities) => renderCharities(charities, userCharityIds));
}

function renderCharities(charities, userCharityIds = []) {
  const mainContainer = document.getElementById('main-container');
  mainContainer.innerHTML = '';
  charities.forEach((charity) => {
    mainContainer.innerHTML += `<div class="card">
          <img src=${charity.image} class="charity-avatar" />
          <h2>${charity.name}</h2>
          <p><em>${charity.category}</em></p>

          <button onClick=addToList(event) data-charity-id="${charity.id}"> ${
      userCharityIds.includes(charity.id) ? 'Remove from list' : 'Add to list'
    } </button>
          </br>
        </div>`;
  });
}

function addToList(event) {
  if (!userId()) {
    alert('Please login to continue');
    return;
  }

  fetchUser().then((res) => {
    fetch(USER_CHARITIES, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({
        user_id: userId(),
        charity_id: `${event.target.dataset.charityId}`,
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        renderLoggedInUser(
          res,
          res.data.attributes.charities.map((x) => x.id)
        );
      });
  });
}

function fetchUser() {
  if (userId()) {
    let id = userId();
    return fetch(USERS_URL + '/' + id).then((res) => res.json());
  } else {
    return null;
  }
}

function checkForUser() {
  if (localStorage.loggedIn) {
    let id = localStorage.loggedIn;
    fetch(USERS_URL + '/' + id)
      .then((res) => res.json())
      .then(function (res) {
        renderLoggedInUser(
          res.data.attributes,
          res.data.attributes.charities.map((x) => x.id)
        );
      });
    hideSignUpForm();
  } else {
    signUpForm.style.display = 'block';
  }
}

const userId = () => localStorage.getItem('loggedIn');

checkForUser();
