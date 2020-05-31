/* ES 5 */

var fullName = ['Jose', 'Malcher jr'];
var name = fullName[0];
var lastname = fullName[1];
console.log(name)
console.log(lastname);


/* ES 6 */

let fullName6 =['Jose', 'Malcher jr'];
let [name6, lastname6] = fullName6;
console.log(name6); // Jose
console.log(lastname6); //Malcher jr

let fullName6Obj = {
    fistname60bj: "JOSE",
    lastName60bj: "Malcher JR",
}
let {fistname60bj, lastName60bj} = fullName6Obj;
console.log(fistname60bj) // JOSE
console.log(lastName60bj) // Malcher JR