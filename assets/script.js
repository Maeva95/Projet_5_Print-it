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

// Sélection des éléments du DOM:
const imageSlide = document.querySelector(".banner-img");
const textSlide = banner.querySelector("p");
const dotContainer = document.querySelector(".dots");

// ajout des flèches de navigation du slider:

const arrowPrev = document.querySelector(".arrow_left");
const arrowNext = document.querySelector(".arrow_right");

// Création des bullet points du slider:

for (let i = 0; i < slides.length; i++) {
    const dot = document.createElement("div");
    dot.classList.add("dot");
    dotContainer.appendChild(dot);
}

const dots = dotContainer.querySelectorAll(".dot");

// position de la slide en cours de visionnage
let positionCurrentSlide = 0;

// création de la fonction de la slide en cours de visionnage /les autres restent masquées
function showCurrentSlide (){
    
    const currentSlide = positionCurrentSlide%slides.length;
    const {image, tagLine} = slides[currentSlide];
    imageSlide.src = `./assets/images/slideshow/${image}`;
    imageSlide.alt = tagLine;
    textSlide.innerHTML = tagLine;
    
    // ajout du dot_selected sur la slide actuelle
    function refreshDots() {
        dots.forEach(dot => {
            dot.classList.remove("dot_selected");
        })
        dots[currentSlide].classList.add("dot_selected");
    }
    refreshDots();
};

showCurrentSlide ();

// création de la fonction changement slides suivante (next) et précédente (prev)

function changeSlide(){
    arrowPrev.addEventListener("click", () => {
        showCurrentSlide();
        positionCurrentSlide--;
    });

    arrowNext.addEventListener("click", () => {
        showCurrentSlide ();
        positionCurrentSlide++;
    });
}
changeSlide()



