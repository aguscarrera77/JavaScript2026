//bucles: 3 distintos. for, while, do while.
//for: sintaxis: for(inicio;condicio;contador){BLOQUE DE CODIGO QUE SE REPITE.}

//control de stock: necesito auditar las 10 botellas que hay en el deposito.

let totalbotellas=0;

for(let i=0;i<=10;i++){
    totalbotellas= i;
    console.log("Revisando botella por botella el resultado es: " + i);

}
console.log("La auditoria da como resultado: " ,totalbotellas)

// contador en una rutina de ejercicos. Por ej cuantas abdominales voy.

console.log("----Rutina de Ejercicios--------");

let totalRepeticiones=8;

for(let repeticiones=1;repeticiones <= totalRepeticiones;repeticiones++){
    console.log("Vamos toro que vas por la repeticion numero: "+ repeticiones);
}

console.log("Llegaste al maximo de tu rutina.")

//Generar un contador de cuenta regresiva para un despegue.

for(let segundos=10;segundos>=0;segundos--){
    console.log("Tic tac ...faltan....." + segundos + " segundos");
}

console.log("Despegue exitoso.");

//Simulador de lanzamiento de un dado. Calcular cuantas veces salio un numero especifico.
//El numero especifico es el numero 6.
//Math.random(): generar numeros decimales de 0 a 0,999999999999 ....
//multiplico cada tirada por * 6.
//Math.floor(): redondea hacia abajo. Trae el numero entero inferior de la multiplicacion.
//sumar 1......


console.log("----------------------Simular estadistica en 20 lanzamientos.------------------------")
let cantidadLanzamientos=20;
let contadorSeis=0;


for(let intento=1;intento<=cantidadLanzamientos;intento++){
    let resultadoDado=Math.floor(Math.random()*6)+1;

    if(resultadoDado===6){
        contadorSeis++;
        console.log("Tiro numero: " + intento + "Salio un 6.");
    }
    else{console.log("Tiro numero: " + intento + "Salio un: "+ resultadoDado);}
}

console.log("El numero 6 salio un total de: "+ contadorSeis);

// Arrays: guarda multiples valores dentro de una variable. Pueden ser de diferentes tipos.


const preciosCarrito=[1200,2000,3450,800,903];
let totalPagar=0;

console.log(preciosCarrito);// el console.log trajo todo el array.
console.log(preciosCarrito[3]);//trae el valor del indice numero 3.

//for sirve para recorrer y traer los elementos de un array.

//Sumar los precios del carrito.

for(let i=0;i<preciosCarrito.length;i++){
    console.log("Producto: "+(i+1)+"-Precio: "+ preciosCarrito[i]);
    totalPagar+=preciosCarrito[i];
}

console.log("TOTAL A PAGAR: " + totalPagar);

//Ascensor tiene un limite de peso y permite subir personas de una . No se de antemano cuantas pueden subir.
//Maximo de pasajeros es 5.

let ocupantesAscensor=1;

while(ocupantesAscensor <=5){
    console.log("Personas que subieron al ascensor: " + ocupantesAscensor);
    ocupantesAscensor++;
}
console.log("Se alcanzo la totalidad de pasajeros.")

// Monitoreo de temperatura. Sensor qeu mide temperatura de los aires acondicionados.Cuando el monitorio falla...tengo una alarma que se prende cuanto la temperatura llega 45.

let temperaturaServidor=20;
let minuto=1;

//Mientras la temperatura este debajo de los 45 grados el servidor del aire funciona normal.

while(temperaturaServidor<45){
    console.log("Minuto " + minuto + "Temperatura "+ temperaturaServidor);
    temperaturaServidor +=2;//Simulamos que suba la temperatura 2 grados.
    minuto++;

} 

console.log("ALERTA DE MUERTEEEEEE!!!!!!!: " + temperaturaServidor +" Revisar el aire.")