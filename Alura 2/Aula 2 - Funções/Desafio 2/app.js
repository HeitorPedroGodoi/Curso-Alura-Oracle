//Criar uma função que exibe "Olá, mundo!" no console.
function OlaMundo(){
	alert("Olá mundo!!!");
}
//Criar uma função que recebe um nome como parâmetro e exibe "Olá, [nome]!" no console.
function NomeOla(){
	let nome = prompt ("Me diga seu nome");
	alert("Olá, "+nome);
}
//Criar uma função que recebe um número como parâmetro e retorna o dobro desse número.
function CalcularDobro(numero) {
  return numero * 2;
}

let ResultadoDobro = CalcularDobro(prompt("Digite um número"));
console.log(ResultadoDobro);

//Criar uma função que recebe três números como parâmetros e retorna a média deles.
function CalcularMedia(numero1, numero2, numero3) {
  return Math.round(((numero1 + numero2 + numero3) / 3));
}

let Num1 = parseInt(prompt("Digite um número 1"));
let Num2 = parseInt(prompt("Digite um número 2"));
let Num3 = parseInt(prompt("Digite um número 3"));

let Media = CalcularMedia(Num1,Num2,Num3);
console.log(Media);

//Criar uma função que recebe dois números como parâmetros e retorna o maior deles.
function EcontrarMaior(a, b) {
  return a > b ? a : b;
}

let MaiorNumero = EcontrarMaior(15, 9);
console.log(MaiorNumero);

/*Criar uma função que recebe um número como parâmetro 
e retorna o resultado da multiplicação desse número por ele mesmo*/
function DobradoporSi(numero) {
  return numero * 2;
}

let CalculoDobro = DobradoporSi(prompt("Digite um número que será dobrado"));
console.log(CalculoDobro);
