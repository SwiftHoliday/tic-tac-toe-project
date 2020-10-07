/*----- constants -----*/
// Model

const COMBOS = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

const LOOKUP = {
'1': 'X',
'-1': '0',
'null': ''
};

/*----- app's state (variables) -----*/

// Model

let turn, winner, gameboard;


/*----- cached element references -----*/

// View

const $gameboardEl = $('#gameboard');
const $squareEls = $('.square');
const $buttonEl = $('#reset-btn');
const $messageEl = $('#message');

/*----- event listeners -----*/

// Controller
$gameboardEl.on('click', handleMove);
$buttonEl.on('click', handleInit);

/*----- functions -----*/

// Controller
handleInit()

function handleInit() {
    // This function will do two things
    // 1) Start game
    // A) creat an empty gameboard
    gameboard = new Array(9).fill().map(() => null);
    // B) assign the turn - player 1 goes first - X goes first
    turn = 1;
    // C) Set winner to false
    winner = false;
    // D) Visualize the state of the game to the DOM - render()
    render();
    // 2) Reset Game
}
function checkWinner() {
    for(let i = 0; i < COMBOS.length; i++) {
    if(Math.abs(
        gameboard[COMBOS[i][0]] + 
        gameboard[COMBOS[i][1]] + 
        gameboard[COMBOS[i][2]]) === 3) {
            return gameboard[COMBOS[i][0]]
        }
    } if(gameboard.includes(null)) return false;
    return 'Tie'
}

function handleMove(event){
   const position = event.target.dataset.index;
   if(winner || gameboard[position] !== null) return;
   gameboard[position] = turn;

winner = checkWinner();

   turn *= -1;
   render();
}

function render() {
    gameboard.forEach(function(value, index) {
        $($squareEls[index]).text(LOOKUP[value])
    });
    if(!winner) {
        $messageEl.text(`It's Player ${LOOKUP[turn]}'s Turn`);
    } else if(winner === 'Tie ') {
        $messageEl.text('Tie Game');
    } else {
        $messageEl.text(`Congratulations ${LOOKUP[winner]} Wins`);
    }
}