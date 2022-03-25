let burger = document.querySelector('.burger')
let menu = document.querySelector('.over-menu')
let menuList = document.querySelector('.burger-menu')
let items = document.querySelectorAll('.back-item')
burger.addEventListener('click',function(){
burger.classList.toggle('is-active')
burger.classList.toggle('burger-x')
})
burger.addEventListener('click',function(){
    menu.classList.toggle('over')
menuList.classList.toggle('open')
    })

items.forEach((el) => el.addEventListener('click', function(){
  menu.classList.toggle('over')
menuList.classList.toggle('open')
burger.classList.toggle('is-active')
burger.classList.toggle('burger-x')
}));



let selectedButton
let seasonsButtons = document.querySelector('.seasons-buttons')
let autumn = document.querySelectorAll('.season-button')
let autumn1 = Array.from(autumn)
seasonsButtons.onclick = function(event){
  let target = event.target
 highlight(target)
}
   
function highlight(button){
  if (flag == false){
    if (autumn1[3].classList.contains('season-button-active')){
      autumn1[3].classList.remove('season-button-active')
    }
  if (selectedButton){
   
    selectedButton.classList.remove('season-button-active')
  }
  selectedButton = button;
  selectedButton.classList.add('season-button-active');
  changeImages()
  }
  else{
    if (autumn1[3].classList.contains('season-button-active-light')){
      autumn1[3].classList.remove('season-button-active-light')
      autumn1[3].classList.remove('season-button-active')
    }
  if (selectedButton){
   
    selectedButton.classList.remove('season-button-active-light')
    selectedButton.classList.remove('season-button-active')
  }
  selectedButton = button;
  selectedButton.classList.add('season-button-active-light');
  selectedButton.classList.add('season-button-active');
  changeImages()
  }
  
}


let seasons = document.querySelectorAll('.season-button')
let photos = document.querySelectorAll('.season-photo')
let ph = Array.from(photos)
let seas = Array.from(seasons)
function changeImages(){
  seas.forEach(s =>{
    if (flag == false){
      if (s.classList.contains('season-button-active')){
        for (let i = 0; i < ph.length; i++){
          ph[i].src = `./assets/img/${s.value}/${i+1}.jpeg`
        }
          }
    }
    else{
      if (s.classList.contains('season-button-active-light')){
        for (let i = 0; i < ph.length; i++){
          ph[i].src = `./assets/img/${s.value}/${i+1}.jpeg`
        }
          }

    }
  })
}

let moon = document.querySelector('.moon')
let sun = document.querySelector('.sun')
let flag = false;
moon.addEventListener('click', function(){
  sun.classList.toggle('hide')
  moon.classList.toggle('hide')
  lightTheme()
})
sun.addEventListener('click', function(){
  sun.classList.toggle('hide')
  moon.classList.toggle('hide')
  lightTheme()
})

function lightTheme(){
  let body = document.querySelector('body')
  let header = document.querySelector('header')
  let contact = document.querySelector('.contacts')
  let hero = document.querySelector('.hero')
  let lines = document.querySelectorAll('.h2-lines')
  let span = document.querySelectorAll('.line')
  let icons  = document.getElementsByTagName('svg')
  let links = document.getElementsByTagName('a')
  let titles = document.querySelectorAll('.section-title')

let buttons = document.querySelectorAll('.change-button')
let forms = document.querySelectorAll('.form-input')
let menu = document.querySelector('.burger-menu')
let seasons = document.querySelectorAll('.season-button')
let activeSeason = document.querySelector('.season-button-active')
menu.classList.toggle('light-menu');
body.classList.toggle('light-theme');
header.classList.toggle('header-light-back');
header.classList.toggle('header-hero-light')
contact.classList.toggle('light-contact');
hero.classList.toggle('light-back');
contact.classList.toggle('contacts-light');
hero.classList.toggle('hero-light')

if (english.classList.contains('active-lang')){
  english.classList.toggle('active-lang-light')
}
if (english.classList.contains('non-active')){
  english.classList.toggle('non-active-light')
}
if (russian.classList.contains('active-lang')){
  russian.classList.toggle('active-lang-light')
}
if (russian.classList.contains('non-active')){
  russian.classList.toggle('non-active-light')
}
for(let i = 0; i < icons.length; i++){
  icons[i].classList.toggle('light-svg');
}
for(let i = 0; i < span.length; i++){
  span[i].classList.toggle('light-line');
}
for(let i = 0; i < titles.length; i++){
  titles[i].classList.toggle('light-title');
}
for(let i = 0; i < lines.length; i++){
  lines[i].classList.toggle('line-color');
  lines[i].classList.toggle('media-lines')
}
for(let i = 0; i < buttons.length; i++){
  buttons[i].classList.toggle('light-button');
}
for(let i = 0; i < forms.length; i++){
  forms[i].classList.toggle('light-form');
}
for(let i = 0; i < links.length; i++){
  links[i].classList.toggle('light-a');
}
for (let i = 0; i < seasons.length; i++){
  seasons[i].classList.toggle('season-button-light')
}
activeSeason.classList.toggle('season-button-active-light')
if (body.classList.contains('light-theme')){
  flag = true
}
else{
  flag = false
}
console.log(flag)
}




var animateButton = function(e) {

  e.preventDefault;
 
  e.target.classList.remove('animate');
  
  e.target.classList.add('animate');
  setTimeout(function(){
    e.target.classList.remove('animate');
  },700);
};

var bubblyButtons = document.getElementsByClassName("hire-button");

for (var i = 0; i < bubblyButtons.length; i++) {
  bubblyButtons[i].addEventListener('click', animateButton, false);
}


