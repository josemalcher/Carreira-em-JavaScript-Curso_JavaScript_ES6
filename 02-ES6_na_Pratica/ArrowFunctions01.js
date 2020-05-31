/* ES 5*/

var showName = function (name) {
    return name.toUpperCase();
};
console.log(showName("jose")); // JOSE


/* Es 6 */

let showName6 = (name6) => {
    return name6.toUpperCase();
}

let showName62 = (name6) => name6.toUpperCase(); // simplificando

console.log(showName62("es 6")) // ES 6

let showNome63 = () => console.log("SHOW LOG");
showNome63(); // SHOW LOG

let fullname = (name, lastname) => console.log(name, lastname);
fullname("Jose", "malcher"); // Jose malcher

let fullname2 = (name, lastname) => {
    name = name.toUpperCase();
    lastname = lastname.toUpperCase();
    let full = name + " " + lastname
    return full;
}
console.log(fullname2("Jose", "junior")); // JOSE JUNIOR
