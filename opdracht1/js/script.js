/*
  Wat doe je ook alweer in Javascript voor een micro-interactie?
  1. Gebruik de querySelector om een element in je html te selecteren
  2. Koppel een evenListener aan het element om een mouse-event te detecteren
  3. Gebruik het Classlist object om een css class aan een element toe te voegen of weg te halen.
*/

/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/
/*eslint-env browser*/
/*eslint 'no-console':0*/


var hart1 = document.querySelector('#hart1');
var hart2 = document.querySelector('#hart2');
var hart3 = document.querySelector('#hart3');
var hart4 = document.querySelector('#hart4');
var hart5 = document.querySelector('#hart5');
var hart6 = document.querySelector('#hart6');
var hartjes = document.querySelector('.favo2');
/* selecteren van html elementen */

/* door te klikken op het menu wordt de functie hamburgerMenu uitgevoerd */
hart1.addEventListener('click', hartjevullen);

function hartjevullen() {
    hart1.classList.toggle("favo2");
}

hart2.addEventListener('click', hartjevullen1);

function hartjevullen1() {
    hart2.classList.toggle("favo2");
}

hart3.addEventListener('click', hartjevullen2);

function hartjevullen2() {
    hart3.classList.toggle("favo2");
}

hart4.addEventListener('click', hartjevullen3);

function hartjevullen3() {
    hart4.classList.toggle("favo2");
}

hart5.addEventListener('click', hartjevullen4);

function hartjevullen4() {
    hart5.classList.toggle("favo2");
}

hart6.addEventListener('click', hartjevullen5);

function hartjevullen5() {
    hart6.classList.toggle("favo2");
}



/*BRON: https://www.youtube.com/watch?v=RIYde5oY8IU */
var count =(function (){
    var counter=0;
    return function() {return counter +=1;}   
})();

function displaycount(){
    document.getElementById("carrier").innerHTML= count();
}
