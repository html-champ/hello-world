if (window.DeviceOrientationEvent) {
    document.getElementById("doeSupported").innerText = "Supported!";
    window.addEventListener('deviceorientation', function(event) {
        document.getElementById("xRot").innerHTML = 'x1 ' + event.acceleration.x1.toFixed(2);
        document.getElementById("yRot").innerHTML = 'y1 ' + event.acceleration.y1.toFixed(2);
        document.getElementById("zRot").innerHTML = 'z1 ' + event.acceleration.z1.toFixed(2);
    });

} else {
    document.getElementById("deviceorientation").innerText = "Device Rotation wird nicht unterstützt!";
};