//Operaciones matematicas.

let num1=10;
let num2=5;

//suma
console.log(num1+num2);

//resta
console.log(num1-num2);

//multiplicacion

console.log(num1 * num2);

//division
console.log(num1/num2);

//Calculadora de propinas:
//1.Preguntar al usuario el total de la cuenta.
//2.Cuanto porcentaje de propina voy a dejar.
//3.Cuantos comensales pagan la cuenta.

let entradaTotal=Number(prompt("Cual es el monto total de la cuenta?"));
let entradaPropina=Number(prompt("Que porcentaje de propina voy a dejar"));
let entradaPersonas=Number(prompt("Cuantas personas pagan la cuenta."));

//realizar los calculos.

let montoPropina= (entradaTotal*entradaPropina)/100;
let cuentaPropina=entradaTotal + montoPropina;
let totalPersonas=cuentaPropina/entradaPersonas;

console.log(montoPropina);
console.log(cuentaPropina);
console.log(totalPersonas);

//CONVERSOR DE MONEDAS
//1. CUANTOS PESOS TIENE PARA INVERTIR.
//2.A CUANTO ESTA LA COTIZACION DEL DOLAR


let entradaDinero=Number(prompt("Cuanto dinero vas a invertir?"));
let cotizacionDolar=Number(prompt("A cuanto esta el dolar hoy?"));


let dolaresObtenidos=entradaDinero/cotizacionDolar;


if(entradaDinero>0){
    alert(dolaresObtenidos);
}
else{alert("Numero ingresado no valido. Intente de nuevo.");}