/*console.log("hola sóc la pràctica 2");*/

/*console.log("1");

var a = 100;

setTimeout(function(){
    console.log(a);
    console.log("han pasado 4 segundos");
}, 4000);

console.log("2");

/*var interval_ID = setInterval(function(){
    console.log(Math.random());
}, 500);*/

var tiempo = 0;

var interval_ID = setInterval(function(){
    
    tiempo += 1;

    let horas =     ("0" + parseInt(tiempo / 3600) % 24).slice(-2);
    let minutos =   ("0" + parseInt(tiempo / 60) % 60).slice(-2);
    let segundos =  ("0" + (tiempo % 60)).slice(-2);

    console.log(horas + ":" + minutos + ":" + segundos);

}, 1000);

// Funciones reloj

//start: Pone en marcha el reloj.
//pause: pausa el reloj.
// resume: continua (pero no empieza).
// stop: lo pone a cero y lo para.
//invert: cambia el sentido.