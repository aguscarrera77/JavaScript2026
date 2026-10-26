//si la persona tiene mas de 18 años ingresa al boliche principal y poder consumir alcohol.
//rango de edad entre 13 y 17 años para matinee.
//si es menor a 13 no puedo entrar.

let edad=Number(prompt("Que edad tenes?"));

if(edad>=18){
    alert('Acceso permitido. Bienvenido al boliche.')
}else if(edad>=13){
    alert("Acceso permitido a la matinee.")
}else{alert("Acceso denegado su edad no estar permitida.")}


//----------------------------------------------------------

//para aprobar la materia 2 condiciones:
// nota mayor a 70pts.
//tener una asistencia del 80%.

let nota=50;
let asistencia=90;

if(nota>=70 && asistencia>=80){
    console.log("Felicidades estas aprobado.")

}
else{console.log("Lo sentimos no aprobaste. ")}

//-------------------------

// carrito compras dias lunes hay promocion si cliente es vip o si la compra supera los 50 mil pesos.

let clienteVip=false;
let compras=30000;

if(clienteVip || compras>=50000){
    console.log("Usted tiene un descuento del 30%");
}
else{console.log("Usted no aplica la promocion.No supera los 50.000 pesos")}

// dentro del boliche tenemos un vip.
// para entrar al vip debo tener mas de 21 anos.
// ser vip.
//Pagar una mesa. 

let edadCliente=25;
let userVip=true;
let mesaReservada=false;

if(edadCliente>21  && (userVip || mesaReservada)){
 console.log("bienvinido a su mesa dentro del vip.")
}
else{console.log("Usted no tiene la edad suficiente para entrar al vip.")}

//control de sesion de usuario.

//usuario esta en un perfil pero NO inicio sesion. Para volver a iniciar sesion debe apretear el boton login.


let sesionIniciada= false;// usuario no logueado.

if(!sesionIniciada){
    console.log("Por favor inicio sesion para continuar")
}
else{console.log("Bienvenido al panel de control")}

// voy a mostrar el boton de comprar unicamente si el producto no esta agotado.
//una de las variables se llamo agotado y es false.

let productoAgotado=false;

if(!productoAgotado){
    console.log("NO APARECE EL BOTON DE COMPRA")
}else{console.log("BOTON COMPRA")}

//validacion de correo y me tengo que asegurar que en cada campo el usuario no haya dejado valores vacios.


let correoElectronico="";

//vereficamos que el correo NO ESTE VACIO.

let campoNovacio= correoElectronico!== "";
  
if(campoNovacio){
    console.log("ESTA COMPLETADO")
}else{console.log("Debe rellenar el campo.")}


//usuarios bloqueados. Usuario entre a panel de control siempre y cuadno no este bloqueado.

let usuarioBloqueado=false;//usuario no bloqueado.

if(!usuarioBloqueado){
    console.log("Usuario bloqueado.")
}