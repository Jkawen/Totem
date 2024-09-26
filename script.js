// script.js
const slides = document.querySelectorAll('.slide');
let currentSlide = 0;

function showSlide(index) {
    slides.forEach(slide => slide.classList.remove('active'));
    slides[index].classList.add('active');
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}

// Mostra o primeiro slide
showSlide(currentSlide);

// Troca de slide a cada 5 segundos (5000 ms)
setInterval(nextSlide, 5000);
