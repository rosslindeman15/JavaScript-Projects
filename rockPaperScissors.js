const getUserChoice = userInput => {
    userInput = userInput.toLowerCase();
    if (userInput === 'rock' || userInput ==='paper' || userInput === 'scissors') {
      return userInput;
    } else {
      console.log('Invalid choice.');
    }
  }
  const getComputerChoice = () => {
  const randomNumber = Math.floor(Math.random() * 3)
   switch (randomNumber) {
     case 0:
      return 'rock';
    case 1:
      return 'scissors';
    case 2:
      return 'paper';
   }
  }
  const determineWinner = (userChoice, computerChoice) => {
    if (userChoice === computerChoice) {
      return 'This match is a tie.';
    }
    if (userChoice === 'rock') {
      if (computerChoice === 'paper') {
        return 'Sorry, computer wins.';
      } else {
        return 'Congratulations! You won.';
      }
    } if (userChoice === 'paper') {
        if(computerChoice === 'scissors') {
          return 'Sorry, the computer won.';
          } else {
            return 'Congratulations! You won.';
          }
      if (userChoice === 'scissors') {
        if (computerChoice === 'rock') {
          return 'Sorry, the computer wins this time.'
        } else {
          return 'Congratulations! You won!'
        }
      }
    }
  }
  
  const playGame = () => {
    const userChoice = getUserChoice('rock');
    const computerChoice = getComputerChoice();
    console.log('You threw: ' + userChoice);
    console.log('The computer threw: ' + computerChoice);
    console.log(determineWinner(userChoice, computerChoice));
  };
  
  playGame();
  
  /*console.log(determineWinner('paper', 'scissors'));
  console.log(determineWinner('paper', 'paper'));
  console.log(determineWinner('paper', 'rock'));*/