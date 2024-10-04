//Load the initial game
document.addEventListener('DOMContentLoaded', () => {
    const defaultGame = gameTypeSelect.value;
    let pairs;

    if (defaultGame === 'squares') {
        pairs = generateSquaresPairs();
    } else if (defaultGame.startsWith('multiplication-')) {
        const factor = parseInt(defaultGame.split('-')[1], 10);
        pairs = generateMultiplicationPairs(factor);
    } else if (defaultGame === 'multiplicationAll') {
        pairs = generateAllMultiplicationPairs();
    }

    resetGame(pairs);
});

//Choose a certain game
startGameBtn.addEventListener('click', () => {
    const selectedGame = gameTypeSelect.value;
    let pairs;

    if (selectedGame === 'squares') {
        pairs = generateSquaresPairs();
    } else if (selectedGame.startsWith('multiplication-')) {
        const factor = parseInt(selectedGame.split('-')[1], 10);
        pairs = generateMultiplicationPairs(factor);
    } else if (selectedGame === 'multiplicationAll') {
        pairs = generateAllMultiplicationPairs();
    }

    resetGame(pairs);
});

//Reveal all the cards
revealBtn.addEventListener('click', () => {
    const allCards = document.querySelectorAll('.card');
    allCards.forEach(card => {
        const [front, back] = getFrontAndBackFromCard(card);
        if (!front.classList.contains('rotated')) {
            rotateElements([front, back]);
        }
    });
});