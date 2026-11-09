//funciones: automitizar un bloque de codigo.
//sintaxis: function nombre de la funcion(){ bloque de codigo a repetir.}

function bienvenida(nombre){
    console.log("Bienvenido a tu perfil: " +  nombre);
}

bienvenida("agustin");

//Funciones con parametros: los parametros sirven para recibir datos dentro de la funcion. Por ej el nombre de un usario... precio de un articulo.... nombre de un articulo.
//return: devolver lo procesado dentro de la funcion.

function calcularIva(precioNeto){
    let impuesto= precioNeto * 0.21;
    let precioTotal=precioNeto + impuesto;
    return precioTotal;
}

// tengo 2 productos uno de 10.000 pesos y otro de 50.000 pesos. quiero calcular el precio total con iva.

 console.log(calcularIva(10000));
 console.log(calcularIva(50000));
 

 //Ecommerce: crear una funcion que calcule el costo total de una compra mas el envio.

//1. Costo de envio: si la distancia es menor a 10km el envio cuesta 1.500 y si es mayor 3000 pesos.
//2.clientes vip: si sos cliente vip el envio es gratis.
//3.Descuento por producto costoso: si el producto vale mas de 30 mil pesos el producto tiene un 20%.
//4.La funcion debe retornar un aviso que quede claro el precio final del producto con el costo del envio.


function calcularCostoTotal(precioProducto,esClienteVip,distanciaKm){
    let precioInicioProducto=precioProducto;//Arranca con el valor original recibido por el parametro.
    let costoEnvio=0;

    //if clientevip= true el costo envio es 0.
    //if km= depende de la cantidad de km.

    if(esClienteVip===true){
        costoEnvio=0;
        console.log("Tu envio es gratis.")
    }else if(distanciaKm<=10){
        costoEnvio=1500;
        console.log("Costo de envio: " + costoEnvio);
    }else{costoEnvio=3000;
        console.log("Costo de envio: " + costoEnvio);
    };
        
        




}