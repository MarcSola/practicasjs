var a = 100;

var resultado:string;
var numeroHijos:number;
var descatalogado:boolean = true;
var nombres:string[] = ["Pepín","Honorio"];
var cosasVarias:any[] = ["Pepín", true, 100, {}];
var cualquierCosa:any = true;

cualquierCosa = "nombre";

function hazAlgo():void{

}

function dameNombre():string{
    
    return "Pepín";

}

function suma(op1:number, op2:number):number{
    
    return op1 + op2;

}

suma(10,20);

//Parámetros opcionales...

function getData(codigo:number, activo?:boolean):string{

    return "Hola";

}

getData(102,true);
getData(102);

function printData(codigo:number,activo:boolean = true):void{

}

printData(102, false);
printData(102);
