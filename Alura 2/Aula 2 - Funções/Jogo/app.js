let NumAleatorio = GerarNumeroAleatorio();
function ExibirTexto(tag, texto){
	let campo = document.querySelector(tag);
	campo.innerHTML = texto;
}

ExibirTexto("h1","Jogo do Número Secreto");
ExibirTexto("p","Escolha um número entre 1 e 10");

function VerificarChute() {
	let chute = document.querySelector("input").value;
	if (chute==NumAleatorio){
		alert("Você acertou");
	}
	else {
		alert("Você errou");
	}
}

function GerarNumeroAleatorio(){
	return parseInt(Math.random() * 10 + 1 );
}
