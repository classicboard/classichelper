'use strict'

// SWIPER

var swiper = new Swiper(".mySwiper", {
  direction: "horizontal",
  speed: 800,
  loop: true,
  grabCursor: true,
  slidesPerView: 1,
  centerdSlides: true,
  
  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
    },

 
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

// contact form textarea resize

function auto_grow(element) {
  element.style.height = "5px";
  element.style.height = (element.scrollHeight)+ "px";
}

// CONTACT FORM LINKS TO GOOGLE SHEETS
const scriptURL = 'https://script.google.com/macros/s/AKfycbx2lI_q_zxi1vD_hsMWi2JutYQ0SKJAepu6_zxYIxS5FFuOP_wAOt8_opEUWoQs5kXd/exec'
const form = document.forms['contact-me'];

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => {
      form.reset()
      console.log('Success!', response)
    })
    .catch(error => console.error('Error!', error.message))
  })


// var swiper = new Swiper(".mySwiper", {
//   effect: "cube",
//   grabCursor: true,
//   speed: 2000,
//   grabCursor: true,


//   cubeEffect: {
//     shadow: true,
//     slideShadows: true,
//     shadowOffset: 20,
//     shadowScale: 0.94,
//   },

//   autoplay: {
//     delay: 3000,
//     disableOnInteraction: false,
//     },

 

//   pagination: {
//     el: ".swiper-pagination",
//   },
// });
