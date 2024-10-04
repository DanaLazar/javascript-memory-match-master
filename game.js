let firstPick;
let isPaused = true;
let matches;
let totalClicks = 0;
let clickCounts = {};
let bestScore = null;

const clickCard = (e) => {
    const pairCard = e.currentTarget;
    const [front, back] = getFrontAndBackFromCard(pairCard);
    if (front.classList.contains("rotated") || isPaused) {
        return;
    }

    console.log('pairCard', pairCard)
    console.log('front', front)
    console.log('back', back)

    totalClicks++;
    totalClicksElem.innerText = totalClicks;

    const pairKey = pairCard.dataset.pair;
    clickCounts[pairKey] = (clickCounts[pairKey] || 0) + 1;

    isPaused = true;
    rotateElements([front, back]);

    if (!firstPick) {
        firstPick = pairCard;
        isPaused = false;
    } else {
        const secondPair = pairCard.dataset.pair;
        const firstPair = firstPick.dataset.pair;

        if (firstPair !== secondPair) {
            const [firstFront, firstBack] = getFrontAndBackFromCard(firstPick);
            setTimeout(() => {
                rotateElements([front, back, firstFront, firstBack]);
                firstPick = null;
                isPaused = false;
            }, 500);
        } else {
            matches++;
            if (matches === 8) {
                showGameResults();
                if (!bestScore || totalClicks < bestScore) {
                    bestScore = totalClicks;
                    bestScoreElem.innerText = bestScore;
                    announcementElem.innerText = 'New Best Score!';
                }
            }
            firstPick = null;
            isPaused = false;
        }
    }
};

const resetGame = (pairs) => {
    game.innerHTML = '';
    mostClickedPairsElem.innerHTML = '';
    isPaused = true;
    firstPick = null;
    matches = 0;
    totalClicks = 0;
    clickCounts = {};

    resetUI();

    setTimeout(() => {
        displayPairs(pairs);
        isPaused = false;
    }, 200);
};