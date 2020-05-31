
# CURSO JAVASCRIPT ES6

https://academy.especializati.com.br/curso/javascript-es6

APRENDA COM A EVOLUÇÃO, DESCUBRA TODOS OS NOVOS RECURSOS QUE A NOVA VERSÃO DO JAVASCRIPT TROUXE.

## <a name="indice">Índice</a>

1. [01 - Introdução ao ES6](#parte1)     
2. [02 - ES6 na Prática](#parte2)     
---


## <a name="parte1">1 - 01 - Introdução ao ES6</a>

#### 01 - o que é ES6

- Tabela de compatibilidade: https://kangax.github.io/compat-table/es6/

- Comparação: http://es6-features.org/

#### 02 - Ferramentas Curso ES6

- Chrome: https://www.google.com/chrome/

- Visual Studio Code: https://code.visualstudio.com/

#### 03 - Preparar Projeto ES6



[Voltar ao Índice](#indice)

---


## <a name="parte2">2 - 02 - ES6 na Prática</a>

#### 01 - Variáveis ES6 let e const

- let: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let

- const: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Statements/const

```js
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
```

#### 02 - Arrow Functions ES6 - Parte 1

```js
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

```

#### 03 - Arrow Functions ES6 - Parte 2

```js
/* ES 5 */

var jose = {
    name: 'jose',
    lastname: 'Malcher jr',
    fullName: function () {
        return this.name + " " + this.lastname;
    },
    showME5: function () {
        var contexto = this;
        setTimeout(function () {
            console.log(contexto.fullName());
        }, 2000);

    }
}
jose.showME5(); // jose Malcher jr

/* ES 6 */

let company = {
    name: 'JoseMalcher.net',
    lastname: 'TI',
    fullName(){
        return this.name + " " + this.lastname;
    },
    /*showME6(){
        setTimeout(()=>{
            console.log(this.fullName());
        }, 2000)
    }*/
    showME6(){
        setTimeout(() => console.log(this.fullName()), 2000);
    }
}
company.showME6(); // JoseMalcher.net TI
```

#### 04 - String Template ES6

```js
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
```

#### 05 - Destructuring ES6

```js
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
```

#### 06 - Rest parameters ES6

```js
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
```

#### 07 - Spread ES6


#### 08 - Parâmetros Default ES6



[Voltar ao Índice](#indice)

---

