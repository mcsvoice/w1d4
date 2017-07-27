var input = [
  { x: 3, y: 4 },
  { x: 12, y: 5 },
  { x: 8, y: 15 }
];

//a is getting the value in the object in the array but I don't want that
//I want a to be equal to x and b to be equal to y

var result = input.map(function(a){
  console.log(a);
  return Math.sqrt(Math.pow(a.x, 2) + Math.pow(a.y,2));
});

console.log(result[0] === 5);
console.log(result[1] === 13);
console.log(result[2] === 17);