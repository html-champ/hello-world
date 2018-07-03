document.getElementById("neueID").innerHTML = "neuer Inhalt";
document.getElementById("neueID").style.fontSize = "25px";
document.getElementById("neueID").style.color = "blue";

function myFunction(p1, p2) {
    return p1 + p2;
}
var ergebnis = "Ergebnis ist: " + myFunction(3, 4);
document.getElementById("neueID").innerHTML = ergebnis;

console.log("Ergebnis ist: " + ergebnis);

var person = { firstName: "John", secondName: "Doe", alter: "99" };
document.write(" Vorname: " + person.firstName + "<br>" + " Nachname: " + person.secondName + "<br>" + " Alter: " + person.alter);