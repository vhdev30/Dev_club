const button = document.getElementById('botClick')
const select = document.getElementById('troca_opcao')

const dolar = 5.2
const euro = 5.9
const bitcoin = `0.1`

const convert = () => {
    const input_Reais = document.getElementById('pegaReal').value
    const valor_Real1 = document.getElementById('valorReal1')
    const valor_troca = document.getElementById('valorTroca')


   
    valor_Real1.innerHTML = new Intl.NumberFormat("pt-br", {
        style: "currency",
        currency: "brl",
    }).format(input_Reais);

    if (select.value === 'US$ Dólar americano') {
        valor_troca.innerHTML = new Intl.NumberFormat("en-us", {
            style: "currency",
            currency: "usd",
        }).format(input_Reais / dolar);
    }

    if (select.value === '€ Euro') {
        valor_troca.innerHTML = new Intl.NumberFormat("de-de", {
            style: "currency",
            currency: "eur",
        }).format(input_Reais /euro);
    }
    if (select.value === '₿ Bitcoin') {
        valor_troca.innerHTML = '₿' + input_Reais / bitcoin /1000
    }
    

};

const opcao = () => {

    const troca_Escrita = document.getElementById('trocaEscrita')
    const troca_Bandeira = document.getElementById('trocaBandeira')

    if (select.value === 'US$ Dólar americano') {
        troca_Escrita.innerHTML = 'Dólar americano'
        troca_Bandeira.src = "./estados-unidos (1) 1.png"

    }
    if (select.value === '€ Euro') {
        troca_Escrita.innerHTML = 'Euro'
        troca_Bandeira.src = "./euro.png"

    }
    if (select.value === '₿ Bitcoin') {
        troca_Escrita.innerHTML = 'Bitcoin'
        troca_Bandeira.src = "./btc.png"

    }

    convert()
}

button.addEventListener('click', convert)
select.addEventListener('change', opcao)