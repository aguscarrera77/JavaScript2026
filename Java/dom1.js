//trabajar el archivo html desde javascript a traves del dom.
function iniciarControlCupo(){
const app=document.querySelector("#app");

//createElement(): crea una etiqueta de html no visible.

const panel=document.createElement("section");

//className: asigna una clase a una etiqueta.

panel.className="panel";

const titulo=document.createElement("h1");

//textContent=agrega texto plano.

titulo.textContent="Control de cupos";

const estado=document.createElement("div");

estado.className="bagde";
estado.textContent="Cupo Actual: 0";

//voy a sumar un boton al html.

const btnSumar=document.createElement("button");
btnSumar.textContent="Sumar Ingreso";
btnSumar.type="button";


//cambiar color del titulo con un boton.

const btnTituloColor=document.createElement("button");
btnTituloColor.type="button";
btnTituloColor.textContent="Cambiar color de titulo";

//armar una caja para encerrar los botones.

const filaBotones=document.createElement("div");
filaBotones.className="fila-botones";

//------------------------------------------------------------//

//insertar botones dentro del div fila botones.
//metodo para agregar bloques append().

filaBotones.append(btnSumar,btnTituloColor);

//agregar titulo,bagde y fila de botones dentro de la section panel.

panel.append(titulo,estado,filaBotones);

app.appendChild(panel);

//-------------------------------PROGRAMAR---------------------------------

let cupo=0; //acumulador de cupos.

btnSumar.addEventListener("click",()=>{
    cupo +=1;
    estado.textContent=`Cupo Actual: ${cupo}`;
    //class de alerta cuando el cupo supere el numero de 3.class bagde-alerta va a agregarse sino esta y si esta se saca.
    estado.classList.toggle("bagde-alerta",cupo >3);

});


btnTituloColor.addEventListener('dblclick',()=>{
    titulo.style.color="red";
});
}

iniciarControlCupo();