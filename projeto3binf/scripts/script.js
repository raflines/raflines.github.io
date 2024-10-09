const divJogo = document.getElementById("telaJogo");
const fundoJogo = document.getElementById("fundoJogo");

var comodos = ["Titulo", "Cozinha"];
var comodoAtual = comodos[1];

const cozinhaMapa = document.getElementsByName("mapaCozinha");
var cozinhaObjetos = ["geladeira", "microondas", "fogao", "coifa", "loucas"];
var cozinhaProgresso = [];

function mudarTela(screen){
	fundoJogo.setAttribute('usemap', '#mapaCozinha');
	console.log(fundoJogo);
	fundoJogo.src = "/assets/cozinha.png";
}

function objetoClicado(objetoNome){
	console.log("Clicou no " + cozinhaObjetos[objetoNome]);
}