var btn = document.querySelectorAll('.btn');

btn.forEach(e => e.addEventListener('click', function() {
  game(e.id, computerPlay());
}));

userScore = 0
botScore = 0

let computerPlay = function() {
  let computerChoice = Math.floor(Math.random()*3);
  return computerChoice + 1
};

let idToString = function(id) {
  if (id == 1) {
    return 'Rock';
  }
  else if (id == 2) {
    return 'Paper';
  }
  else {
    return 'Scissors'
  }
};

let game = function(playerSelection, computerSelection) {

  let playRound = function() {

    if ((computerSelection-playerSelection+5)%3 === 1) {
      return 1
    }
    else if ((computerSelection-playerSelection+5)%3 === 0) {
      return 2
    }
    else {
      return 3
    }
  };

  let generateResponse = function(winner) {

    if (winner == 1) {
      return `You Won! ${idToString(playerSelection)} beats ${idToString(computerSelection)}`
    }
    else if (winner == 2) {
      return `Bummer, You lost. ${idToString(computerSelection)} beats ${idToString(playerSelection)}`
    }
    else {
      return `Tie! You both picked ${idToString(playerSelection)}`
    }
  };

  let incrementScore = function(winner) {
    if (winner == 1) {
      userScore ++
    }
    else if (winner == 2) {
      botScore ++
    }
  };

  let round = playRound()
  incrementScore(round)

  const usersScore = document.getElementById('userScore').childNodes[3];
  usersScore.textContent = userScore;

  const botsScore = document.getElementById('botScore').lastElementChild;
  botsScore.textContent = botScore;

  const usersThrow = document.getElementById('user-throw').lastElementChild;
  usersThrow.textContent = idToString(playerSelection);

  const botsThrow = document.getElementById('bots-throw').lastElementChild;
  botsThrow.textContent = idToString(computerSelection);

  const outcome = document.getElementById('outcome').firstElementChild;
  outcome.textContent = generateResponse(round);
};