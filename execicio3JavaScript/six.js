// A prefeitura de uma cidade fez uma pesquisa entre seus habitantes, 
//coletando dados sobre o salário e número de filhos. A prefeitura
// deseja saber: - média do salário da população; - média do número 
//de filhos; - maior salário; - O final da leitura de dados se dará com
// a entrada de um salário negativo. - Faça isso usando uma função!

const people = [{
Filhos:2,
Salario:2000
},
{
    Filhos:3,
    Salario:3000
    },
    {
        Filhos:4,
        Salario:4000
        },
        {
            Filhos:5,
            Salario:5000
            },
            {
                Filhos:6,
                Salario:-2000
                },
]
function one (peopleInformation) {

    let MediaDeSalario = 0
    let MediaDeFilho = 0
    let MaiorSalario = 0
    
    for(let i = 0; i < peopleInformation.lenght;i++){

        const salario_1= peopleInformation[i].Salario
        const filho_1= peopleInformation[i].Filhos

        if ( salario_1 > MaiorSalario) MaiorSalario = salario_1
        if ( salario_1 < 0) {
            console.log (`media de salario R$${(MediaDeSalario/i).toFixed(0)}`)
            console.log (`media de filhos ${(MediaDeFilho/i).toFixed(0)}`)
            console.log (`maior salário R$${MaiorSalario}`)
            break
        } else{
            MediaDeSalario =  MediaDeSalario + salario_1;
            MediaDeFilho += filho_1

        }
        
    }
}
one (people)