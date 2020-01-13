const gameModule = (() => {
  const gameBoard = [];
  const players = [];

  const updateGameboard = (cellId) => {
    console.log(cellId);
  }

  const createPlayer = (name, token) => {
    name = name;
    token = token;
    cells = [];

    return {
      name,
      token,
      cells
    }
  }

  const newPlayer = (name, token) => {
    let player = createPlayer(name, token);
    players.push(player);
  }

  const getPlayer = () => {
    return players;
  }

  return {
    updateGameboard,
    newPlayer,
    getPlayer
  }
})();

const gamePlayModule = (function() {

  function updateCell() {
    gameModule.updateGameboard(this.dataset.id);
    guiModule.updateGameboard(this);
  }

  const players = (players) => {
    players.forEach((player) => {
      let playerName = player.querySelector('input').value;
      let playerToken = player.querySelector('label').querySelector('span').textContent;

      gameModule.newPlayer(playerName, playerToken);
    })
  }

  return {
    updateCell,
    players
  }

})();

const guiModule = (() => {
  const gameBoard = document.querySelectorAll('.cell');
  const button = document.querySelector('button');
  const players = document.querySelectorAll('.player')

  gameBoard.forEach((cell) => {
    cell.addEventListener('click', () => {
      console.log(gameModule.getPlayer());
    })
  })

  function updateCell(listenterFunction) {
    gameBoard.forEach(function(cell) {
      cell.addEventListener('click', listenterFunction)
    })
  }

  button.addEventListener('click', () => {
    gamePlayModule.players(players);
  })
})();