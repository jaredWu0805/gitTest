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

// the array of items
let arr = [];
let numOfItems = 0;

function greedyThief(capacity, index) {
  if (index >= numOfItems) return 0;
  let tmp1 = greedyThief(capacity, index + 1);

  if (arr[index].weight > capacity)
    return tmp1;
  else {
    let tmp2 = greedyThief(capacity - arr[index].weight, index + 1) + arr[index].value;
    return Math.max(tmp1, tmp2);
  }
}

function solve(lines) {
  let tmp = lines[0].split(' ');
  numOfItems = tmp[0];
  for (let i = 1; i <= tmp[0]; i += 1) {
    const item = lines[i].split(' ');
    const obj = {
      weight: Number(item[0]),
      value: Number(item[1]),
    }
    arr.push(obj);
  }
   console.log(greedyThief(tmp[1], 0));

 }
