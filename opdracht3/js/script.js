/*
  Wat doe je ook alweer in Javascript voor een micro-interactie?
  1. Gebruik de querySelector om een element in je html te selecteren
  2. Koppel een evenListener aan het element om een mouse-event te detecteren
  3. Gebruik het Classlist object om een css class aan een element toe te voegen of weg te halen.
*/

/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/
/*eslint-env browser*/
/*eslint 'no-console':0*/

let requestURL = 'https://koopreynders.github.io/frontendvoordesigners/opdracht3/json/movies.json';
let request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();


/* dit doen als er info van de api terugkomt */
request.onload = function () {
	const movies = request.response;
	voegFilmsToe(movies);
}


/* films toevoegen aan de lijst */
function voegFilmsToe(movies) {
	let deLijstMetFilms = document.body.querySelector("ul");
	let deLijstMetBolletjes = document.body.querySelector(".bolletjes");

	for (let i = 0; i < movies.length; i++) {
		/* de film aanmaken en toevoegen aan de lijst */
		let newLi = document.createElement("li");
		let newHeader = document.createElement("h2");
		let newImg = document.createElement("img");

		let newDetails = document.createElement("div");
		/*ik van de datum zelf een <date> element gemaakt */
		let releaseText = document.createElement("p");
		let releaseDate = document.createElement("date");
		let Plot = document.createElement("p");
		let genre = document.createElement("p");

		newLi.setAttribute("id", "afb" + (i + 1));
        newDetails.setAttribute("id","detail");
		newImg.src = movies[i].cover;
		newImg.setAttribute("alt", movies[i].title);
		newHeader.innerHTML = movies[i].title;

		releaseDate.innerHTML = movies[i].release_date;
		releaseText.innerHTML = 'Release Date: ';
		releaseText.appendChild(releaseDate);
		Plot.innerHTML = 'Plot: ' + movies[i].plot;
		genre.innerHTML = 'Genre: ' + movies[i].genres;


		/* de details stop ik met zijn allen in een div */
		newDetails.appendChild(releaseText);
		newDetails.appendChild(Plot);
		newDetails.appendChild(genre);

        for (let t = 0; t < movies[i].reviews.length; t++) {
                let review = document.createElement("p");
                review.innerHTML = 'Review:' + movies[i].reviews[t].score;
                newDetails.appendChild(review);
            }

		newLi.appendChild(newHeader);
		newLi.appendChild(newImg);
		/* de div met details stop ik in zijn geheel in de li */
		/* dan kunnen de detail met zijn allen met css aangepast worden */
		newLi.appendChild(newDetails);

		deLijstMetFilms.appendChild(newLi);

		/* bolletje voor de film aanmaken en toevoegen aan de lijst met bolletjes */
		let newBolletje = document.createElement("a");
		newBolletje.setAttribute("href", "#afb" + (i + 1));
		newBolletje.addEventListener('click', bolletjeklik);
		deLijstMetBolletjes.appendChild(newBolletje);
	}

	/* en dan het eerste bolletje nog zwart maken */
	let eersteBolletje = deLijstMetBolletjes.querySelector(":first-child");
	eersteBolletje.classList.add("bolletjegevuld2");

	/* en dan de eerste film actief maken */
	/* met CSS wordt de film groter */
	let eersteFilm = deLijstMetFilms.querySelector(":first-child");
	eersteFilm.classList.add("actief");
}


/* klikken op bolletje afhandelen */
function bolletjeklik(event) {
	/* navigeren naar het target even uitstellen */
	event.preventDefault();

	goToMovie(event.target);
}


/* klikken op buttons afhandelen */
var buttonLinks = document.querySelector(".pijltje.volgende");
buttonLinks.addEventListener('click', buttongeklikt);

var buttonRechts = document.querySelector(".pijltje.vorige");
buttonRechts.addEventListener('click', buttongeklikt);


function buttongeklikt(event) {
	if (event.target.classList.contains("volgende")) {
		nextMovie();
	}

	else {
		previousMovie()
	}
}

// https://developer.mozilla.org/en-US/docs/Web/API/Document/keydown_event
document.addEventListener("keydown", event => {
     event.preventDefault();
	// Pijltje naar rechts -> volgende film
  if (event.isComposing || event.keyCode === 39) {
    nextMovie();
  }
	// Pijltje naar links -> vorige film
  else if (event.isComposing || event.keyCode === 37){
    previousMovie();
  }
});

function nextMovie(){
	var huidigebolletje = document.querySelector("a.bolletjegevuld2");
	var nieuwebolletje = huidigebolletje.nextElementSibling;
	if (nieuwebolletje === null) {
		nieuwebolletje = document.querySelector("a:first-of-type");
	}
	goToMovie(nieuwebolletje);
}

function previousMovie(){
	var huidigebolletje = document.querySelector("a.bolletjegevuld2");
	var nieuwebolletje = huidigebolletje.previousElementSibling;
	if (nieuwebolletje === null) {
		nieuwebolletje = document.querySelector("a:last-of-type");
	}
	goToMovie(nieuwebolletje);
}

function goToMovie(nieuwBolletje) {
	/* de class actief wordt van de huidige film gehaald */
	/* met CSS wordt de film dan kleiner */
	var huidigeFilm = document.querySelector("li.actief");
	huidigeFilm.classList.remove("actief");

	/* de class actief aan de nieuwe film toevoegen */
	/* de id van de nieuwe film bepalen */
	var nieuweFilmID = nieuwBolletje.hash;
	var nieuweFilm = document.querySelector(nieuweFilmID);
	nieuweFilm.classList.add("actief");

	/* de class bolletjegevuld2 wordt van het huidige bolletje gehaald */
	var huidigeBolletje = document.querySelector("a.bolletjegevuld2");
	huidigeBolletje.classList.remove("bolletjegevuld2");

	/* de class actief aan het nieuwe bolletje toevoegen */
	nieuwBolletje.classList.add('bolletjegevuld2');

	/* de link activeren */
	/* nu begint het verplaatsen */
	window.location = nieuwBolletje.href;
}