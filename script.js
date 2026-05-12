// SELECT ELEMENTS
const slides = document.querySelectorAll(".slide");
const nextBtn = document.querySelector(".next");
const prevBtn = document.querySelector(".prev");

let currentSlide = 0;

// SHOW SLIDE
function showSlide(index){

  slides.forEach((slide)=>{
    slide.classList.remove("active");
  });

  slides[index].classList.add("active");
}

// NEXT SLIDE
function nextSlide(){

  currentSlide++;

  if(currentSlide >= slides.length){
    currentSlide = 0;
  }

  showSlide(currentSlide);
}

// PREVIOUS SLIDE
function prevSlide(){

  currentSlide--;

  if(currentSlide < 0){
    currentSlide = slides.length - 1;
  }

  showSlide(currentSlide);
}

// AUTO SLIDE
setInterval(nextSlide, 5000);

// BUTTON EVENTS
nextBtn.addEventListener("click", nextSlide);
prevBtn.addEventListener("click", prevSlide);

// MOBILE MENU
const menuBtn = document.getElementById("menu-btn");
const navbar = document.getElementById("navbar");

menuBtn.addEventListener("click", ()=>{

  navbar.classList.toggle("active");

});