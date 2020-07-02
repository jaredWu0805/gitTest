const readline = require('readline');

const lines = [];
const rl = readline.createInterface({
  input: process.stdin,
});


function solve(input) {
  const limit = Number(input[0]);
  const numOfItems = Number(input[1]);
  let ans = new Array(limit);
  ans.fill(0);
  for (let i = 2; i < 2 + numOfItems; i += 1) {
    let tmp = Number(input[i]);
    for (let n = 0; n < limit; n += 1) {
      if (tmp > ans[n]) {
        let m = limit - 1;
        while (m > n) {
          ans[m] = ans[m - 1];
          m -= 1;
        }
        ans[n] = tmp;
        break;
      }
    }
  }
  let sum = 0;
  for (let i = 0; i < limit; i += 1) {
    sum += ans[i];
  }
  console.log(sum);
}

rl.on('line', (line) => {
  lines.push(line);
});

// rl.on('line', function(line) {lines.push(line)});

rl.on('close', () => {
  solve(lines);
});
