		var logo_flines = document.getElementById('logo_flines');
		var body = document.getElementById('body');
		var top_nav = document.getElementById('top_nav');
		
		var menus = document.getElementsByClassName('menus_background');
		
		var logo_games = document.getElementsByClassName('logo_games');
	
		//logo_flines_projects HOVER
			var games_menu = document.getElementById('menu_games');

				var logo_lab = document.getElementById('logo_lab');
				
					logo_lab.addEventListener('mouseover', function(e) {
						logo_flines.src = "./media/logos/logo_lab.png"
						body.style.backgroundImage="url(./media/lab/background.png)";
						top_nav.style.backgroundImage="url(./media/lab/background_top.png)";
					})
				
				var logo_wsps = document.getElementById('logo_wsps');
			
					logo_wsps.addEventListener('mouseover', function(e) {
						logo_flines.src = "./media/logos/logo_faraway.png"
						body.style.backgroundColor = '#1956BC';
						top_nav.style.backgroundColor = '#003A9D';
						body.style.backgroundImage="url(./media/wsps/background.png)";
						top_nav.style.backgroundImage="url(./media/wsps/background_top.png)";
					})
					
				var logo_tvo = document.getElementById('logo_tvo');
			
					logo_tvo.addEventListener('mouseover', function(e) {
						logo_flines.src = "./media/logos/logo_rat.png"
						body.style.backgroundImage="url(./media/toyventure/background.png)";
						top_nav.style.backgroundImage="url(./media/toyventure/background_top.png)";						
					})

				var logo_bp = document.getElementById('logo_bp');
			
					logo_bp.addEventListener('mouseover', function(e) {
						logo_flines.src = "./media/logos/logo_bp.png"
						body.style.backgroundImage="url(./media/birdpals/background.png)";
						top_nav.style.backgroundImage="url(./media/birdpals/background_top.png)";						
					})				
				
		//logo_flin_projects HOVER
			var flins_menu = document.getElementById('menu_flins');

				var home_page = document.getElementById('home_button');
				
					home_page.addEventListener('mouseover', function(e) {
						logo_flines.src = "./media/logos/logo_classic.png"
						body.style.backgroundColor = '#080808';
						top_nav.style.backgroundColor = '#000000';
						body.style.backgroundImage="url(./media/flinprojects/background_none.png)";
						top_nav.style.backgroundImage="url(./media/flinprojects/background_top_none.png)";
					})
				
				var flin_post = document.getElementById('flinposting');
			
					flin_post.addEventListener('mouseover', function(e) {
						logo_flines.src = "./media/logos/logo_flin.png"				
						body.style.backgroundImage="url(./media/flinprojects/background_posting.png)";
						top_nav.style.backgroundImage="url(./media/flinprojects/background_top_posting.png)";						
					})
					
				var flin_music = document.getElementById('flin_albums');
			
					flin_music.addEventListener('mouseover', function(e) {
						logo_flines.src = "./media/logos/logo_flin.png"								
						body.style.backgroundImage="url(./media/flinprojects/background_albums.png)";
						top_nav.style.backgroundImage="url(./media/flinprojects/background_top_albums.png)";						
					})

				var flin_gaming = document.getElementById('flin_games');
			
					flin_gaming.addEventListener('mouseover', function(e) {
						logo_flines.src = "./media/logos/logo_flin.png"				
						body.style.backgroundImage="url(./media/flinprojects/background_games.png)";
						top_nav.style.backgroundImage="url(./media/flinprojects/background_top_games.png)";						
					})				

				function nohover() {
					if (project === "home_button") {
						logo_flines.src = "./media/logos/logo_classic.png"
						body.style.backgroundColor = '#080808';
						top_nav.style.backgroundColor = '#000000';
						body.style.backgroundImage="url(./media/flinprojects/background_none.png)";
						top_nav.style.backgroundImage="url(./media/flinprojects/background_top_none.png)";
					} else if (project === "logo_lab") {
						logo_flines.src = "./media/logos/logo_lab.png"
						body.style.backgroundImage="url(./media/lab/background.png)";
						top_nav.style.backgroundImage="url(./media/lab/background_top.png)";
					} else if (project === "logo_wsps") {
						logo_flines.src = "./media/logos/logo_faraway.png"
						body.style.backgroundColor = '#1956BC';
						top_nav.style.backgroundColor = '#003A9D';
						body.style.backgroundImage="url(./media/wsps/background.png)";
						top_nav.style.backgroundImage="url(./media/wsps/background_top.png)";
					} else if (project === "logo_tvo") {
						logo_flines.src = "./media/logos/logo_rat.png"
						body.style.backgroundImage="url(./media/toyventure/background.png)";
						top_nav.style.backgroundImage="url(./media/toyventure/background_top.png)";	
					} else if (project === "logo_bp") {
						logo_flines.src = "./media/logos/logo_bp.png"
						body.style.backgroundImage="url(./media/birdpals/background.png)";
						top_nav.style.backgroundImage="url(./media/birdpals/background_top.png)";
					} else if (project === "flinposting") {
						logo_flines.src = "./media/logos/logo_flin.png"				
						body.style.backgroundImage="url(./media/flinprojects/background_posting.png)";
						top_nav.style.backgroundImage="url(./media/flinprojects/background_top_posting.png)";	
					} else if (project === "flin_albums") {
						logo_flines.src = "./media/logos/logo_flin.png"				
						body.style.backgroundImage="url(./media/flinprojects/background_albums.png)";
						top_nav.style.backgroundImage="url(./media/flinprojects/background_top_albums.png)";	
					} else if (project === "flin_games") {
						logo_flines.src = "./media/logos/logo_flin.png"				
						body.style.backgroundImage="url(./media/flinprojects/background_games.png)";
						top_nav.style.backgroundImage="url(./media/flinprojects/background_top_games.png)";	
					} else {
						logo_flines.src = "./media/logos/logo_classic.png"
						body.style.backgroundColor = '#080808';
						top_nav.style.backgroundColor = '#000000';
						body.style.backgroundImage="url(./media/flinprojects/background_none.png)";
						top_nav.style.backgroundImage="url(./media/flinprojects/background_top_none.png)";
						return;
					}
				}	