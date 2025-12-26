// Scroll Animation
function reveal() {
  const reveals = document.querySelectorAll('.reveal');

  reveals.forEach(reveal => {
    const windowHeight = window.innerHeight;
    const elementTop = reveal.getBoundingClientRect().top;
    const elementVisible = 150;

    if (elementTop < windowHeight - elementVisible) {
      reveal.classList.add('active');
    } else {
      reveal.classList.remove('active');
    }
  });
}

window.addEventListener('scroll', reveal);
reveal(); // Trigger on page load

// Typing Effect
const titleEl = document.getElementById('hero-title');
const subtitleEl = document.getElementById('hero-subtitle');
const quoteEl = document.getElementById('hero-quote');

const titleText = 'Excellent Class';
const subtitleText = 'Angkatan 2023';
const quoteText = 'Selalu Bersama dalam cerita, selamanya dalam kenangan';

let i = 0, j = 0, k = 0;

function clearCursor() {
  titleEl.classList.remove('typing');
  subtitleEl.classList.remove('typing');
  quoteEl.classList.remove('typing');
}

function typeTitle() {
  clearCursor();
  titleEl.classList.add('typing');

  if (i < titleText.length) {
    titleEl.textContent += titleText[i++];
    setTimeout(typeTitle, 85);
  } else {
    setTimeout(typeSubtitle, 400);
  }
}

function typeSubtitle() {
  clearCursor();
  subtitleEl.classList.add('typing');

  if (j < subtitleText.length) {
    subtitleEl.textContent += subtitleText[j++];
    setTimeout(typeSubtitle, 75);
  } else {
    setTimeout(typeQuote, 500);
  }
}

function typeQuote() {
  clearCursor();
  quoteEl.classList.add('typing');

  if (k < quoteText.length) {
    quoteEl.textContent += quoteText[k++];
    setTimeout(typeQuote, 35);
  } else {
    setTimeout(clearCursor, 700); // MATIKAN KURSOR
  }
}

// reset isi
titleEl.textContent = '';
subtitleEl.textContent = '';
quoteEl.textContent = '';

setTimeout(typeTitle, 800);

// Scroll Reveal for .scroll elements
function scrollReveal() {
  const elements = document.querySelectorAll('.scroll');

  elements.forEach(el => {
    const windowHeight = window.innerHeight;
    const elementTop = el.getBoundingClientRect().top;
    const elementVisible = 120;

    if (elementTop < windowHeight - elementVisible) {
      el.classList.add('active');
    }
  });
}

window.addEventListener('scroll', scrollReveal);
scrollReveal(); // saat load

// Navbar Fade Effect
const navbar = document.querySelector('.navbar');

function navbarFade() {
  if (window.scrollY > 100) {
    navbar.classList.add('fade', 'active');
  } else {
    navbar.classList.remove('active');
  }
}

window.addEventListener('scroll', navbarFade);

// Slideshow Functionality
let slideIndex = 1;
showSlides(slideIndex);

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function nextSlide() {
  showSlides(slideIndex += 1);
}

function prevSlide() {
  showSlides(slideIndex -= 1);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("hero-slide");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].className = slides[i].className.replace(" active", "");
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].className += " active";
  dots[slideIndex-1].className += " active";
}

// Auto slideshow
setInterval(() => {
  nextSlide();
}, 5000); // Change slide every 5 seconds
