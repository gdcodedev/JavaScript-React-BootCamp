var jogador1 = 1;
var jogador2 = 0;
var placar;
    if (jogador1 > 0){
      console.log('Jogador 1 Marcou um ponto!');
    }else if(jogador2 > 0){
      console.log('O jogador 2 marcou ponto!');
      } else {
        console.log('Os jogadores estão empatados!');
      }
    
    // Aninhamento de ifs
    // Podemos também usar o "if" dentro de um outro "if", chamamos isso de aninhamento de if's ou ninho de if's.
    //Ex : 

    if(jogador1 = -1) {
      if(jogador1 > 1) {
        console.log('Jogador 1 marcou ponto');
      }else {
        console.log('Ninguém marcou ponto!');
      }
    }

    // IF Ternário 
    // Podemos também fazer uma verficação em uma única linha usando o 'if' ternário;
    //Ex :

    var jogador11 = 1;
    var jogador21 = 1;
    var placar;

    // Usando ternário
    jogador11 != -1 && jogador21 != -1 ? console.log('Os jogadores são válidos') : 
    console.log('Jogadores inválidos');

    // Usando if
    if(jogador11 > 0 && jogador21 == 0) {
      console.log('Jogador 11 marcou ponto!');

      // Usando if else
    } else if (jogador21 > 0 && jogador11 == 0){
      console.log('Jogador21 marcou ponto!');
    }else {
      console.log('Ninguém marcou ponto!');
    }

    // Usando switch/case 
    // O switch/case, funciona como uma estrutura condicional também;
    switch(placar) {
      case placar = jogador11 > jogador21:
        console.log('Jogador 11 Ganhou!');
        break;
        case  placar = jogador21 > jogador11 :
          console.log('Jogador 21 Ganhou!');
          break;
          default:
            console.log('Ninguém ganhou!');
    }
