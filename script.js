const incrementBtn = document.getElementById("increment");
const decrementBtn = document.getElementById("decrement");
const resetBtn = document.getElementById("reset");
const countLabel = document.getElementById("countLabel");
let count = 0;

incrementBtn.onclick = function () {
  count++;
  countLabel.textContent = count;
};

decrementBtn.onclick = function () {
  if (count > 0) {
    count--;
    countLabel.textContent = count;
  }
};

resetBtn.onclick = function () {
  count = 0;
  countLabel.textContent = count;
};
