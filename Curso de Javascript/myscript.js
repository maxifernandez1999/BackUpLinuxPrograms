//var nombre = prompt("Ingrese su nombre"); 
//alert("Bienvenido " + nombre);

//DOM
//Se componen de nodos (que serian etiquetas de HTML)
//#1

//obtiene todos de una etiqueta y los guarda en forma de arreglo
var elemento = document.getElementsByTagName("p");
//En la consola
elemento[1]; //accedemos al primer elemento p
elemento[0].innerHTML; //obtiene el texto escrito en la etiqueta
var elemento2 = document.getElementById("id del elemento");
//#2
//1.Crear el elemento h2
var elemento3 = document.createElement("h2");
//2.Crear un nodo de texto
//Crea el contenido que va dentro de h2
var contenido = document.createTextNode("Este es nuestro contenido");
//3.Agregar el nodo al elemento
//Mete el contenido en el elemento
elemento3.appendChild(contenido);
//4.Agregar atributos al elemento
//Se agregan atributos
elemento3.setAttribute("aling", "center");
//5.Agregar el elemento 
//Obtiene el id de donde quiero (etiqueta vacia) meter mi nuevo nodo
//documento.body.appendChild(elemento) //agrega al final del body
document.getElementById("subtitulo").appendChild(elemento3);
//#3
//Luego de crear el elemento
var padre = document.getElementsByTagName("li")[0].parentNode; //trae el
//elemento padre cuando solo conocemos los hijos
var padre1 = document.getElementsById("padre")//cuando conocemos el padre
padre.appendChild(elemento); //agrega al final del padre
padre.insertBefore(elemento, "li"); //agrega el elemento antes del li
//#4
//Modificar contenido de elementos
var primerElemento.innerHTML = "Nuevo texto, puede editar codigo";
primerElemento.textContent = "solo texto plano";
//Reemplazar
var padre1 = document.getElementsByTagName("li")[0].parentNode;
padre.replaceChild(elementoReemplazar, elementoEliminar);//reemplazar nodos
//Eliminar
padre.removeChild(elementoEliminar);//Eliminar un elemento
//#5
//Atributos del DOM
var elemento5 = document.createElement("div"); //crea el elemento
var padre = document.getElementById("contenedor");//obtiene el padre
var referencia = document.getElementsByTagName("div")[0];
padre.insertBefore(elemento5,referencia);
elemento5.setAttribute("class","azul");//cambio al (atributo a cambiar)class a color azul
//acceder elemento directamente
elementos.id = "tercerID";//cambia id
elemento.className = "valor a cambiar a la clase"; //cambia class
document.getElementById("enlace").id = "Ejemplo";//cambiar id
document.getElementById("enlace").href = "Puede un href";

//EVENTOS JS
(function(){
	var saludo = function(e){
		alert("Saludo"+e.type); //target : objetivo, type: tipo de evento
		e.preventDefault(); //previene una accion
	};

	var boton = document.getElementById("boton");
	boton.addEventListener("click",saludo);//evento con la funcion que ejecuta
	boton.removeEventListener("click",saludo);//eliminar el evento
}())

//formularios
//validaciones
(function(){
	var formularios = 
	document.forms[0]//accede al form
	document.forms[0].elements//elementos
	
}())



