/*
  Wat doe je ook alweer in Javascript voor een micro-interactie?
  1. Gebruik de querySelector om een element in je html te selecteren
  2. Koppel een evenListener aan het element om een mouse-event te detecteren
  3. Gebruik het Classlist object om een css class aan een element toe te voegen of weg te halen.
*/

/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/
/*eslint-env browser*/
/*eslint 'no-console':0*/

var bolletje1 = document.querySelector("a[href='#afb1']");
var bolletje2 = document.querySelector("a[href='#afb2']");
var bolletje3 = document.querySelector("a[href='#afb3']");
var bolletje4 = document.querySelector("a[href='#afb4']");
var bolletje5 = document.querySelector("a[href='#afb5']");

function bolletjeklik(event){
    document.querySelector("a.bolletjegevuld2").classList.remove("bolletjegevuld2");
    event.target.classList.add('bolletjegevuld2');
}

bolletje1.addEventListener('click', bolletjeklik);
bolletje2.addEventListener('click', bolletjeklik);
bolletje3.addEventListener('click', bolletjeklik);
bolletje4.addEventListener('click', bolletjeklik);
bolletje5.addEventListener('click', bolletjeklik);



var buttonLinks = document.querySelector(".pijltje.volgende");
var buttonRechts = document.querySelector(".pijltje.vorige");


function buttongeklikt(event){
    var huidigebolletje; 
    var nieuwebolletje;
    
    if (event.target.classList.contains("volgende") ){ 
        huidigebolletje = document.querySelector("a.bolletjegevuld2");
        nieuwebolletje = huidigebolletje.nextElementSibling;
        
        if(nieuwebolletje === null){
            nieuwebolletje = document.querySelector("a:first-of-type");
        }
        
        window.location = nieuwebolletje.href;
        document.querySelector("a.bolletjegevuld2").classList.remove("bolletjegevuld2");
        nieuwebolletje.classList.add('bolletjegevuld2');
        
    } else {
        huidigebolletje = document.querySelector("a.bolletjegevuld2");
        nieuwebolletje = huidigebolletje.previousElementSibling;
        
        if(nieuwebolletje === null){
            nieuwebolletje = document.querySelector("a:last-of-type");
        }
        
        window.location = nieuwebolletje.href;
        document.querySelector("a.bolletjegevuld2").classList.remove("bolletjegevuld2");
        nieuwebolletje.classList.add('bolletjegevuld2');
    }
}


buttonLinks.addEventListener('click', buttongeklikt);
buttonRechts.addEventListener('click', buttongeklikt);

