const btn = document.querySelector(".btn-open");
const form = document.querySelector(".fact-form");

btn.addEventListener("click", function () {
  if (form.classList.contains("hidden")) {
    form.classList.remove("hidden");
    btn.textContent = "close";
  } else {
    form.classList.add("hidden");
    btn.textContent = "New Ticket";
  }
});

// let voteInteresting = 23;
// let votesMindblowing = 5;
// const text = "Lisbon is the captital of Portugal";

// voteInteresting = voteInteresting + 1;
// voteInteresting++;
// console.log(voteInteresting);

// let totalUpvotes = voteInteresting + votesMindblowing;
// console.log("Upvotes:", totalUpvotes);

// let voteFalse = 4;
// const isCorrect = voteFalse < totalUpvotes;
// console.log(isCorrect);

// console.log(parseInt("24.5333ccc"));

// function calcFactAge(year) {
//   const currentYear = new Date().getFullYear();
//   // 2022 - 2015
//   const age = currentYear - year;
//   return age;
// }

// const age1 = calcFactAge(2015);
// console.log(age1);
// console.log(calcFactAge(2020));
// console.log(calcFactAge(1991));

