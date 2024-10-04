const colors = ['#FDDFDF', '#FDDFDF', '#DEFDE0', '#FCF7DE', '#DEF3FD', '#f4e7da', '#d5d5d4', '#fceaff'];

const game = document.getElementById('game');
const totalClicksElem = document.getElementById('total-clicks');
const bestScoreElem = document.getElementById('best-score');
const announcementElem = document.getElementById('best-score-announcement');
const mostClickedPairsElem = document.getElementById('most-clicked-pairs');
const revealBtn = document.getElementById('reveal-btn');
const gameOptions = document.getElementById('game-options');
const gameTypeSelect = document.getElementById('game-type');
const startGameBtn = document.getElementById('start-game-btn');

bestScoreElem.innerText = 'To be decided'