function Reloj(nombre){
    
    this.nombre = nombre;
    this.tiempo = 0;
    this.interval_ID = undefined;
    this.sentido = 1;

    this.start = function(){
        var self = this;

        this.interval_ID = setInterval(function(){
    
            if(self.tiempo >=0){
                
                let horas =     ("0" + parseInt(self.tiempo / 3600) % 24).slice(-2);
                let minutos =   ("0" + parseInt(self.tiempo / 60) % 60).slice(-2);
                let segundos =  ("0" + (self.tiempo % 60)).slice(-2);

                console.log(self.nombre + ": " + horas + ":" + minutos + ":" + segundos);
                self.tiempo += self.sentido;

            } else {
                
                self.stop();
                self.sentido = 1;
                var audio = new Audio('js/alarm.mp3');
                audio.play();

            }
        }, 1000);
    };

    this.pause = function(){

        this.pausedTiempo = this.tiempo;
        clearInterval(this.interval_ID);

    };

    this.resume = function(){

        this.tiempo = this.pausedTiempo;
        this.start();

    };

    this.stop = function(){

        this.tiempo = 0;
        this.pause();

    };

    this.inverse = function(){

        this.pause();
        console.log("REVERSING COUNT")
        this.tiempo = this.pausedTiempo
        var self = this;
        this.sentido = -1
        this.start(); 
         
    }
}



    

    

