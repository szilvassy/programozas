// JavaScript source code

var fiunevek;
var lanynevek = ["Betti", "Detti", "Réka", "Petra", "Júlia", "Alma"];
var lanynev;




function joslat() {

 lanynev = lanynevek[Math.round(Math.random()*5)];
 document.getElementById("eredmeny").innerHTML = lanynev;

   
}
