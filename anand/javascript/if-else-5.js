let x = prompt("number");
if (isNaN(x)) {
  alert("not number");
} else if (x % 3 === 0 && x % 5 === 0) {
  alert("fizzbuzz");
} else if (x % 3 === 0) {
  alert("fizz");
} else if (x % 5 === 0) {
  alert("buzz");
} else if (x % 3 !== 0 || x % 5 !== 0) {
  alert("input");
}
