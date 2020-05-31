/* ES 5 */

function showFullName(firtname, lastName) {
    firtname = firtname === undefined ? 'Primeiro NOme' : firtname;
    lastName = lastName === undefined ? '' : lastName;
    console.log(firtname + " " + lastName);
}
//showFullName("Jose"); // Jose undefined (sem verificação )
showFullName("Jose"); // Jose
showFullName("Jose"); // Jose
showFullName(); // Primeiro NOme


/* ES 6 */

let showFullName6 = (firstName = "Primeiro", lastName = '') =>
    console.log(firstName + " " + lastName);
showFullName6(); // Primeiro
showFullName6('José', "Malcher") // José Malcher