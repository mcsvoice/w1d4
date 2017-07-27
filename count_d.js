var countdownGenerator = function (x) {

  var textSnips = ['Rocket\'s already gone, bub', 'Blast Off!', 'T-Minus 3', '']

  return function(){

  }

};

var countdown = countdownGenerator(3);
countdown(); // T-minus 3...
countdown(); // T-minus 2...
countdown(); // T-minus 1...
countdown(); // Blast Off!
countdown(); // Rockets already gone, bub!
countdown(); // Rockets already gone, bub!