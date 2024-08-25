//Crie um programa que utilize o console.log para exibir uma mensagem de boas-vindas.
console.log("Olá bem-vindo");

//Crie uma variável chamada "nome" e atribua a ela o seu nome. Em seguida, utilize o console.log para exibir a mensagem "Olá, [seu nome]!" no console do navegador.
let nome = "Heitor";
console.log("Olá bem-vindo " +nome);

//Crie uma variável chamada "nome" e atribua a ela o seu nome. Em seguida, utilize o alert para exibir a mensagem "Olá, [seu nome]!" .
alert("Olá bem-vindo " +nome);

//Utilize o prompt e faça a seguinte pergunta: Qual a linguagem de programação que você mais gosta?. Em seguida, armazene a resposta em uma variável e mostre no console do navegador.
let LingProg = prompt("Qual sua linguagem de programação favorita?");

console.log(" Sua linguagem de programação favorita é: " +LingProg);

//Crie uma variável chamada "valor1" e outra chamada "valor2", atribuindo a elas valores numéricos de sua escolha. Em seguida, realize a soma desses dois valores e armazene o resultado em uma terceira variável chamada "resultado". Utilize o console.log para mostrar a mensagem "A soma de [valor1] e [valor2] é igual a [resultado]." no console.
let valor1 = parseInt(Math.random() * 100 + 1);
let valor2 = parseInt(Math.random() * 100 + 1);
let resultado;

resultado = valor1 + valor2;

console.log(" A soma de " + valor1 + " e " +valor2+ " é igual a " +resultado);

//Crie uma variável chamada "valor1" e outra chamada "valor2", atribuindo a elas valores numéricos de sua escolha. Em seguida, realize a subtração desses dois valores e armazene o resultado em uma terceira variável chamada "resultado". Utilize o console.log para mostrar a mensagem "A diferença entre [valor1] e [valor2] é igual a [resultado]." no console.
resultado = valor1 - valor2;

console.log(" A subtração de " + valor1 + " e " +valor2+ " é igual a " +resultado);

//Peça ao usuário para inserir sua idade com prompt. Com base na idade inserida, utilize um if para verificar se a pessoa é maior ou menor de idade, exibindo uma mensagem apropriada no console.
let idade = prompt(" Qual sua idade?");

if (idade >= 18){
	console.log(" Já é maior idade parabéns!!!");
}
else {
	console.log (" É menor de idade, mas logo logo cresce!!!");
}

//Crie uma variável "numero" e peça um valor com prompt verifique se é positivo, negativo ou zero. Use if-else para imprimir a respectiva mensagem.
let numero = prompt (" Digite um número");

if (numero > 0){
	alert (" O número " +numero+ " é positivo.")
}
else if (numero == 0){
	alert(" Zero não é positivo nem negativo.")
}
else {
	alert (" O número " +numero+ " é negativo.")
}

//Use um loop while para imprimir os números de 1 a 10 no console.
let contador = 1;

while (contador <=10){
	alert (contador);
	contador++;
}

//Crie uma variável "nota" e atribua um valor numérico a ela. Use if-else para determinar se a nota é maior ou igual a 7 e exiba "Aprovado" ou "Reprovado" no console.
let nota = parseInt(Math.random() * 10 + 1);

if (nota >= 7){
	alert("Aprovado com nota " +nota);
}
else {
	alert("Reprovado com nota "+nota);
}

//Use o Math.random para gerar qualquer número aleatório e exiba esse número no console.
console.log(valor1);

//Use o Math.random para gerar um número inteiro entre 1 e 10 e exiba esse número no console.
console.log(nota);

//Use o Math.random para gerar um número inteiro entre 1 e 1000 e exiba esse número no console.
let mil = parseInt(Math.random() * 1000 + 1);

console.log(mil);





