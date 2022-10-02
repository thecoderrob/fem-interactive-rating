const btnsRating = document.querySelectorAll(".btn-rating");
const containerRating = document.querySelector(".container--rating");
const containerFinsihed = document.querySelector(".container--finished");
const userRatingSpan = document.querySelector("#user-rating");

let userRating = null;

const setUserRating = (e) => {
  console.log(userRatingSpan);
  btnsRating.forEach((btn) => {
    btn.setAttribute("aria-selected", false);
  });
  e.target.setAttribute("aria-selected", true);
  const rating = e.target.value;
  userRating = rating;
};

const handleSubmit = () => {
  if (userRating === null) return;
  containerRating.setAttribute("hidden", "hidden");
  containerFinsihed.style.display = "grid";

  userRatingSpan.innerText = userRating;
};
