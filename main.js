// const slides = document.querySelectorAll(".slide");
// for (const slide of slides) {
//   //берем слайд из (of) массива слайдс
//   slide.addEventListener("click", () => {
//     clearActivClasses();

//     slide.classList.add("active");
//   });
// }

// function clearActivClasses() {
//   slides.forEach((slide) => {
//     slide.classList.remove("active");
//   });
// }

function slidesPlugin(slideActive) {
  const slides = document.querySelectorAll(".slide");

  slides[slideActive].classList.add("active");

  for (const slide of slides) {
    slide.addEventListener("click", () => {
      clearActivClasses();

      slide.classList.add("active");
    });
  }

  function clearActivClasses() {
    slides.forEach((slide) => {
      slide.classList.remove("active");
    });
  }
}

slidesPlugin(0);
