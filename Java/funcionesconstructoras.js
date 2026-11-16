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

console.log(inventario[1]);

//voy a filtrar dentro del array.Metodo filter().
//filtramos stock mayores a 5.

const productosDisponibles=inventario.filter(prod => prod.stock >5);

console.log(productosDisponibles);


