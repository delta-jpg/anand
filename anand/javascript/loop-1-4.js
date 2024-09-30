let n = Number(prompt("toogoo oruulna uu?"));
let b = 0;
for (let a = 1; a <= n; a++) {
  if (a % 2 == 0) {
    b = b + a;
  }
}
alert(b);
