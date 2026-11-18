//funciones constructoras:construimos objetos para evitar la repeticion de codigo y gastar tiempo de gusto.

//PRIMERA FUNCION CONSTRUCTORA DE MI MIS MEJORES ALUMNOS 2026.

function Perfilsocio(nombre,dni,plan,cuotaAlDia){
    this.nombre=nombre;
    this.dni=dni;
    this.plan=plan;
    this.cuotaAlDia=cuotaAlDia;

//METODOS: FUNCIONES ADENTRO DEL CONSTRUCTOR.
//construi una funcion que saluda a todos los socios de mi gimnasio.
    this.presentarse=function(){
        console.log("Bienvenido: ",this.nombre, "esta tu clase lista de: ", this.plan);
    }

    //Pago de cuota.

    this.pagarCouta= function(){
        this.cuotaAlDia=true;
        console.log(`Gracias ${this.nombre} ,tu cuota esta al dia. `)
    }


}

const socio1= new Perfilsocio("Carlos Gardel",18000099,"Crosfit",true);
const socio2=new Perfilsocio("Mirtha Legrand",5000890,"Musculacion",false);
const socio3= new Perfilsocio("Silvio Soldan",90004565,"Pilates",true);

console.log(socio1);
console.log(socio3.nombre);

//funciones constructoras tambien tiene metodos.
//Molde de Perfilsocio....
//Imprimir un saludo.
//que pasa si mirtha paga la cuota.

socio3.presentarse();
socio2.pagarCouta();


//guardar los objetos que creamos por funciones constructoras dentro de un array.

function Productos(id,nombre,precioNeto,stock){
    this.id=id;
    this.nombre=nombre;
    this.precioNeto=precioNeto;
    this.stock=stock;
    //metodo para tener el precio final.

    this.precioFinal=function(){
        return this.precioNeto * 0.21;
    }
}

//Armo un array vacio y agrego de acuerdo al cargado que hago. Usando metodo push().

const inventario=[];

inventario.push(new Productos(10,"SSD 1 TB",75000,4));
inventario.push(new Productos(11,'Memoria Ram16gb',68000,8));
inventario.push(new Productos(12,"Auriculares Airpods",2400,0));


console.log(inventario);

//voy a filtrar dentro del array.Metodo filter().
//filtramos stock mayores a 5.
inventario.push(new Productos(20,'Monitor 20 pulgadas',24000,6));
const productosDisponibles=inventario.filter(prod => prod.stock >5);

console.log(productosDisponibles);

//voy a recorrer el array inventario y mostrarlo con ForEach.

console.log("-----------INVENTARIO PRODUCTOS------------------");

inventario.forEach(productos=>{
    console.log("Producto: ",productos.nombre,"-Stock: ",productos.stock," u.","-Precio final (+ Iva): ",productos.precioFinal());
})

//localstorage: pequena particion de almacenamiento. 
//Comandos: setItem: guardar en string o texto plano.
//Comandos: getItem: lee texto guardado.

localStorage.setItem("ProductosInventario",JSON.stringify(inventario))

//para que se devuelvan los elemenos guardados dentro del localstorage en texto plano y pasarles la funcion debe usar map().Rehidratar.
//parse()transforma a objetos simples.

const datosCrudos=JSON.parse(localStorage.getItem("ProductosInventario")) || [];

const newInventario=datosCrudos.map(itemObjeto =>{
    return new Productos(
        itemObjeto.id,
        itemObjeto.nombre,
        itemObjeto.precioNeto,
        itemObjeto.stock
    );

});

newInventario.forEach(prod =>{
    console.log("Objeto recuperado: ", prod.nombre,"--Precio final: ",prod.precioFinal());
})

