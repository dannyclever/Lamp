const turnOnOff = document.getElementById('turnOnOff');
const lamp = document.getElementById('lamp');

function isLampBroken () {
    return lamp.src.indexOf('quebrada') > -1;
}

function lampOn () {
    if (!isLampBroken()) {
        lamp.src = './img/ligada.jpg';
    }
}