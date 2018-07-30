function vergleiche(a, b) {
    return (a == b) ? true : false;
}

function passwort(form) {
    if (vergleiche("admin", form.Password.value) && vergleiche("admin", form.Username.value))
        window.location.assign("ladesaeule.4.1.html");
    else {
        alert("Login fehlgeschlagen, Passwort oder Benutzername falsch!");
        form.pass.select();
        form.pass.focus();
    }
}