let days = parseInt(prompt("შეიყვანეთ დღე"));
let hours = parseInt(prompt("შეიყვანეთ საათი"));
let minutes = parseInt(prompt("შეიყვანეთ წუთი"));
let seconds = parseInt(prompt("შეიყვანეთ წამი"));
let box1 = document.getElementById("box1");
let box2 = document.getElementById("box2");
let box3 = document.getElementById("box3");
let box4 = document.getElementById("box4");
function UpdateDisplay() {
  box1.textContent = days;
  box1.classList.add("p_number");
  box2.textContent = hours;
  box2.classList.add("p_number");
  box3.textContent = minutes;
  box3.classList.add("p_number");
  box4.textContent = seconds;
  box4.classList.add("p_number");
}
UpdateDisplay();
let interval = setInterval(() => {
  if (isNaN(days) || isNaN(hours) || isNaN(minutes) || isNaN(seconds)) {
    alert("შეიყვანეთ ციფრი!!!");
    return;
  }
  if (seconds > 0) {
    seconds--;
  } else {
    seconds = 59;
    if (minutes > 0) {
      minutes--;
    } else {
      minutes = 59;
      if (hours > 0) {
        hours--;
      } else {
        hours = 59;
        if (days > 0) {
          days--;
        } else {
          clearInterval(interval);
        }
      }
    }
  }
  UpdateDisplay();
}, 1000);
