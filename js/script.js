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
/*----- functions -----*/