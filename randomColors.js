function randomRBGColors() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);

  return `rgb(${r},${g},${b})`;
}

const heading = document.querySelector("h1");
heading.style.color = randomRBGColors();

// setInterval(function changing() {
//   heading.style.color = randomRBGColors();
// }, 500);

const letters = document.querySelectorAll(".letter");

setInterval(function () {
  for (let usedLetters of letters) {
    usedLetters.style.color = randomRBGColors();
  }
}, 1000);

//this will never stop changing colors. If you want it to stop you need to assign a clearInterval()

// You can do this by assigning setInterval to a variable and calling it. clearInterval(intervalId), this can be done in the same {}, towards the bottom in it's own function.
