//Desde javascript armo una variable y guarda la entrada al DOM. La llave para entrar al documento de html es la palabra document. Luego selecciono la etiqueta. O por nombre o por su id.


const titulo=document.querySelector("#titulo");
const parrafo=document.querySelector(".texto");
const boton=document.querySelector("#btn-cambiar");
const contenedor=document.querySelector("#contenedor");

//TextContent:cambia o agrega texto de alguna etiqueta de html.

titulo.textContent="DOM en accion";

//innerHTML= inserta etiquetas de html dentro de un elemento.

parrafo.innerHTML="Ahora agregue<strong> texto en negrita</strong> desde Js.";

//Tambien puedo cambiar CSS.

//classList: cambiar o gregar una clase a la etiqueta elegida con estilo propio. Valores: add,remove,toggle,contains)

parrafo.classList.toggle("texto-destacado");

//style:agregar un estilo a una etiqueta, se utiliza mucho en acciones dinamicas.

titulo.style.color="#0f766e";
titulo.style.textDecoration="none";