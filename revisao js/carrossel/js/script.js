//ex 1: fazer um carrossel que avance automaticamente as imagens


let midias = [
    'http://tudosobrecachorros.com.br/wp-content/uploads/2013/09/nomes-para-cachorros.jpeg',
    'http://tudosobrecachorros.com.br/wp-content/uploads/precos-de-cachorro.png',
    'http://portaldodog.com.br/cachorros/wp-content/uploads/2015/07/american-staffordshire-terrier-400x210.jpg',
    'http://portaldodog.com.br/cachorros/wp-content/uploads/2015/04/basset-hound-400x210.jpg'

];  // esse é o nosso vetor que contem os enderecos das imagens que serao usadas no carrossel


let imagem = document.querySelector('img'); //armazendo na variavel imagem a tag img do html

let posicao = 0; // criando variavel de apoio para percorrer o vetor de midias

imagem.src = midias[posicao];  //endereco corresponde a posicao 0 do meu vetor de midias


let avancar = () =>{ // a funcao avancar é chamada quando clicamos no botao avancar



    posicao = posicao + 1; // somando o valor da variavel posicao com 1, e salvando o resultado da soma na propria variavel posicao
                            // portanto, eu estou atualizando o valor da minha variavel posicao

    if(posicao == midias.length){ // midias.length indica pra nós a quantidade de itens dentro do vetor,
                                // se eu tiver um vetor com 4 itens dentro, ele me retorn, portando, o valor 4
                                // entao, se a posicao for igual a 4, que nao existe nada nessa posicao dentro do vetor,
                                // a variavel posicao vira 0
        posicao = 0;
    }


    console.log(posicao);

    imagem.src = midias[posicao]; //atualizando o src da imagem com o endereco da nova posicao do vetor midias


}



setInterval(avancar, 3000); // 3000 ms = 3 segundos
