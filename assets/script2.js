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
const {image, tagLine} = slides[0];
const positionSlide = slides[0];

// Sélection des éléments du DOM
const imageSlide = document.querySelector(".banner-img");
imageSlide.src = `./assets/images/slideshow/${positionSlide.image}`;
imageSlide.alt = positionSlide.tagLine;
const textSlide = banner.querySelector("p");
textSlide.innertext = positionSlide.tagLine;
const dotContainer = document.querySelector(".dots");



// ajout des flèches de navigation du slider:
const arrowPrev = document.querySelector(".arrow_left");
const arrowNext = document.querySelector(".arrow_right");
