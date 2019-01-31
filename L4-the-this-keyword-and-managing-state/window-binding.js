/* Window Binding */

var sayAge = function() {
    console.log(this.age);
};

// using strict mode the default this value will not be window
// var sayAge = function() {
//     'use strict';
//     console.log(this.age);
// };

var me = {
    age: 25
};

// When you call a function and does not specify the this, the this will be the window object
sayAge();
window.age = 35;