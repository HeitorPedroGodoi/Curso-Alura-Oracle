alert("Olá, bem vindo ao jogo do número misterioso!!!");
let Maximo = 500;
let NumeroMisterioso = parseInt(Math.random() * Maximo + 1);

let aleatorio;
let tentativa = 1;
let palavraTentativa = tentativa > 1 ? "tentativas" : "tentativa";
while (aleatorio != NumeroMisterioso){
	aleatorio = prompt ("Escolha um númeroentre 1 e " +Maximo);
	let palavraTentativa = tentativa > 1 ? "tentativas" : "tentativa";

	if (NumeroMisterioso == aleatorio){
		alert("Você acertou! Parabéns o número misterioso era " +NumeroMisterioso + " você descobriu em " +tentativa +" "+ palavraTentativa);
	}
	else if (NumeroMisterioso > aleatorio) {
		alert(" O número misterioso é maior que "+aleatorio);
		tentativa ++;
	}
	else if (NumeroMisterioso < aleatorio) {
		alert(" O número misterioso é menor que "+aleatorio);
		tentativa ++;
	}
}
