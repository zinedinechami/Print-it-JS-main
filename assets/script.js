let banner_img = document.querySelector("#banner .banner-img");
let banner_tagLine = document.querySelector("#banner .tagLine");
let fleche_droite = document.querySelector("#banner .arrow_right");
let fleche_gauche = document.querySelector("#banner .arrow_left");
let dots = document.getElementsByClassName("dot");

const slides = [
  {
    // object
    image: "slide1.jpg",
    tagLine: "Impressions tous formats <span>en boutique et en ligne</span>",
  },
  {
    image: "slide2.jpg",
    tagLine:
      "Tirages haute définition grand format <span>pour vos bureaux et events</span>",
  },
  {
    image: "slide3.jpg",
    tagLine: "Grand choix de couleurs <span>de CMJN aux pantones</span>",
  },
  {
    image: "slide4.png",
    tagLine: "Autocollants <span>avec découpe laser sur mesure</span>",
  },
];

// ADD BULLET POINTS
// for loop, if index represented by the varaible y is inferior to the length of the slides array, increment y
// for every, every incrementation the bloc of code below is executed, creating the dot in the DOM
for (let y = 0; y < slides.length; y++) {
  let individualDot = document.createElement("div");
  individualDot.classList.add("dot");
  let dotSection = document.querySelector(".dot-section");
  dotSection.appendChild(individualDot);
}
dots[0].classList.add("dot_selected");

// IMAGE SLIDE LEFT AND RIGHT
// Infinite image slide with the use of conditions, we use the variable i to use as an array index
// if index inferior to 0 we decrement it to the index before
let i = 0;
function prev() {
  if (i <= 0) i = slides.length;
  i--;
  return setImg();
}
// if index is inferior to the length of the slides array - 1 meaning the last index of the array, we reduce from 1 index than we increment it
function next() {
  if (i >= slides.length - 1) i = -1;
  i++;
  return setImg();
}

// SET IMAGE AND TAG FROM ARRAY
// Modifiez le slide au clic du bouton
function setImg() {
  banner_img.setAttribute(
    "src",
    "./assets/images/slideshow/" + slides[i].image
  );
  banner_tagLine.innerHTML = slides[i].tagLine;
  // for loop to make previously selected dots removed
  for (let d = 0; d < dots.length; d++) {
    dots[d].classList.remove("dot_selected");
  }
  dots[i].classList.add("dot_selected");
}

fleche_droite.addEventListener("click", next);
fleche_gauche.addEventListener("click", prev);
