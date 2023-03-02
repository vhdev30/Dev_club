//Faça um programa onde leia um número e diga se ele é: - ímpar, - par, 
//- é um número primo e impar, - é par e divisível por 5.
const one = 11

if(one % 2 === 0) {

    if(one % 5 === 0)
    console.log("O número é par e divisivel por 5")
    else console.log("O número é par e não é divisivel por 5")
}
else  {
     for (let i = 2; i < one; i++)
if (one % i === 0) {
 console.log("O número é impar mas não é primo")
 break
} else {
    if (i === one -1) console.log( "ele é um numero primo")
}
  
}