// variables
let banner_img = document.querySelector ("#banner .banner-img") ;

let banner_tagLine = document.querySelector ("#banner .tagLine") ;

let fleche_droite = document.querySelector("#banner .arrow_right") ;

let fleche_gauche = document.querySelector("#banner .arrow_left") ;

let bullet_point = document.querySelector(".dot")

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
	"dot-1 dot_selected", "dot-2 dot_selected", "dot-3 dot_selected","dot-4 dot_selected",
]



// ETAPE 2 event listerners
fleche_droite.addEventListener("click", next );

fleche_gauche.addEventListener("click", prev );



// ETAPE 4 modifiez le slide au clic du bouton
function setImg () {
	banner_img.setAttribute('src', './assets/images/slideshow/' + images[i]);
	// le tagLine utlise le meme index que le tableau image pour se referer au bon texte par rapport a l'image
	banner_tagLine.innerHTML = tagLine[i];
	bullet_point.classList.add = bulletPoints[i] ;
}


// array index, indique la position d'un element dans un tableau (les tableau JS sont indexé a partir de 0)
let i = 0;

// ETAPE 5 défilement infini
function prev () {
	// verifie si i est moins ou egal a 0, (0 = slide1.jpg)
	if (i <= 0 ){
		// si c'est true, i est fixé au dernier index du tableau images
		i = images.length - 1;
	} else {
		// si i est plus grand que 0, on le decremente de 1
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
	// puis on ajoute un increment de 1 au i pour se deplacer au prochain index
	i++;
	// on appelle cet function pour mettre a jour l'image correspondant a l'index du tableau dictée par la valeur de i
	return setImg();
} ;