/* ES 5 */

function customUperCase() {
    for (var i = 0; i < arguments.length; i++) {
        console.log(arguments[i].toUpperCase());
    }
}

customUperCase('jose', 'maria', 'lulu');
/*
JOSE
MARIA
LULU
*/


/* ES 6 */

let custoUperCaser6 = (...params) => {
    //console.log(params); //(3) ["jose", "maria", "lulu"]
    params.forEach((value)=>{
        console.log(value.toUpperCase());
    })
}
custoUperCaser6('jose', 'maria', 'lulu');
/*
JOSE
MARIA
LULU
*/

let multiply = (multiplier, ...numbers) =>{
    return numbers.map((number) => number * multiplier);
}
console.log(multiply(2,3,6,2,10)) // (4) [6, 12, 4, 20]