//Faça um programa onde ele leia 4 números. Em cada caso, ele deve retornar
 //a mensagem condizente: - Todos os números 
 //são impares => TODOS OS NÚMEROS SÃO IMPARES - 
 //Todos os números são pares => TODOS OS NÚMEROS SÃO
 // PARES. Em caso negativo dos casos a cima, colocar uma mensagem =>
 // Há números pares e ímpares.
 

const one = 33
const two = 22
const three = 43
const four = 23

if (one % 2 === 0 && two % 2 === 0 && three % 2 === 0 && four % 2 === 0) {
    console.log ("todos são pares")
} else if (one % 2 !== 0 && two % 2 !== 0 && three % 2 !== 0 && four % 2 !== 0) {
    console. log ("todos sao impares")
}else { console.log ("todos misturados,impares e pares")}