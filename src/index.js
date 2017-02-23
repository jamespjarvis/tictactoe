import { Game } from './game';
let symbol;
let restartButton = document.querySelector('#restart');
restartButton.addEventListener('click', restartGame);

let symbols = document.querySelectorAll('.symbols span');
symbols.forEach(symbol => symbol.addEventListener('click', symbolClickHandler));

function symbolClickHandler(e) {
    symbol = e.target.dataset.symbol === 'X' ? '✖' : '⭗';
    document.body.removeChild(document.querySelector('.chooseSymbol'));
    document.querySelector('.main').style.display = '';
    startGame(symbol);
}

function startGame(symbol) {
    document.querySelector('#restart').disabled = true;
    document.querySelectorAll('.cell').forEach(cell => {
        cell.classList.remove('occupied');
        cell.textContent = '';
    });
    let difficulty = 'hard';
    let game = new Game(difficulty, symbol);
    game.start();
}

function restartGame() {
    startGame(symbol);
}
