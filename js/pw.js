function vergleiche(a, b) {
    return (a == b) ? true : false;
}

function passwort(form) {
    if (vergleiche("test", form.Password.value) && vergleiche("test", form.Username.value))
        window.location.assign("ladesaeule.4.1.html");
    else {
        alert("Login fehlgeschlagen, Passwort oder Benutzername falsch!");
        form.pass.select();
        form.pass.focus();
    }
}