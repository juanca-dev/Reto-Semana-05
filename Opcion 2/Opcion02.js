/*

Desarrolle el siguiente algoritmo:
“El náufrago satisfecho” ofrece hamburguesas sencillas, 
dobles y triples,las cuales tienen un costo de $20.00, $25.00 y $28.00 respectivamente.
La empresa acepta tarjetas de crédito con un cargo de 5 % sobre la compra.
Suponiendo que los clientes adquieren sólo un tipo de hamburguesa, 
realice un algoritmo para determinar cuánto debe pagar una persona por N hamburguesas.

*/
let  TI = prompt("Ingrese tipo de hamburquesa(sencilla, doble, triple) : ");

let N = prompt("Ingrese la cantidad de hamburguesa : ");

let TP = prompt("Ingrese el tipo de pago(Tarjeta o efectivo) : ");

let CA = 0.05;

let TO =0 ;

// TIPO DE HAMBURGUESA.
// N=Numero de hamburguesas.
// T=Tipo de pago.
// PA=Precio de Hamburguesa.
// CA= Cargo por el uso de la tarjeta.
// TT =Total sin Cargo.
// TOTACAR =  Total con cargo.
// 
if(TI === "sencilla"){
    if(TP === "Tarjeta"){
        TO = N * 20;
        TOTCAR = TO + (TO*CA);
    }else{
        TOTCAR  = N * 20;
    }
    console.log("El Total a paga nes : "+ TOTCAR );
}else if(TI==="doble"){
    
    if(TP === "Tarjeta"){
        TO = N * 25;
        TOTCAR  = TO + (TO*CA);
    }else{ 
        TOTAL  = N * 25;
    }
    console.log("El Total a paga nes : "+ TOTCAR );
}else if( TI === "triple"){
    if(TP === "Tarjeta"){
        TO = N * 28;
        TOTCAR = TO + (TO*CA);
    }else{ 
        TOTCAR = N * 28;
    }
    console.log("El Total a pagar es : "+ TOTCAR );
}