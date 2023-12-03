// variables
let banner_img = document.querySelector ("#banner .banner-img") ;

let banner_tagLine = document.querySelector ("#banner .tagLine") ;

let fleche_droite = document.querySelector("#banner .arrow_right") ;

let fleche_gauche = document.querySelector("#banner .arrow_left") ;

let bullet_point = document.querySelector(".dots .dot")

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

const bulletPoints = [
	"dot-1", "dot-2", "dot-3","dot-4",
]

// current image index
let i = 0;

// event listerners etape 2
fleche_droite.addEventListener("click", next );

fleche_gauche.addEventListener("click", prev );


// etape 4 modifiez le slide au clic du bouton
function setImg () {
	banner_img.setAttribute('src', './assets/images/slideshow/' + images[i]);
	banner_tagLine.innerHTML = tagLine[i];
	bullet_point.classList.add(bulletPoints[i] = "dot_selected");
}


// etape 5 défilement infini
function prev () {
	// verifier si i est moins ou egal a 0, 0 = slide1
	if (i <= 0 ){
		// si c'est true i est fixé au dernier index du tableau images
		i = images.length - 1;
	} else {
		// si i est plus grand que 0, on le soustrait de 1
	i--; }
	// on appelle cet function pour mettre a jour l'image correspondant a l'index du tableau dictée par la valeur de i
	return setImg();
}

function next () { 
	// verifier si le i est plus ou egal au dernier index du tabelau
	if ( i >= images.length-1) {
		// si c'est true, on fixe -1 au i pour revenir au premier index du tableau
		i = -1; 
	}
	// puis on additione 1 au i pour se deplacer au prochain index
	i++;
	// on appelle cet function pour mettre a jour l'image correspondant a l'index du tableau dictée par la valeur de i
	return setImg();
} ;