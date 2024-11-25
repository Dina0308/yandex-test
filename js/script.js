//slider steps

const slider = document.querySelector('.slider');
const prevButton = document.querySelector('.prev-button');
const nextButton = document.querySelector('.next-button');
const slidesSteps = Array.from(slider.querySelectorAll('.steps__slide'));
const slideCount = slidesSteps.length;
let slideIndex2 = 0;

// Устанавливаем обработчики событий для кнопок
prevButton.addEventListener('click', showPreviousSlide);
nextButton.addEventListener('click', showNextSlide);

// Функция для показа предыдущего слайда
function showPreviousSlide() {
  slideIndex2 = (slideIndex2 - 1 + slideCount) % slideCount;
  updateSlider2();
}

// Функция для показа следующего слайда
function showNextSlide() {
  slideIndex2 = (slideIndex2 + 1) % slideCount;
  updateSlider2();
}

// Функция для обновления отображения слайдера
function updateSlider2() {
  slidesSteps.forEach((slide, index) => {
    if (index === slideIndex2) {
      slide.style.display = 'block';
    } else {
      slide.style.display = 'none';
    }
  });
}

// Инициализация слайдера
updateSlider2();
  
//slider person
const slides = document.querySelector(".slides");
  const slide = document.querySelectorAll(".slide");
  const counter = document.querySelector(".counter");
  const nextSlideBtn = document.querySelector(".party-slide-next");
  const prevSlideBtn = document.querySelector(".party-slide-prev");
  let currentIndex = 0;

  function updateSlider() {
    const slideWidth = slide[0].clientWidth;
    slides.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
    updateCounter();
  }

  function updateCounter() {
    const slidesToShow = window.innerWidth <= 768 ? 1 : 3;
    const currentSlide = Math.ceil(currentIndex / slidesToShow) + 1;
    const totalSlides = Math.ceil(slide.length / slidesToShow);
    counter.textContent = `${currentSlide} / ${totalSlides}`;
  }

  function nextSlide() {
    const slidesToShow = window.innerWidth <= 768 ? 1 : 3;
    currentIndex = (currentIndex + slidesToShow) % slide.length;
    updateSlider();
  }

  function prevSlide() {
    const slidesToShow = window.innerWidth <= 768 ? 1 : 3;
    currentIndex = (currentIndex - slidesToShow + slide.length) % slide.length;
    updateSlider();
  }

  // Автоматическое переключение слайдов каждые 4 секунды
  setInterval(nextSlide, 4000);

  //кнопки управления слайдером
  nextSlideBtn.addEventListener('click', nextSlide);
  prevSlideBtn.addEventListener('click', prevSlide);

  // Обновляем положение при изменении размера окна
  window.addEventListener("resize", updateSlider);

  // Инициализируем слайдер
  updateSlider();