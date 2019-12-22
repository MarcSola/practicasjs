function Cliente(nombre,apellido1,apellido2){

    this.nombre;
    this.apellido1;
    this.apellido2;

    this.showName = function(){

        console.log(this.nombre+ " " + this.apellido1 + " " + this.apellido2);
        
    }
}