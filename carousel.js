const carouselContainer = document.getElementById("carousel-container");
const carousel = document.getElementById("carousel");

const items = document.getElementsByClassName("carousel-item");

const prevButton = document.getElementById("carousel-prev-btn");
const nextButton = document.getElementById("carousel-next-btn");

const totalItems = items.length - 1;
const itemWidth = items[0].clientWidth;

let currIdx = 0;

carouselContainer.style.width = `${itemWidth}px`;
prevButton.style.display = "none";

function hideOrShowButton() {
  if (currIdx === totalItems) {
    nextButton.style.display = "none";
    return;
  }

  if (currIdx === 0) {
    prevButton.style.display = "none";
    return;
  }
  nextButton.style.display = "block";
  prevButton.style.display = "block";
}

function showPreviousSlide() {
  currIdx = currIdx-- === 0 ? 0 : currIdx--;
  hideOrShowButton();

  const translate = `-${itemWidth * (currIdx + 1) - itemWidth}`;

  carousel.style.transform = `translateX(${translate}px)`;
}

function showNextSlide() {
  currIdx = currIdx++ >= totalItems ? totalItems : currIdx++;
  hideOrShowButton();

  carousel.style.transform = `translateX(-${itemWidth * currIdx}px)`;
}

prevButton.addEventListener("click", showPreviousSlide);
nextButton.addEventListener("click", showNextSlide);
