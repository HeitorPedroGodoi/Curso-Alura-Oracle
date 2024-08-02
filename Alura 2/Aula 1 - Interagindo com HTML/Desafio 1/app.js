/*Altere o conteúdo da tag h1 com document.querySelector 
e atribua o seguinte texto: Hora do Desafio. */
let titulo = document.querySelector("h1");
titulo.innerHTML = "Hora do Desafio!";

/*Crie uma função que exiba um alerta a mensagem 
"O botão foi clicado" sempre que o botão Console for pressionado.*/
function Consolidado(){
	alert("O botão foi clicado");
}

/*
Crie uma função que exiba um alerta com a mensagem: 
Eu amo JS, sempre que o botão Alerta for pressionado.*/
function Alertado(){
	alert("Eu amo JS");
}

/*Crie uma função que é executada quando o botão prompt é clicado,
 perguntando o nome de uma cidade do Brasil. 
 Em seguida, exiba um alerta com a mensagem concatenando a resposta com o texto: 
 Estive em {cidade} e lembrei de você.*/
function Promptado(){
	let cidade = prompt ("Me dê o nome de uma cidade no Brasil");
	alert("Estive em " +cidade+" e lembrei de você");
}

//Ao clicar no botão soma, peça 2 números inteiros e exiba o resultado da soma em um alerta.
function Somado(){
	let valor1 = parseInt(prompt ("Digite um número"));
	let valor2 = parseInt(prompt ("Digite outro número"));
	let resultado;

	resultado = valor1 + valor2;
	alert("O resultado da soma desses números é " +resultado);
}

