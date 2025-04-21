const gameModule = (() => {
  let gameBoard = [];
  let players = [];

  const winningCombos = [
    ['1', '2', '3'],
    ['4', '5', '6'],
    ['7', '8', '9'],

    ['1', '5', '9'],
    ['3', '5', '7'],

    ['1', '4', '7'],
    ['2', '5', '8'],
    ['3', '6', '9'],
  ];

  const updateGameboard = (cell, player) => {
    gameBoard.push(cell);
    player.cells.push(cell);
  }

  const getGameBoard = () => {
    return gameBoard;
  }

  const createPlayer = (name, token, turn) => {
    let score = 0;
    let cells = [];

    return {
      name,
      token,
      cells,
      turn,
      score
    }
  }

  const newPlayer = (name, token, turn) => {
    let player = createPlayer(name, token, turn);

    players.push(player);
  }

  const switchTurns = () => {
    players.forEach((player) => {
      player.turn = !player.turn;
    })
  }

  const getPlayers = () => {
    return players;
  }

  const updateScore = (player) => {
    player.score ++
  }

  const newRound = (players) => {
    players.forEach((player) => {
      player.cells = [];
    })

    gameBoard = [];
  }

  const determineWinner = (winningActions) => {
    players.forEach((player) => {

      const playerCells = player.cells.sort();

      winningCombos.forEach((combo) => {
        let cellCount = 0;
        combo.forEach((cell) => {
          if (playerCells.includes(cell)) {
            cellCount ++;
          }
        })
        
        if (cellCount === 3) {
          updateScore(player)
          winningActions(player);
        }
      })

    })
  }

  return {
    updateGameboard,
    getGameBoard,
    newPlayer,
    getPlayers,
    switchTurns,
    determineWinner,
    newRound,
  }
})();

const gamePlayModule = (function() {

  function updateCell(cell, player, winningActions) {
    let board = gameModule.getGameBoard();

    if (!board.includes(cell.dataset.id)) {
      gameModule.updateGameboard(cell.dataset.id, player)
      cell.innerText = player.token;
      gameModule.switchTurns();
      gameModule.determineWinner(winningActions);
    }
  }

  const players = (players) => {
    players.forEach((player) => {
      let playerName = player.querySelector('input').value;
      let playerTurn = JSON.parse(player.querySelector('input').dataset.turn);
      let playerToken = player.querySelector('label').querySelector('span').textContent;

      gameModule.newPlayer(playerName, playerToken, playerTurn);
    })
  }

  return {
    updateCell,
    players
  }

})();

const guiModule = (() => {
  const gameBoard = document.querySelectorAll('.cell');
  const startButton = document.querySelector('#start');
  const newRoundButton = document.querySelector('#new-round');
  const newGameButton = document.querySelector('#new-game');
  const playerInputs = document.querySelectorAll('.player-field')
  const players = gameModule.getPlayers() || [];
  const winner = document.querySelector('#winners-name');

  const updateCells = function() {
    let players = gameModule.getPlayers();
  
    players.forEach((player) => {
      if (player.turn === true) {
        gamePlayModule.updateCell(this, player, winningActions);
      }
    })
  }

  const updateScoreBoard = (players) => {
    const playerScores = scoreboard.querySelectorAll('.player-score');

    playerScores.forEach((player, index) => {
      player.innerHTML = 
      `<h1>${players[index].name}</h1>
       <div>${players[index].score}</div>`
    })
  }

  const controlShift = () => {
    const controls = document.querySelector('#inputs');
    const scoreboard = document.querySelector('#scoreboard');

    controls.style.display = 'none';
    scoreboard.style.display = 'grid'
  }

  const clearBoard = () => {
    gameBoard.forEach((cell) => {
      cell.innerText = '';
    })
  }

  const newRound = () => {
    gameModule.newRound(players);
    clearBoard();
    boardListener();

    if (winner.parentElement.classList.contains('banner-popup')) {
      winningBanner(' ')
    }
  }

  const boardListener = () => {
    gameBoard.forEach((cell) => {
      cell.addEventListener('click', updateCells);
    })
  }

  newGameButton.addEventListener('click', () => {
    window.location.reload();
  })

  newRoundButton.addEventListener('click', newRound);

  startButton.addEventListener('click', () => {
    gamePlayModule.players(playerInputs);
    controlShift();
    updateScoreBoard(players);
  })

  function winningActions(player) {
    gameBoard.forEach((cell) => {
      cell.removeEventListener('click', updateCells);
    })

    updateScoreBoard(players);
    winningBanner(player);
  }

  function winningBanner(player) {
    winner.innerText = player.name;
    winner.parentElement.classList.toggle('banner-popup');
  }

  boardListener();
})();