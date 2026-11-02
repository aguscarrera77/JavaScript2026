//Array es un componente que guarda multiples valores.
//usa indices para marcar ubicacion de los elementos dentro del array.
//Arrays tienen metodos: son herramientas predefinidas en javascript que permiten manejar arrays.

const productosTienda=['monitor','teclado','mouse','cpu'];

console.log("----------------LISTADO-------------")

for(let i=0;i <productosTienda.length;i++){
    console.log("Items de mi lista: "+ productosTienda[i])
}// length:metodo que cuenta elementos dentro de un array.

//METODOS DE ARRAY.
//1.PUSH: Agrega un elemento al final.

productosTienda.push('auriculares');

//2.UNSHIFT: agrega al principio.

productosTienda.unshift("joystick");

console.log(productosTienda);

//3.Pop: elimina un elemento al final.
//4.Shift: elimina el primer elemento.

productosTienda.pop();
productosTienda.shift();

console.log(productosTienda);

//Metodos de busqueda y validacion:
//indexOf(): trae el indice del elemento buscado.
//includes(): te dice si el elemento esta incluido dentro del array. Si esta devuelve true.

console.log(productosTienda.indexOf('mouse'));
console.log(productosTienda.indexOf('auriculares'));
console.log(productosTienda.includes('mouse'));
console.log(productosTienda.includes("calzoncillo"));

//Metodos de transformacion y orden:
//join():convierte todos los valores en string... y agregamos un caracter para seperar.

console.log(productosTienda.join(";"));

//sort(): ordena alfabeticamente. Ascendente.
console.log(productosTienda.sort());

//reverse():invierte el sentido de los elemenos del array.

console.log(productosTienda.reverse());

