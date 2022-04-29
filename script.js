/*  *** Hints ***
---Consider the steps required...
---Start by getting inputed value (guess) 
---Generate random number (try output to console to see value)
---Compare these 2 values
---Add event listener for click-event on button
---Update message and scores etc
*/

function getRandomIntInclusive(min, max) {  
  return Math.floor(Math.random() * (max - min + 1) + min); 
}
let randomNum = getRandomIntInclusive(1,20)
let bg = document.querySelector('body')
let score = 10 //Global Var!//
let number =document.querySelector('.number')
let message = document.querySelector('.message')
let score2 = document.querySelector('.score')
let highscore = 0
let h1 = document.querySelector('h1')

function check(){
  let hscore = document.querySelector('.highscore')
  let guess = Number(document.querySelector('.guess').value)
  if (guess > randomNum){
    message.textContent = 'too high'
    score -- 
    score2.textContent = score
  }
  else if (guess == randomNum){
    message.textContent = 'win!!!!!!'
    bg.style.background= 'green'
    number.textContent = guess
    h1.textContent = '🎉 The winning number is..'
    if (score > highscore) {
      highscore = score
      hscore.textContent = highscore
    }
   
  }
  else {
    message.textContent = 'too low'
    score --
    score2.textContent = score
  }
  if (score == 0){
    bg.style.background= 'red'
    h1.textContent= 'Game Over'
    number.textContent= '💀'
  }
}

function again(){
 score= 10
  //recalculate randNum
    randomNum = getRandomIntInclusive(1,20)
  //background back to black
    bg.style.background= '#222'
  //change number box to ?
    number.textContent= '?'
  //score = 20;
    score2.textContent= score
  //message "start guessing"
    message.textContent= 'start guessing...'
  //change guess box back to 0
  guess = document.querySelector('.guess').value = ' '
    h1.textContent= 'Guess My Number!'
}

//document.querySelector()
