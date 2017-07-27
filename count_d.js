var countdownGenerator = function (x) {

  var count = x;

  return function countdown() {
    if (count > 0) {
      console.log("T-Minus" + count + "...");
      count--
      return count;
    } else if (count < 0) {
      console.log("Rockets already gone, bub");
      count--
      return count;
    } else {
      console.log("BLAST OFF!");
      count--
      return count;
    }

  }
};

  //countdowngenerator(3) is going in to Countdown as the leftmost variable?

var countdown = countdownGenerator(3);
console.log(countdown);
countdown(); // T-minus 3...
countdown(); // T-minus 2...
countdown(); // T-minus 1...
countdown(); // Blast Off!
countdown(); // Rockets already gone, bub!
countdown(); // Rockets already gone, bub!


// function Clock() {
//          counter--;
//          if (counter == -2) {
//              say = "BLASTOFF!!!";
//             }
//         if (counter == -3) {
//              clearInterval(int);
//              document.write("<img src = 'rocket19.jpg' />");
//              }
//       }



// var countdownGenerator = function (timer) {



//   return function countdown(dtime){
//       var result = [];
//       var textSnips = ['Rocket\'s already gone, bub', 'Blast Off!', 'T-Minus 1', 'T-Minus 2', 'T-Minus 3']

//       if (dtime !== -1) {
//         dtime -= 1
//       } else {
//         textSnips[0];
//       }
//     console.log(dtime);
//     result.push(textSnips[dtime]);
//     console.log(result);
//   }

// //   return function() {
// //     dieNum += 1
// //     return list[dieNum];
// //   }

// };

// var countdown = countdownGenerator(3);
// countdown(); // T-minus 3...
// countdown(); // T-minus 2...
// countdown(); // T-minus 1...
// countdown(); // Blast Off!
// countdown(); // Rockets already gone, bub!
// countdown(); // Rockets already gone, bub!


// function makeLoadedDie() {
//   var list = [5, 4, 6, 1, 6, 4, 2, 3, 3, 5];
//   var dieNum = -1;

//   return function() {
//     dieNum += 1
//     return list[dieNum];s
//   }

// }

// var rollLoadedDie = makeLoadedDie();

// console.log(rollLoadedDie());  // 5
// console.log(rollLoadedDie());  // 4
// console.log(rollLoadedDie());  // 6