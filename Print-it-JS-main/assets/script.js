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



// ETAPE 2 event listerners
fleche_droite.addEventListener("click", next );

fleche_gauche.addEventListener("click", prev );



// ETAPE 4 modifiez le slide au clic du bouton
function setImg () {
	banner_img.setAttribute('src', './assets/images/slideshow/' + images[i]);
	// le tagLine utlise le meme index que le tableau image pour se referer au bon texte par rapport a l'image
	banner_tagLine.innerHTML = tagLine[i];
	// creation d'une nouvelle index pour les bullet point, si d est inférieur la longeur de la variable dots, on incremente le retrait de la class dot_selected de 1
	for (let d = 0; d < dots.length; d++) {
        dots[d].classList.remove("dot_selected");
    }
	// (la condition precedente sert a ce que seulement un bullet point change de couleur par slide) met a jour le bullet point part rapport a l'index i correspondant a l'image
	dots[i].classList.add("dot_selected");
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