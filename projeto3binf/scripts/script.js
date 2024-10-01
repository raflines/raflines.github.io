var canvas = document.getElementById("canvasJogo");
var ctx = canvas.getContext("2d");

var comodoAtual = 0;
var imagensComodos = ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDbWUJDVcUK290oUDOigq09s95PJVB0Fw8qw&s", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLusvBGOCSb2wQhNlQl9m8EGY-sbZx4BsOGQ&s"];

var cozinhaHitboxes = [["geladeira", 0, 20, 230, 600], ["microondas", 235, 270, 200, 100], ["fogao", 580, 350, 210, 240], ["smokey", 550, 0, 270, 160]];
var cozinhaProgresso = [false, false, false, false];

var salaHitboxes = [["luminaria", 1000, 210, 105, 150], ["ventilador", 455, 168, 72, 88], ["lampada_lava", 325, 168, 40, 88], ["lampada_teto", 690, 0, 90, 40], ["robo_verde", 350, 550, 100, 90], ["telefone", 512, 550, 110, 90], ["robo_roxo", 920, 480, 80, 125]];
var salaProgresso = [false, false, false, false, false, false, false];

const verificarProgresso = arr => arr.every( v => v === true );

var listaComodoProgresso = [salaProgresso, cozinhaProgresso];
var listaComodosHitboxes = [salaHitboxes, cozinhaHitboxes];

var comodoHitboxes = listaComodosHitboxes[comodoAtual];
var comodoProgresso = listaComodoProgresso[comodoAtual];

canvas.addEventListener('mousemove', posicaoMouse);
canvas.addEventListener("click", checkMouse);

function posicaoMouse(evt) {
	var rect = canvas.getBoundingClientRect();
	canvas.mouse = {
		x: evt.clientX - rect.left,
		y: evt.clientY - rect.top
	};
}

function checkMouse() {
	//console.log(canvas.mouse.x, canvas.mouse.y);
  
	for (var j = 0; j < comodoHitboxes.length; j++) {
		var hitbox = comodoHitboxes[j];
		
		if(canvas.mouse.x >= (hitbox[1] / (Math.round(window.devicePixelRatio * 100) / 100)) / 1.5 && canvas.mouse.x <= ((hitbox[1] + hitbox[3]) / (Math.round(window.devicePixelRatio * 100) / 100)) / 1.5 && canvas.mouse.y >= (hitbox[2] / (Math.round(window.devicePixelRatio * 100) / 100)) / 1.5 && canvas.mouse.y <= ((hitbox[2] + hitbox[4]) / (Math.round(window.devicePixelRatio * 100) / 100)) / 1.5 && comodoProgresso[j] != true){
			console.log("Clicou em: " + hitbox[0]);
			comodoProgresso[j] = true;
		}
	}
}

function desenharCanvas() {
	ctx.globalAlpha = 0.5;
	
	for (var i = 0; i < comodoHitboxes.length; i++) {
		var hitbox = comodoHitboxes[i];
		
		if(comodoProgresso[i]){
			ctx.fillStyle = "green";
		} else {
			ctx.fillStyle = "red";
		}
		
		ctx.fillRect(hitbox[1] / (Math.round(window.devicePixelRatio * 100) / 100), hitbox[2] / (Math.round(window.devicePixelRatio * 100) / 100), hitbox[3] / (Math.round(window.devicePixelRatio * 100) / 100), hitbox[4] / (Math.round(window.devicePixelRatio * 100) / 100));
	}
}

const intervaloCanvas = setInterval(function() {
	ctx.clearRect(0, 0, canvas.width, canvas.height);
	
	canvas.setAttribute('width', window.innerWidth);
	canvas.setAttribute('height', window.innerHeight);
	
	comodoHitboxes = listaComodosHitboxes[comodoAtual];
	comodoProgresso = listaComodoProgresso[comodoAtual];
	
	canvas.style.backgroundImage = "url('" + imagensComodos[comodoAtual] + "')";
	
	if(verificarProgresso(comodoProgresso)){
		comodoAtual += 1;
	}
	
	desenharCanvas();
 }, 100);