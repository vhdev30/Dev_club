//Faça um programa onde, você chame uma função que calcule a taxa 
//mensal de juros de um investimento.
//Você deve enviar como argumentos da função - Valor inicial 
//investido - Valor atual do investimento - Tempo em meses, que o valor
// está investidoA função deve RETORNAR a taxa de juros, já formatada. 
//Ex: 2,5%. Siga a formula desse vídeo para te auxiliar com o cálculo.
//Cálculo taxa = juros(Valor atual do investimento - Valor inicial 
//investido) / Valor inicial investido * tempo

 const calcule = (valorInicial, valorAtual, tempo) => {

    const juros = ( valorAtual - valorInicial) / ( valorInicial * tempo)

    console.log ((juros * 100).toFixed(2) + '%')

}

calcule(100,120,1)