var targetFlizzyImage = document.getElementById("FlizzyTargetImage");
var targetFlizzy = document.getElementById("flizzytarget");

var fave = true;
var br;

function flizzy_Disappear() {
	targetFlizzy.className = "flizzyDisappearingSadIKnowThisIsARealUnpolishedAndStupidWayOfCodingTheDifferentAnimationSpeedsIAmSoSorry";
}
	  
function flizzy_YesOrYes() {
	targetFlizzy.className = "flizzyDisappearing";
}

function changeLanguage(condition) {
	br = condition;
}

function favoriteFlintastic() {
	var faveText = document.getElementById("favorited_text_comments");
	var faveStar = document.getElementById("favorited_star_comments");
	var faveRating = document.getElementById("favorited_ratings_comments");
	
	if(!fave && !br) {
		faveRating.textContent = '   6,251 favorites';
		faveText.textContent = 'Unfavorite';
		faveStar.style.color = '#E8950D';
		fave = true;
	} else if (fave && !br) {
		faveRating.textContent = '   6,250 favorites';
		faveText.textContent = 'Favorite';
		faveStar.style.color = '#EEEEEE';
		fave = false;
	}
	
	if(!fave && br) {
		faveRating.textContent = '   6,251 curtidas';
		faveText.textContent = 'Curtido';
		faveStar.style.color = '#E8950D';
		fave = true;
	} else if (fave && br) {
		faveRating.textContent = '   6,250 curtidas';
		faveText.textContent = 'Não curtido';
		faveStar.style.color = '#EEEEEE';
		fave = false;
	}
}