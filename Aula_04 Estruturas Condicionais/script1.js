    // For funciona como uma repetição de instrução até que a condição seja falsa;
    // Ex : 
    var array = ['valor1', 'valor2', 'valor3', 'valor4', 'valor5',];
    let object = {propriedade1: 'valor1', propriedade2: 'valor2', propriedade3: 'valor3',}
      for(let i = 0; i < array.length; i++){
        console.log(i);
      }

      // For/in Funciona como uma repetição a partir de uma propriedade:

      var array1 = ['valor1', 'valor2', 'valor3', 'valor4', 'valor5'];
      for( indice in array1) {
        console.log(indice);
      }

      // Com object

      for(i in object){
        console.log(i);
      }

      // For of 
      // O for/of não funciona com objetos pois as propriedades variam, diferentes do índice em um array que sempre são números inteiros.
      
      var array3 = ['valor1', 'valor2', 'valor3', 'valor4', 'valor5'];
      for(i of array3){
        console.log(i);
      }

      for(i of object.propriedade1){
        console.log(i);
      }


      // While; Executa uma instrução "enquanto" determinada condição for verdadeira, a verificação é feita antes da execução;
      // Como ler: enquanto a variável a for menor que 10 ela vai receber +1 e imprimir no console.

      var a = 0;
      while (a < 10){
        a++;
        console.log(a);
      }  do {
        a++;
        console.log(a);
      } while (a < 10);
