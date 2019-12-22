console.log(this);

var cantante = {
    nombre:"Pepin",
    sing: ()=>{
        console.log("lalala, me llamo" + this.nombre);
    }
}