if (window.DeviceMotionEvent) {
    document.getElementById("dmeSupported").innerText = "OK -Device Motion wird unterstützt!";
    window.addEventListener('devicemotion', function(event) {
        document.getElementById("xBeschl").innerHTML = 'x ' + event.acceleration.x.toFixed(2);
        document.getElementById("xBeschl").innerHTML = 'y ' + event.acceleration.y.toFixed(2);
        document.getElementById("xBeschl").innerHTML = 'z ' + event.acceleration.z.toFixed(2);
    });

} else {
    document.getElementById("dmeSupported").innerText = "Device Motion wird nicht unterstützt!";
}