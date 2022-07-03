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

function lampOff () {
    if (!isLampBroken()) {
        lamp.src = './img/desligada.jpg';
        turnOnOff.textContent = 'Allumer';
    }
}

function lampBroken () {
    lamp.src = './img/quebrada.jpg';
}

function lampOnOff () {
    if (turnOnOff.textContent == 'Allumer') {
        lampOn();
        turnOnOff.textContent = 'Eteindre';
    } else {
        lampOff();
        turnOnOff.textContent ='Allumer';
    }
}


turnOnOff.addEventListener('click', lampOnOff);
lamp.addEventListener('mouseover', lampOn);
lamp.addEventListener('mouseleave', lampOff);
lamp.addEventListener('dblclick', lampBroken);