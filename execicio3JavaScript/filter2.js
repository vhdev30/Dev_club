
//crian filter que amostre somente os numeros pares e divisiveis por 5.

const lista1 = [20,3,234,12,17,541,6,87,275,1000];

const pares = lista1.filter (par =>{

    if(par % 2 !== 0)  return false
    if(par % 5 !==0)return false

    

            

    return true


})
console.log (pares)

