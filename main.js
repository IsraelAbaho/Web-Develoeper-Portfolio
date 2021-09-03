const navBar = document.getElementById('navMenu');
const toggleBtn = document.getElementById('toggleIcon');
const closeBtn = document.getElementById('closeIcon');

toggleBtn.addEventListener('click', ()=>{
    navBar.classList.toggle('show')
})
closeBtn.addEventListener('click', ()=>{
    navBar.classList.remove('show')
})  

const nav = document.querySelectorAll('.navBar')
function takeAction (){
    navBar.classList.remove('show')
}
nav.forEach(n =>n.addEventListener('click',takeAction))


const skillData = document.getElementsByClassName('skillContainer'),
skillHeader = document.querySelectorAll('.skillHeader')
function toggleSkills (){

    let itemClass = this.parentNode.className
   
    for(n = 0; n < skillData.length; n++){
        skillData[n].className = 'skillContainer skillClose'
    }
    if(itemClass === 'skillContainer skillClose' ){
        this.parentNode.className = 'skillContainer skillOpen'
    }
}

skillHeader.forEach((el)=>{
    el.addEventListener('click', toggleSkills)
})

const headers = document.querySelectorAll('[data-target]'),
qContents = document.querySelectorAll('[data-content')

headers.forEach(header =>{
    header.addEventListener('click',()=>{
        const target = document.querySelector(header.dataset.target)

        qContents.forEach(qContent =>{
            qContent.classList.remove('qActive')
        })

        target.classList.add('qActive')

        headers.forEach(header =>{
        header.classList.remove('qActive')
        })

        header.classList.add('qActive')
    } )

})

const cardz = document.querySelectorAll('.hiddenPage'),
      viewBtns = document.querySelectorAll('.priceBtn'),
      closeCards = document.querySelectorAll('.cardIcon')
      sPriceBtns = document.querySelectorAll('.sPriceBtn')

let viewPrice = function(viewClick){
    cardz[viewClick].classList.add('seePrice')
} 

viewBtns.forEach((viewBtn, i) => {
    viewBtn.addEventListener('click', ()=>{
        viewPrice(i)
    })
})

closeCards.forEach((closeCard) =>{
    closeCard.addEventListener('click', ()=>{
        cardz.forEach((card) =>{
            card.classList.remove('seePrice')
        })
    })
})


sPriceBtns.forEach((sPriceBtn) =>{
    sPriceBtn.addEventListener('click', ()=>{
        cardz.forEach((card) =>{
            card.classList.remove('seePrice')
        })
    })
})

let swiper = new Swiper(".portSection", {
    cssMode: true,
    loop: true,
    autoplay: true,

    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    mousewheel: true,
    keyboard: true,
    mausehold: true,
   
  });

let reviewSwiper = new Swiper(".reviewSection", {
    cssMode: true,
    loop: true,
    
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      mousewheel: true,

    },
    breakpoints:{
        570:{
            slidesPerView: 2,
        }
    }
   
  
  });


  function scrollHead (){
      const sHeader = document.getElementById('header')

      if(this.scrollY >= 85) 
      sHeader.classList.add('scrollHeader');
      else
      sHeader.classList.remove('scrollHeader')
  }
  window.addEventListener('scroll',scrollHead)

 function upBtnON (){
     const upbtn = document.getElementById('scrollUp')

     if(this.scrollY >= 560)
     upbtn.classList.add('activeUpBtn');
     else
     upbtn.classList.remove('activeUpBtn')
 }
 window.addEventListener('scroll', upBtnON)
 

 const musik = document.getElementById('musicFile');
 const playIcon = document.getElementById('playI con');

 playIcon.onclick = function(){
     if(musik.paused){
         musik.play();
         playIcon.classList.add('uil-pause-circle');
     
      } else
     musik.pause();
     playIcon.classList.add('uil-pause-circle');
 }

 




 function pauseMusic (){
     if(this.scrollY >= 1600){
         musik.pause();
     }
     else
     musik.pause();
     playIcon.classList.add('uil-play-circle');

 }
 window.addEventListener('scroll',pauseMusic)