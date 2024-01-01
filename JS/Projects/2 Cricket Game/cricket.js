let computerChoice;
let userChoice;
let resultMsg;
let allButtons = document.querySelectorAll('button'); 
let scorestr = localStorage.getItem('Score');
let score;
resetScore(scorestr);

// This will reset the score 
function resetScore(scorestr) {
    score = scorestr ? JSON.parse(scorestr) : {
        win : 0,
        lost : 0,
        tie : 0,
    };

    score.displayScore = () => {
        return `Score => Won : ${score.win}, Lost : ${score.lost}, Tie : ${score.tie}`;
    }
    showResult();
}

function generateComputerChoice() {
    //This will generate random number between 0 and 3
    let randomNumber = Math.round(Math.random() * 3);
    if(randomNumber === 1) {
        return 'Bat';
    }
    else if (randomNumber === 2) {
        return 'Ball';
    }
    else {
        return 'Stump';
    }
}
// console.log('ComputerChoice: '+computerChoice)

allButtons.forEach(button => {
    button.addEventListener('click', (event) => {
        // console.log(event.target.value)
        userChoice = event.target.value;
        if (userChoice === 'Reset') {
            localStorage.clear();
            resetScore();
        }
        else {
            computerChoice = generateComputerChoice();
            resultMsg = getResult(userChoice, computerChoice);
            showResult(userChoice,computerChoice, resultMsg);
        }
    });
});

function getResult(userMove, computerMove) {
    if(userMove === computerMove) {
        score.tie++;
        return `It's a tie`;
    }
    else if( (userMove === 'Bat' && computerMove === 'Ball') ||
             (userMove === 'Ball' && computerMove === 'Stump') || 
             (userMove === 'Stump' && computerMove === 'Bat')) {
        score.win++;
        return 'User won.';
    }
    else {
        score.lost++;
        return 'Computer has won';
    }
}
function showResult(userMove, computerMove, result) {
    localStorage.setItem('Score', JSON.stringify(score));

    document.querySelector('#user-move').value = userMove ? `You have chosen ${userMove}` : '';
    
    document.querySelector('#computer-move').value = computerMove ? `Computer choice is ${computerMove}` : '';
      
    document.querySelector('#result').value = result || '';

    document.querySelector('#score').value = score.displayScore(); 
}