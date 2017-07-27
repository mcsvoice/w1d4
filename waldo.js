function findWaldo(arr, found) {
  arr.forEach(function(currentValue, Index, Array) {;
    if (currentValue === "Waldo")
    found(Index);
    });
  }

function actionWhenFound(found) {
  console.log("Found him! at: " + found);
}

findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);