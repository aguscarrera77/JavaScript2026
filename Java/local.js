//GESTOR DE DATOS DE SOCIOS DE UN GIMNASIO Y QUE SE NUESTRO EL PERFIL EN UNA WEB.GUARDAS LOS DATOS EN EL LOCAL.

function Socio(nombre,actividad,cuotaAldia){
    this.id=Date.now();
    this.nombre=nombre;
    this.actividad=actividad;
    this.cuotaAldia=cuotaAldia;
    this.fechaInscripcion=new Date().toLocaleDateString();//texto plano para el local.

    //Agregar al perfil saludo personalizado.
    this.saludar=function(){
        return` hola soy:  ${this.nombre} y entreno: ${this.actividad}`;
    }
    //Metodo interno de verifcacion de cuota.
    this.verificarCuota=function(){
        return this.cuotaAldia ? "Si": "No";
    }

};

//guardo los datos llenados en el constructor en el local.

const plantillaSocios=[];

plantillaSocios.push(new Socio('Diego','Pilates',false));
plantillaSocios.push(new Socio('Dante','Musculasion',false));
plantillaSocios.push(new Socio('Ezequiel','Crossfit',true));
plantillaSocios.push(new Socio('Melisa','Boxeo',true));

//filtrar los socios que estan al dia.
const sociosAlta=plantillaSocios.filter(socio=>
socio.cuotaAldia === true);

sociosAlta.forEach(soc=>{
  console.log(soc.saludar());
});

