const carouselContainer = document.getElementById("carousel-container");
const carousel = document.getElementById("carousel");

const items = document.getElementsByClassName("carousel-item");

const prevButton = document.getElementById("carousel-prev-btn");
const nextButton = document.getElementById("carousel-next-btn");

const totalItems = items.length;
const itemWidth = items[0].clientWidth;

let currIdx = 1;

carouselContainer.style.width = `${itemWidth}px`;
prevButton.style.display = "none";

if (totalItems === 1) {
  nextButton.style.display = "none";
  prevButton.style.display = "none";
}

function hideOrShowButton() {
  nextButton.style.display = "block";
  prevButton.style.display = "block";

  if (currIdx === totalItems) {
    nextButton.style.display = "none";
  }

  if (currIdx === 1) {
    prevButton.style.display = "none";
  }
}

function showPreviousSlide() {
  currIdx = currIdx-- === 0 ? 0 : currIdx--;
  hideOrShowButton();

  const translate = `-${itemWidth * currIdx - itemWidth}`;

  carousel.style.transform = `translateX(${translate}px)`;
}

function showNextSlide() {
  currIdx = currIdx++ >= totalItems ? totalItems : currIdx++;
  hideOrShowButton();
  carousel.style.transform = `translateX(-${itemWidth * (currIdx - 1)}px)`;
}

prevButton.addEventListener("click", showPreviousSlide);
nextButton.addEventListener("click", showNextSlide);
