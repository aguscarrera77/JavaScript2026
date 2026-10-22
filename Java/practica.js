//variables: let su contenido es variable/ const valor de esa variable se mantiene constante.
//Valores de las variables: numerico: entero/float. string: caracteres si o si van entre comillas.

let nombre='agustin';
let edad= 30;
let altura=1.84;

//funcion nativa: console.log() 
console.log(nombre);
console.log(edad);
console.log("altura");


//prompt(): muestra una caja donde el usuario puedo escribir un mensaje. SIEMPRE DEVUELVE UN STRING.

let name=prompt("Cual es tu nombre?");
alert('bienvenido '+ nombre);

//alert():muestro una ventana con una mensaje ... en general es un mensaje de alerta.


//confirm():es una ventana que muestra opciones. ACEPTAR(true) y CANCELAR(fALSE)

let respuesta=confirm("Deseas salir del sitio?");
console.log(respuesta);

//JUEGO DE ROL.

let heroe=prompt("Bienvenido,valiente aventurero: Como se llama tu personaje?");

let mision=confirm('Hola '+ heroe + " Vas a seguir la mision o no?");

console.log(mision);

// voy a generar una condicion si el personaje acepta la mision. Si la acepta elige un arma.

if(mision){
    let arma=prompt("Elige tu arma favorita: espada/arco y flecha/lanza");
    alert("Has elegido " + arma + "EXCELENTE ELECCION." )
}
else{
    alert("Usted decidio dejar el juego para ir a estudiar Javascript.")
}
