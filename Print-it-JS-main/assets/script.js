
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
]

// etape 2 ajoutez des event listeners au fleches
let fleche_droite = document.querySelector("#banner .arrow_right") ;

fleche_droite.addEventListener("click", changeImage );

// fleche gauche

let fleche_gauche = document.querySelector("#banner .arrow_right") ;

fleche_gauche.addEventListener("click", () => {  
	
console.log ("fleche_gauche") 
});


// etape 4

let banner_img = document.querySelector ("#banner .banner-img")


function changeImage () { 
	banner_img.setAttribute("src", "./assets/images/slideshow/slide2.jpg");
}