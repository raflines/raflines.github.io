	var project = "home_button";

	var project_example_logo = document.getElementById('example_logo_1');
	var project_example_text = document.getElementById('example_text_1');
	
	var project_example_img1 = document.getElementById('example_image_1');
	var project_example_img2 = document.getElementById('example_image_2');
	var project_example_img3 = document.getElementById('example_image_3');
	var project_example_img4 = document.getElementById('example_image_4');
		
	var project_example_images = document.getElementsByClassName('example_images');

	function clickbutton(element) {
		if(element.id === "home_button"){
			project = element.id;
			
			//example changes
			project_example_logo.src = "./media/logos/logo_classic.png"
			
			project_example_text.innerText = "i kinda uh haven't finished this website so come back some other day or something"
			
			project_example_img1.style.display = 'none';
			project_example_img2.style.display = 'none';
			project_example_img3.style.display = 'none';
			project_example_img4.style.display = 'none';	
		} else if(element.id === "logo_lab"){
			project = element.id;
			
			//example changes
			project_example_logo.src = "./media/lab/lab_logo.png"
			
			project_example_text.innerText = "cat mania"
			
			project_example_img1.src = "./media/lab/lab_titlescreen.png"
			project_example_img2.src= "./media/lab/lab_profile.png"
			project_example_img3.src= "./media/lab/lab_gameplay.png"
			project_example_img4.src= "./media/lab/lab_labcats.png"
			
			project_example_img1.style.display = 'inline-block';
			project_example_img2.style.display = 'inline-block';
			project_example_img3.style.display = 'inline-block';
			project_example_img4.style.display = 'inline-block';
		} else if(element.id === "logo_wsps"){
			project = element.id;
			
			//example changes
			project_example_logo.src = "./media/wsps/wspsh_logo.png"
			
			project_example_text.innerText = "wsps"
			
			project_example_img1.src = "./media/flinprojects/flin_wip.png"
			project_example_img2.src= "./media/flinprojects/flin_wip.png"
			project_example_img3.src= "./media/flinprojects/flin_wip.png"
			project_example_img4.src= "./media/flinprojects/flin_wip.png"
			
			project_example_img1.style.display = 'inline-block';
			project_example_img2.style.display = 'inline-block';
			project_example_img3.style.display = 'inline-block';
			project_example_img4.style.display = 'inline-block';
		} else if(element.id === "logo_tvo"){
			project = element.id;
			
			//example changes
			project_example_logo.src = "./media/toyventure/tvo_logo.png"
			
			project_example_text.innerText = "toibentor"
			
			project_example_img1.src = "./media/toyventure/tvo_title.png"
			project_example_img2.src= "./media/toyventure/tvo_pub.png"
			project_example_img3.src= "./media/toyventure/tvo_customize.png"
			project_example_img4.src= "./media/toyventure/tvo_bricksburg.png"
			
			project_example_img1.style.display = 'inline-block';
			project_example_img2.style.display = 'inline-block';
			project_example_img3.style.display = 'inline-block';
			project_example_img4.style.display = 'inline-block';
		} else if(element.id === "logo_bp"){
			project = element.id;
			
			//example changes
			project_example_logo.src = "./media/birdpals/bp_logo.png"
			
			project_example_text.innerText = "birdpals"
			
			project_example_img1.src = "./media/birdpals/bp_logo1.png"
			project_example_img2.src= "./media/birdpals/bp_trendy.png"
			project_example_img3.src= "./media/birdpals/bp_style.png"
			project_example_img4.src= "./media/birdpals/bp_art.png"
			
			project_example_img1.style.display = 'inline-block';
			project_example_img2.style.display = 'inline-block';
			project_example_img3.style.display = 'inline-block';
			project_example_img4.style.display = 'inline-block';
		} else if(element.id === "flinposting"){
			project = element.id;
			
			//example changes
			project_example_logo.src = "./media/flinprojects/flin_posting.png"
			
			project_example_text.innerText = "flinposting"
			
			project_example_img1.src = "./media/flinprojects/flinposting/image1.png"
			project_example_img2.src = "./media/flinprojects/flinposting/image2.png"
			project_example_img3.src = "./media/flinprojects/flinposting/image3.png"
			project_example_img4.src = "./media/flinprojects/flinposting/image4.png"
			
			project_example_img1.style.display = 'inline-block';
			project_example_img2.style.display = 'inline-block';
			project_example_img3.style.display = 'inline-block';
			project_example_img4.style.display = 'inline-block';
		} else if(element.id === "flin_albums"){
			project = element.id;
			
			//example changes
			project_example_logo.src = "./media/flinprojects/flin_albums.png"
			
			project_example_text.innerText = "flin albums"
			
			project_example_img1.src = "./media/flinprojects/flin_albums/image1.png"
			project_example_img2.src = "./media/flinprojects/flin_albums/image2.png"
			project_example_img3.src = "./media/flinprojects/flin_albums/image3.png"
			project_example_img4.src = "./media/flinprojects/flin_albums/image4.png"
			
			project_example_img1.style.display = 'inline-block';
			project_example_img2.style.display = 'inline-block';
			project_example_img3.style.display = 'inline-block';
			project_example_img4.style.display = 'inline-block';
		} else if(element.id === "flin_games"){
			project = element.id;
			
			//example changes
			project_example_logo.src = "./media/flinprojects/flin_games.png"
			
			project_example_text.innerText = "flin games"
			
			project_example_img1.src = "./media/flinprojects/flin_games/image1.png"
			project_example_img2.src = "./media/flinprojects/flin_games/image2.png"
			project_example_img3.src = "./media/flinprojects/flin_games/image3.png"
			project_example_img4.src = "./media/flinprojects/flin_games/image4.png"
			
			project_example_img1.style.display = 'inline-block';
			project_example_img2.style.display = 'inline-block';
			project_example_img3.style.display = 'inline-block';
			project_example_img4.style.display = 'inline-block';
		} 
	}	
	
	function clicksbutton(element) {
		if(project === "flinposting"){
			//FALA DERICK
			project_example_logo.src = "./media/flinprojects/flinposting/image2.png"
			
			project_example_text.innerText = "FAAALA DERICK HAHAHAAAAHAHAH AAHHAHAHAHAHAHHAHAHAHAHHAUUHUAHAHAHAUAHAHHAHAHAHAHHAHAHAHAHHAHAHAAHAHAHAHAHAHHAHAHAHHAHAHAHAHAHHAHAHAAHHAHAHAHAHAHHAHAHAHAHHAUUHUAHAHAHAUAHAHHAHAHAHAHHAHAHAHAHHAHAHAAAHHAHAHAHAHAHHAHAHAHAHHAUUHUAHAHAHAUAHAHH\nAHAHAHAHHAHAHAHAHHAHAHAAAHHAHAHAHAHAHHAHAHAHAHHAUUHUAHAHAHAUAHAHHAHAHAHAHHAHAHAHAHHAHAHAAAHHAHAHAHAHAHHAHAHAHAHHAUUHUAHAHAH\nAUAHAHHAHAHAHAHHAHAHAHAHHAHAHAAAHHAHAHAHAHAHHAHAHAHAHHAUUHUAHAHAHAUAHAHHAHAHAHAHHAHAHAHAHHAHAHAAAHHAHAHAHAHAHHAHAHAHAHHAUUHUAHAHAHAUAHAHHAHAHAHAHHAHAHAHAHHAHAHAAA\nHHAHAHAHAHAHHAHAHAHAHHAUUHUAHAHAHAUAHAHHAHAHAHAHHAHAHAHAHHAHAHAAAHHAHAHAHAHAHHAHAHAHAHHAUUHUAHAHAHAUAHAHHAHAHAHAHHAHAHAHAHHAHAHAAAHHAHAHAHAHAHHAHAHAHAHHAUUHUAHAHAHAUAHAHHAHAHAHAHHAHAHAHAHHAHAHAAHAHAHAHAHAHHAHAHAHHAHA\nHAHAHAHHAHAHAHAHAHAHAHAHHAHAHAHHAHAHAHAHAHHAHAHAAHHAHAHAHAHAHHAHAHAHAHHAUUHUAHAHAHAUAHAHHAHAHAHAHHAHAHAHAH\nHAHAHAAAHHAHAHAHAHAHHAHAHAHAHHAUUHUAHAHAHAUAHAHHAH\nAHAHAHHAHAHAHAHHAHAH"
			
			project_example_img1.src = "./media/flinprojects/flinposting/image2.png"
			project_example_img2.src = "./media/flinprojects/flinposting/image2.png"
			project_example_img3.src = "./media/flinprojects/flinposting/image2.png"
			project_example_img4.src = "./media/flinprojects/flinposting/image2.png"
			
			project_example_img1.style.display = 'inline-block';
			project_example_img2.style.display = 'inline-block';
			project_example_img3.style.display = 'inline-block';
			project_example_img4.style.display = 'inline-block';
		}
	}