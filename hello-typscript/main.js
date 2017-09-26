var a = 'a';
a = 'v';
var b = 'b';
var c = [];
c.push(a);
c.push(b);
var d = c.map(function (valor) { return valor + 'c'; });
console.log(d);
