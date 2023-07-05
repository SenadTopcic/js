
const prompt = require('prompt-sync')();

const ROWS = 3;
const COLUMNS = 3;

const SYMBOLS_COUNT = {
    '$': 10,
    '#': 7,
    '@': 5,
    '&': 4,
    '7': 3,
    'BAR': 2,
}

const SYMBOL_VALUES ={
    "$": 5,
    "#": 10,
    "@": 20,
    "&": 50,
    "7": 100,
    "BAR": 200,
};

const deposit = () => {
    while (true) {
        const depositAmount = prompt('How much would you like to deposit? ');
  
        const  numberDepositAmount = parseFloat(depositAmount);
        if (isNaN(numberDepositAmount) || numberDepositAmount <= 0) {
            console.log('Please enter a number');
        } else { 
            return numberDepositAmount;
         }    
    }
};

const getNumberOflines = () => {
    while (true) {
        const numberOfLines = prompt('How many lines would you like to bet on? (1-3) ');
        const numberNumberOfLines = parseFloat(numberOfLines);
        if (isNaN(numberNumberOfLines) || numberNumberOfLines <= 0 
        || numberNumberOfLines > 3) {
            console.log('Invalid number of lines');
        } else { 
            return numberNumberOfLines;
         }    
    }
};

const getBetAmount = (balance, numberOfLines) => {
    while (true) {
        const betAmount = prompt('How much would you like to bet per line? ');
        const numberBetAmount = parseFloat(betAmount);
        if (isNaN(numberBetAmount) || numberBetAmount <= 0 
        || numberBetAmount*numberOfLines > balance) {
            console.log('Invalid bet amount');
        } else { 
            return numberBetAmount;
         }    
    }
}

const spinReels = () => {
    const symbols = [];
    for (const [symbol, count] of Object.entries(SYMBOLS_COUNT)) {
        for (let i = 0; i < count; i++) {
            symbols.push(symbol);
        }
    }
    const reels = []
    for (let i = 0; i < COLUMNS; i++) {
        reels.push([]);
        const reelSymbols = [...symbols];
        for (let j = 0; j < ROWS; j++) {
            const randomIndex = Math.floor(Math.random() * reelSymbols.length);
            const selectedSymbol = reelSymbols[randomIndex]
            reels[i].push(selectedSymbol);
            reelSymbols.splice(randomIndex, 1);
        }
    }
    return reels;
}

//transpose the reels
const transpose = (reels) => {
    const rows= [];
    for (let i = 0; i < ROWS; i++) {
        rows.push([]);
        for (let j = 0; j < COLUMNS; j++) {
            rows[i].push(reels[j][i]);
        }
    }
    return rows;
}

//print the reels
const printReels = (reels) => {
    for (let i = 0; i < ROWS; i++) {
        let rowString = '';
        for (let j = 0; j < COLUMNS; j++) {
            if (j === COLUMNS - 1) {
                rowString += reels[i][j];
            }else {
                rowString += reels[i][j] + ' | ';
            }
        }
        console.log(rowString);
    }
}

//check if the user won
const checkWin = (rows, lines, bet) => {
    let winnings = 0;

    for (let row = 0; row < lines; row++) {
        const symbols = rows[row];
        let allMatch = true;

        for (const symbol of symbols) {
            if (symbol != symbols[0]) {
                allMatch = false;
                break;
            }
        }

        if (allMatch) {
            winnings += SYMBOL_VALUES[symbols[0]] * bet;
        }
    }
    return winnings;
};

const game = () => {
    let balance = deposit();
    while (true) {
        console.log(`Balance: $${balance}`);
        const numberOfLines = getNumberOflines();
        const betAmount = getBetAmount(balance, 3);
        balance -= betAmount * numberOfLines;
        const reels = spinReels();
        const rows = transpose(reels);
        console.log('-------------------');
        printReels(rows);
        const winnings = checkWin(rows, numberOfLines, betAmount);
        balance += winnings;
        console.log(`You won $${winnings}!`);
        if (balance <= 0) { 
            console.log('You lost all your money!');
            break;
        }
        const playAgain = prompt('Would you like to play again? (y/n) ');
        if (playAgain !== 'y') {
            break;
        }
    }
}

game()