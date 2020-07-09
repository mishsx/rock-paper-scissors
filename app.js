let userChosen = null
let computerChosen = null
var result = results()

function results()
{
  if(computerChosen === userChosen){
    return result = 'There was a tie'
  }else if(computerChosen === 'rock' && userChosen === 'paper'){
    return result = 'You win!!'
  }else if(computerChosen === 'rock' && userChosen === 'scissor'){
    return result = 'You lose :('
  }else if(computerChosen === 'paper' && userChosen === 'rock'){
    return result = 'You lose :('
  }else if(computerChosen === 'paper' && userChosen === 'scissor'){
    return result = 'You win!!'
  }else if(computerChosen === 'scissor' && userChosen === 'rock'){
    return result = 'You win!!'
  }else if(computerChosen === 'scissor' && userChosen === 'paper'){
    return result = 'You lose :('
  }
}
