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