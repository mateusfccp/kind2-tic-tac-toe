class KApp {
    constructor(app) {
	return app
	(null)
	(init => when => debug => {
	    this.init = init;
	    this.when = when;
	    this.debug = listFromKind2((p) => p, debug);
	});
    }
}

class KGameState {
    constructor(gameState) {
	return gameState
	(null)
	
	// inProgress
	(currentPlayer => cursorPosition => board => {
	    this.kind = 'inProgress';
	    this.currentPlayer = new KPlayer(currentPlayer);
	    this.cursorPosition = new KPair(cursorPosition);
	    this.board = listFromKind2((move) => KMove.fromKind2(move), board);
	})

	// draw
	(board => {
	    this.kind = 'draw';
	    this.board = listFromKind2((move) => KMove.fromKind2(move), board);
	})

	// winner
	(player => board => {
	    this.kind = 'winner';
	    this.player = new KPlayer(player);
	    this.board = listFromKind2((move) => KMove.fromKind2(move), board);
	})
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
	context.font = `normal ${fontSize}px sans`;

	let text;
	
	if (this.player.type == 'X') {
	    text = '❌';
	} else if (this.player.type = 'O') {
	    text = '⭕️';
	} else {
	    throw new Error(`Player type should be either 'X' or 'O'. Got ${this.player.type}`);
	}

	const cellWidth = width / 3.0;
	const cellHeight = height / 3.0;
	const x = this.cell.fst * cellWidth + (cellWidth - fontSize) / 2.0;
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

function draw(canvas, state) {
    const context = canvas.getContext('2d');

    context.clearRect(0, 0, canvas.width, canvas.height);

    if (state.kind === 'inProgress') {
	drawCursor(state);
    }

    drawBoard();

    for (move of state.board) {
	move.draw();
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
	
	let app       = new KApp(main);
	console.log('App: ', app);
	let state     = app.init;
	let kState    = new KGameState(state);
	let lastState = null;

	function tick() {
	    kState = new KGameState(state);

	    if (R.not(R.equals(lastState, kState))) {
		console.log('State: ', kState);
		draw(canvas, kState);
		lastState = kState;
	    }

	    // window.requestAnimationFrame(tick);
	};

	tick();

	// window.requestAnimationFrame(tick);

	// implement a keyboard event handler
	// when the user presses a key, it will call the global app.when
	// function and update the global state mutably
	document.addEventListener(
	    'keydown',
	    function(event) {
		// Convert the key code to a number
		const keyCode = event.keyCode || event.which;
		
		// Call the 'when' function of the app with the current state and key code
		state = app.when(keyCode)(state);
		tick();
	    },
	);
    };
}
