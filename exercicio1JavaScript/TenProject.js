//Faça um programa que imprima na tela se um nome é igual ao outro nome 
//digitado. Porém, os dois nomes devem estar em dois objetos separados.
// Ex: const object1 = {name:"João"}, object1 = {name:"Maria"}. João e João,
// imprime true. João e Maria, imprime false.

const NameOne = {name:"João"}
const NameTwo = {name:"Maria"}

const NameThree = NameOne.name == NameTwo.name

console. log (NameThree)