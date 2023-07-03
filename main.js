let categoria;
let frutas = [];
let laticinios = [];
let congelados = [];
let doces = [];

janelaInicial = confirm(`Bem vindo ao site que registra ibtem de supermercado`)

if(janelaInicial == true) {
    pergunta();
  }

function pergunta () {
let perguntaAdicionar = confirm('Deseja adicionar um item á lista?')

if(perguntaAdicionar) {
    categoria = prompt("Digite a opção para adicionar o item conforme sua categoria: \n 1 - Fruta \n 2 - Laticinios \n 3 - Congelados \n 4 - Doces")
    
} if(perguntaAdicionar == false){

let impressao = confirm('Deseja imprimir a lista de itens adicionados?')

  if(impressao == true){
    alert(`Sua lista de compras é: \n Frutas: \n ${frutas} \n \n Laticinios: \n ${laticinios} \n \n Congelados: \n ${congelados} \n \n Doces: \n ${doces}`);
  } 
}

}
let input = document.querySelector('.input_botao')
input.focus();

function adicionaItem () {    
        
      if(categoria == 1){
        frutas.push(input.value)        
      }      
      if(categoria == 2){
        laticinios.push(input.value)        
      }      
      if(categoria == 3){
        congelados.push(input.value)
      }      
      if(categoria == 4){
        doces.push(input.value)       
      }    
        input.value = " ";
        input.focus();  
        pergunta();    
    }
        
let button = document.querySelector('button');
button.onclick = adicionaItem;


