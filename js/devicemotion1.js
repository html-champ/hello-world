if (window.DeviceMotionEvent) {
    document.getElementById("dmeSupported").innerText = "Device Rotation wird unterstützt!";
    window.addEventListener('devicemotion', function(event) {

        document.getElementById("xRotation").innerHTML = 'Rotationsrate beta um x-Achse: ' + event.rotationRate.alpha.toFixed(2);
        document.getElementById("yRotation").innerHTML = 'Rotationsrate gamma um y-Achse: ' + event.rotationRate.beta.toFixed(2);
        document.getElementById("zRotation").innerHTML = 'Rotationsrate alpha um z-Achse: ' + event.rotationRate.gamma.toFixed(2);

    });
} else {
    document.getElementById("dmeSupported").innerText = "Device Rotation wird nicht unterstützt!";
}