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


// Sélection des éléments du DOM
const imageSlide = document.querySelector(".banner-img");
const textSlide = banner.querySelector("p");
const dotContainer = document.querySelector(".dots");


// ajout des flèches de navigation du slider:
const arrowPrev = document.querySelector(".arrow_left");
const arrowNext = document.querySelector(".arrow_right");

let position = 0;


// Ajout des Event Listener sur les flèches:

arrowPrev.addEventListener("click", prevSlide)
arrowNext.addEventListener("click", nextSlide)


// Création des bullet points du slider:

for (let i = 0; i < slides.length; i++) {
    const dot = document.createElement("div");
    dot.classList.add("dot");
    dotContainer.appendChild(dot);
}

const dots = dotContainer.querySelectorAll(".dot");
// ajout du dot_selected sur le 1er bullet point


function refreshDots() {
    dots.forEach(dot => {
        dot.classList.remove("dot_selected");
    })
	dots[position].classList.add("dot_selected");

}

refreshDots()
refreshSlide()


// création fonction changement slides next et prev

    /* changement de position de la slide à la prochaine position */
function nextSlide() {
    
    position++;
    if (position > slides.length-1) {
        position=0;
    }
    refreshDots()
    refreshSlide()
}

    /* changement de position de la slide à la position précédente */

function prevSlide() {
    
    position--;
    if (position<0){
        position=slides.length-1;
    }
    refreshDots()
    refreshSlide()

}

// Fonction va permettre de positionner tous les élements liés à la slide visionnée

function refreshSlide (){
    const slide = slides[position];
    const image = slide.image;
    const tagLine = slide.tagLine;
    imageSlide.src = `./assets/images/slideshow/${image}`;
    imageSlide.alt = tagLine;
    textSlide.innerHTML = tagLine;

}
