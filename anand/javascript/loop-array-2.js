let numbers = prompt("insert numbers").split(",").map(Number);
let canbedivided = numbers.filter((number) => number % 3 === 0);
if (canbedivided.length > 0) {
  alert(canbedivided.join(", "));
} else {
  alert("cant be divided by 3");
}
