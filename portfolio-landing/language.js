const i18Obj = {
    'en': {
        'lang-1': 'en',
        'lang-2': 'ru',
      'skills': 'Skills',
      'portfolio': 'Portfolio',
      'video': 'Video',
      'price': 'Price',
      'contacts': 'Contacts',
      'hero-title': 'Alexa Rise',
      'hero-text': 'Save sincere emotions, romantic feelings and happy moments of life together with professional photographer Alexa Rise',
      'hire': 'Hire me',
      'skill-title-1': 'Digital photography',
      'skill-text-1': 'High-quality photos in the studio and on the nature',
      'skill-title-2': 'Video shooting',
      'skill-text-2': 'Capture your moments so that they always stay with you',
      'skill-title-3': 'Rotouch',
      'skill-text-3': 'I strive to make photography surpass reality',
      'skill-title-4': 'Audio',
      'skill-text-4': 'Professional sounds recording for video, advertising, portfolio',
      'winter': 'Winter',
      'spring': 'Spring',
      'summer': 'Summer',
      'autumn': 'Autumn',
      'price-description-1-span-1': 'One location',
      'price-description-1-span-2': '120 photos in color',
      'price-description-1-span-3': '12 photos in retouch',
      'price-description-1-span-4': 'Readiness 2-3 weeks',
      'price-description-1-span-5': 'Make up, visage',
      'price-description-2-span-1': 'One or two locations',
      'price-description-2-span-2': '200 photos in color',
      'price-description-2-span-3': '20 photos in retouch',
      'price-description-2-span-4': 'Readiness 1-2 weeks',
      'price-description-2-span-5': 'Make up, visage',
      'price-description-3-span-1': 'Three locations or more',
      'price-description-3-span-2': '300 photos in color',
      'price-description-3-span-3': '50 photos in retouch',
      'price-description-3-span-4': 'Readiness 1 week',
      'price-description-3-span-5': 'Make up, visage, hairstyle',
      'order': 'Order shooting',
      'contact-me': 'Contact me',
      'send-message': 'Send message',
      'email': 'E-mail',
      'tel': 'Phone',
      'mes':'Message',

    },
    'ru': {
        'lang-1': 'англ',
        'lang-2': 'рус',
      'skills': 'Навыки',
      'portfolio': 'Портфолио',
      'video': 'Видео',
      'price': 'Цены',
      'contacts': 'Контакты',
      'hero-title': 'Алекса Райс',
      'hero-text': 'Сохраните искренние эмоции, романтические переживания и счастливые моменты жизни вместе с профессиональным фотографом',
      'hire': 'Пригласить',
      'skill-title-1': 'Фотография',
      'skill-text-1': 'Высококачественные фото в студии и на природе',
      'skill-title-2': 'Видеосъемка',
      'skill-text-2': 'Запечатлите лучшие моменты, чтобы они всегда оставались с вами',
      'skill-title-3': 'Ретушь',
      'skill-text-3': 'Я стремлюсь к тому, чтобы фотография превосходила реальность',
      'skill-title-4': 'Звук',
      'skill-text-4': 'Профессиональная запись звука для видео, рекламы, портфолио',
      'winter': 'Зима',
      'spring': 'Весна',
      'summer': 'Лето',
      'autumn': 'Осень',
      'price-description-1-span-1': 'Одна локация',
      'price-description-1-span-2': '120 цветных фото',
      'price-description-1-span-3': '12 отретушированных фото',
      'price-description-1-span-4': 'Готовность через 2-3 недели',
      'price-description-1-span-5': 'Макияж, визаж',
      'price-description-2-span-1': 'Одна-две локации',
      'price-description-2-span-2': '200 цветных фото',
      'price-description-2-span-3': '20 отретушированных фото',
      'price-description-2-span-4': 'Готовность через 1-2 недели',
      'price-description-2-span-5': 'Макияж, визаж',
      'price-description-3-span-1': 'Три локации и больше',
      'price-description-3-span-2': '300 цветных фото',
      'price-description-3-span-3': '50 отретушированных фото',
      'price-description-3-span-4': 'Готовность через 1 неделю',
      'price-description-3-span-5': 'Макияж, визаж, прическа',
      'order': 'Заказать съемку',
      'contact-me': 'Свяжитесь со мной',
      'send-message': 'Отправить',
      'email': 'Эл. почта',
      'tel': 'Телефон',
      'mes':'Сообщение',
    }
  }


  let english = document.querySelector('.language-en')
  let russian = document.querySelector('.language-ru')
  
  russian.addEventListener('click', function(){
    if(flag == false){
      if(russian.classList.contains('active-lang')){
        return
    }
    else{
  russian.classList.toggle('active-lang')
  russian.classList.toggle('non-active')
  english.classList.toggle('active-lang')
  english.classList.toggle('non-active')
  
  changeLang('ru')
    }
     
      }
      else{
        if(russian.classList.contains('active-lang-light')){
          return
      }
      else{
    russian.classList.toggle('active-lang-light')
    russian.classList.toggle('active-lang')
    russian.classList.toggle('non-active')
    english.classList.toggle('active-lang-light')
    english.classList.toggle('active-lang')
    english.classList.toggle('non-active')
    
    changeLang('ru')
      }
      }
  })

  english.addEventListener('click', function(){
    if (flag == false){
      if (english.classList.contains('active-lang')){
        return
    }
    else{
  english.classList.toggle('active-lang')
  english.classList.toggle('non-active')
  russian.classList.toggle('active-lang')
  russian.classList.toggle('non-active')
  changeLang('en')
    }
    }
    else{
      if (english.classList.contains('active-lang-light')){
        return
    }
    else{
  english.classList.toggle('active-lang')
  english.classList.toggle('active-lang-light')
  english.classList.toggle('non-active')
  russian.classList.toggle('active-lang')
  russian.classList.toggle('active-lang-light')
  russian.classList.toggle('non-active')
  changeLang('en')
    }
    }
     
  })
  let datas = document.querySelectorAll(`[data-i18]`)
    
function changeLang(x){
   
    datas.forEach(data => {
      if(data.placeholder){
         data.placeholder = i18Obj[x][data.dataset.i18];
        data.textContent = '';
       }
      else{
        data.textContent = i18Obj[x][data.dataset.i18]
      }
      
    })
}



//function setLocalStorage() {
  //for (let i = 0; i < datas.length; i++){
 //   localStorage.setItem(`${i}`, datas[i].textContent);
  //}
  //for (let i = 0; i < english.classList.length; i++){
  //  localStorage.setItem(`en${i}`, english.classList[i])
  //  localStorage.setItem(`rus${i}`, russian.classList[i])
  //}
  
   
   
  //}
 // window.addEventListener('beforeunload', setLocalStorage)

 // function getLocalStorage() {
  //  for (let i = 0; i < datas.length; i++){
  //  if(localStorage.getItem(`${i}`)) {
   //     datas[i].textContent = localStorage.getItem(`${i}`);
   //   }
     
   // }
    
   // for (let i = 0; i < 4; i++){
   //   let e = ''
   // let r = ''
   // if (localStorage.getItem(`en${i}`)){
   //  
   //  e += localStorage.getItem(`en${i}`)
   //  console.log(e)
    // english.classList = e
   
  //}
  //for (let i = 0; i < 4; i++){
   // if (localStorage.getItem(`rus${i}`)){
     
   // r += localStorage.getItem(`rus${i}`)
   // console.log(r)
   // russian.classList = r
   // }
 // }
//}
  //}
 // window.addEventListener('load', getLocalStorage)
  
