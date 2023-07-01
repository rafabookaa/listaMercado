let frutas = [];
let laticinios = [];
let congelados = [];
let doces = [];
let confirmacao;
let categoria;
let entradaItem;

let input = document.querySelector('input')
//input.value();

function perguntaAdicao () {
    confirmacao = confirm('Deseja adicionar algum item na lista?')

    if (confirmacao == true) {
        categoria = prompt('Entre com a categoria de produtos que deseja adicionar a lista: \n 1 - Frutas \n 2 - Laticinios \n 3 - Conlelados \n 4 - Doces')
    }else {
    alert(`Sua lista de compras é: ${frutas}`);
        }
}

function adiciona () {

    if(categoria == 1) {
        frutas = input.value;
        frutas.push;
        perguntaAdicao();
    }
    
}

let button = document.querySelector('button')
button.onclick = adiciona;

perguntaAdicao();


