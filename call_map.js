var words = ["ground", "control", "to", "major", "tom"];

// results = [];

function map(words, callback){
  var results = [];

  words.forEach(function(currentValue) {
    results.push(callback(currentValue));
  });
  return results;
}

const res = map(words, function(word) {
  return word.length;
});

console.log(res);

// words.forEach(function(currentValue) {

//   console.log(currentValue.length);
//   results.push(currentValue.length);
// });

// console.log(results);

//console.log(pointlessMap(words));

// function findWaldo(arr, found) {
// arr.forEach(function(currentValue, Index, Array) {;
//   if (currentValue === "Waldo")
//   found(Index);
//   });
// }


// function ali(height) {
//   return `ali's height is ${height}`;
// }

// ali(12)
