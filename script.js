// let days = prompt("შეიყვანეთ დღე");
// if (typeof days !== "string") {
//   prompt("შეიყვანეთ დღეების რაოდენობა!");
// }
// let box1 = document.getElementById("box1");
// let index = parseInt(days);
// let p = document.createElement("P");
// p.textContent = index;
// box1.appendChild(p);
// p.classList.add("p_number");
// let interval = setInterval(() => {
//   box1.textContent = "";
//   let NewP = document.createElement("P");
//   NewP.textContent = index;
//   box1.appendChild(NewP);
//   NewP.classList.add("p_number");
//   index--;
//   if (index === -1) {
//     clearInterval(interval);
//   }
// }, 1000 * 60 * 60 * 24);

// let hours = prompt("შეიყვანეთ საათი");
// if (hours != typeof Number) {
//   alert("შეიყვანეთ საათბის რაოდენობა");
// }
// let box2 = document.getElementById("box2");
// let index2 = parseInt(hours);
// let p2 = document.createElement("P");
// p2.textContent = index2;
// p2.classList.add("p_number");
// box2.appendChild(p2);
// let interval2 = setInterval(() => {
//   box2.textContent = "";
//   let NewP = document.createElement("p");
//   NewP.textContent = index2;
//   box2.appendChild(NewP);
//   NewP.classList.add("p_number");
//   index2--;
//   if (index2 === -1) {
//     clearInterval(interval2);
//   }
// }, 1000 * 60 * 60);

// let Minutes = prompt("შეიყვანეთ წუთი");
// if (Minutes != typeof Number) {
//   alert("შეიყვანეთ წუთების რაოდენობა");
// }
// let box3 = document.getElementById("box3");
// let index3 = parseInt(Minutes);
// let p3 = document.createElement("p");
// p3.textContent = index3;
// p3.classList.add("p_number");
// box3.appendChild(p3);
// let interval3 = setInterval(() => {
//   box3.textContent = "";
//   let NewP = document.createElement("p");
//   NewP.textContent = index3;
//   NewP.classList.add("p_number");
//   box3.appendChild(NewP);
//   index3--;
//   if (index3 === -1) {
//     clearInterval(interval3);
//   }
// }, 1000 * 60);

// let seconds = prompt("შეიყვანეთ წამი");
// if (seconds !== typeof Number) {
//   alert("შეიყვანეთ წამების რაოდენობა");
// }
// let box4 = document.getElementById("box4");
// let index4 = parseInt(seconds);
// let p4 = document.createElement("P");
// p4.textContent = index4;
// p4.classList.add("p_number");
// box4.appendChild(p4);
// let interval4 = setInterval(() => {
//   box4.textContent = "";
//   let NewP = document.createElement("p");
//   NewP.textContent = index4;
//   NewP.classList.add("p_number");
//   box4.appendChild(NewP);
//   index4--;
//   if (index4 === -1) {
//     clearInterval(interval4);
//   }
// }, 1000);
