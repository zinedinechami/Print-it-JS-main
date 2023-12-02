// variables
let banner_img = document.querySelector ("#banner .banner-img") ;

let banner_tagLine = document.querySelector ("#banner .tagLine") ;

let fleche_droite = document.querySelector("#banner .arrow_right") ;

let fleche_gauche = document.querySelector("#banner .arrow_left") ;

// data for the carrousel

const images = [
	"slide1.jpg", "slide2.jpg", "slide3.jpg", "slide4.png",
]

const tagLine = [
	"Impressions tous formats <span>en boutique et en ligne</span>", 
	"Tirages haute définition grand format <span>pour vos bureaux et events</span>", 
	"Grand choix de couleurs <span>de CMJN aux pantones</span>",
	"Autocollants <span>avec découpe laser sur mesure</span>",
]

// slider id
let i = 0;

function prev () {
	if (i <= 0 ) i = images.length;
	i--; 
	return setImg();
}

function next () { 
	if ( i >= images.length-1) i = -1;
	i++;
	return setImg();
} ;

function setImg () {
	banner_img.setAttribute('src', './assets/images/slideshow/' + images[i]);
	banner_tagLine.innerHTML = tagLine[i];
}


// event listerners

fleche_droite.addEventListener("click", next );

fleche_gauche.addEventListener("click", prev );



