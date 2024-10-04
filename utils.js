

const generateSquaresPairs = () => {
    const randomIds = new Set();
    const loadedPairs = [];

    while (randomIds.size < 8) {
        const randomNumber = Math.ceil(Math.random() * 19);
        if (!randomIds.has(randomNumber)) {
            randomIds.add(randomNumber);
            const pair = {};
            pair[randomNumber] = Math.pow(randomNumber, 2);
            loadedPairs.push(pair);
        }
    }
    return loadedPairs;
};

const generateMultiplicationPairs = (factor) => {
    const usedNumbers = new Set();
    const pairs = [];

    while (pairs.length < 8) {
        const randomNumber = Math.ceil(Math.random() * 10);

        if (!usedNumbers.has(randomNumber)) {
            usedNumbers.add(randomNumber);
            const pair = {};
            pair[randomNumber] = randomNumber * factor;
            pairs.push(pair);
        }
    }

    return pairs;
};

const generateAllMultiplicationPairs = () => {
    const usedNumbers = new Set();
    const pairs = [];

    while (pairs.length < 8) {
        const randomNumber = Math.ceil(Math.random() * 10);
        const factor = Math.ceil(Math.random() * 9) + 1;

        const pairString = `${randomNumber}-${factor}`;

        if (!usedNumbers.has(pairString)) {
            usedNumbers.add(pairString);
            const pair = {};
            pair[randomNumber] = randomNumber * factor;
            pairs.push(pair);
        }
    }

    return pairs;
};

// Helper function to get front and back of a card
const getFrontAndBackFromCard = (card) => {
    const front = card.querySelector(".front");
    const back = card.querySelector(".back");
    return [front, back];
};

// Helper function to rotate elements
const rotateElements = (elements) => {
    console.log('elements', elements)
    if (typeof elements !== 'object' || !elements.length) return;
    elements.forEach(element => element.classList.toggle('rotated'));
};

// Reset UI elements
const resetUI = () => {
    totalClicksElem.innerText = totalClicks;
    announcementElem.innerText = '';
};