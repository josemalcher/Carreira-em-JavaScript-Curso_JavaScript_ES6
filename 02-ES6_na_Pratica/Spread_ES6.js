/* ES 5 */

function Soma(n1, n2, n3) {
    return n1 + n2 + n3;
}

var number = [1, 2, 3];

console.log(Soma(number[0], number[1], number[2])); // 6
console.log(Soma.apply(null, number));


/* ES 6 */

let Soma6 = (n1, n2, n3) => n1 + n2 + n3;

let numbers = [2, 4, 6];
console.log(Soma6(...numbers));

console.log(Math.min(...numbers)); // menor valor 2
console.log(Math.max(...numbers)); // maior 6

let objectC = {
    a: 1,
    b: 2,
    c: 3,
    d: 4,
    e: 5,
}
let {a, b, ...c} = objectC;
console.log(a,b,c)
// 1 2 {c: 3, d: 4, e: 5}
