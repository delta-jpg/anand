let word = prompt("write a word");
let abc = "abcdefghijklmnopqrstuvwxyz";
let result = "";
for (let i = 0; i < word.length; i++) {
  let letter = word[i];
  let position = abc.indexOf(letter) + 1;
  if (position > 0) {
    result += position + ",";
  }
}
alert(result);
