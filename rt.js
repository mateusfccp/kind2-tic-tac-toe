class KApp {
    constructor(app) {
	return app
	(null)
	(init => tick => when => {
	    this.init = init;
	    this.tick = tick;
	    this.when = when;
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
	    this.board = listToJson((move) => new KMove(move), board);
	})

	// draw
	(board => {
	    this.kind = 'draw';
	    this.board = listToJson((move) => new KMove(move), board);
	})

	// winner
	(player => board => {
	    this.kind = 'winner';
	    this.player = new KPlayer(player);
	    this.board = listToJson((move) => new KMove(move), board);
	})
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
}

class KMove {
    constructor(move) {
	move(null)
	(player => cell => {
	    this.player =  new KPlayer(player);
	    this.cell = new KPair(cell);
	});
    }

    draw() {
	const context = canvas.getContext('2d');
	const fontSize = canvas.width / 4.0;
	context.font = `bold ${fontSize}px serif`;

	let text;
	
	if (this.player.type == 'X') {
	    text = '❌';
	} else if (this.player.type = 'O') {
	    text = '⭕️';
	} else {
	    throw new Error(`Player type should be either 'X' or 'O'. Got ${this.player.type}`);
	}

	const cellWidth = canvas.width / 3.0;
	const cellHeight = canvas.height / 3.0;
	const x = this.cell.fst * cellWidth + (cellWidth - fontSize) / 2.0;
	const y = this.cell.snd * cellHeight + fontSize;
	context.fillText(text, x, y);
    }
}

function listToJson(map, list) { 
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

    // Draw first vertical line
    context.moveTo(canvas.width / 3.0, 0.0);
    context.lineTo(canvas.width / 3.0, canvas.height);

    // Draw second vertical line
    context.moveTo(canvas.width / 3.0 * 2.0, 0.0);
    context.lineTo(canvas.width / 3.0 * 2.0, canvas.height);

    // Draw first horizontal line
    context.moveTo(0.0, canvas.height / 3.0);
    context.lineTo(canvas.width, canvas.height / 3.0);

    // Draw second horizontal line
    context.moveTo(0.0, canvas.height / 3.0 * 2.0);
    context.lineTo(canvas.width, canvas.height / 3.0 * 2.0);

    context.stroke();
}

function drawCursor(position) {
    const context = canvas.getContext('2d');
    context.fillStyle = '#f09';
    
    const rectWidth = canvas.width / 3.0;
    const rectHeight = canvas.height / 3.0;
    const x = rectWidth * position.fst;
    const y = rectHeight * position.snd;
    
    context.fillRect(x, y, rectWidth, rectHeight);
}

function draw(canvas, state) {
    const context = canvas.getContext('2d');

    context.clearRect(0, 0, canvas.width, canvas.height);

    if (state.kind === 'inProgress') {
	drawCursor(state.cursorPosition);
    } else if (state.kind === 'draw') {
    } else if (state.kind === 'winner') {
    } else {
	throw Error(`GameState kind should be either 'inProgress', 'draw' or 'winner'. Got '${state.kind}'.`)
    }

    drawBoard();
    
    for (move of state.board) {
	move.draw();
    }
};

if (typeof window !== 'undefined') {
    window.onload = function () {
	let canvas    = document.getElementById('canvas');
	let app       = new KApp(main);
	let state     = app.init;
	let lastState = null;

	function tick() {
	    state = app.tick(state);
	    kGameState = new KGameState(state);

	    if (R.not(R.equals(lastState, state))) {
		console.log('State: ', kGameState);
		draw(canvas, kGameState);
		lastState = state;
	    }
	};

	setInterval(tick, 100 / 3);

	// implement a keyboard event handler
	// when the user presses a key, it will call the global app.when
	// function and update the global state mutably
	document.addEventListener(
	    'keydown',
	    function(event) {
		// Convert the key code to a number
		const keyCode = event.keyCode || event.which;

		console.log("->", keyCode);
		
		// Call the 'when' function of the app with the current state and key code
		state = app.when(keyCode)(state);
	    },
	);
    };
}