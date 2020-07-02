var readline = require('readline');

var lines = []
var rl = readline.createInterface({
  input: process.stdin
});

rl.on('line', function (line) {
  lines.push(line)
});

rl.on('close', function() {
  solve(lines)
})

function solve(lines) {
  let str = lines[0];
  let n = Number(lines[1]);
  let padStr = lines[2];

  if (str.length < n) {
    let i = 0;
    while (str.length < n) {
      i = i % padStr.length;
      str = str + padStr[i];
      i += 1;
    }
  }
  console.log(str);
}
