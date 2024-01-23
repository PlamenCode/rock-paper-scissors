// player
let you;
let score = 0;

//opponent
let opponent;
let opponentScore = 0;

let choices = ['rock', 'paper', 'scissors'];

window.onload = function(){
    for (let i = 0; i < choices.length; i++) {
        const choice = document.createElement('img');
        choice.id = choices[i];
        choice.src = `./assets/${choices[i]}.png`;
        choice.addEventListener('click', selectChoice);
        document.getElementById('choices').appendChild(choice)
        
    }
};

function selectChoice(){
    you = this.id;
    document.getElementById('your-choice').src = `./assets/${you}.png`;

    //random for opponent
    opponent = choices[Math.floor(Math.random() * 3)];
    document.getElementById('opponent-choice').src = `./assets/${opponent}.png`;

    //check for winner
    if(you == opponent){
        score++;
        opponentScore++;
    } else if (you == 'rock' && opponent == 'scissors'){
        score++;
    } else if (you == 'rock' && opponent == 'paper'){
        opponentScore++;
    } else if (you == 'paper' && opponent == 'scissors'){
        opponentScore++;
    } else if (you == 'paper' && opponent == 'rock'){
        score++;
    } else if (you == 'scissors' && opponent == 'paper'){
        score++;
    } else if (you == 'scissors' && opponent == 'rock'){
        opponentScore++;
    };

    document.getElementById('your-score').innerText = score;
    document.getElementById('opponent-score').innerText = opponentScore;

};