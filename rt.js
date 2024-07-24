'use strict';

class KGame {
    constructor(game) {
	return game
	(null)
	(init => when => {
	    this.init = init;
	    this.when = when;
	});
    }
}

class KGameState {
    constructor(gameState) {
	return gameState
	(null)
	
	// in_progress
	(currentPlayer => cursorPosition => board => debugMode => {
	    this.kind = 'in_progress';
	    this.currentPlayer = new KPlayer(currentPlayer);
	    this.cursorPosition = new KPair(cursorPosition);
	    this.board = listFromKind2((move) => KMove.fromKind2(move), board);
	    this.debugMode = boolFromKind2(debugMode);
	})

	// draw
	(board => debugMode => {
	    this.kind = 'draw';
	    this.board = listFromKind2((move) => KMove.fromKind2(move), board);
	    this.debugMode = boolFromKind2(debugMode);
	})

	// winner
	(player => board => debugMode => {
	    this.kind = 'winner';
	    this.player = new KPlayer(player);
	    this.board = listFromKind2((move) => KMove.fromKind2(move), board);
	    this.debugMode = boolFromKind2(debugMode);
	});
    }

    get cursorCellAvailable() {
	return !this.board.some((move) => move.cell.eq(this.cursorPosition));
    }
}


class KPlayer {
    constructor(player) {
	var type = player(null)
	(() => 'X')
	(() => 'O')();

	this.type = type;
    }

    get emoji() {
	switch (this.type) {
	case 'X':
	    return '❌';
	case 'O':
	    return '⭕️';
	default:
	    throw new Error(`Player type should be either 'X' or 'O'. Got ${this.player.type}`);
	}
    }
}

class KPair {
    constructor(pair) {
	return pair(null)
	(fst => snd => {
	    this.fst = fst;
	    this.snd = snd;
	});
    }

    eq(pair) {
	return this.fst == pair.fst
	    && this.snd == pair.snd;
    }
}

class KMove {
    constructor(player, cell) {
	this.player = player;
	this.cell = cell;
    }

    static fromKind2(move) {
	return move(null)
	(player => cell =>
	    new KMove(
		new KPlayer(player),
		new KPair(cell),
	    ),
	);
    }

    draw() {
	const context = canvas.getContext('2d');
	const dpr = window.devicePixelRatio;
	const width = canvas.width / dpr;
	const height = canvas.height / dpr;
	
	const fontSize = width / 4.0;
	context.textAlign = 'center';
	context.font = `normal ${fontSize}px sans`;

	const text = this.player.emoji;
	const cellWidth = width / 3.0;
	const cellHeight = height / 3.0;
	const x = this.cell.fst * cellWidth + cellWidth / 2.0;
	const y = this.cell.snd * cellHeight + fontSize;
	context.fillText(text, x, y);
    }
}

function boolFromKind2(bool) {
    return bool(null)
    (() => true)
    (() => false)();
}

function listFromKind2(map, list) { 
    const result = [];
    
    let current = list;
    while (true) {
	var isNil = current(null)
	(head => tail => {
            result.push(map(head));
            current = tail;
            return false;
	})
	(true);
	
	if (isNil) break;
    }

    return result;
};

function drawBoard() {
    const context = canvas.getContext('2d');

    context.lineWidth = 5.0;
    context.beginPath();

    const dpr = window.devicePixelRatio;
    const width = canvas.width / dpr;
    const height = canvas.height / dpr;

    // Draw first vertical line
    context.moveTo(width / 3.0, 0.0);
    context.lineTo(width / 3.0, height);

    // Draw second vertical line
    context.moveTo(width / 3.0 * 2.0, 0.0);
    context.lineTo(width / 3.0 * 2.0, height);

    // Draw first horizontal line
    context.moveTo(0.0, height / 3.0);
    context.lineTo(width, height / 3.0);

    // Draw second horizontal line
    context.moveTo(0.0, height / 3.0 * 2.0);
    context.lineTo(width, height / 3.0 * 2.0);

    context.stroke();
}

function drawCursor(state) {
    const context = canvas.getContext('2d');
    
    const dpr = window.devicePixelRatio;
    const width = canvas.width / dpr;
    const height = canvas.height / dpr;
    
    const rectWidth = width / 3.0;
    const rectHeight = height / 3.0;
    
    const x = rectWidth * state.cursorPosition.fst;
    const y = rectHeight * state.cursorPosition.snd;

    context.fillStyle = state.cursorCellAvailable
	? '#99DDFF33'
	: '#FF330022';
    context.fillRect(x, y, rectWidth, rectHeight);

    if (state.cursorCellAvailable) {
	const potentialMove = new KMove(state.currentPlayer, state.cursorPosition);
	potentialMove.draw();
    }

    context.fillStyle = "#000000";
}

function drawWinnerMessage(player) {
    const context = canvas.getContext('2d');
    const dpr = window.devicePixelRatio;
    const width = canvas.width / dpr;
    const height = canvas.height / dpr;

    context.fillStyle = '#FFFFFFBB';
    context.fillRect(0, 0, width, height);

    context.textAlign = 'center';
    context.font = `normal ${24 * dpr}px sans-serif`;
    context.fillStyle = 'black';
    context.fillText(`Winner: ${player.emoji}`, width / 2.0, height / 2.0);
}

function drawDrawMessage() {
    const context = canvas.getContext('2d');
    const dpr = window.devicePixelRatio;
    const width = canvas.width / dpr;
    const height = canvas.height / dpr;

    context.fillStyle = '#FFFFFFBB';
    context.fillRect(0, 0, width, height);

    context.textAlign = 'center';
    context.font = `normal ${24 * dpr}px sans-serif`;
    context.fillStyle = 'black';
    context.fillText('Draw', width / 2.0, height / 2.0);
}

function draw(canvas, state) {
    const context = canvas.getContext('2d');

    context.clearRect(0, 0, canvas.width, canvas.height);

    if (state.kind === 'in_progress') {
	drawCursor(state);
    }

    drawBoard();

    for (const move of state.board) {
	move.draw();
    }

    switch (state.kind) {
    case 'winner':
	drawWinnerMessage(state.player);
	break;
    case 'draw':
	drawDrawMessage();
	break;
    }
};

if (typeof window !== 'undefined') {
    window.onload = function () {
	let canvas = document.getElementById('canvas');
	const dpr = window.devicePixelRatio;
	const rect = canvas.getBoundingClientRect();

	// Set the "actual" size of the canvas
	canvas.width = rect.width * dpr;
	canvas.height = rect.height * dpr;

	// Scale the context to ensure correct drawing operations
	const context = canvas.getContext('2d');
	context.scale(dpr, dpr);

	// Set the "drawn" size of the canvas
	canvas.style.width = `${rect.width}px`;
	canvas.style.height = `${rect.height}px`;
	
	let game      = new KGame(main);
	let state     = game.init;
	let kState    = new KGameState(state);
	let lastState = null;

	function tick() {
	    kState = new KGameState(state);

	    if (R.not(R.equals(lastState, kState))) {
		console.log('State: ', kState);
		draw(canvas, kState);
		lastState = kState;
	    }
	};

	tick();
	
	document.addEventListener(
	    'keydown',
	    function(event) {
		const keyCode = event.keyCode || event.which;
		state = game.when(keyCode)(state);
		tick();
	    },
	);
    };
}
