let roadMines = [
  false,
  false,
  false,
  true,
  false,
  false,
  false,
  false,
  false,
  false,
];

let damage = false;

for (let i = 1; i < roadMines.length; i++) {
  console.log("Танк переместился на ", i);

  if (roadMines[i]) {
    if (damage) {
      console.log("Танк уничтожен");
      break;
    } else {
      damage = true;
      i++;
      console.log("Танк повреждён");
    }
  }
}

//mines < 2
//  ? console.log("Поздравляю, Вы победили")
//  : console.log("Соболезную, Вы проиграли");
