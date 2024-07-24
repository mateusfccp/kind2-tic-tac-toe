# Tic-tac-toe

A simple, two-player[^1], tic-tac-toe implementation in Kind2.

<img width="250" alt="Screenshot 2024-07-24 at 3 28 11 PM" src="https://github.com/user-attachments/assets/25367941-d7f5-4e9e-be95-706a3843d36f">
<img width="250" alt="Screenshot 2024-07-24 at 3 28 06 PM" src="https://github.com/user-attachments/assets/d080016c-137f-4fcf-8bd9-5b692ec00bed">

![output](https://github.com/user-attachments/assets/30fd32ea-e8af-43db-8c1a-b4a500333226)


## Installing

Install [kind2](https://github.com/HigherOrderCO/kind).

As kind2 is currently in very early stages and constantly changing, I note that this game was made and tested against [commit c0121ac](https://github.com/HigherOrderCO/kind/commit/c0121aca10310a76fda4446b4bd66236984ae751). I do not guarantee that this will keep working against later versions, as language and API will probably change a lot.

After installing `kind2`, compile the game by running `make`.

Then, you have to serve the static files locally. I do it by using `python -m http.server 8000`, and then acessing the game in the browser through `http:/localhost:8000`.

The controls are the following:

<img width="513" alt="image" src="https://github.com/user-attachments/assets/d4120203-f05d-4e2b-b8fb-620463f0c013">


[^1]: This is a simple tic-tac-toe system that does not have an AI. Thus, it's better played by two people, although it's more of an exercise than a game intended to be really played by someone.
