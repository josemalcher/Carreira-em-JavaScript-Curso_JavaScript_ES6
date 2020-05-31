/* ES 5 */

var fullName = function(name, lastname){
    return name + " " + lastname;
}
console.log(fullName("jose", "junior")); // jose junior


/* ES 6 */
let fullName6 = (name, lastName) => `${name} ${lastName}`;
console.log(fullName6("Jose", "Malcher")); // Jose Malcher

let n1 = 20;
let n2 = 30;
let result = `O resultado da some entre ${n1} + ${n2} = ${n1 + n2}`;
console.log(result); // O resultado da some entre 20 + 30 = 50