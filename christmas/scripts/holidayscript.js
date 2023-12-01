//FESTIVELY WATCHING SOMEONE PEE SIMULATOR (2023)
	const fwspsCanvas = document.getElementById("fwsps_Canvas");
	const fwspsCTX = fwspsCanvas.getContext("2d");
	var fwspsDIV = document.getElementById("fwsps_Div");

	var fwspsScreen = 0;
	//0 -> title screen, 1 -> game, 2 -> win, 3 -> lose;

	//title screen assets
	var titleBGnum = 1;

	var titleBG1 = new Image();
	titleBG1.src = "/christmas/games/fwsps_2023/title_1.png";
	
	var titleBG2 = new Image();
	titleBG2.src = "/christmas/games/fwsps_2023/title_2.png";
	
	var titleBGimg = titleBG1;

	//lose screen assets
	var loseBGnum = 1;

	var loseBG1 = new Image();
	loseBG1.src = "/christmas/games/fwsps_2023/lose_1.png";
	
	var loseBG2 = new Image();
	loseBG2.src = "/christmas/games/fwsps_2023/lose_2.png";
	
	var loseBGimg = loseBG1;

	//win screen assets
	var winBGimg = new Image();
	winBGimg.src = "/christmas/games/fwsps_2023/win.png";


	//game assets
	var playerX = 525;
	var playerMoved = false;
	var playerCanMove = true;
	var playerWatcherNum = 1;

	var fwspsMashOnScreen = true;
	var percivalTick = 0;

	var bathroomBG1 = new Image();
	bathroomBG1.src = "/christmas/games/fwsps_2023/bathroom_1.png";
	
	var bathroomBG2 = new Image();
	bathroomBG2.src = "/christmas/games/fwsps_2023/bathroom_2.png";
	
	var bathroomBGimg = bathroomBG1;

	var WatcherIMG1 = new Image();
	WatcherIMG1.src = "/christmas/games/fwsps_2023/watcher_1.png";
	
	var WatcherIMG2 = new Image();
	WatcherIMG2.src = "/christmas/games/fwsps_2023/watcher_2.png";
	
	var WatcherIMG = WatcherIMG1;

	//general assets
	var christmasFrame = new Image();
	christmasFrame.src = "/christmas/games/fwsps_2023/christmas_frame.png";

	//game
	var fwsps = {
		titlescreen : function() {
			fwspsCTX.drawImage(titleBGimg, 0, 0, 550, 400);
		},
		game : function() {
			fwspsCTX.shadowBlur = 0;
			fwspsCTX.shadowColor = "white";
			fwspsCTX.shadowOffsetX = 0;
			fwspsCTX.shadowOffsetY = 0;
			
			fwspsCTX.drawImage(bathroomBGimg, 0, 0, 550, 400);
			fwspsCTX.drawImage(WatcherIMG, playerX, 0);
			
			fwspsCTX.globalAlpha = "0.35";
			fwspsCTX.globalCompositeOperation = "hard-light";
			
			fwspsCTX.fillStyle = "red";
			fwspsCTX.fillRect(0, 0, 550, 400);
			
			fwspsCTX.globalAlpha = "1";
			fwspsCTX.globalCompositeOperation = "normal";

			fwspsCTX.drawImage(christmasFrame, 0, 0, 550, 400);
			
			//this is just for the stupid text
			fwspsCTX.font = "bold 28px Times New Roman"
			
			fwspsCTX.textBaseLine = "top"
			
			fwspsCTX.shadowBlur = 10;
			fwspsCTX.shadowColor = "green";
			fwspsCTX.shadowOffsetX = 0;
			fwspsCTX.shadowOffsetY = 0;
			
			fwspsCTX.fillStyle = "red";
			if(fwspsMashOnScreen) {
				fwspsCTX.fillText("MASH SPACE!", 250, 55)
				fwspsCTX.fillText("MASH SPACE!", 250, 55)
				fwspsCTX.fillText("MASH SPACE!", 250, 55)
				fwspsCTX.fillText("MASH SPACE!", 250, 55)
				fwspsCTX.fillText("MASH SPACE!", 250, 55)
			}
		},
		win : function() {
			fwspsCTX.drawImage(winBGimg, 0, 0, 550, 400);
		},
		lose : function() {
			fwspsCTX.drawImage(loseBGimg, 0, 0, 550, 400);
		},
		clear : function() {
			fwspsCTX.clearRect(0, 0, 550, 400);	
		}
	}

		//titlescreenjiggle
		setInterval( function() {
			if (fwspsScreen != 0)
				return;
			
			if (titleBGnum == 1){
				titleBGnum = 2
				titleBGimg = titleBG2;
			} else if (titleBGnum == 2){
				titleBGnum = 1
				titleBGimg = titleBG1;
			}
		}, 1000 / 4)
		
		//losescreensadjiggle
		setInterval( function() {
			if (fwspsScreen != 3)
				return;
			
			if (loseBGnum == 1){
				loseBGnum = 2
				loseBGimg = loseBG2;
			} else if (loseBGnum == 2){
				loseBGnum = 1
				loseBGimg = loseBG1;
			}
		}, 1000 / 4)
		
		
		//mashspaceonscreen
		setInterval( function() {
			if(fwspsScreen != 1)
				return;
			
			if(fwspsMashOnScreen) {
				fwspsMashOnScreen = false
			} else if(!fwspsMashOnScreen) {
				fwspsMashOnScreen = true
			}
		}, 1000 / 3)
		
		//percival animation
		setInterval( function() {
			if(fwspsScreen != 1)
				return;
			
			percivalTick += 0.5;
			
			if(percivalTick < 6){
				bathroomBGimg = bathroomBG1;
			} else if(percivalTick == 6){
				bathroomBGimg = bathroomBG2;
			} else if (percivalTick >= 6.0) {
				percivalTick = 0;
				bathroomBGimg = bathroomBG1;
			}
		}, 1000 / 6)
		
		//wilbert animation
		setInterval( function() {
			if(fwspsScreen != 1)
				return;
			
			percivalTick += 0.5;
			
			if(playerWatcherNum == 1){
				WatcherIMG = WatcherIMG2;
				playerWatcherNum = 2;
			} else if(playerWatcherNum == 2){
				WatcherIMG = WatcherIMG1;
				playerWatcherNum = 1;
			}
		}, 1000 / 3)

	function fwspsDraw() {
		fwsps.clear();
		
		switch(fwspsScreen) {
			case 0:
				fwsps.titlescreen();
			break;
			
			case 1:
				fwsps.game();
				
				if(playerMoved)
					playerX += 1;
				
				if(playerX <= 135)
					fwspsScreen = 2; 
				
				if(playerX >= 670)
					fwspsScreen = 3; 
			break;
			
			case 2:
				fwsps.win();
			break;
			
			case 3:
				fwsps.lose();
			break;
		}
	}

	setInterval(fwspsDraw, 1000 / 12);

	function getMousePos(canvas, evt) {
		var rect = canvas.getBoundingClientRect();
		return {
			x: (evt.clientX - rect.left) / (rect.right - rect.left) * canvas.width,
			y: (evt.clientY - rect.top) / (rect.bottom - rect.top) * canvas.height
		}
	}

	function fwspsClick(e) {
		var pos = getMousePos(fwspsCanvas, e);
		
		console.log(pos.x, pos.y);
		
		if(fwspsScreen == 0 && pos.x > 380 && pos.x < 535 && pos.y > 175 && pos.y < 265){
			fwspsScreen = 1 //goes to the game!
			playerMoved = false;
			playerX = 520;
		}
		
		if(fwspsScreen == 3 && pos.x > 34 && pos.x < 435 && pos.y > 245 && pos.y < 360){
			fwspsScreen = 1 //goes to the game!
			playerX = 520;
			playerMoved = false;
		}
		
		if(fwspsScreen == 2){
			fwspsScreen = 0;
			playerX = 520;
			playerMoved = false;
		}
	}
	window.addEventListener('mousedown', fwspsClick, false);

	fwspsDIV.addEventListener('keydown', this.fwspsCheckKeyDown ,false);
	fwspsDIV.addEventListener('keyup', this.fwspsCheckKeyUp ,false);

	function fwspsCheckKeyDown(e) {
		var code = e.keyCode;
		if (code == 32) {
			if(fwspsScreen != 1 || !playerCanMove)
				return;
			
			playerMoved = true;
			playerCanMove = false;
			playerX -= 5;
		}
	}

	function fwspsCheckKeyUp(e) {
		var code = e.keyCode;
		if (code == 32) {
			if(fwspsScreen != 1 || playerCanMove)
				return;

			playerCanMove = true;
		}
	}

	window.onkeydown = function(e) {
		return e.keyCode !== 32;
	};