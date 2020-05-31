
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


#### 03 - Arrow Functions ES6 - Parte 2


#### 04 - String Template ES6


#### 05 - Destructuring ES6


#### 06 - Rest parameters ES6


#### 07 - Spread ES6


#### 08 - Parâmetros Default ES6



[Voltar ao Índice](#indice)

---

