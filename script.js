"use strict";

// elements
const reviews = document.querySelectorAll(".review-wrapper");

let currentReview = [0, 2];

let updateReviewSlider = (cards) => {
  cards.forEach(index => {
    reviews[index].classList.add("active")
  });
}

setInterval(() => {
  currentReview.forEach(index, i => {
    reviews[index].classList.remove("active");

    currentReview[i] = index >= reviews.length - 1 ? 0 : index + 1;
  });

  setTimeout(() => {
    updateReviewSlider(currentReview);
  }, 250);

}, 5000)

updateReviewSlider(currentReview);