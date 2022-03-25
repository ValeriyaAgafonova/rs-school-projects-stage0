
let quote = document.querySelector('.quote')
let author = document.querySelector('.author')
let audio = document.querySelector('audio')
let image = document.querySelector('img')
let langEn = document.querySelector('#language-en')
let langRu = document.querySelector('#language-ru')
let hey = document.querySelector('.hey')
let link = `https://www.breakingbadapi.com/api/quotes`


async function getData() {
   
        const url = link
        let res = await fetch(url);
        let data = await res.json();
            showData(data)
 
}

getData()


function  showData(data){  
let x = Math.floor(Math.random() * (data.length - 1) + 1)
quote.innerHTML = data[x].quote
author.innerHTML = data[x].author
image.classList.toggle('animate')
 
}

//image.addEventListener('click', getData)
image.addEventListener('click', function(){
  image.classList.toggle('animate')
  getData()
})

function checkLanguage(){
if (langEn.classList.contains('checked')){
 hey.innerHTML = `Click on me, dumb-ass!!`
  link = `https://www.breakingbadapi.com/api/quotes`
  getData()
}
else{
 hey.innerHTML = `Нажми на меня, тупица!!`
  link = `./data.json`
   getData()

}
}

langRu.addEventListener('change', changeClass)
langEn.addEventListener('change', changeClass)


function changeClass(){
  image.classList.toggle('animate')
langEn.classList.toggle('checked')
langRu.classList.toggle('checked')

checkLanguage()
}