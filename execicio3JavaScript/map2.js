
//qum estiver nota igual ou maior que 6 mostrar aprovado, caso 
//contrario mostrar reprovado.,

const list1= [ 
    {name:"rodolfo", prova: 7},
    {name: "Maria", prova: 4},
    {name:"João", prova: 9},
    {name: "Bruno", prova: 6},
    {name: "Carla", prova: 10},
    {name: "Ana", prova: 3},
    {name:"Julio", prova: 8},
];

const aprovados = list1.map(student => {

    let prova1 
    if (student.prova >= 6) {
        prova1 = 'aprovado'
    }else { 
        prova1 = 'reprovado'
    }
    const lista1 = {
    name: student.name,
    resultadoFinal:prova1

    }
return lista1

})
console.log(aprovados)