// variables
let banner_img = document.querySelector ("#banner .banner-img") ;

let banner_tagLine = document.querySelector ("#banner .tagLine") ;

let fleche_droite = document.querySelector("#banner .arrow_right") ;

let fleche_gauche = document.querySelector("#banner .arrow_left") ;

let dots = document.getElementsByClassName("dot") ;



// array
const slides = [
	{
		// object
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



// ETAPE 3
// add bullet points
for (let y = 0; y < slides.length; y++ ) {
	let individualDot = document.createElement('div');
	individualDot.classList.add('dot');
	let dotSection = document.querySelector(".dot-section")
	dotSection.appendChild(individualDot);
} ;

dots[0].classList.add("dot_selected");



// ETAPE 2
// event listerners for arrows
fleche_droite.addEventListener("click", next );

fleche_gauche.addEventListener("click", prev );



// ETAPE 5
// Array index, indiquant la position d'un element dans un tableau (les tableau JS sont indexé a partir de 0)
let i = 0;
// Défilement infini grace au conditions
function prev () {
	// on declaire que si l'index des images est moins que 0
	if (i <= 0 ) i = slides.length; 
	// on le decrement de 1 pour revenir au dernier index du tableau
	i--; 
	// puis on retourne cet fonction pour mettre a jour l'image correspondant à l'index du array images fixée par la variable i
	return setImg();
}
function next () { 
	// si l'index i est supérieur au dernier index du tableau, on fixe -1 pour revenir au premier index du tableau
	if ( i >= slides.length-1) i = -1; 
	// on l'incremente de 1 pour aller se déplacer au prochain index du tableau à partir du premier index
	i++;
	// puis on retourne cet fonction pour mettre a jour l'image correspondant à l'index du array images fixée par la variable i
	return setImg();
} ;



// ETAPE 4
// Modifiez le slide au clic du bouton
function setImg () {
	banner_img.setAttribute('src', './assets/images/slideshow/' + slides[i].image);
	// tagLine utlise le meme index que le tableau image pour se referer au bon texte par rapport a l'image
	banner_tagLine.innerHTML = slides[i].tagLine;
	// for loop
	// d'abord on initialise une index pour les dots
	// puis on initialise une condition, si d est inferieur a longeur des dots
	// si la condition est vrai on incremente l'index pour retirer la classe dot selected
	for (let d = 0; d < dots.length; d++) {
        dots[d].classList.remove("dot_selected");
    }
	// met a jour le bullet point part rapport a l'index i correspondant a l'image
	dots[i].classList.add("dot_selected");
} ;

