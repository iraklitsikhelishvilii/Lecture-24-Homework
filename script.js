let days = prompt("შეიყვანეთ დღე");
let box1 = document.getElementById("box1");
let index = parseInt(days);
let p = document.createElement("P");
p.textContent = index;
box1.appendChild(p);
p.classList.add("p_number");
let interval = setInterval(() => {
  box1.textContent = "";
  let NewP = document.createElement("P");
  NewP.textContent = index;
  box1.appendChild(NewP);
  NewP.classList.add("p_number");
  index--;
  if (index === -1) {
    clearInterval(interval);
  }
}, 1000 * 60 * 60 * 24);

let hours = prompt("შეიყვანეთ საათი");
let box2 = document.getElementById("box2");
let index2 = parseInt(hours);
let p2 = document.createElement("P");
p2.textContent = index2;
p2.classList.add("p_number");
box2.appendChild(p2);
let interval2 = setInterval(() => {
  box2.textContent = "";
  let NewP = document.createElement("p");
  NewP.textContent = index2;
  box2.appendChild(NewP);
  NewP.classList.add("p_number");
  index2--;
  if (index2 === -1) {
    clearInterval(interval2);
  }
}, 1000 * 60 * 60);
