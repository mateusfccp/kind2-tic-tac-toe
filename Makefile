all: main.kind2
	kind2 to-js main > main.js

clean:
	rm -f .main.kindc
	rm -f main.js
