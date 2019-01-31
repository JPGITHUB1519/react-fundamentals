// New Binding

var animal = function(color, name, type) {
    // this = {}
    this.color = color;
    this.name = name;
    this.type = type;
};

var zebra = new animal('black and white', 'Zorro', 'Zebra');

console.log(zebra.color);