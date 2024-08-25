function ExibirTexto(tag, texto){
	let campo = document.querySelector(tag);
	campo.innerHTML = texto;
}
function LimparTela(){
ExibirTexto("h2"," ");
ExibirTexto("h3"," ");
ExibirTexto("p"," ");
}

/*Crie uma função que calcule o índice de massa corporal (IMC) de uma pessoa, 
a partir de sua altura, em metros, e peso, em quilogramas, que serão recebidos como parâmetro.*/

function CalculaIMC(){
	let altura = parseInt(prompt("Digite sua altura em centimetros"));
	let peso = parseInt(prompt("Digite seu peso em quilos"));
	let calc;
	calc = ((peso / (altura * altura)) * 10000);
	let IMC = calc.toFixed(1);

	if (IMC <= 18.5){
		ExibirTexto("p","Cuidado você está na Magreza extrema, procure um médico para se tratar!!!");
	}
	else if (IMC > 18.5 && IMC < 24.9) {
			ExibirTexto("p","Você está num peso normal continue assim");
	}
	else if (IMC > 25 && IMC <= 29.9) {
			ExibirTexto("p","Você está com Sobrepeso/obesidade grau 1");
	}
	else if (IMC > 30 && IMC <= 39.9) {
			ExibirTexto("p","Você está com obesidade/obesidade grau 2");
	}
	else if (IMC > 40) {
			ExibirTexto("p","Você está com obesidade grave/obesidade grau 3");
	}
	ExibirTexto("h2","Seu IMC é de "+IMC);
	ExibirTexto("h3","Lembrando que esses valores podem não ser para todas as pessoas, uma pessoa com muito musculo pode cair como obesa com o IMC, lembre-se de consultar seu médico!!!");

}

//Crie uma função que calcule o valor do fatorial de um número passado como parâmetro.

function Fatorial(){
	let fatorial = prompt("Digite um número");
	Fatoralizando(fatorial);

}

function Fatoralizando(num){
  if (num === 0 || num === 1)
    return 1;
  for (var i = num - 1; i >= 1; i--) {
    num *= i;
  }
  ExibirTexto("h2","Seu fatorial é igual a "+num);
}


/*Crie uma função que converte um valor em dólar, passado como parâmetro, 
e retorna o valor equivalente em reais. Para isso, considere a cotação do dólar igual a R$4,80.*/
function CasaCambio(){
	let dolar = prompt("Digite o valor em dólares");
	let real;
	real = dolar * 4.8;
	let DolarPalavra = dolar > 1 ? "doláres" : "dólar";
	let RealPalavra = real > 1 ? "reais" : "real";
	ExibirTexto("h2", "Na conversão de R$4,80 reais para 1 dólar, " +dolar+" " +DolarPalavra+" é igual a "+real+ " " +RealPalavra+ "." );
}

/*Crie uma função que mostre na tela a área e o perímetro de uma sala retangular, 
utilizando altura e largura que serão dadas como parâmetro.*/
function CasaRetangular(){
	let altura = prompt("Digite o valor da altura");
	let largura = prompt("Digite o valor da largura");
	let area;
	area = altura * largura;
	let perimetro;
	perimetro = 2 * ( altura + largura);
	ExibirTexto("h2","A área de um retângulo com " +altura+ " de altura e "+largura+" de largura é "+area+" e seu perimetro é de "+perimetro);
}
/*Crie uma função que mostre na tela a área e o perímetro de uma sala circular, 
utilizando seu raio que será fornecido como parâmetro. Considere Pi = 3,14.*/
function CasaCircular(){
	let raio = prompt("Digite o valor do raio");
	let area;
	area = 3.14 * ( raio * raio);
	let perimetro;
	perimetro = 2 * ( 3.14 * raio);
	ExibirTexto("h2","A área de um círculo com " +raio+ " de raio, tem area de "+area+" e seu perimetro é de "+perimetro);
}
//Crie uma função que mostre na tela a tabuada de um número dado como parâmetro.
function Tabuada(){
	let numero = prompt("Digite um número");
	let numero2 = prompt("Digite um segundo número");

	for (let i = 1; i <= numero2; i++){
		let resultado = numero * i;
		alert(" "+numero+ " x " +i+ " = " +resultado);
	}
}
