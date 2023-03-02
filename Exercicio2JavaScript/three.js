//Faça um programa que gere um número aleatório entre 1 e 10, esse número é o
 //número 'ganhador'. Então ele também irá gerar um número aleatório
 // entre 1 e 10, e verifica se a pessoa ganhou ou não. Em caso de ter ganhado,
  // mostra o prêmio, se não ganhou, mostra outra mensagem.

 const primeiro_numero = Math.floor(Math.random() * 10 + 1 )
 const segundo_numero = Math.floor(Math.random() * 10 + 1)

 console. log (primeiro_numero)
 console. log (segundo_numero)

 if (primeiro_numero === segundo_numero) {
    console. log ("ganhou o carro")}
    else {console. log ("você o perdeu carro")
    
 }