// variables
let banner_img = document.querySelector ("#banner .banner-img") ;

let banner_tagLine = document.querySelector ("#banner .tagLine") ;

let fleche_droite = document.querySelector("#banner .arrow_right") ;

let fleche_gauche = document.querySelector("#banner .arrow_left") ;

let dots = document.getElementsByClassName("dot")

// tableaux pour le carrousel

const images = [
	"slide1.jpg", "slide2.jpg", "slide3.jpg", "slide4.png",
]

const tagLine = [
	"Impressions tous formats <span>en boutique et en ligne</span>", 
	"Tirages haute définition grand format <span>pour vos bureaux et events</span>", 
	"Grand choix de couleurs <span>de CMJN aux pantones</span>",
	"Autocollants <span>avec découpe laser sur mesure</span>",
]



// Event listerners pour les fleches
fleche_droite.addEventListener("click", next );

fleche_gauche.addEventListener("click", prev );



// Array index, indiquant la position d'un element dans un tableau (les tableau JS sont indexé a partir de 0)
let i = 0;


// Défilement infini grace au conditions
function prev () {
	// on declaire que si l'index des images est moins que 0
	if (i <= 0 ) i = images.length; 
	// on le decrement de 1 pour revenir au dernier index du tableau
	i--; 
	// puis on retourne cet fonction pour mettre a jour l'image correspondant à l'index du array images fixée par la variable i
	return setImg();
}


function next () { 
	// si l'index i est supérieur au dernier index du tableau, on fixe -1 pour revenir au premier index du tableau
	if ( i >= images.length-1) i = -1; 
	// on l'incremente de 1 pour aller se déplacer au prochain index du tableau à partir du premier index
	i++;
	// puis on retourne cet fonction pour mettre a jour l'image correspondant à l'index du array images fixée par la variable i
	return setImg();
} ;



// Modifiez le slide au clic du bouton
function setImg () {
	banner_img.setAttribute('src', './assets/images/slideshow/' + images[i]);
	// tagLine utlise le meme index que le tableau image pour se referer au bon texte par rapport a l'image
	banner_tagLine.innerHTML = tagLine[i];
	// for loop
	// d'abord on initialise une index pour les dots
	// puis on initialise une condition, si d est inferieur a longeur des dots
	// si la condition est vrai on incremente l'index pour retirer la classe dot selected
	for (let d = 0; d < dots.length; d++) {
        dots[d].classList.remove("dot_selected");
    }
	// met a jour le bullet point part rapport a l'index i correspondant a l'image
	dots[i].classList.add("dot_selected");
}