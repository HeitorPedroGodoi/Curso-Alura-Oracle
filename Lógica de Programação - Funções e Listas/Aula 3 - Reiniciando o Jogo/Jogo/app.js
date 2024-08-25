let NumAleatorio = GerarNumeroAleatorio();
let tentativas = 1;
function ExibirTexto(tag, texto){
	let campo = document.querySelector(tag);
	campo.innerHTML = texto;
}
MensagemInicial();
document.getElementById("chutar").removeAttribute("disabled");

function VerificarChute() {
	let chute = document.querySelector("input").value;
	
	if (chute==NumAleatorio){
		let PalavraTenta = tentativas > 1 ? "tentativas" : "tentativa";
		ExibirTexto("h1","Você acertou o número secreto, parabéns!!!");
		ExibirTexto("p","Você descobriu o número secreto em " +tentativas+" "+PalavraTenta);
		document.getElementById("reiniciar").removeAttribute("disabled");
		document.getElementById("chutar").setAttribute("disabled", true);
	}
	else if (chute > NumAleatorio) {
		ExibirTexto("h1","Você errou o número :(");
		ExibirTexto("p","O número secreto é menor que " +chute);
		tentativas++;
		LimparCampo();
	}
	else {
		ExibirTexto("h1","Você errou o número :(");
		ExibirTexto("p","O número secreto é maior que " +chute);
		tentativas++;
		LimparCampo();
	}
}

function MensagemInicial(){
ExibirTexto("h1","Jogo do Número Secreto");
ExibirTexto("p","Escolha um número entre 1 e 10");
}

function LimparCampo(){
	chute = document.querySelector("input")
	chute.value = "";
}

function GerarNumeroAleatorio(){
	return parseInt(Math.random() * 10 + 1 );
}

function ReiniciarJogo(){
	MensagemInicial();
	NumAleatorio = GerarNumeroAleatorio();
	LimparCampo();
	tentativas = 1;
	document.getElementById("reiniciar").setAttribute("disabled", true);
	document.getElementById("chutar").removeAttribute("disabled");
}