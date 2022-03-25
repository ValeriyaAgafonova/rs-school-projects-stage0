let playground = document.querySelector('.playground')
let cat = document.querySelector('.cat')
let dog = document.querySelector('.dog')
let choice = document.querySelector('.choice')
let value = 'cat'
let computer = 'dog'
let cells = document.querySelectorAll('.cell')
let footer = document.querySelector('.footer')
let hasStep = false
let modalContainer = document.querySelector('.modal-window')
let condrad = document.querySelector('.condrad')
let button = document.querySelector('.play-again')
let steps = document.querySelector('.steps')


let close = document.querySelector('.close')
let resultsWindow = document.querySelector('.modal-window-results')
let haveWinner = false
let matrix = [[0, 1, 2],[3, 4, 5],[6, 7, 8],[0, 3, 6],[1, 4, 7],[2, 5, 8],[0, 4, 8],[2, 4, 6]]
let buttonResults = document.querySelector('.results')
let containerForResults = document.querySelector('.result-container')
let checkFlag = false


function addPicture(target, value, hasPicture){
    
    const img = document.createElement('img')
    img.src = `./assets/${value}.svg`
    img.alt = 'image'
    img.classList.add('image')
    target.classList.add(`${value}s`)
    target.append(img)
    let counter = 0
    for (let i = 0; i < cells.length; i++){
        
        if (cells[i].firstChild){
            counter++  
        } 
    }
    
    checkMatch(counter)
    if(counter == 9 && checkFlag == false){
        console.log('1')
        counterResults(counter)
        showModal(counter, 1)
    }
    else if (checkFlag == true || hasStep == true){
      return
    }
    else if (counter == 9 && checkFlag == true){
        showModal(counter)
    }
    
    else{
        computerStep()
    }
}




playground.addEventListener('click', event =>{
   if(event.target.classList == 'cell'){
    choice.style.opacity = '0'
       hasStep = false;
       addPicture(event.target, value)
   }
})

cat.addEventListener('click', function(){
    value = 'cat'
    choice.style.opacity = '0'


})
dog.addEventListener('click', function(counter){
    value = 'dog'
    choice.style.opacity = '0'
    computer = 'cat' 
    computerStep()
})

let hasPicture = true



function computerStep(target){
    let number = Math.round(Math.random() * (8 - 0) + 0)
    for (let i = 0; i < cells.length; i++){
        if (!cells[i].firstChild){
hasPicture = false
break
        }
        else{
            hasPicture = true;
        }
       
    }
   

    if(hasPicture == false){
        if(cells[number].firstChild){
            computerStep()
        }
        else{
            hasStep = true
            setTimeout(addPicture, 200, cells[number], computer, hasPicture)
        }
    }
    else{
        return
    }

}

let animal = ''
function checkMatch(counter){
    console.log('check')
    
for (let i = 0; i < matrix.length; i++){
   
    if (cells[matrix[i][0]].classList.contains(`cats`) && cells[matrix[i][1]].classList.contains(`cats`) && cells[matrix[i][2]].classList.contains(`cats`)){
        cells[matrix[i][0]].style.backgroundColor = 'green'
        cells[matrix[i][1]].style.backgroundColor = 'green'
        cells[matrix[i][2]].style.backgroundColor = 'green'
      
      animal = 'cats'
      showModal(counter)
      return checkFlag = true
     
    }
    else if(cells[matrix[i][0]].classList.contains(`dogs`) && cells[matrix[i][1]].classList.contains(`dogs`) && cells[matrix[i][2]].classList.contains(`dogs`)){
        cells[matrix[i][0]].style.backgroundColor = 'green'
        cells[matrix[i][1]].style.backgroundColor = 'green'
        cells[matrix[i][2]].style.backgroundColor = 'green'
  
   animal = 'dogs'
   showModal(counter)
       return checkFlag = true
       
    } 
    
    
}
return checkFlag
}

function showModal(counter, x){
    console.log('show')
    modalContainer.classList.remove('display')
    console.log(x == 1)
console.log(animal)
   if (animal == ""){
        condrad.innerHTML = 'Nobody wins'
        steps.innerHTML = `9` 
        counterResults()
        return
    }

else if (value == 'dog' && animal == 'dogs'){
condrad.innerHTML = 'You win'
steps.innerHTML = `Steps: ${counter}`

}
else if (value == 'dog' && animal == 'cats'){
    condrad.innerHTML = 'You lose'
    steps.innerHTML = `Steps: ${counter}`
    
    
    }
else if (value == 'cat' && animal == 'dogs'){
    condrad.innerHTML = 'You lose'
    steps.innerHTML = `Steps: ${counter}`
    
    
    }
    else if (value == 'cat' && animal == 'cats'){
        condrad.innerHTML = 'You win'
        steps.innerHTML = `Steps: ${counter}`
        }

 

        counterResults(counter)   
}
let arrayForResults = []

let countList = 1
function counterResults(counter){
    console.log('addresult')
   

    if (condrad.innerHTML == 'You win'){
        arrayForResults.push(`${condrad.innerHTML}! Steps: ${counter}`)   
    }
    else if(condrad.innerHTML == 'You lose'){
        arrayForResults.push(`${condrad.innerHTML}! Steps: ${counter}`) 
    }
    else{
        arrayForResults.push(`Nobody win! Steps: 9`)
    }

    if (arrayForResults.length >10){
        arrayForResults.shift()
    }
    console.log(arrayForResults)
    countList++
    addResult()
}

function addResult(){
   while(containerForResults.firstChild){
       containerForResults.removeChild(containerForResults.firstChild)
   }
   for(let i = 0; i < arrayForResults.length; i++){
        let p = document.createElement('p')
                p.classList.add('result-words')
                p.innerHTML = `${i+1}` + arrayForResults[i]
                containerForResults.appendChild(p)
    
   }
}



button.addEventListener('click', restart)


function restart(){
    modalContainer.classList.add('display')
    for (let i = 0; i < cells.length; i++){
        if (cells[i].firstChild){
            cells[i].removeChild(cells[i].firstChild)
            cells[i].style.backgroundColor = 'transparent'
            cells[i].classList.remove('cats')
            cells[i].classList.remove('dogs')

        }
    }
    counter = 0;
    hasStep = false
    value = 'cat'
    computer = 'dog'
    haveWinner = false
    animal = ''
    choice.style.opacity = '1'
    checkFlag = false
    
    
}

function setLocalStorage(){
   // let resultWords = document.querySelectorAll('.result-words')
       for (let i = 0 ; i < arrayForResults.length; i++){
           localStorage.setItem(`${i}`, `${arrayForResults[i]}`)
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
                arrayForResults.push(localStorage.getItem(`${i}`))
        }
    }
    }
    window.addEventListener('load', getLocalStorage)




close.addEventListener('click', function(){
resultsWindow.classList.add('display')
})

buttonResults.addEventListener('click', function(){
    resultsWindow.classList.remove('display')
})


