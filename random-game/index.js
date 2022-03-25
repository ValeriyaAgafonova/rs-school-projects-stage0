let startButton = document.querySelector('.start-game')
let startPage = document.querySelector('.start-page')
let playgroundTable = document.querySelector('.playground-table')
let signButtons = document.querySelectorAll('.sign-image')
let playTable = document.querySelector('.play')
let chooseSign = document.querySelector('.player-choice')
let tryButton = document.querySelector('.try')
let timeWord = document.querySelector('.time')
let computerChoice = document.querySelector('.computer-choice')
let choiceTitle = ''
let reactionImage = document.querySelector('.cartoon')
let okayButton = document.querySelector('.okay')
let closeButton = document.querySelector('.close')
let resultsTable = document.querySelector('.results-table')
let resultsButton = document.querySelector('.results')
let containerForResults = document.querySelector('.results-items')
let image = document.querySelector('.result-image')

startButton.addEventListener('click', function(){
startPage.classList.add('display')
playgroundTable.classList.remove('display')
})

signButtons.forEach(button => button.addEventListener('click', function(){
    playgroundTable.classList.add('display')
    playTable.classList.remove('display')
    changeSign(button)
}))
okayButton.addEventListener('click', function(){
    playgroundTable.classList.add('display')
    playTable.classList.remove('display')
})

function changeSign(button){
chooseSign.src = `./assets/${button.title}.jpeg`
choiceTitle = button.title
}

tryButton.addEventListener('click', startGame)
tryButton.addEventListener('click', playAgain)
let count = 3
function startGame(){
   tryButton.style.opacity = '0'
    reactionImage.src = "./assets/thinking.png"
    computerChoice.src = "./assets/thinking.png"
    if (count >= 0) {
       
timeWord.innerHTML = `${count}`
        count--;
        setTimeout(startGame, 1000);
    }
    else {
        count = 3
       
        giveResults()
    }
}

let arraySigns = ['rock', 'paper', 'scissors', 'spock', 'lizard']

