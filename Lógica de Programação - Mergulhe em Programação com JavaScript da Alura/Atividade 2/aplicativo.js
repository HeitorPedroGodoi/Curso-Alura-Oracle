//Pergunte ao usuário qual é o dia da semana. Se a resposta for "Sábado" ou "Domingo", mostre "Bom fim de semana!". Caso contrário, mostre "Boa semana!".
let DiaSemana = prompt ("Que dia da semana é hoje?");

if (DiaSemana == "Sábado") {
    alert("Bom final de semana amigão!");
} 
else if (DiaSemana == "Domingo") {
    alert("Bom final de semana amigão!");
} 
else {
    alert("Boa semana colega");
}

//Verifique se um número digitado pelo usuário é positivo ou negativo. Mostre um alerta informando.
let Numero = prompt ("Digite um número");

if (Numero > 0){
	alert ("Você digitou o número positivo " +Numero);
}
else if (Numero == 0){
	alert ("Você digitou zero (0) colega, não é nem positivo nem negativo");
}
else {
	alert ("Você digitou o número negativo " +Numero);
}

//Crie um sistema de pontuação para um jogo. Se a pontuação for maior ou igual a 100, mostre "Parabéns, você venceu!". Caso contrário, mostre "Tente novamente para ganhar.".
let Pontos = prompt ("Meu coleguinha, me digite outro número por favor");

if (Pontos >= 100){
	alert ("Parabéns amigão você fez " +Pontos+ " pontos :)");
}
else {
	alert ("Infelizmente carinha não foi dessa vez T-T");
}

//Crie uma mensagem que informa o usuário sobre o saldo da conta, usando uma template string para incluir o valor do saldo.
let SaldoConta = 16700;

alert (" Meu camaradinha seu saldo na conta é R$" +SaldoConta+ " Parabéns ;)");

//Peça ao usuário para inserir seu nome usando prompt. Em seguida, mostre um alerta de boas-vindas usando esse nome.

let Nome = prompt ("Digite seu nome por favor");

alert ("Feliz em conhecer você " +Nome+", sinto que você é uma pessoa legal")