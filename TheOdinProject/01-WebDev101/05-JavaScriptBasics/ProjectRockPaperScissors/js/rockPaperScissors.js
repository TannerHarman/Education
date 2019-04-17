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

  userScore = 0
  botScore = 0

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

  return `Your Score: ${userScore} - Bot Score: ${botScore} \n
  ${generateResponse(round)}`;
};

let userSelection = 1
let botSelection = computerPlay()

console.log("\n")
console.log(game(userSelection, botSelection));