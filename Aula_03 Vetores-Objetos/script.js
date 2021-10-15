// O que são vetores ou arrays

// como declarar um array
let array = ["String", 1, true];
console.log(array)

let array2 = ["String", 1, true, ["Array2teste"], ["Array2teste2"], ["Array2teste3"]];
console.log(array2);

// Manipulando Arrays
// Ao ser declarado, o Arrat traz consigo uma série de métodos #1 para manipula-lo.

// forEach() - itera um array;
array.forEach(function(item, index){console.log(item, index)});

// push() - add item no final do array;
array.push("novo item");
console.log(array);

// pop() - remove item no final do array;
array.pop();
console.log(array);

// shift() - remove item no início do array;
array.shift();
console.log(array);

// unshift() - add item no início do array;
array.unshift("Novo item no inicio");
console.log(array);

// indexOf() - retorna o índice de um valor;
console.log(array.indexOf(true));

// splice() - remove ou substitui unm item pelo índice;
array.splice(0, 3);
console.log(array);

// slice() - retorna uma parte de um array existente;
let novoArray = array.slice(0, 3);
console.log(novoArray);
