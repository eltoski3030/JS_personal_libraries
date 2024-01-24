const team = {
    _team: {},
    _players: [],
    _games: [
      {
        basketball: {
          opponent: '',
          teamPoints: 0,
          opponentPoints: 0
        },
        volleyball: {
          opponent: '',
          teamPoints: 0,
          opponentPoints: 0
        },
        tennis: {
          opponent: '',
          teamPoints: 0,
          opponentPoints: 0
        }
      }
    ],
    get players() {
      return this._players;
    },
    get games() {
      return this._games;
    },
    addPlayer(newFirstName, newLastName, newAge) {
      const newPlayer = {
        firstName: newFirstName,
        lastName: newLastName,
        age: newAge
      };
      this._players.push(newPlayer);
    },
    addGame(newOpponent, newTeamPoints, newOpponentPoints) {
      const game = {
        opponent: newOpponent,
        teamPoints: newTeamPoints,
        opponentPoints: newOpponentPoints,
      };
      this._games.push(game); // Add the new game to the _games array
    }
  };
  
  // Example usage of addPlayer and addGame methods
  team.addPlayer('John', 'Doe', 25);
  team.addGame('Titans', 10, 8);
  console.log(team.games);
  console.log(team.players);
  