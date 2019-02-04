var votes = [
    'tacos',
    'pizza',
    'pizza',
    'tacos',
    'fries',
    'ice cream',
    'ice cream',
    'pizza'
];

var initialValue = {};

var reducer = function(tally, vote) {
    if (!tally[vote]) {
        tally[vote] = 1;
    } else {
        tally[vote] = tally[vote] + 1;
    }

    return tally;
}

var result = votes.reduce(reducer, initialValue);
console.log(result);