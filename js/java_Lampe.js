// Inhalt von meineDatei.js:
var x = document.getElementById("meinBild");
x.addEventListener("click", bildAendern);

function bildAendern() {
    var image = document.getElementById('meinBild');
    if (image.src.match("an")) {
        image.src = "images/test_lampe_aus.png";
    } else {
        image.src = "images/test_lampe_an.png";
    }
}

var checkbox = document.querySelector("input[id=checkbox1]");
checkbox.addEventListener('change', function() {
    if (this.checked) {
        alert('angekreuzt');
    } else {
        // Checkbox is not checked..
        alert('nicht angekreuzt');
    }
});