function giveResults(){
let index = Math.floor(Math.random() * (4 - 0 + 1)) + 0
computerChoice.src = `./assets/${arraySigns[index]}.jpeg`


 if (choiceTitle == arraySigns[index]){
    
    reactionImage.src = "./assets/draw.png"
    timeWord.innerHTML = 'How are you do that?? Nobody win'
}
else if(choiceTitle == 'rock'){
   if(arraySigns[index] == 'paper'){
       
       timeWord.innerHTML = 'Paper covers Rock, you lose!'
       image.src = './assets/rock-paper.jpeg'
       image.style.opacity = '1'
       youLoser()
   }
   else if(arraySigns[index] == 'scissors'){
      
       timeWord.innerHTML = 'Rock crushes Scissors, you win!'
       image.src = './assets/rock-scissors.jpeg'
       image.style.opacity = '1'
       youWinner()
   }
   else if(arraySigns[index] == 'spock'){
      
       timeWord.innerHTML = 'Spock vaporizes Rock, you lose!'
       image.src = './assets/spock-rock.jpeg'
       image.style.opacity = '1'
       youLoser()
   }
   else if(arraySigns[index] == 'lizard'){

    timeWord.innerHTML = 'Rock crushes Lizard, you win!'
    image.src = './assets/rock-lizard.jpeg'
    image.style.opacity = '1'
    youWinner()
   }
}
else if(choiceTitle == 'paper'){
    if(arraySigns[index] == 'rock'){
      
        timeWord.innerHTML = 'Paper covers Rock, you win!'
        image.src = './assets/rock-paper.jpeg'
        image.style.opacity = '1'
        youWinner()
    }
    else if(arraySigns[index] == 'scissors'){
      
        timeWord.innerHTML = 'Scissors cuts Paper, you lose!'
        image.src = './assets/scissors-paper.jpeg'
        image.style.opacity = '1'
        youLoser()
    }
    else if(arraySigns[index] == 'spock'){
       
        timeWord.innerHTML = 'Paper disproves Spock, you win!'
        image.src = './assets/paper-spock.jpeg'
        image.style.opacity = '1'
        youWinner()
    }
    else if(arraySigns[index] == 'lizard'){
   
     timeWord.innerHTML = 'Lizard eats Paper, you lose!'
     image.src = './assets/lizard-paper.jpeg'
     image.style.opacity = '1'
     youLoser()
    }
 }
 else if(choiceTitle == 'scissors'){
    if(arraySigns[index] == 'rock'){
     
        timeWord.innerHTML = 'Rock crushes Scissors, you lose!'
        image.src = './assets/rock-scissors.jpeg'
        image.style.opacity = '1'

        youLoser()
    }
    else if(arraySigns[index] == 'paper'){
       
        timeWord.innerHTML = 'Scissors cuts Paper, you win!'
        image.src = './assets/scissors-paper.jpeg'
        image.style.opacity = '1'
        youWinner()
    }
    else if(arraySigns[index] == 'spock'){
       
        timeWord.innerHTML = 'Spock smashes Scissors, you lose!'
        image.src = './assets/spock-scissors.jpeg'
        image.style.opacity = '1'
        youLoser()
    }
    else if(arraySigns[index] == 'lizard'){

     timeWord.innerHTML = 'Scissors decapitates Lizard, you win!'
     image.src = './assets/scissors-lizard.jpeg'
     image.style.opacity = '1'
     youWinner()
    }
 }
 else if(choiceTitle == 'spock'){
    if(arraySigns[index] == 'rock'){
       
        timeWord.innerHTML = 'Spock vaporizes Rock, you win!'
        image.src = './assets/spock-rock.jpeg'
        image.style.opacity = '1'
        youWinner()
    }
    else if(arraySigns[index] == 'paper'){
        
        timeWord.innerHTML = 'Paper disproves Spock, you lose!'
        image.src = './assets/paper-spock.jpeg'
        image.style.opacity = '1'
        youLoser()
    }
    else if(arraySigns[index] == 'scissors'){
        
        timeWord.innerHTML = 'Spock smashes Scissors, you win!'
        image.src = './assets/spock-scissors.jpeg'
        image.style.opacity = '1'
        youWinner()
    }
    else if(arraySigns[index] == 'lizard'){
    
     timeWord.innerHTML = 'Lizard poisons Spock, you lose!'
     image.src = './assets/lizard-spock.jpeg'
     image.style.opacity = '1'
     youLoser()
    }
 }
 else if(choiceTitle == 'lizard'){
    if(arraySigns[index] == 'rock'){
        
        timeWord.innerHTML = 'Rock crushes Lizard, you lose!'
        image.src = './assets/rock-lizard.jpeg'
        image.style.opacity = '1'
        youLoser()
    }
    else if(arraySigns[index] == 'paper'){
     
        timeWord.innerHTML = 'Lizard eats Paper, you win!'
        image.src = './assets/lizard-paper.jpeg'
        image.style.opacity = '1'
        youWinner()
    }
    else if(arraySigns[index] == 'scissors'){
        
        timeWord.innerHTML = 'Scissors decapitates Lizard, you lose!'
        image.src = './assets/scissors-lizard.jpeg'
        image.style.opacity = '1'
        youLoser()
    }
    else if(arraySigns[index] == 'spock'){
     
     timeWord.innerHTML = 'Lizard poisons Spock, you win!'
     image.src = './assets/lizard-spock.jpeg'
     image.style.opacity = '1'
     youWinner()
    }
 }
 else{
    reactionImage.src = "./assets/draw.png"
    timeWord.innerHTML = 'Hey! Thats not fare! You should choose something!'
    computerChoice.src = `./assets/draw.png`

 }
 tryButton.innerHTML = `Play again`
 counterResults()
 tryButton.style.opacity = '1'
 
}

function playAgain(){
    chooseSign.src = `./assets/choose.jpg`
    choiceTitle = ''
    image.style.opacity = '0'
}

function youWinner(){
reactionImage.src = "./assets/winner.png"

}

function youLoser(){
    reactionImage.src = "./assets/loser.png"
}



closeButton.addEventListener('click', function(){
resultsTable.classList.add('display')
})
resultsButton.addEventListener('click', function(){
    resultsTable.classList.remove('display')
    })


    let resultArray = []

    function counterResults(){
       resultArray.push(timeWord.innerHTML)
    
        if (resultArray.length >10){
            resultArray.shift()
        }
       
        addResult()
    }
    
    function addResult(){
       while(containerForResults.firstChild){
           containerForResults.removeChild(containerForResults.firstChild)
       }
       for(let i = 0; i < resultArray.length; i++){
            let p = document.createElement('p')
                    p.classList.add('result-words')
                    p.innerHTML = `${i+1}. ` + resultArray[i]
                    containerForResults.appendChild(p)
        
       }
    }
    
    
    
    
    function setLocalStorage(){

           for (let i = 0 ; i < resultArray.length; i++){
               localStorage.setItem(`${i}`, `${resultArray[i]}`)
           }
            
        
    }
    
    window.addEventListener('beforeunload', setLocalStorage)
    
    
    function getLocalStorage(){
       
            for (let i = 0; i < 10; i++){
                if (localStorage.getItem(`${i}`)){
                    let p = document.createElement('p')
                    p.classList.add('result-words')
                    p.innerHTML = `${i+1}. `+ localStorage.getItem(`${i}`)
                    containerForResults.appendChild(p)
                    resultArray.push(localStorage.getItem(`${i}`))
            }
        }
        }
        window.addEventListener('load', getLocalStorage)
    