let player1 = {
    addScore: document.querySelector('#p1'),
    displayScore: document.querySelector('#score1'),
    score: 0

}
let player2 = {
    addScore: document.querySelector('#p2'),
    displayScore: document.querySelector('#score2'),
    score: 0

}

let reset = document.querySelector('#reset');
let range = document.querySelector('#range');
let limit = parseInt(range.value);
// Range Selector
range.addEventListener('change', function (e) {
    limit = parseInt(range.value);
})

// Reset Button
reset.addEventListener('click', function (e) {
    player1.addScore.disabled = false;
    player2.addScore.disabled = false;
    player1.displayScore.textContent = '0';
    player2.displayScore.textContent = '0';
    player1.score = 0;
    player2.score = 0;
    player1.displayScore.classList.remove('green', 'red');
    player2.displayScore.classList.remove('red', 'green');

})


//  Click event For Player1
player1.addScore.addEventListener('click', function (e) {
    if (player1.score !== limit) {
        player1.score++;
        player1.displayScore.textContent = player1.score;
    }
    if (player1.score === limit) {
        player2.addScore.disabled = true;
        player1.addScore.disabled = true;
        player1.displayScore.classList.add('green');
        player2.displayScore.classList.add('red');
    }
})

//Click Event For Player2
player2.addScore.addEventListener('click', function (e) {
    if (player2.score !== limit) {
        player2.score++;
        player2.displayScore.textContent = player2.score;
    }
    if (player2.score === limit) {
        player1.addScore.disabled = true;
        player2.addScore.disabled = true;
        player2.displayScore.classList.add('green');
        player1.displayScore.classList.add('red');
    }

})