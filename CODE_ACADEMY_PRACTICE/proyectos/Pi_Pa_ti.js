console.log('PAPER ROCK SCISSORS');

const getUserChoice = userInput => {
  if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors') {
    return userInput.toLowerCase();
  } else {
    console.log('Error');
    return null; // Added a return statement for consistency
  }
}

const getComputerChoice = () => {
  const rand = Math.floor(Math.random() * 3);

  switch (rand) {
    case 0:
      return 'rock';

    case 1:
      return 'paper';

    case 2:
      return 'scissors';
  }
}

function determineWinner(userChoice, computerChoice) {
    if (userChoice === computerChoice) {
        return 'It\'s a tie';
    } else if (userChoice === 'rock' && computerChoice === 'scissors') {
        return 'Rock breaks scissors';
    } else if (userChoice === 'rock' && computerChoice === 'paper') {
        return 'Paper wraps rock';
    } else if (userChoice === 'paper' && computerChoice === 'scissors') {
        return 'Scissors cut paper';
    } else {
        return 'There has been an error';
    }
}

function playGame(userChoice = getUserChoice(), computerChoice = getComputerChoice()) {
  if (userChoice !== null) {
    console.log(determineWinner(userChoice, computerChoice));
  }
}

playGame('rock');


