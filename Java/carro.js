//Tengo e-commerce.
//Agregar productos al carrito.
//Verifico si hay stock de un producto.
//Ordeno alfabeticamente el catalogo.
//Dar de baja el ultimo elemento.
//Generar un informe de texto plano para imprimir el catalogo.

let inventarioTienda=['Buzo','Boxer','Remera'];
console.log("------- Inventario Tienda--------------");
console.log('Stock inicial: ',inventarioTienda);

//Agregar.

inventarioTienda.push('Jean');
inventarioTienda.unshift('Medias');

console.log('Actualizacion de stock: ', inventarioTienda);

//Verifico si hay producto.

let productoBuscado='Jean';

if(inventarioTienda.includes(productoBuscado)){
    console.log("Si hay stock de este producto ",productoBuscado)
}else{`No hay stock de este producto "${productoBuscado}"`};


//Ordeno Alfabeticamente.

inventarioTienda.sort();
console.log("Inventario Ordenado Alfabeticamente: ",inventarioTienda);

//Dar de baja el ultimo elemento.

let elementoEliminado=inventarioTienda.pop();

console.log("El elemento " + elementoEliminado + " tiene una falla.Se saco del inventario.");



//Texto plano para imprimir.
let reporteFinal=inventarioTienda.join(" - ")
console.log("------Reporte Final Para imprimir-------------")
console.log(reporteFinal);

//for each: reemplaza el for... en los arrays... metodo mas moderno y sencillo de usar.
//sintaxis: nombredelarray.foreach(function(elemento,indice){BLOQUE DE CODIGO.})

inventarioTienda.forEach(function(producto,indice){
    console.log('Item: ' + indice + ": "+ producto);
})

//Simulacion de app de pedidos, donde la plataforma tiene cargados los pedidos y tengo que recorrer para verlos.

const pedidosPendientes=["Pizza Napolitana","Hamburguesa con Cheddar","Coronas","Papas Fritas"];

console.log("--------Sistema de Pedidos----------")

pedidosPendientes.forEach(function(pedido,numero){
    console.log('Pedido numero: ',numero + 1, " Preparando la orden que contiene: ",pedido);
})

//Aplicar funcion flecha.

pedidosPendientes.forEach((pedido,numero) => console.log("Pedido numero: ",numero + 1,"Orden: ",pedido))