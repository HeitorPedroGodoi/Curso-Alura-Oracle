function ExibirTexto(tag, texto){
	let campo = document.querySelector(tag);
	campo.innerHTML = texto;
}
function LimparTela(){
ExibirTexto("h2"," ");
ExibirTexto("h3"," ");
ExibirTexto("p"," ");
}
let nomes = ["Luana", "Nyckolas", "Heitor"]
//Crie uma lista vazia, com o nome listaGenerica.
let ListaGenerica = [];

/*Crie uma lista de linguagens de programação chamada linguagensDeProgramacao com os seguintes elementos: 
'JavaScript','C','C++', 'Kotlin' e 'Python'.*/
let LinguagensDeProgramacao = ["JavaScript","C","C+","Kotlin","Python"];
ExibirTexto("h2",LinguagensDeProgramacao);
//Adicione à lista linguagensDeProgramacao os seguintes elementos: 'Java', 'Ruby' e 'GoLang'.
LinguagensDeProgramacao.push("Java","Ruby","Golang");
ExibirTexto("h3",LinguagensDeProgramacao);

//Crie uma lista com 3 nomes e exiba apenas o primeiro elemento.
function PrimeiroElemento(){
	LimparTela();
	ExibirTexto("h2",nomes[0]);
}
//Crie uma lista com 3 nomes e exiba apenas o segundo elemento.
function SegundoElemento(){
	LimparTela();
	ExibirTexto("h2",nomes[1]);
}
//Crie uma lista com 3 nomes e exiba apenas o último elemento.
function TerceiroElemento(){
	LimparTela();
	ExibirTexto("h2",nomes[2]);
}