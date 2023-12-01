let banner_img = document.querySelector ("#banner .banner-img")

let banner_tagLine = document.querySelector ("#banner .tagLine")

const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
] ;

var i = 0;

function prev () {
	if (i <= 0 ) i = slides.length;
	i--; 
	return setImg();
}

function next () { 
	if ( i >= slides.length-1) i = -1;
	i++;
	return setImg();
} ;

function setImg () {
	return banner_img.setAttribute('src', './assets/images/slideshow/' + slides.image[i]);
}


// etape 2 ajoutez des event listeners au fleches
let fleche_droite = document.querySelector("#banner .arrow_right") ;

fleche_droite.addEventListener("click", next );

// fleche gauche

let fleche_gauche = document.querySelector("#banner .arrow_left") ;

fleche_gauche.addEventListener("click", prev );



