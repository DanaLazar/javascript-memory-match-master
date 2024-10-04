//Display cards
const displayPairs = (pairs) => {
    const cards = [];

    if (pairs) {
        pairs.forEach((pair, index) => {
            const number = Object.keys(pair)[0];
            const square = pair[number];

            cards.push(`
      <div class="card" onclick="clickCard(event)" style="background-color:${colors[index + 1]}" data-pair="${number}-${square}">
        <div class="front"></div>
        <div class="back rotated">
          <h2>${number}</h2>
        </div>
      </div>
      `);

            cards.push(`
      <div class="card" onclick="clickCard(event)" style="background-color:${colors[index + 1]}" data-pair="${number}-${square}">
        <div class="front"></div>
        <div class="back rotated">
          <h2>${square}</h2>
        </div>
      </div>
      `);
        });
    }
    cards.sort(() => Math.random() - 0.5);
    game.innerHTML = cards.join('');
};

// Show most clicked pairs
const showGameResults = () => {
    const sortedPairs = Object.entries(clickCounts).sort((a, b) => b[1] - a[1]).slice(0, 3);
    const mostClickedPairs = sortedPairs.map(pair => pair[0]).join(', ');
    mostClickedPairsElem.innerHTML = `Most Clicked Pairs: <span id="most-clicked-pairs">${mostClickedPairs}</span>`;
};