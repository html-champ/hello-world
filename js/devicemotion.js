if (window.DeviceMotionEvent) {
    document.getElementById("dmeSupported").innerText = "Device Motion wird unterstützt!";
    window.addEventListener('devicemotion', function(event) {
        document.getElementById("xBeschl").innerHTML = 'Beschleunigung in x-Richtung ' + event.acceleration.x.toFixed(1) + 'm/s^2';
        document.getElementById("yBeschl").innerHTML = 'Beschleunigung in y-Richtung ' + event.acceleration.y.toFixed(1);
        document.getElementById("zBeschl").innerHTML = 'Beschleunigung in z-Richtung ' + event.acceleration.z.toFixed(1);
    });

} else {
    document.getElementById("dmeSupported").innerText = "Device Motion wird nicht unterstützt!";
}