let n = Number(prompt("toogoo oruulna uu?"));
let b = 0;
for (let a = 1; a <= n; a++) {
  if (a % 3 == 0) {
    continue;
  }
  console.log(a);
}
