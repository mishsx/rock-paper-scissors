let userChosen = null
let computerChosen = null
var result = results()
const displayResult = document.getElementById('result')
const computerChoice = document.getElementById('computer-choice')
const randomNumber = Math.round(Math.Random()*(3))
const userChoice =document.getElementById('user-choice')


function generatedComputerChoice(){
  if (randomNumber === 1){
    return computerChosen = 'rock'
  }else if (randomNumber === 2){
    return computerChosen = 'paper'
  }else if(randomNumber === 3){
    return computerChosen = 'scissor'
  }
}


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
