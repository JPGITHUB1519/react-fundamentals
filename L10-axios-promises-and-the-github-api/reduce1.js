var scores = [89, 76, 47, 95];
var initialValue = 0;

var reducer = function (accumulator, item) {
  console.log(accumulator);
  return accumulator + item;
}


var total = scores.reduce(reducer, initialValue);



console.log(average);