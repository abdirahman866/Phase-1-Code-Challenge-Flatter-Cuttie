const characterName = document.getElementById("character-name");
const characterImage = document.getElementById("character-image");
const voteCount = document.getElementById("vote-count");
const voteForm = document.getElementById("vote-form");
const voteInput = document.getElementById("vote-input");
const resetBtn = document.getElementById("reset-btn");
const newCharacterForm = document.getElementById("new-character-form");
const newName = document.getElementById("new-name");
const newImage = document.getElementById("new-image");
const characterList = document.getElementById("character-list");

let currentVotes = 0;

voteForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const addedVotes = parseInt(voteInput.value);
  if (!isNaN(addedVotes)) {
    currentVotes += addedVotes;
    voteCount.textContent = currentVotes;
    voteInput.value = "";
  }
});

resetBtn.addEventListener("click", () => {
  currentVotes = 0;
  voteCount.textContent = currentVotes;
});

newCharacterForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const name = newName.value;
  const imageUrl = newImage.value;

  characterName.textContent = name;
  characterImage.src = imageUrl;
  characterImage.alt = name;
  currentVotes = 0;
  voteCount.textContent = currentVotes;

  newName.value = "";
  newImage.value = "";
});
