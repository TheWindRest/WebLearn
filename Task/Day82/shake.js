
var SHAKE_THRESHOLD = 3000;
var last_update = 0;
var num = 0;
var x = y = z = last_x = last_y = last_z = 0;
window.onload = function init() {
    if (window.DeviceMotionEvent) {
        window.addEventListener('devicemotion', deviceMotionHandler, false);
    } else {
        alert('not support mobile event');
    }
}
function deviceMotionHandler(eventData) {
    var acceleration = eventData.accelerationIncludingGravity;
    var curTime = new Date().getTime();
    if ((curTime - last_update) > 100) {
        var diffTime = curTime - last_update;
        last_update = curTime;
        x = acceleration.x;
        y = acceleration.y;
        z = acceleration.z;
        var speed = Math.abs(x + y + z - last_x - last_y - last_z) / diffTime * 10000;

        if (speed > SHAKE_THRESHOLD) {
            alert("摇动了");
            handelShakingMotion();
        }
        last_x = x;
        last_y = y;
        last_z = z;
    }
}
function handelShakingMotion() {
    num++;
    // 添加摇一摇的声音
    $('#musicBox').trigger('play');
    document.getElementById("numberCount").innerHTML = num;
}