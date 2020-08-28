//Primero crea la funcion para que se ejecute hasta que cargue todo
(function(){
'use strict';

document.addEventListener("DOMContentLoaded" ,function(){

let viejo_titulo = document.querySelector('main article h2');

// let nuevo_titulo = document.querySelector('footer h2');

// viejo_titulo.parentNode.replaceChild(nuevo_titulo,viejo_titulo);




let _nuevo_titulo = document.createElement('H2');
let nuevoTexto= document.createTextNode('Esperando por verte');

_nuevo_titulo.appendChild(nuevoTexto);


viejo_titulo.parentNode.replaceChild(_nuevo_titulo,viejo_titulo);


let ultima= document.querySelectorAll('main article')[2];
let eliminar_puente= document.querySelectorAll('main article')[0];

console.log(eliminar_puente);

eliminar_puente.parentNode.replaceChild(ultima,eliminar_puente);


///Crear este apartado 
//Mas visitados 
/*Viajar a londres
puente no se que*/


// let sidebar= document.querySelector('aside');//seleccionando el aside

// let crear_seccion = document.createElement('H2');//aca estoy creando un h2
// let texto= document.createTextNode('Post más visitados');


// crear_seccion.appendChild(texto);

// sidebar.insertBefore(crear_seccion,sidebar.childNodes[0]);

// let titulos = document.querySelectorAll('main h2');//como quiero los 3 elementos del main h2 por eso es querySelectorAll



// for(let i=0;i<titulos.length;i++){
//     let la_lista = document.createElement('LI');//aca estoy creando un li 
//     let texto_h2 = document.createTextNode(titulos[i].firstChild.nodeValue);//aca estoy copiando el texto de cada uno de los elementos del h2

//     la_lista.appendChild(texto_h2);

//  sidebar.insertBefore(la_lista,sidebar.childNodes[1]);     

// // }



// let cambiar_otros= document.querySelector('#sidebar h2');

// cambiar_otros.firstChild.nodeValue = "Mi mama me mima";

// var primer_Post = document.querySelector('main article');//me selecciona el primero

// primer_Post.parentNode.removeChild(primer_Post);

// var entrada_5 = document.querySelectorAll('#sidebar ul li a')[4];


// entrada_5.parentNode.removeChild(entrada_5);

// let barra_nosotros1= document.querySelectorAll('#navegacion ul li a');

// for(let i=0; i<barra_nosotros1.length;i++){
// console.log(barra_nosotros1[i].innerText);
// }

// //parent node es pendejo
// barra_nosotros1[9].parentNode.removeChild(barra_nosotros1[9]);

// barra_nosotros1[10].firstChild.nodeValue = "Me van a borrar wee";

// barra_nosotros1[10].parentNode.removeChild(barra_nosotros1[10]);


// let barra_nosotros= document.querySelector('#navegacion nav ul');

// let nuevo_barra = document.createElement('LI');
// let nuevo_enlace = document.createElement('A');


// let texto_enlace= document.createTextNode('Visitanos');

// nuevo_enlace.appendChild(texto_enlace);
// nuevo_barra.appendChild(nuevo_enlace);


// barra_nosotros.insertBefore(nuevo_barra,barra_nosotros.firstChild[0]);
// let enlaces= document.querySelectorAll('a');

// for(var i=0;i<enlaces.length;i++){
// // enlaces[i].setAttribute('target','_blank');
// // enlaces[i].setAttribute('href','http://netflix.com');
// console.log(enlaces[i].innerText)
// }

// let enlaces_menu = document.querySelectorAll('#menu ul li a');
// console.log(enlaces_menu[0])
// console.log(enlaces_menu[0].nodeType);//este es un tipo de nodo nivel 1
// console.log(enlaces_menu[0].nodeName);//el nombre del atributo
// console.log(enlaces_menu[0].attributes);
// console.log(enlaces_menu[0].firstChild);//firstCHild es el primer hijo del nodo y aca solo me impirme el primer valor del nodo
// console.log(enlaces_menu[0].firstChild.nodeValue);//aca ya tengo el valor del primer hijo del a que es el parrafo por lo tanto tengo su propiedad


// enlaces_menu[0].firstChild.nodeValue = 'Home';

// let enlaces_menu = document.querySelectorAll('#menu ul li a');

// console.log(enlaces_menu[0].nodeType);
// console.log(enlaces_menu[0].nodeName);
// console.log(enlaces_menu[0].attributes);
// console.log(enlaces_menu[0].firstChild.nodeValue);

// enlaces_menu[0].firstChild.nodeValue = 'Home';
// enlaces_menu[1].firstChild.nodeValue = 'We are';
// enlaces_menu[5].firstChild.nodeValue = 'BLOG';
// enlaces_menu[9].firstChild.nodeValue = 'Shop';
// enlaces_menu[10].firstChild.nodeValue = 'Contact';


// let mision = document.querySelectorAll("#menu ul li ul a");

// mision[0].firstChild.nodeValue = 'Que onda';
// mision[2].firstChild.nodeValue = 'Values';

// let sidebar = document.querySelector('#sidebar');//con razon ya que solo existia uno

// let nuevoElemento = document.createElement('H1');//aca estoy creando un elemento html pero vacio y ademas anda en el aire
// let nuevoTexto= document.createTextNode("Hola Mundo");//aca estoy creando texto del que van entre los nodos

// nuevoElemento.appendChild(nuevoTexto);//aca le estoy agregando ese texto que cree al h1 con en append Child que significa agregar Hijo
// sidebar.appendChild(nuevoElemento);

// //Crear un elemento 6
// let seleccion_ul = document.querySelector("#sidebar ul");
// console.log(seleccion_ul);

// let crear_lia = document.createElement('LI');//aca estoy creando un li
// let enlace = document.createElement("A");//los enclaces son es mayuscula

// let texto_enlace= document.createTextNode("Entrada 6");//este texto que estoy creando esta a la deriba y 

// enlace.appendChild(texto_enlace);//aca le estoy agregando un hijo al final lo que seria un texto de Html y ademas lo agrega al final

// crear_lia.appendChild(enlace);// La mamada es un puto punto

// seleccion_ul.appendChild(crear_lia);

// enlace.setAttribute('href','#');
// enlace.setAttribute('target','_blank');

// //Agregar un somos Wuay

// let nosotros = document.querySelector('#navegacion nav ul li ul');

// //aca seleccione el metodo de nosotros w
// let li = document.createElement('LI');
// let a= document.createElement('A');

// let texto_del_a = document.createTextNode('Ir a Facebook');

// a.appendChild(texto_del_a);//aca le estoy agregando el texto que acabo de crear

// li.appendChild(a);//ahora le agregue el enlace al nuevo elemento del li ya que el appendChild agrega un hijo

// nosotros.appendChild(li);// tene en cuenta que cuando no te sale el append child es porque tenes un error

// a.setAttribute('href','http://facebook.com');
// a.setAttribute('target','_blank');

// let blog = document.querySelectorAll('#navegacion nav ul li');


// let mas_especifica = blog[6].querySelector('ul');
 
// let crear_li = document.createElement('li');
// let crear_a = document.createElement('A');

// let texto_a = document.createTextNode('Ir a Youtube');

// crear_a.appendChild(texto_a);
// crear_li.appendChild(crear_a);

// mas_especifica.appendChild(crear_li);

// crear_a.setAttribute('href','http://youtube.com');
// crear_a.setAttribute('target','_blank');


//Clonando elementos
// //en esta variable tengo al main
// let main= document.querySelector('main');

// let nuevo_main=main.cloneNode(true);

// let sidebar = document.querySelector('aside');

// sidebar.insertBefore(nuevo_main,sidebar.childNodes[5]);

//cambiando un elemento
// let inicio = document.querySelectorAll('#navegacion ul li a');//aca estoy seleccionando 1 selector


// inicio[0].firstChild.nodeValue = 'Home';
// inicio[1].firstChild.nodeValue = 'We are';
// inicio[5].firstChild.nodeValue = 'Blont';
// inicio[9].firstChild.nodeValue = 'Shop';


// let cambiar_otros = document.querySelector('#sidebar h2');

// cambiar_otros.firstChild.nodeValue='Las Entradas xd';

// let titulo = document.querySelectorAll('#contenido main article h2');


// titulo[0].firstChild.nodeValue = 'Me Cago en Todo';

// //Ahora voy a crear un elemento

// let sidebar= document.querySelector('#sidebar ul');//aca cree un selector para la lista del sidebar y aqui lo voy a poner

// let li = document.createElement('LI');
// let a = document.createElement('A');

// let texto_a = document.createTextNode('Entrada 6');

// a.appendChild(texto_a);

// li.appendChild(a);



// let li1 = document.createElement('LI');
// let a1 = document.createElement('A');

// let texto_a1 = document.createTextNode('Entrada 7');

// a1.appendChild(texto_a1);

// li1.appendChild(a1);


// sidebar.appendChild(li);
// sidebar.appendChild(li1);

// let nosotros = document.querySelectorAll('.navegador ul')[0];

// let new_li = document.createElement('LI');
// let new_enlace = document.createElement('A');

// let texto = document.createTextNode('Ir a Amazon');

// new_enlace.appendChild(texto);
// new_li.appendChild(new_enlace);
// nosotros.insertBefore(new_li,nosotros.childNodes[2]);
// new_enlace.setAttribute('href','http://amazon.com');
// new_enlace.setAttribute('target','blank');

// console.log(new_enlace.getAttribute('href'));

// //Ahora vamos a clonar elementos
// let contenido = document.querySelector('main');

// let contenido_nuevo = contenido.cloneNode(true);//aca lo estoy clonando

// let sidebar2= document.querySelector('aside');

// sidebar2.insertBefore(contenido_nuevo,sidebar2.childNodes[5]);

// let boton = document.querySelectorAll('.boton');


// for(let i=0;i<boton.length;i++){
// boton[i].firstChild.nodeValue= 'I cuold\'n agree ';
// }

// let copy = document.querySelector('.copyright');
// copy.firstChild.nodeValue= 'La verdad no tenemos copyright';


// let logo = document.querySelector('#logo');

// let new_logo = logo.cloneNode(true);

// let footer = document.querySelector('footer');

// footer.insertBefore(new_logo,footer.childNodes[0])




});


//<h1><\h>     Hola Munddo

}());//ISSI funcion se llama una vez ella sola
