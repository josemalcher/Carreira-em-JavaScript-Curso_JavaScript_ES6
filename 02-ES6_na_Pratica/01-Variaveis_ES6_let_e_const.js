/*   ES 5 */
var name = "JOSE";
var name = "Malcher";
console.log(name); // não gera erro

if (true) {
    var name = "Novo nome";
}
console.log(name); // não gera erro

var i = 50;
console.log(i); // 50
for (var i = 0; i < 20; i++) {
}
console.log(i); // 20

/* ES 6 */

let name6 = "JOSE";
//let name6 = "Malcher";
console.log(name6) // Uncaught SyntaxError: Identifier 'name6' has already been declared

if (true) {
    //let name6 = "Nome let no contexto";
    name6 = "Nome Alterado no contexto do bloco";
    console.log(name6); // Nome let no contexto // Nome Alterado no contexto do bloco
}
console.log(name6); // JOSE // Nome Alterado no contexto do bloco


const companie = "Josemalcher.net";
//companie = "Testando alteração"; // Uncaught TypeError: Assignment to constant variable.