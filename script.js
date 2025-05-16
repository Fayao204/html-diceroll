// Individual Elements
const buttonEl = document.getElementById('roll-button');
const diceEl = document.getElementById('dice');
let history = [];
const listHistory = document.getElementById('roll-history');

// Individual Functions
function addAnimation() {
  diceEl.classList.add('roll-dice');
  setTimeout(removeAnimation, 1000);
}
function removeAnimation() {
  diceEl.classList.remove('roll-dice');
  rollDice();
}
function rollDice() {
  const results = Math.floor(Math.random() * 6) + 1;
  const diceFace = getDiceFace(results);
  diceEl.innerHTML = diceFace;
  history.push(results);
  updateHistoryList();
}
function getDiceFace(results) {
  switch(results) {
    case 1:
      return '&#9856;';
      break;
    case 2:
      return '&#9857;';
      break;
    case 3:
      return '&#9858;';
      break;
    case 4:
      return '&#9859;';
      break;
    case 5:
      return '&#9860;';
      break;
    case 6:
      return '&#9861;';
      break;
    default:
      return '';
  }
}
function updateHistoryList() {
  listHistory.innerHTML = '';
  for(let i = 0; i < history.length; i++) {
    const listItems = document.createElement('li');
    listItems.innerHTML = `Roll ${i + 1}: <span>${getDiceFace(history[i])}</span>`;
    listHistory.appendChild(listItems);
  }
}

// Event Listeners
buttonEl.addEventListener('click', addAnimation);