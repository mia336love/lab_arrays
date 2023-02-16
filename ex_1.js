let arr = [];
const n = 0;
const m = 100;
const count = 100;

const min = Math.min(n, m);
const dif = Math.max(n, m) - min;

while (arr.length < count) {
  arr.push(Math.round(Math.random() * dif + min));
}

console.log(arr);
