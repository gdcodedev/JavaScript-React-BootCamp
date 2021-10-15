// Tipos primitivos

// Boolean
var vOuF = false;
console.log(typeof(vOuF));

// Number

var NumeroQualquer = 1;
console.log(typeof(NumeroQualquer));

// String 
var Nome = "Guilherme";
console.log(typeof(Nome));

// Exemplo de Var
var Nome = "Guilherme";
Nome = "Cardoso";
console.log(Nome);

// Exemplo de Let

let Nome2 = "Cardoso";
Nome2 = "Guilherme";
console.log(Nome2);

// Exemplo de Const 

const Nome3 = "Guilherme Cardoso";
// Const não pode ter seu valor alterado logo apresentará erro.
 /*Nome3 = "Não pode ser alterado"; */
console.log(Nome3);

// Escopo 

var escopoGlobal = "Global";
console.log(escopoGlobal);

// Exemplo de como visualizar uma função fora do bloco de código.
function escopoLocal(){
  let escopoLocalInterno = "Local";
  console.log(escopoLocalInterno);
}
escopoLocal();
