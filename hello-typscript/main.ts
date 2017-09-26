let a : string = 'a';
a = 'v'

let b: string = 'b';

let c: string[] = [];

c.push(a);
c.push(b);

let d: string[] = c.map(valor => valor + 'c');

console.log(d);