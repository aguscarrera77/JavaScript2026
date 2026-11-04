//Funciones flecha o arrow: codigo mas corto y limpio. Muy utilizado en el forEach.
//Sintaxis: =>(parametros){bloque de codigo.}

const lenguajes=["Javascrip","Python","Sql"];

//Tradicional.

lenguajes.forEach(function(lenguaje){
    console.log('Los lenguajes son: '+ lenguaje);
})

//Arrow: primer paso sacamos la palabra function.

lenguajes.forEach((lenguaje)=>{
    console.log("Los lenguajes son: ",lenguaje)
})

//Arrow: segundo paso: ponemos el parametro directamente.

lenguajes.forEach(lenguaje =>{
    console.log("Los lenguajes son: " + lenguaje);
})

//Arrow: tercer paso borrar las llaves de la funcion.

lenguajes.forEach(lenguaje=>console.log("Los Lenguajes son: ",lenguaje));


//map:Recorre al array transforma cada elemento y trae un array nuevo del mismo tamano.

const preciosBasicos=[100,200,450];

const preciosDuplicados= preciosBasicos.map(precio=>precio*2);

console.log(preciosDuplicados)

const nombreUsuarios=['lucas','diego','meli','dante'];

const nombresMayuscula=nombreUsuarios.map(nombre=>nombre.toUpperCase());

console.log(nombresMayuscula);

//Arrays de objetos: valores compuestos. key:value.

const productosTienda=[
    {id:1,nombre:"Teclado",precio:1200},
    {id:2,nombre:'Mouse',precio:800},
    {id:3,nombre:'Monitor',precio:650}
];


//quiero devolver un array de objetos con precio final, el precio tiene el iva incorporado.

const preciosFinal= productosTienda.map(item=>{
    return {
        id:item.id,
        nombre:item.nombre,
        precio:item.precio*1.21//precio mas iva.
    };
});
console.log("-------CATALOGO DE PRECIOS---------");
console.log(preciosFinal);

//filter(): actua como bucle pero evalua una condicion, si la condicion es true el valor se mantiene si la condicon es false el indice se descarta.

const notasParcial=[10,4,7,6,1,9,10];

const notasAprobados=notasParcial.filter(nota=>nota>=7);

//function(nota){nota>=7};

console.log("Notas aprobadas: ",notasAprobados);

//filter mas arrays de objetos.


const catalogoNotebooks=[
    {modelo:"Macbook Pro",precio:1100},
    {modelo:"Gamer Acer",precio:700},
    {modelo:"Asus 1000",precio:920},
    {modelo:"Juana Manso",precio:1500}
]

//Filtramos notebooks precio menor o igual a 950 dolares.

const notebookAccesibles=catalogoNotebooks.filter(item=>item.precio<=950);

console.log("No somos tan ricos : ",notebookAccesibles);

