const a = Number(prompt("toogoo oruulna uu?"));
for (let b = 2; b <= a; b++) {
  let prime = true;
  for (let i = 2; i * i <= b; i++) {
    if (b % i === 0) {
      prime = false;
      break;
    }
  }
  if (prime) {
    console.log(b);
  }
}
