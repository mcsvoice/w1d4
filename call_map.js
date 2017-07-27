var words = ["ground", "control", "to", "major", "tom"];

results = [];

words.forEach(function(currentValue) {

  //console.log(currentValue.length);
  results.push(currentValue.length);
});

console.log(results);

//console.log(pointlessMap(words));

// function findWaldo(arr, found) {
// arr.forEach(function(currentValue, Index, Array) {;
//   if (currentValue === "Waldo")
//   found(Index);
//   });
// }