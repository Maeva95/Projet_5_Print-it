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


console.log(slides[1]["image"])

// ajout des flèches de navigation du slider
let arrowPrev = document.querySelector(".arrow_left");
let arrowNext = document.querySelector(".arrow_right");

// ajout des Event Listener des flèches
arrowPrev.addEventListener("click", () => {
    console.log("retour!");
    prevSlide();
})
arrowNext.addEventListener("click", function() {
    console.log("avance!");
    nextSlide()
})
// fin de la partie flèches de navigation

// ajout des bullet points

for (let i = 0; i < slides.length; i++) {
    let dotContainer = document.querySelector(".dots");
    const dot = document.createElement("div");
    dot.classList.add("dot");
    dotContainer.appendChild(dot);
}

//fin ajout des bullet points

// création fonction changement slides next et prev

let i=0;
let imageSlide = document.querySelector(".banner-img");
imageSlide.src = slides[0]["image"];
let textSlide = banner.querySelector("p");
let dotContainer = document.querySelector(".dots");
dot = dotContainer.querySelectorAll(".dot")

function nextSlide() {
    i++;
    if (i > slides.length-1) {
        i=0;
    }
    if (i<0){
        i = slides.length-1;
    }
    for (let i = 0; i < slides.length; i++) {
        dot[i].className = dot[i].className.replace(" dot_selected", "");
    }
    imageSlide.src = slides[i]["image"];
    imageSlide.alt = slides[i]["tagLine"];
    textSlide.innerHTML = slides[i]["tagLine"];
    dot[i].className += " dot_selected";
}
function prevSlide() {
    i--;
    if (i<0){
        i=slides.length-1;
    }
    if (i > slides.length-1) {
        i=0;
    }

    for (let i = 0; i < slides.length; i++) {
        dot[i].className = dot[i].className.replace(" dot_selected", "");
    }

    dot[i].className += " dot_selected";
    imageSlide.src = slides[i]["image"];
    imageSlide.alt = slides[i]["tagLine"];
    textSlide.innerHTML = slides[i]["tagLine"];
}