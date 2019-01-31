/*
    Explicit Binding -> specify the this context using functions’ in-built functionality .call, .apply, .bind.
*/

var sayName = function(lang1, lang2, lang3) {
    console.log('My name is '  + this.name + ' and I know ' + lang1 + ', ' + lang2 + ', and ' + lang3);
}

var stacey = {
    name: 'Stacey',
    age: 34
};

var languages = ['Javascript', 'Ruby', 'Python'];

// sayName.call(stacey, languages[0], languages[1], languages[2]);
sayName.apply(stacey, languages);

// the parameters on bind are pre-set, bind returns a function with the prepended argument
var newFn = sayName.bind(stacey, languages[0], languages[1], languages[2]);
newFn();