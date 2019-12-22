
var reloj = {

    tiempo: 0,
    interval_ID: undefined,
    pausedTiempo: undefined,

    start : function(){
        
        var self = this;

        this.interval_ID = setInterval(function(){
    
            let horas =     ("0" + parseInt(self.tiempo / 3600) % 24).slice(-2);
            let minutos =   ("0" + parseInt(self.tiempo / 60) % 60).slice(-2);
            let segundos =  ("0" + (self.tiempo % 60)).slice(-2);

            console.log(horas + ":" + minutos + ":" + segundos);
            self.tiempo ++;

        }, 1000);
    },

    pause : function(){

        this.pausedTiempo = this.tiempo;
        clearInterval(this.interval_ID);
    },

    resume: function(){

        this.tiempo = this.pausedTiempo;
        this.start()
    },

    stop: function(){
        
        this.tiempo = 0;
        this.pause();
    },

    inverse: function(){

        this.pause();
        this.tiempo = this.pausedTiempo
        var self = this;

        this.interval_ID = setInterval(function(){
            
            if(self.tiempo >=0){
                
                let horas =     ("0" + parseInt(self.tiempo / 3600) % 24).slice(-2);
                let minutos =   ("0" + parseInt(self.tiempo / 60) % 60).slice(-2);
                let segundos =  ("0" + (self.tiempo % 60)).slice(-2);

                console.log(horas + ":" + minutos + ":" + segundos);
                self.tiempo --;

            } else {
                
                self.stop();
                console.log("BOOOM!");

            }
            

        }, 1000);
        
    }
};


